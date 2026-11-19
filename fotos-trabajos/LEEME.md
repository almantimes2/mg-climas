# Fotos de nuestros trabajos

Todo lo que subas a esta carpeta aparece solo en la sección **"Nuestros trabajos"**
de https://g2climas.com. No hay que tocar código.

Mientras la carpeta no tenga fotos, la sección no se muestra en la página.

## Cómo subir fotos

**Desde el celular o cualquier compu (lo más fácil):**

1. Entra a https://github.com/almantimes2/mg-climas y abre la carpeta `fotos-trabajos`.
2. Botón **Add file → Upload files**, elige las fotos (puedes subir varias a la vez).
3. Abajo, botón verde **Commit changes**.
4. Espera 1–2 minutos y recarga la página (pestaña **Actions** del repo si quieres ver el avance).

**Desde la PC con GitHub Desktop:** copia las fotos a esta carpeta, escribe un mensaje
(ej. "Fotos de trabajos") y dale **Commit to main** y luego **Push origin**.

## Cómo se acomodan

- Sube las fotos **tal como salen del celular**, no hace falta reducirlas. La página las
  optimiza sola (pasan de varios MB a unos cientos de KB) y les borra la ubicación GPS.
- Formatos: **JPG, PNG o WebP**. Las fotos HEIC del iPhone no se pueden usar; en el
  iPhone ve a Ajustes → Cámara → Formatos → **Más compatible**, o súbelas desde la
  app Fotos con "Opciones → Más compatible".
- **Orden:** va primero lo que quede al final del abecedario. Para que lo más nuevo salga
  primero, pon la fecha al inicio del nombre: `2026-11-18-instalacion-minisplit-torreon.jpg`.
  Las fotos con nombre `IMG_xxxx` salen en orden de número (la más nueva primero).

## Texto debajo de cada foto

Opción 1: el nombre del archivo. Se quita la fecha y se cambian los guiones por espacios:
`2026-11-18-instalacion-minisplit-torreon.jpg` → "Instalacion minisplit torreon".
Si quieres acentos o mayúsculas, ponlos en el nombre: `Instalación minisplit en Torreón.jpg`.

Opción 2: un archivo llamado `leyendas.txt` en esta carpeta, una línea por foto
(`nombre del archivo | texto`). Tiene prioridad sobre el nombre:

```
# lo que empieza con # se ignora
IMG_4521.jpg | Instalación de minisplit inverter en Torreón
IMG_4530.jpg | Cambio de tablero en Gómez Palacio
```

Si una foto no tiene texto (por ejemplo `IMG_4521.jpg` sin leyenda), se muestra sola, sin texto.

## Cómo quitar una foto

Bórrala de esta carpeta (en GitHub: abre la foto → ícono de bote de basura → Commit changes).
Desaparece de la página en la siguiente publicación.

## Antes de subir

Evita fotos donde se vea la cara de una persona, la placa de un vehículo o el número y
la calle de la casa del cliente. Si el cliente salió en la foto, pídele permiso.
