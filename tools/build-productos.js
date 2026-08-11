#!/usr/bin/env node
/**
 * Genera una ficha estatica por producto y reescribe el sitemap.
 *
 * Por que existe: producto.html arma la ficha con JavaScript a partir de
 * ?p=slug. Google ejecuta JS y la lee bien, pero los rastreadores de
 * WhatsApp y Facebook NO, asi que al compartir el enlace de un producto
 * siempre salia la portada generica. Estas fichas traen las etiquetas og:
 * escritas en el HTML, que es lo unico que esos rastreadores leen.
 *
 * Se corre solo en cada push (.github/workflows/pages.yml). Los archivos
 * que produce estan en .gitignore: la fuente de verdad es products.js.
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const SITIO = 'https://g2climas.com';

function leerProductos() {
  const src = fs.readFileSync(path.join(RAIZ, 'products.js'), 'utf8');
  const ctx = { window: {} };
  new Function('window', src).call(ctx, ctx.window);
  const lista = ctx.window.PRODUCTS;
  if (!Array.isArray(lista) || !lista.length) {
    throw new Error('products.js no expuso window.PRODUCTS');
  }
  return lista;
}

const escapar = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** "Desde $ 8,750" -> "8750". Devuelve null si no hay precio numerico. */
function precioNumerico(txt) {
  const m = String(txt || '').replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return m ? m[1] : null;
}

/** Reemplaza el valor de un meta/link ya presente en la plantilla. */
function fijarAtributo(html, selector, valor) {
  const re = new RegExp(`(<(?:meta|link)[^>]*${selector}[^>]*(?:content|href)=")[^"]*(")`, 'i');
  if (!re.test(html)) throw new Error(`no encontre ${selector} en producto.html`);
  return html.replace(re, `$1${escapar(valor)}$2`);
}

function fichaDe(plantilla, p) {
  const url = `${SITIO}/producto/${p.slug}/`;
  const titulo = `${p.name} | G2 Climas`;
  const imagen = p.image ? `${SITIO}/${p.image}` : `${SITIO}/img/og-portada.jpg`;

  let html = plantilla;

  // <base> para que las rutas relativas de la plantilla (mejoras.css,
  // products.js, img/..., index.html#contacto) sigan resolviendo desde
  // la raiz aunque la ficha viva dos niveles abajo.
  html = html.replace(
    /<meta charset="UTF-8">/i,
    `<meta charset="UTF-8">\n<base href="/">\n<script>window.PRODUCT_SLUG=${JSON.stringify(p.slug)};</script>`
  );

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapar(titulo)}</title>`);
  html = fijarAtributo(html, 'name="description"', p.short);
  html = fijarAtributo(html, 'rel="canonical"', url);
  html = fijarAtributo(html, 'property="og:title"', titulo);
  html = fijarAtributo(html, 'property="og:description"', p.short);
  html = fijarAtributo(html, 'property="og:url"', url);
  html = fijarAtributo(html, 'property="og:image"', imagen);

  // las medidas del <head> son las de la portada 1200x630, no las de la
  // foto del producto: se quitan y cada rastreador mide la imagen
  html = html.replace(/\s*<meta property="og:image:(?:width|height)"[^>]*>/gi, '');

  const precio = precioNumerico(p.price);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.short,
    image: imagen,
    category: p.category,
    brand: { '@type': 'Brand', name: 'Mirage' },
    url,
  };
  if (precio) {
    schema.offers = {
      '@type': 'Offer',
      price: precio,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url,
      seller: { '@type': 'Organization', name: 'G2 Climas' },
    };
  }
  html = html.replace(
    '</head>',
    `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>\n</head>`
  );

  return html;
}

function sitemapDe(productos) {
  const hoy = new Date().toISOString().slice(0, 10);
  const entrada = (loc, prioridad, frecuencia) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${hoy}</lastmod>\n` +
    `    <changefreq>${frecuencia}</changefreq>\n    <priority>${prioridad}</priority>\n  </url>`;
  const urls = [
    entrada(`${SITIO}/`, '1.0', 'weekly'),
    entrada(`${SITIO}/catalogo.html`, '0.9', 'weekly'),
    ...productos.map((p) => entrada(`${SITIO}/producto/${p.slug}/`, '0.8', 'monthly')),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

const productos = leerProductos();
const plantilla = fs.readFileSync(path.join(RAIZ, 'producto.html'), 'utf8');

for (const p of productos) {
  if (!p.slug) throw new Error(`producto sin slug: ${p.name}`);
  const dir = path.join(RAIZ, 'producto', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), fichaDe(plantilla, p), 'utf8');
}

fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), sitemapDe(productos), 'utf8');

console.log(`fichas generadas: ${productos.length}`);
console.log(`sitemap: ${productos.length + 2} URLs`);
