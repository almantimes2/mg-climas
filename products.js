/* ============================================================
   PRODUCTOS DE MG CLIMAS  (este archivo controla el catálogo)
   ------------------------------------------------------------
   • Para AGREGAR un producto: copia un bloque { ... } completo,
     pégalo dentro de la lista y cambia sus datos.
   • "slug": identificador único, en minúsculas y SIN espacios.
   • "image": ruta de la foto. Guárdala en  img/productos/
   • "specs": pares de  ["Etiqueta", "Valor"].
   • "features": lista de características (texto corto).
   • "link" (opcional): ficha técnica del fabricante.
   • "price": "$ 8,500", "Desde $ 6,900" o "Consultar precio".
   Los precios y datos de abajo son de EJEMPLO: edítalos con los tuyos.
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
    image: "img/productos/magnum-19-platinum.jpg",
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
    slug: "minisplit-inverter-12k",
    name: "Minisplit Inverter 12,000 BTU",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 7,900",
    image: "img/productos/minisplit-inverter-12k.jpg",
    short: "Equipo Inverter de 1 tonelada para recámaras y espacios medianos. Enfría rápido y mantiene la temperatura con un consumo eléctrico muy eficiente.",
    specs: [
      ["Capacidad", "12,000 BTU"],
      ["Toneladas", "1 Ton"],
      ["Voltaje", "115V / 220V"],
      ["Eficiencia", "Alta eficiencia (Inverter)"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Inverter"]
    ],
    features: [
      "Tecnología Inverter de bajo consumo",
      "Operación silenciosa",
      "Enfriamiento rápido",
      "Control remoto incluido"
    ]
  },
  {
    slug: "minisplit-inverter-18k",
    name: "Minisplit Inverter 18,000 BTU",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 10,500",
    image: "img/productos/minisplit-inverter-18k.jpg",
    short: "Equipo Inverter de 1.5 toneladas, perfecto para recámaras grandes o salas medianas. Eficiente y silencioso para uso diario.",
    specs: [
      ["Capacidad", "18,000 BTU"],
      ["Toneladas", "1.5 Ton"],
      ["Voltaje", "220V"],
      ["Eficiencia", "Alta eficiencia (Inverter)"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Inverter"]
    ],
    features: [
      "Tecnología Inverter",
      "Bajo consumo eléctrico",
      "Operación silenciosa",
      "Control remoto incluido"
    ]
  },
  {
    slug: "minisplit-inverter-24k",
    name: "Minisplit Inverter 24,000 BTU",
    category: "Minisplit Inverter",
    badge: "Inverter",
    price: "Desde $ 13,500",
    image: "img/productos/minisplit-inverter-24k.jpg",
    short: "Equipo Inverter de 2 toneladas para salas, oficinas y espacios amplios. Gran capacidad de enfriamiento sin disparar el recibo de luz.",
    specs: [
      ["Capacidad", "24,000 BTU"],
      ["Toneladas", "2 Ton"],
      ["Voltaje", "220V"],
      ["Eficiencia", "Alta eficiencia (Inverter)"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Inverter"]
    ],
    features: [
      "Ideal para espacios grandes",
      "Tecnología Inverter",
      "Enfriamiento potente",
      "Control remoto incluido"
    ]
  },
  {
    slug: "minisplit-onoff-12k",
    name: "Minisplit On/Off 12,000 BTU",
    category: "Minisplit On/Off",
    badge: "On/Off",
    price: "Desde $ 6,200",
    image: "img/productos/minisplit-onoff-12k.jpg",
    short: "Minisplit tradicional de 1 tonelada, confiable y económico. Una excelente opción para uso moderado y presupuestos ajustados.",
    specs: [
      ["Capacidad", "12,000 BTU"],
      ["Toneladas", "1 Ton"],
      ["Voltaje", "115V / 220V"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Convencional (On/Off)"]
    ],
    features: [
      "Precio accesible",
      "Fácil de operar",
      "Enfriamiento confiable",
      "Control remoto incluido"
    ]
  },
  {
    slug: "minisplit-onoff-24k",
    name: "Minisplit On/Off 24,000 BTU",
    category: "Minisplit On/Off",
    badge: "On/Off",
    price: "Desde $ 10,900",
    image: "img/productos/minisplit-onoff-24k.jpg",
    short: "Minisplit tradicional de 2 toneladas para espacios amplios. Robusto y económico, ideal cuando se busca buena capacidad a bajo costo.",
    specs: [
      ["Capacidad", "24,000 BTU"],
      ["Toneladas", "2 Ton"],
      ["Voltaje", "220V"],
      ["Refrigerante", "R410A"],
      ["Compresor", "Convencional (On/Off)"]
    ],
    features: [
      "Buena capacidad a bajo costo",
      "Fácil de operar",
      "Enfriamiento confiable",
      "Control remoto incluido"
    ]
  },
  {
    slug: "aire-ventana-12k",
    name: "Aire de Ventana 12,000 BTU",
    category: "De Ventana",
    badge: "De ventana",
    price: "Desde $ 5,500",
    image: "img/productos/aire-ventana-12k.jpg",
    short: "Equipo de ventana fácil de instalar y sin unidad exterior. Práctico para recámaras y espacios pequeños donde no se puede poner minisplit.",
    specs: [
      ["Capacidad", "12,000 BTU"],
      ["Voltaje", "115V"],
      ["Instalación", "En ventana (sin unidad exterior)"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Sin unidad exterior",
      "Instalación sencilla",
      "Compacto",
      "Control remoto incluido"
    ]
  },
  {
    slug: "aire-ventana-18k",
    name: "Aire de Ventana 18,000 BTU",
    category: "De Ventana",
    badge: "De ventana",
    price: "Desde $ 7,200",
    image: "img/productos/aire-ventana-18k.jpg",
    short: "Equipo de ventana de 1.5 toneladas, sin unidad exterior, para enfriar espacios medianos con una instalación rápida y sencilla.",
    specs: [
      ["Capacidad", "18,000 BTU"],
      ["Voltaje", "220V"],
      ["Instalación", "En ventana (sin unidad exterior)"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Sin unidad exterior",
      "Mayor capacidad",
      "Instalación sencilla",
      "Control remoto incluido"
    ]
  },
  {
    slug: "aire-portatil-12k",
    name: "Aire Portátil 12,000 BTU",
    category: "Portátil",
    badge: "Portátil",
    price: "Desde $ 6,900",
    image: "img/productos/aire-portatil-12k.jpg",
    short: "Aire portátil con ruedas que puedes mover de un cuarto a otro. No requiere instalación fija: solo conéctalo y dirige la salida de aire por la ventana.",
    specs: [
      ["Capacidad", "12,000 BTU"],
      ["Voltaje", "115V"],
      ["Instalación", "Portátil (con ruedas)"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Se mueve entre habitaciones",
      "Sin instalación fija",
      "Ruedas integradas",
      "Control remoto incluido"
    ]
  },
  {
    slug: "aire-portatil-14k",
    name: "Aire Portátil 14,000 BTU",
    category: "Portátil",
    badge: "Portátil",
    price: "Desde $ 8,200",
    image: "img/productos/aire-portatil-14k.jpg",
    short: "Aire portátil de mayor capacidad para espacios medianos. Movilidad total y cero instalación: ideal para rentas o cuartos sin ventana adecuada para minisplit.",
    specs: [
      ["Capacidad", "14,000 BTU"],
      ["Voltaje", "115V"],
      ["Instalación", "Portátil (con ruedas)"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Mayor capacidad",
      "Sin instalación fija",
      "Ruedas integradas",
      "Control remoto incluido"
    ]
  },
  {
    slug: "minisplit-comercial-36k",
    name: "Minisplit Comercial 36,000 BTU",
    category: "Comercial",
    badge: "Comercial",
    price: "Consultar precio",
    image: "img/productos/minisplit-comercial-36k.jpg",
    short: "Equipo de 3 toneladas para negocios, locales y oficinas. Mayor capacidad de enfriamiento pensada para uso intensivo y espacios concurridos.",
    specs: [
      ["Capacidad", "36,000 BTU"],
      ["Toneladas", "3 Ton"],
      ["Voltaje", "220V"],
      ["Uso", "Comercial / oficinas"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Para uso comercial",
      "Alta capacidad",
      "Enfriamiento para espacios grandes",
      "Opción de contrato de mantenimiento"
    ]
  },
  {
    slug: "minisplit-comercial-60k",
    name: "Minisplit Comercial 60,000 BTU",
    category: "Comercial",
    badge: "Comercial",
    price: "Consultar precio",
    image: "img/productos/minisplit-comercial-60k.jpg",
    short: "Equipo de 5 toneladas para locales amplios, salones y áreas comerciales. Máxima capacidad de enfriamiento para los espacios más exigentes.",
    specs: [
      ["Capacidad", "60,000 BTU"],
      ["Toneladas", "5 Ton"],
      ["Voltaje", "220V"],
      ["Uso", "Comercial / locales amplios"],
      ["Refrigerante", "R410A"]
    ],
    features: [
      "Máxima capacidad",
      "Para locales amplios",
      "Uso intensivo",
      "Opción de contrato de mantenimiento"
    ]
  }
];
