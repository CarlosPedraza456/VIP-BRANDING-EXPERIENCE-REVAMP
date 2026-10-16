export interface ColorItem {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  role: string;
  category: 'primary' | 'gold' | 'text' | 'border';
  bgStyle: string;
  borderStyle: string;
  textDark?: boolean;
}

export interface HeadingGradientItem {
  id: string;
  name: string;
  badge: string;
  className: string;
  description: string;
  sampleText: string;
  subText?: string;
  cssRule: string;
  ghlClass: string;
  usageNotes: string;
}

export const officialColorPalette: ColorItem[] = [
  {
    id: 'obsidian',
    name: 'OBSIDIAN BLACK',
    hex: '#0B0B0B',
    rgb: '11, 11, 11',
    role: 'Fondo general del sitio, canvas oscuro, profundidad y menús (60% del sitio)',
    category: 'primary',
    bgStyle: 'bg-[#0B0B0B]',
    borderStyle: 'border-[#262626]',
    textDark: false,
  },
  {
    id: 'charcoal',
    name: 'LUXURY CHARCOAL',
    hex: '#141414',
    rgb: '20, 20, 20',
    role: 'Tarjetas de contenido, contenedores, modales y barras de herramientas (30% del sitio)',
    category: 'primary',
    bgStyle: 'bg-[#141414]',
    borderStyle: 'border-[#333333]',
    textDark: false,
  },
  {
    id: 'signature-gold',
    name: 'SIGNATURE VIP GOLD',
    hex: '#DDA83B',
    rgb: '221, 168, 59',
    role: 'Acentos de autoridad, botones principales, bordes de lujo y destellos (10% del sitio)',
    category: 'gold',
    bgStyle: 'bg-[#DDA83B]',
    borderStyle: 'border-[#FFE49E]',
    textDark: true,
  },
  {
    id: 'gold-light',
    name: 'PALE GOLD (LUZ DE DEGRADADO)',
    hex: '#FFF3D1',
    rgb: '255, 243, 209',
    role: 'Punto de luz superior en textos con gradiente y estrellas brillantes',
    category: 'gold',
    bgStyle: 'bg-[#FFF3D1]',
    borderStyle: 'border-[#FFE49E]',
    textDark: true,
  },
  {
    id: 'gold-vivid',
    name: 'VIVID LUXURY GOLD',
    hex: '#F0CA68',
    rgb: '240, 202, 104',
    role: 'Tono medio de orfebrería dorada y reflejos metálicos cálidos',
    category: 'gold',
    bgStyle: 'bg-[#F0CA68]',
    borderStyle: 'border-[#FCE394]',
    textDark: true,
  },
  {
    id: 'gold-dark',
    name: 'ANTIQUE DEEP GOLD',
    hex: '#AA771C',
    rgb: '170, 119, 28',
    role: 'Sombra y profundidad inferior en degradados de texto, biseles de orfebrería',
    category: 'gold',
    bgStyle: 'bg-[#AA771C]',
    borderStyle: 'border-[#DDA83B]',
    textDark: false,
  },
  {
    id: 'champagne',
    name: 'CHAMPAGNE OFF-WHITE',
    hex: '#FDFBF7',
    rgb: '253, 251, 247',
    role: 'Tipografía principal de lectura, títulos secundarios y contraste suave',
    category: 'text',
    bgStyle: 'bg-[#FDFBF7]',
    borderStyle: 'border-[#E2DED7]',
    textDark: true,
  },
  {
    id: 'platinum',
    name: 'MUTED PLATINUM',
    hex: '#A8A095',
    rgb: '168, 160, 149',
    role: 'Párrafos secundarios, subtítulos, etiquetas y metadatos de apoyo',
    category: 'text',
    bgStyle: 'bg-[#A8A095]',
    borderStyle: 'border-[#706B63]',
    textDark: true,
  },
  {
    id: 'pure-white',
    name: 'PURE WHITE',
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    role: 'Puntos focales máximos, letras destacadas y destellos especulares',
    category: 'text',
    bgStyle: 'bg-white',
    borderStyle: 'border-white',
    textDark: true,
  },
  {
    id: 'border-gold',
    name: 'TRANSLUCENT GOLD BORDER',
    hex: 'rgba(221, 168, 59, 0.35)',
    rgb: '221, 168, 59, 0.35',
    role: 'Líneas perimetrales de tarjetas, divisores sutiles y contornos de lujo',
    category: 'border',
    bgStyle: 'bg-[#DDA83B]/30',
    borderStyle: 'border-[#DDA83B]/50',
    textDark: false,
  },
];

export const officialHeadingGradients: HeadingGradientItem[] = [
  {
    id: 'hero-twotone-official',
    name: 'Titular Oficial del Hero (Línea 1 Blanco Sólido + Línea 2 Oro VIP · 100% Centrado)',
    badge: 'DISEÑO EXACTO DEL HERO',
    className: 'hero-title-main',
    ghlClass: 'Opción A: 2 Headlines en GHL (.gold-gradient-text) | Opción B: .hero-title-main',
    description:
      'El diseño exacto y original del Hero: la 1ra línea ("ELITE ENTREPRENEUR &") en Blanco Puro sólido brillante (#FFFFFF con sombra) y la 2da línea ("BUSINESS LEADERSHIP BRANDING") en Gradiente de Oro VIP diagonal (135deg). Ambos 100% centrados automáticamente en GoHighLevel.',
    sampleText: 'ELITE ENTREPRENEUR &\nBUSINESS LEADERSHIP BRANDING',
    subText: 'VIP BRANDING EXPERIENCE · BEST OF THE BEST',
    cssRule: `/* ==========================================================================
   TITULAR OFICIAL HERO (LÍNEA 1 BLANCO + LÍNEA 2 ORO · 100% CENTRADO)
   (Solo colores y degradados - la tipografía la configuras en el editor de GHL)
   Pega este código en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Contenedor / Headline: Centrado absoluto en GoHighLevel */
.hero-title-main,
.hero-title-container,
.ghl-hero-title {
  text-align: center !important;
  width: 100% !important;
  max-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  display: block !important;
}

/* 2. Línea 1: Blanco Puro Brillante (#FFFFFF) - 100% Centrado */
.hero-white-text,
.hero-title-white,
.hero-title-main .hero-white-text {
  color: #FFFFFF !important;
  -webkit-text-fill-color: #FFFFFF !important;
  background: none !important;
  text-align: center !important;
  width: 100% !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.75) !important;
}

/* 3. Línea 2: Gradiente de Oro VIP Metálico - 100% Centrado */
.hero-gold-text,
.hero-gold-gradient,
.hero-title-gold,
.gold-gradient-text,
.text-gold-gradient,
.hero-title-main .hero-gold-text {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  text-align: center !important;
  width: 100% !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 6px !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8)) !important;
}

/* Si se usa dentro de la misma línea (span inline centrado) */
span.gold-gradient-text,
span.text-gold-gradient {
  display: inline-block !important;
  text-align: center !important;
}`,
    usageNotes:
      'En GHL: Opción A (Fácil): crea 2 Headlines centrados, el 1ro blanco y el 2do con clase "gold-gradient-text". Opción B: usa un bloque HTML con las clases .hero-white-text y .hero-gold-text.'
  },
  {
    id: 'vip-gold-signature',
    name: 'Gradiente de Oro VIP Metálico Completo (100% Oro)',
    badge: 'ORO METÁLICO COMPLETO',
    className: 'gold-gradient-text',
    ghlClass: '.gold-gradient-text, .text-gold-gradient',
    description:
      'El gradiente dorado completo para titulares donde las palabras van en oro. Blanco brillante en la esquina (135deg), oro claro, oro vivo en el centro y sombra de oro antiguo. Respeta la alineación a la izquierda de tus secciones.',
    sampleText: 'YOUR STORY IS WORTH MILLIONS',
    subText: 'VIP BRANDING EXPERIENCE · BEST OF THE BEST',
    cssRule: `/* GRADIENTE DE ORO VIP (PARA CUALQUIER SECCIÓN · ALINEADO A LA IZQUIERDA POR DEFECTO) */
.gold-gradient-text,
.text-gold-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.gold-gradient-text,
span.text-gold-gradient {
  display: inline !important;
  text-align: inherit !important;
}`,
    usageNotes:
      'En GHL añade la clase "gold-gradient-text" al Headline o en un span. Se alineará a la izquierda automáticamente junto con el resto del título.'
  },
  {
    id: 'gold-metallic-warm',
    name: 'Oro Metálico Cálido (Lingote de Oro)',
    badge: 'ORO CÁLIDO',
    className: 'text-gold-metallic',
    ghlClass: '.text-gold-metallic, .gold-metallic-text',
    description:
      'Tonalidad ámbar y oro rico de orfebrería, ideal para cifras numéricas ("$10,000,000+", "1,000+ Brands") o palabras que requieran un oro más denso.',
    sampleText: 'THE 4 AUTHORITY PILLARS',
    subText: '1,000+ BRANDS TRANSFORMED GLOBALLY',
    cssRule: `/* GRADIENTE DE ORO METÁLICO CÁLIDO (LINGOTE) */
.text-gold-metallic,
.gold-metallic-text {
  background: linear-gradient(135deg, #FFF8E7 0%, #FCE394 22%, #E5B842 50%, #C8952B 75%, #8B5C0F 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.text-gold-metallic {
  display: inline !important;
  text-align: inherit !important;
}`,
    usageNotes:
      'En GHL añade la clase "text-gold-metallic" en Advanced -> Custom Class.'
  },
  {
    id: 'gold-shimmer-reflective',
    name: 'Oro Reflectante con Destello Central (Shimmer)',
    badge: 'REFLEJO DE LUZ',
    className: 'gold-shimmer-text',
    ghlClass: '.gold-shimmer-text',
    description:
      'Simula un haz de luz horizontal reflejándose en el centro de las letras doradas. El brillo blanco está concentrado en el medio con oro en los extremos.',
    sampleText: 'REY PEREZ · AMP CONCEPTS INC.',
    subText: 'INTERNATIONAL KEYNOTE SPEAKER & MENTOR',
    cssRule: `/* ORO REFLECTANTE CON DESTELLO CENTRAL */
.gold-shimmer-text {
  background: linear-gradient(90deg, #DDA83B 0%, #FFF3D1 30%, #FFFFFF 50%, #FFF3D1 70%, #DDA83B 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.gold-shimmer-text {
  display: inline !important;
  text-align: inherit !important;
}`,
    usageNotes:
      'Excelente para nombres propios o citas. Clase en GHL: "gold-shimmer-text".'
  }
];

export const masterPaletteCssForGHL = `/* ==========================================================================
   PALETA DE COLORES Y GRADIENTES DE ENCABEZADOS (GHL CSS)
   (Solo colores, degradados y centrado - la tipografía se configura en GHL)
   Pega este código en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Variables de Color del Sistema VIP */
:root {
  --color-obsidian: #0B0B0B;
  --color-charcoal: #141414;
  --color-gold: #DDA83B;
  --color-gold-light: #FFF3D1;
  --color-gold-vivid: #F0CA68;
  --color-gold-dark: #AA771C;
  --color-champagne: #FDFBF7;
  --color-platinum: #A8A095;
  --color-border-gold: rgba(221, 168, 59, 0.35);
}

/* 2. TITULAR HERO OFICIAL (LÍNEA 1 BLANCO + LÍNEA 2 ORO · 100% CENTRADO EN HERO) */
.hero-title-main,
.hero-title-container,
.ghl-hero-title {
  text-align: center !important;
  width: 100% !important;
  max-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  display: block !important;
}

/* Línea 1: Blanco Puro Brillante Sólido (Hero) */
.hero-white-text,
.hero-title-white,
.hero-title-main .hero-white-text {
  color: #FFFFFF !important;
  -webkit-text-fill-color: #FFFFFF !important;
  background: none !important;
  display: block !important;
  text-align: center !important;
  width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.75) !important;
}

/* Línea 2: Gradiente de Oro VIP Metálico (Hero) */
.hero-gold-text,
.hero-gold-gradient,
.hero-title-gold,
.hero-title-main .hero-gold-text {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: block !important;
  text-align: center !important;
  width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 6px !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8)) !important;
}

/* 3. GRADIENTE DE ORO GENERAL PARA CUALQUIER SECCIÓN (ALINEADO A LA IZQUIERDA) */
.gold-gradient-text,
.text-gold-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.gold-gradient-text,
span.text-gold-gradient {
  display: inline !important;
  text-align: inherit !important;
}

/* 4. GRADIENTE DE ORO METÁLICO CÁLIDO (Lingote) */
.text-gold-metallic,
.gold-metallic-text {
  background: linear-gradient(135deg, #FFF8E7 0%, #FCE394 22%, #E5B842 50%, #C8952B 75%, #8B5C0F 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.text-gold-metallic {
  display: inline !important;
  text-align: inherit !important;
}

/* 5. GRADIENTE ORO REFLECTANTE CON DESTELLO (Shimmer) */
.gold-shimmer-text {
  background: linear-gradient(90deg, #DDA83B 0%, #FFF3D1 30%, #FFFFFF 50%, #FFF3D1 70%, #DDA83B 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: inline !important;
  text-align: inherit !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.75));
}

span.gold-shimmer-text {
  display: inline !important;
  text-align: inherit !important;
}

/* 6. Botón VIP de Oro Oficial con Sombra Metálica */
.btn-gold-luxury,
.ghl-btn-gold {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  background: linear-gradient(135deg, #FFF3D1 0%, #F5D372 25%, #DDA83B 60%, #B88220 100%) !important;
  color: #070707 !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.15em !important;
  padding: 16px 36px !important;
  border: 1px solid #FFE49E !important;
  border-radius: 2px !important;
  cursor: pointer !important;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 4px 25px rgba(221, 168, 59, 0.35) !important;
}

.btn-gold-luxury:hover,
.ghl-btn-gold:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 0 8px 35px rgba(221, 168, 59, 0.6) !important;
  background: linear-gradient(135deg, #FFFFFF 0%, #FFE28A 25%, #E5B842 60%, #C48E25 100%) !important;
}`;
