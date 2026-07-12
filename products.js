/* ============================================================
   PRODUCTOS DE MG CLIMAS  (este archivo controla el catálogo)
   ------------------------------------------------------------
   • Para AGREGAR un producto: copia un bloque { ... } completo,
     pégalo dentro de la lista y cambia sus datos.
   • "slug": identificador único, en minúsculas y SIN espacios.
   • "image": ruta de la foto. Guárdala en  img/productos/
   • "specs": pares de  ["Etiqueta", "Valor"].
   • "features": lista de características (texto corto).
   • "versiones" (opcional): lista de ["Capacidad","Voltaje","Precio"]
     para equipos con varias versiones a distinto precio. Se muestra
     como tabla en la página del producto.
   • "link" (opcional): ficha técnica del fabricante.
   • "price": "$ 8,500", "Desde $ 6,900" o "Consultar precio".
   Precios de menudeo según lista Mirage JULIO 2026.
   ============================================================ */

window.WA_NUMBER = "526145137488"; // WhatsApp del botón de compra (52 + número)

window.PRODUCT_FALLBACK = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20300'%3E%3Crect%20width='400'%20height='300'%20fill='%23eaf6f8'/%3E%3Crect%20x='118'%20y='118'%20width='164'%20height='56'%20rx='14'%20fill='%23ffffff'%20stroke='%23cfe3e6'%20stroke-width='2'/%3E%3Crect%20x='118'%20y='118'%20width='164'%20height='18'%20rx='9'%20fill='%2316899c'/%3E%3Ctext%20x='200'%20y='212'%20font-family='sans-serif'%20font-size='17'%20font-weight='600'%20fill='%2316899c'%20text-anchor='middle'%3EFoto%20del%20producto%3C/text%3E%3C/svg%3E";

window.PRODUCTS = [
  {
    slug: "magnum-19-platinum",
    name: "Magnum 19 Platinum (Inverter)",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Consultar precio",
    image: "img/productos/magnum-19-platinum.png",
    short: "Minisplit de gama alta con tecnología Inverter y alta eficiencia energética. Enfría rápido, mantiene la temperatura estable y reduce el consumo eléctrico, ideal para el calor extremo.",
    specs: [
      ["Capacidad de enfriamiento", "12,000 a 24,000 BTU"],
      ["Toneladas disponibles", "1, 1.5 y 2 Ton"],
      ["Voltaje", "115V / 230V"],
      ["Eficiencia (SEER)", "Hasta 19"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "Desde 26 dB"],
      ["Modos", "Solo frío y frío/calor"]
    ],
    features: [
      "Compresor Inverter de velocidad variable",
      "Arranque progresivo (menor cobro por demanda)",
      "Conectividad WiFi opcional",
      "Filtro antibacterial",
      "Modo TURBO de enfriamiento",
      "Memoria de configuración ante cortes de luz"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/platinum-19/"
  },
  {
    slug: "magnum-22",
    name: "Magnum 22 (Inverter Premium)",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 8,750",
    image: "img/productos/magnum-22.png",
    short: "El minisplit más eficiente de Mirage: hasta 22.3 SEER con frío y calefacción. Máximo ahorro de luz para quienes usan el clima todos los días.",
    versiones: [
      ["1 Ton", "110V", "$ 8,750"],
      ["1 Ton", "220V", "$ 8,855"],
      ["1.5 Ton", "220V", "$ 11,718"],
      ["2 Ton", "220V", "$ 15,715"],
      ["3 Ton (Magnum 18)", "—", "$ 21,090"]
    ],
    specs: [
      ["Capacidades", "1, 1.5, 2 y 3 Ton"],
      ["Voltaje", "115V / 220V"],
      ["Eficiencia (SEER)", "Hasta 22.3"],
      ["Refrigerante", "R410A"],
      ["Compresor", "SVS de velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "41 a 47 dB"],
      ["Flujo de aire", "560 a 1,000 m³/h"],
      ["Modos", "Frío y calefacción"],
      ["Tubería", "Hasta 20–40 m de longitud"]
    ],
    features: [
      "La máxima eficiencia de la marca (hasta 22.3 SEER)",
      "Frío y calefacción todo el año",
      "Compresor SVS de velocidad variable",
      "Tubería de hasta 40 m para instalaciones lejanas"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/magnum-22-inverter/"
  },
  {
    slug: "inverter-neo",
    name: "Inverter NEO",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 7,550",
    image: "img/productos/inverter-neo.webp",
    short: "Inverter de alta eficiencia (hasta 21.6 SEER) con control por inteligencia artificial y refrigerante ecológico R32. Unidades ligeras y compactas.",
    versiones: [
      ["1 Ton", "110V", "$ 7,550"],
      ["1 Ton", "220V", "$ 7,550"],
      ["1.5 Ton", "110V", "$ 10,315"],
      ["2 Ton", "220V", "$ 14,030"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "110V / 220V"],
      ["Eficiencia (SEER)", "20.9 a 21.6"],
      ["Refrigerante", "R32 (ecológico)"],
      ["Compresor", "SVS de velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "42 a 46 dB"],
      ["Flujo de aire", "550 a 1,150 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Peso unidad interior", "Desde 8.3 kg"]
    ],
    features: [
      "Control inteligente por IA",
      "Refrigerante R32 amigable con el ambiente",
      "Hasta 21.6 SEER de eficiencia",
      "Equipos muy ligeros y compactos"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/neo-inverter/"
  },
  {
    slug: "inverter-x",
    name: "Inverter X",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 5,455",
    image: "img/productos/inverter-x.webp",
    short: "Inverter con tecnología de inteligencia artificial y refrigerante ecológico R32. Muy silencioso (desde 32 dB) y con tubería de hasta 30 m para instalaciones exigentes.",
    versiones: [
      ["1 Ton", "110V", "$ 5,620"],
      ["1 Ton", "220V", "$ 5,455"],
      ["1.5 Ton", "220V", "$ 9,020"],
      ["2 Ton", "220V", "$ 11,610"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "110V / 220V"],
      ["Eficiencia (SEER)", "16.8 a 18.6"],
      ["Refrigerante", "R32 (ecológico)"],
      ["Compresor", "SVS de velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "Desde 32 dB"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Hasta 20–30 m de longitud"]
    ],
    features: [
      "Tecnología de control por IA",
      "Refrigerante R32 ecológico",
      "Operación silenciosa desde 32 dB",
      "Unidad exterior ligera (desde 21 kg)"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/inverter-x/"
  },
  {
    slug: "inverter-x32",
    name: "Inverter X32",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 5,055",
    image: "img/productos/inverter-x32.png",
    short: "Inverter accesible con refrigerante R32 y compresor SVS. Gran flujo de aire (hasta 1,300 m³/h) para enfriar rápido espacios de 1 a 2 toneladas.",
    versiones: [
      ["1 Ton", "110V", "$ 5,280"],
      ["1 Ton", "220V", "$ 5,055"],
      ["1.5 Ton", "220V", "$ 8,715"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "110V / 220V"],
      ["Eficiencia (SEER)", "16.5 a 17.5"],
      ["Refrigerante", "R32 (ecológico)"],
      ["Compresor", "SVS de velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "41 a 50 dB"],
      ["Flujo de aire", "560 a 1,300 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Hasta 20 m de longitud"]
    ],
    features: [
      "Refrigerante R32 ecológico",
      "Gran flujo de aire para enfriar rápido",
      "Compresor SVS de velocidad variable",
      "Buena relación eficiencia-precio"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/x32/"
  },
  {
    slug: "inverter-v32",
    name: "Inverter V32",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 5,821",
    image: "img/productos/inverter-v32.webp",
    short: "Inverter con refrigerante ecológico R32 y eficiencia estable (~17.7 SEER) en todas sus capacidades. Buen equilibrio entre precio y ahorro de energía.",
    versiones: [
      ["1 Ton", "220V", "$ 5,821"],
      ["1.5 Ton", "110V", "$ 8,662"],
      ["2 Ton", "220V", "$ 11,286"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "115V / 220V"],
      ["Eficiencia (SEER)", "17.4 a 17.7"],
      ["Refrigerante", "R32 (ecológico)"],
      ["Compresor", "SVS de velocidad variable (Inverter)"],
      ["Nivel de ruido interior", "40 a 46 dB"],
      ["Flujo de aire", "550 a 1,150 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Hasta 20 m de longitud"]
    ],
    features: [
      "Refrigerante R32 ecológico",
      "Eficiencia pareja en 1, 1.5 y 2 Ton",
      "Compresor SVS de velocidad variable",
      "Opción de 115V en 1 Ton"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/inverter/v32/"
  },
  {
    slug: "nex-onoff",
    name: "NEX (On/Off)",
    category: "Minisplit On/Off",
    badge: "On/Off",
    price: "Desde $ 4,717",
    image: "img/productos/nex-onoff.webp",
    short: "Minisplit On/Off confiable y directo, con compresor GMCC de alto rendimiento. Una opción económica de Mirage para vencer el calor en casa o negocio.",
    versiones: [
      ["1 Ton", "110V", "$ 4,940"],
      ["1 Ton", "220V", "$ 4,717"],
      ["1.5 Ton", "220V", "$ 7,560"],
      ["2 Ton", "220V", "$ 9,970"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "110V / 220V"],
      ["Refrigerante", "R410A"],
      ["Compresor", "GMCC High Performance"],
      ["Consumo", "950 a 2,000 W"],
      ["Nivel de ruido interior", "40 a 46 dB"],
      ["Flujo de aire", "550 a 1,150 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Hasta 10–12 m de longitud"]
    ],
    features: [
      "Compresor GMCC de alto rendimiento",
      "Disponible en 110V (1 Ton)",
      "Operación sencilla",
      "Precio accesible"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/on-off/nex/"
  },
  {
    slug: "x-life-onoff",
    name: "X Life (On/Off)",
    category: "Minisplit On/Off",
    badge: "On/Off",
    price: "Desde $ 4,920",
    image: "img/productos/x-life-onoff.png",
    short: "El On/Off más silencioso de la línea: desde 28 dB en interior, con gran flujo de aire. Comodidad sin ruido a precio accesible.",
    versiones: [
      ["1 Ton", "110V", "$ 5,100"],
      ["1 Ton", "220V", "$ 4,920"],
      ["1.5 Ton", "220V", "$ 7,870"],
      ["2 Ton", "220V", "$ 10,920"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "115V / 220V"],
      ["Eficiencia (SEER)", "~12"],
      ["Refrigerante", "R410A"],
      ["Compresor", "GMCC High Performance"],
      ["Nivel de ruido interior", "Desde 28 dB"],
      ["Flujo de aire", "630 a 1,250 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Kit de 3–4 m incluido"]
    ],
    features: [
      "Muy silencioso (desde 28 dB)",
      "Gran flujo de aire",
      "Compresor GMCC de alto rendimiento",
      "Kit de tubería incluido"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/on-off/x-life/"
  },
  {
    slug: "life-12-plus",
    name: "Life 12+ (On/Off)",
    category: "Minisplit On/Off",
    badge: "On/Off",
    price: "Desde $ 5,320",
    image: "img/productos/life-12-plus.png",
    short: "On/Off con eficiencia SEER 12 y tubería de hasta 20 metros, ideal cuando la unidad exterior queda lejos. Robusto para el uso de todos los días.",
    versiones: [
      ["1 Ton", "110V", "$ 5,930"],
      ["1 Ton", "220V", "$ 5,320"],
      ["1.5 Ton", "220V", "$ 9,100"]
    ],
    specs: [
      ["Capacidades", "1, 1.5 y 2 Ton"],
      ["Voltaje", "110V / 220V"],
      ["Eficiencia (SEER)", "12 a 12.1"],
      ["Refrigerante", "R410A"],
      ["Compresor", "GMCC High Performance"],
      ["Nivel de ruido interior", "41 a 46 dB"],
      ["Flujo de aire", "560 a 1,170 m³/h"],
      ["Modos", "Frío y calor (F/C)"],
      ["Tubería", "Hasta 15–20 m de longitud"]
    ],
    features: [
      "Tubería de hasta 20 m para instalaciones flexibles",
      "Eficiencia SEER 12",
      "Compresor GMCC de alto rendimiento",
      "Unidades compactas"
    ],
    link: "https://mirage.mx/productos/todo/aire-acondicionado/minisplit/on-off/life-12-plus/"
  }
];
