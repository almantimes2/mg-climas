#!/usr/bin/env node
/**
 * Arma la galeria "Nuestros trabajos" a partir de las fotos que subas a
 * la carpeta fotos-trabajos/.
 *
 * Que hace, por cada foto:
 *   - la endereza (las fotos del celular traen la orientacion en EXIF),
 *   - borra los metadatos (incluida la ubicacion GPS del domicilio del cliente),
 *   - genera una version chica para la cuadricula (img/trabajos/<foto>-m.webp)
 *     y una grande para verla ampliada (img/trabajos/<foto>-l.webp),
 *   - y la anota en trabajos.js, que es lo que lee la pagina.
 *
 * Por que existe: una foto de celular pesa 3-8 MB. Si la pagina las cargara
 * tal cual, tardaria muchisimo en datos moviles. Con esto subes la foto
 * como salga del telefono y la pagina carga versiones de ~60-250 KB.
 *
 * Se corre solo en cada push (.github/workflows/pages.yml). Las fotos
 * originales NO se publican (se excluyen al armar el sitio); solo las
 * versiones optimizadas.
 *
 * Una foto danada no tumba la publicacion: se avisa y se salta.
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ORIGEN = path.join(RAIZ, 'fotos-trabajos');
const DESTINO = path.join(RAIZ, 'img', 'trabajos');
const MANIFIESTO = path.join(RAIZ, 'trabajos.js');
const LEYENDAS = path.join(ORIGEN, 'leyendas.txt');

const ANCHO_CHICA = 720;
const ANCHO_GRANDE = 1800;
const EXTENSIONES = /\.(jpe?g|png|webp)$/i;
const NO_SOPORTADAS = /\.(heic|heif|tiff?|bmp|gif|avif)$/i;

const aviso = (msg) => console.log(`::warning::${msg}`);

/** Escribe el manifiesto. Siempre existe, aunque no haya fotos. */
function escribirManifiesto(lista) {
  const cuerpo = lista.length
    ? '[\n' + lista.map((f) => '  ' + JSON.stringify(f)).join(',\n') + '\n]'
    : '[]';
  fs.writeFileSync(
    MANIFIESTO,
    '/* Generado por tools/build-trabajos.js a partir de fotos-trabajos/. No lo edites a mano. */\n' +
      `window.TRABAJOS = ${cuerpo};\n`
  );
}

/** "archivo.jpg | Texto" por linea. Lo que empiece con # se ignora. */
function leerLeyendas() {
  const mapa = new Map();
  if (!fs.existsSync(LEYENDAS)) return mapa;
  const txt = fs.readFileSync(LEYENDAS, 'utf8').replace(/^\uFEFF/, '');
  for (const linea of txt.split(/\r?\n/)) {
    const t = linea.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('|');
    if (i < 1) continue;
    const archivo = t.slice(0, i).trim().normalize('NFC').toLowerCase();
    const texto = t.slice(i + 1).trim();
    if (archivo && texto) mapa.set(archivo, texto);
  }
  return mapa;
}

/** Texto de la foto a partir del nombre del archivo, si no hay leyenda. */
function leyendaDeNombre(archivo) {
  let s = path.basename(archivo, path.extname(archivo));
  s = s
    .replace(/^\d{4}[-_.]\d{2}([-_.]\d{2})?[-_. ]*/, '')       // 2026-11-18-
    .replace(/^(img|dsc|dscn|pxl|photo|foto|image|whatsapp image)[-_ .(]*\d[\d\-_. ]*\)?(\s*at\s+[\d.]+)?[-_ ]*/i, '') // IMG_1234, PXL_..., foto (3)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!s || /^[\d\s().]+$/.test(s)) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Nombre seguro para URL: sin acentos ni espacios. */
function slugDe(archivo) {
  return path.basename(archivo, path.extname(archivo))
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'foto';
}

async function main() {
  // limpiar lo generado antes: si borras una foto, desaparece tambien de la galeria
  fs.rmSync(DESTINO, { recursive: true, force: true });

  const archivos = fs.existsSync(ORIGEN)
    ? fs.readdirSync(ORIGEN, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name)
    : [];

  for (const a of archivos) {
    if (NO_SOPORTADAS.test(a)) {
      aviso(`"${a}" no se uso: formato no soportado. Sube la foto como JPG, PNG o WebP (en iPhone: Ajustes > Camara > Formatos > "Mas compatible").`);
    }
  }

  const fotos = archivos.filter((a) => EXTENSIONES.test(a));
  if (!fotos.length) {
    console.log('Sin fotos en fotos-trabajos/: la seccion de trabajos queda oculta.');
    escribirManifiesto([]);
    return;
  }

  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    aviso('No encontre "sharp" (npm ci --prefix tools). La galeria queda vacia en esta publicacion.');
    escribirManifiesto([]);
    return;
  }

  fs.mkdirSync(DESTINO, { recursive: true });

  // mas reciente primero: el nombre con fecha (2026-11-18-...) o IMG_ con numero mayor
  fotos.sort((a, b) => b.localeCompare(a, 'es', { numeric: true, sensitivity: 'base' }));

  const leyendas = leerLeyendas();
  const usados = new Set();
  const lista = [];

  for (const archivo of fotos) {
    try {
      let slug = slugDe(archivo);
      for (let n = 2; usados.has(slug); n++) slug = `${slugDe(archivo)}-${n}`;
      usados.add(slug);

      const entrada = path.join(ORIGEN, archivo);
      const base = () => sharp(entrada, { failOn: 'error' }).rotate(); // .rotate() = respeta EXIF

      const chica = await base()
        .resize({ width: ANCHO_CHICA, withoutEnlargement: true })
        .webp({ quality: 76 })
        .toFile(path.join(DESTINO, `${slug}-m.webp`));
      await base()
        .resize({ width: ANCHO_GRANDE, height: ANCHO_GRANDE, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(DESTINO, `${slug}-l.webp`));

      lista.push({
        m: `img/trabajos/${slug}-m.webp`,
        l: `img/trabajos/${slug}-l.webp`,
        w: chica.width,
        h: chica.height,
        t: leyendas.get(archivo.normalize('NFC').toLowerCase()) || leyendaDeNombre(archivo),
      });
    } catch (e) {
      aviso(`"${archivo}" no se pudo procesar y se salto (${e.message}).`);
    }
  }

  escribirManifiesto(lista);
  console.log(`Galeria de trabajos: ${lista.length} foto(s) lista(s) de ${fotos.length}.`);
}

main().catch((e) => {
  // nunca tumbar la publicacion del sitio por la galeria
  aviso(`La galeria fallo y se publico sin ella: ${e.message}`);
  try { escribirManifiesto([]); } catch (_) {}
});
