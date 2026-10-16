export interface SectionTutorialItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  ghlClass: string;
  summary: string;
  hasFlare: boolean;
  flareDetails: string;
  howToBuild: string[];
  cssSnippet: string;
  jsSnippet?: string;
  tips: string[];
}

export const sectionsTutorialData: SectionTutorialItem[] = [
  {
    id: 'header-hero',
    number: '01',
    title: 'Header Dinámico & Hero Integrado',
    subtitle: 'Efecto Scroll: Transparente sobre Hero en el tope a Barra Negra/Oro con Blur al bajar',
    ghlClass: '.ghl-header-integrated  (Header)  &  .ghl-hero-section  (Hero)',
    summary:
      'Este es el efecto clave que hace que la cabecera no se sienta como un bloque separado, sino como parte natural de la fotografía del Jet Privado. Al estar en la cima de la página, el header es transparente con un ligero degradado superior. Cuando el usuario hace scroll hacia abajo más de 30px, se convierte suavemente en una barra sólida obsidiana con desenfoque de cine y borde inferior de oro. Y al volver a subir hacia arriba, se reintegra al Hero.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE: Halo central superior de oro cálido (850x400px, blur 140px) suspendido detrás del titular sobre el avión privado, más viñeta perimetral oscura para garantizar máxima legibilidad.',
    howToBuild: [
      'Paso 1 (Sección Header en GHL): En el constructor de GHL, crea la sección superior. En "Section Settings" -> "Advanced" -> "Custom Class" escribe: ghl-header-integrated.',
      'Paso 2 (Contenido del Header): Agrega una fila con 3 columnas (Teléfono concierge a la izquierda, Monograma/Logo al centro, Botón "MENU" o "VIP ADMISSION" a la derecha).',
      'Paso 3 (Sección Hero en GHL): Justo debajo del Header, crea la sección del Hero. En "Section Settings" -> "Advanced" -> "Custom Class" escribe: ghl-hero-section.',
      'Paso 4 (Fondo del Hero): En los ajustes de la sección Hero, asigna la imagen de fondo del Jet Privado. Dale un Padding Superior de 140px para que el texto inicial no quede cubierto por el Header.',
      'Paso 5 (Flare automático): El código CSS abajo ya incluye el flare dorado de 850px y la viñeta oscura mediante ::before y ::after, así que se genera solo.',
      'Paso 6 (Pegar JavaScript): Ve a Page Settings -> Custom Code -> Footer Tracking Code y pega el script JS que detecta el scroll y activa la clase .scrolled automáticamente.'
    ],
    cssSnippet: `/* ==========================================================================
   01. HEADER DINÁMICO & HERO INTEGRADO (GHL CSS)
   Pega este código en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Header en estado inicial (al estar arriba en el Hero):
   Totalmente transparente con degradado suave hacia abajo */
.ghl-header-integrated {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 9999 !important;
  background: linear-gradient(180deg, rgba(11, 11, 11, 0.92) 0%, rgba(11, 11, 11, 0.4) 60%, transparent 100%) !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  padding-top: 18px !important;
  padding-bottom: 18px !important;
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-sizing: border-box !important;
}

/* 2. Header al hacer scroll hacia abajo (clase .scrolled activada por JS):
   Se transforma en una barra sólida obsidiana con blur y borde oro fino */
.ghl-header-integrated.scrolled {
  background: rgba(11, 11, 11, 0.94) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.35) !important;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.9) !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

/* 3. Sección del Hero: Sube para que la imagen quede detrás del Header */
.ghl-hero-section {
  position: relative !important;
  margin-top: 0 !important;
  padding-top: 140px !important;
  padding-bottom: 90px !important;
  min-height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background-size: cover !important;
  background-position: center center !important;
  overflow: hidden !important;
}

/* 4. Viñeta cinemática y oscurecimiento para legibilidad sobre el Jet */
.ghl-hero-section::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(180deg, rgba(11, 11, 11, 0.65) 0%, rgba(11, 11, 11, 0.45) 40%, #0B0B0B 100%),
              radial-gradient(ellipse at center, transparent 35%, rgba(11, 11, 11, 0.85) 100%) !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

/* 5. FLARE SUPERIOR CENTRAL DE ORO (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO ORGÁNICO) */
.ghl-hero-section::after {
  content: "" !important;
  position: absolute !important;
  top: 20% !important;
  left: 50% !important;
  width: 850px !important;
  height: 400px !important;
  background: radial-gradient(ellipse at center, rgba(197, 168, 128, 0.22) 0%, rgba(221, 168, 59, 0.08) 50%, transparent 75%) !important;
  filter: blur(100px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 1 !important;
  animation: heroFlareHeartbeat 9s ease-in-out infinite !important;
}

@keyframes heroFlareHeartbeat {
  0% {
    transform: translateX(-50%) translateY(0px) scale(0.94);
    opacity: 0.25;
  }
  22% {
    transform: translateX(-51%) translateY(-8px) scale(1.03);
    opacity: 0.40;
  }
  38% {
    transform: translateX(-50%) translateY(-4px) scale(0.98);
    opacity: 0.30;
  }
  52% {
    transform: translateX(-49%) translateY(-12px) scale(1.07);
    opacity: 0.44;
  }
  74% {
    transform: translateX(-50%) translateY(4px) scale(0.97);
    opacity: 0.28;
  }
  100% {
    transform: translateX(-50%) translateY(0px) scale(0.94);
    opacity: 0.25;
  }
}

.ghl-hero-section .inner-container,
.ghl-hero-section .c-row {
  position: relative !important;
  z-index: 2 !important;
}

/* 6. Evita que el header se meta debajo de la barra superior en el editor de GHL */
.hl-builder .ghl-header-integrated,
body.builder-mode .ghl-header-integrated,
div[data-page-builder] .ghl-header-integrated {
  position: relative !important;
  top: auto !important;
}`,
    jsSnippet: `<!-- SCRIPT DE SCROLL DINÁMICO PARA GHL (Footer Tracking Code) -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.ghl-header-integrated');
  if (!header) return;

  function updateHeaderScroll() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();
});
</script>`,
    tips: [
      'El flare superior de 850px está incluido en ::after y genera ese halo cálido sobre el fuselaje del avión automáticamente.',
      'En GHL deja el fondo del Header transparente en el inspector visual para que el degradado CSS gobierne el color.'
    ]
  },
  {
    id: 'hero-elements',
    number: '02',
    title: 'Elementos del Hero (Badge, Título 2 Tonos, Caja Glassmorphism y Botón Oro)',
    subtitle: 'El diseño exacto del Hero: Blanco + Oro VIP, caja de cristal oscuro y botón de lujo',
    ghlClass: '.ghl-hero-badge, .hero-title-main, .ghl-hero-glass-box, .ghl-btn-gold',
    summary:
      'Recrea exactamente la anatomía del Hero: 1) La insignia superior "VIP BRANDING EXPERIENCE · BEST OF THE BEST"; 2) El titular principal centrado con Línea 1 en blanco sólido y Línea 2 en oro VIP; 3) La caja de cristal semi-transparente para el párrafo de selección; 4) El botón de oro de orfebrería con brillo metálico.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA RESPLANDOR (GLOW): El botón de oro tiene un resplandor dorado volumétrico (.gold-glow) con dispersión de 25px a 35px que se intensifica al posar el cursor, y la insignia superior tiene borde dorado iluminado.',
    howToBuild: [
      '1. Badge superior: Agrega un Sub-headline o Paragraph centrado con clase: ghl-hero-badge.',
      '2. Titular 2 Tonos: Opción A) Crea 2 Headlines centrados: el 1ro blanco y el 2do con clase "gold-gradient-text". Opción B) Usa un bloque Custom HTML con .hero-title-main, .hero-white-text y .hero-gold-text.',
      '3. Caja de Cristal para el párrafo: Agrega una fila o contenedor de 1 columna con clase "ghl-hero-glass-box" y dentro coloca el párrafo de introducción.',
      '4. Botón CTA con Resplandor: Agrega un Button centrado con texto "VIEW THE EXPERIENCE" y clase: ghl-btn-gold.'
    ],
    cssSnippet: `/* ==========================================================================
   02. ELEMENTOS OFICIALES DEL HERO (GHL CSS)
   ========================================================================== */

/* 1. Badge superior VIP centrado con resplandor sutil */
.ghl-hero-badge {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  padding: 6px 18px !important;
  background: rgba(20, 20, 20, 0.9) !important;
  border: 1px solid rgba(221, 168, 59, 0.4) !important;
  border-radius: 2px !important;
  margin: 0 auto 24px auto !important;
  backdrop-filter: blur(10px) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6) !important;
  color: #DDA83B !important;
  font-weight: 700 !important;
  letter-spacing: 0.22em !important;
  text-transform: uppercase !important;
}

/* 2. Titular 2 Tonos: 100% Centrado */
.hero-title-main {
  text-align: center !important;
  width: 100% !important;
  margin: 0 auto 24px auto !important;
  display: block !important;
}

.hero-white-text,
.hero-title-white {
  color: #FFFFFF !important;
  -webkit-text-fill-color: #FFFFFF !important;
  background: none !important;
  display: block !important;
  text-align: center !important;
  width: 100% !important;
  margin: 0 auto !important;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.75) !important;
}

.hero-gold-text,
.hero-gold-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
  display: block !important;
  text-align: center !important;
  width: 100% !important;
  margin: 6px auto 0 auto !important;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8)) !important;
}

/* 3. Caja de Cristal Glassmorphism para el párrafo */
.ghl-hero-glass-box {
  max-width: 760px !important;
  margin: 0 auto 32px auto !important;
  padding: 24px 28px !important;
  background: rgba(0, 0, 0, 0.52) !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8) !important;
  text-align: center !important;
}

.ghl-hero-glass-box p {
  color: rgba(253, 251, 247, 0.9) !important;
  line-height: 1.65 !important;
  margin: 0 !important;
}

/* 4. Botón de Oro VIP Oficial con Resplandor (Glow) */
.ghl-btn-gold,
.btn-gold-luxury {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  background: linear-gradient(135deg, #FFF3D1 0%, #F5D372 25%, #DDA83B 60%, #B88220 100%) !important;
  color: #070707 !important;
  font-weight: 800 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  padding: 16px 38px !important;
  border: 1px solid #FFE49E !important;
  border-radius: 2px !important;
  cursor: pointer !important;
  box-shadow: 0 4px 25px rgba(221, 168, 59, 0.35) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.ghl-btn-gold:hover,
.btn-gold-luxury:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 0 8px 35px rgba(221, 168, 59, 0.6) !important;
  background: linear-gradient(135deg, #FFFFFF 0%, #FFE28A 25%, #E5B842 60%, #C48E25 100%) !important;
}`,
    tips: [
      'Asegúrate de colocar el párrafo dentro de .ghl-hero-glass-box para replicar el acabado oscuro semitransparente.',
      'El botón de oro reacciona automáticamente al hover elevando su resplandor.'
    ]
  },
  {
    id: 'archetypes',
    number: '03',
    title: 'Selector de Arquetipos de Marca (Asymmetric Split Layout)',
    subtitle: 'Columna izquierda con 4 Pestañas y Columna derecha con Ficha Detallada de Blueprint',
    ghlClass: '.ghl-archetypes-section, .ghl-archetype-tab, .ghl-blueprint-card',
    summary:
      'El diseño exacto de la sección de arquetipos: En lugar de tarjetas estáticas, utiliza una disposición dividida asimétrica. A la izquierda: encabezado alineado a la izquierda ("Before you view our branding packages, which brand type are you?") y 4 pestañas interactivas (Executive, Entrepreneur, Celebrity, Corporate). A la derecha: la tarjeta de Blueprint detallada con badge de conversión, audiencia objetivo, 5 entregables clave con checks dorados y botón CTA.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO FLOTANTE): Lleva un halo dorado difuminado en el lateral izquierdo que NO es estático ni plano: cuenta con una animación orgánica de latido tenue (heartbeat de 9 segundos) que se expande lentamente y se desplaza con suavidad bañando las pestañas de arquetipos, sin explosiones bruscas ni destellos cegadores. Viene incluido en el código CSS abajo (.ghl-archetypes-section::before con @keyframes flareHeartbeatLeft).',
    howToBuild: [
      '1. Crea la Sección en GHL con clase: ghl-archetypes-section (¡ATENCIÓN! El Flare lateral izquierdo se genera automáticamente con este CSS mediante ::before y se mueve suavemente con latido tenue de 9s, no necesitas agregarlo a mano).',
      '2. Agrega una Fila de 2 Columnas: Columna izquierda (5/12) y Columna derecha (7/12).',
      '3. Columna Izquierda: Encabezado alineado 100% a la izquierda (Línea 1 blanco, Línea 2 con clase "gold-gradient-text" también a la izquierda). Abajo, crea 4 bloques para los arquetipos con clase "ghl-archetype-tab" (al activo ponle "is-active").',
      '4. Columna Derecha: Contenedor con clase "ghl-blueprint-card" con badge, título del blueprint, lista de 5 entregables (.ghl-deliverables-list) y botón CTA.'
    ],
    cssSnippet: `/* ==========================================================================
   03. SELECTOR DE ARQUETIPOS DE MARCA (GHL CSS)
   ========================================================================== */

.ghl-archetypes-section {
  background-color: #0B0B0B !important;
  padding: 95px 24px !important;
  position: relative !important;
  overflow: hidden !important;
}

/* FLARE LATERAL IZQUIERDO DE ORO (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO FLOTANTE) */
.ghl-archetypes-section::before {
  content: "" !important;
  position: absolute !important;
  top: 50% !important;
  left: -80px !important;
  width: 440px !important;
  height: 440px !important;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.20) 0%, rgba(221, 168, 59, 0.05) 50%, transparent 75%) !important;
  filter: blur(100px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 1 !important;
  animation: flareHeartbeatLeft 9s ease-in-out infinite !important;
}

@keyframes flareHeartbeatLeft {
  0% {
    transform: translateY(-50%) translateX(0px) scale(0.94);
    opacity: 0.22;
  }
  22% {
    /* Primer latido suave con leve avance */
    transform: translateY(-53%) translateX(12px) scale(1.03);
    opacity: 0.36;
  }
  38% {
    /* Pausa intermedia tenue */
    transform: translateY(-51%) translateX(5px) scale(0.98);
    opacity: 0.28;
  }
  52% {
    /* Segundo latido suave con deriva lateral */
    transform: translateY(-47%) translateX(16px) scale(1.07);
    opacity: 0.40;
  }
  74% {
    /* Descenso gradual */
    transform: translateY(-49%) translateX(8px) scale(0.97);
    opacity: 0.26;
  }
  100% {
    transform: translateY(-50%) translateX(0px) scale(0.94);
    opacity: 0.22;
  }
}

.ghl-archetypes-section > * {
  position: relative !important;
  z-index: 2 !important;
}

/* Pestañas de Arquetipos (Columna Izquierda) */
.ghl-archetype-tab {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 16px 20px !important;
  background: #141414 !important;
  border: 1px solid rgba(221, 168, 59, 0.25) !important;
  border-radius: 2px !important;
  margin-bottom: 12px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
}

.ghl-archetype-tab:hover {
  border-color: rgba(221, 168, 59, 0.5) !important;
  background: #181818 !important;
  transform: translateX(4px) !important;
}

/* Pestaña Activa / Seleccionada */
.ghl-archetype-tab.is-active {
  background: #1A1815 !important;
  border-color: #DDA83B !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(221, 168, 59, 0.15) !important;
}

/* Ficha Detallada de Blueprint (Columna Derecha) */
.ghl-blueprint-card {
  background: #141414 !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 36px 32px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8) !important;
  position: relative !important;
}

/* Lista de 5 Entregables Clave con checks dorados */
.ghl-deliverables-list {
  list-style: none !important;
  padding: 0 !important;
  margin: 24px 0 !important;
}

.ghl-deliverables-list li {
  display: flex !important;
  align-items: flex-start !important;
  gap: 12px !important;
  padding: 10px 0 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
  color: rgba(253, 251, 247, 0.85) !important;
  font-size: 13px !important;
}

.ghl-deliverables-list li::before {
  content: "✓" !important;
  color: #DDA83B !important;
  font-weight: 900 !important;
  font-size: 14px !important;
}`,
    tips: [
      '¿Tiene Flare? SÍ: La regla ::before genera el halo dorado automáticamente en el borde izquierdo sin que tengas que agregar bloques extra en GHL.',
      'El título de esta sección ("Before you view our branding packages, which brand type are you?") está 100% alineado a la izquierda.'
    ]
  },
  {
    id: 'briefing',
    number: '04',
    title: 'Briefing VIP con Video & Orientación Privada (What You Should Know)',
    subtitle: 'Tarjeta Cinema de gran formato con villa privada, botón Play pulsante y narrativa oficial',
    ghlClass: '.ghl-briefing-section, .ghl-cinema-card, .ghl-play-btn-pulse, .ghl-narrative-card',
    summary:
      'El módulo oficial "What You Should Know About The VIP Branding Experience". En el centro luce la tarjeta Cinema de gran formato con fotografía de la villa privada de inmersión, el botón de Play dorado con pulso de onda para ver el video con Rey Perez, y en la base la tarjeta con el texto narrativo oficial ("You are clearly a top performer...") y los dos botones de admisión.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO): Halo central elíptico amplio (900x350px, blur 160px) detrás de la tarjeta cinema de la villa privada. Cuenta con animación tenue de latido orgánico de 9s que respira y se mueve suavemente en segundo plano sin cegar al usuario. Viene incluido automáticamente en el CSS abajo (.ghl-briefing-section::before y ::after).',
    howToBuild: [
      '1. Crea una Sección en GHL con clase: ghl-briefing-section (los 2 flares de fondo con latido y flotación de 9s se generan solos).',
      '2. Agrega el encabezado centrado: Insignia "What You Should Know About" y título "The VIP Branding Experience".',
      '3. Agrega un contenedor con clase "ghl-cinema-card" y asígnale la foto de la villa privada de fondo.',
      '4. En el centro coloca el botón circular de video con clase: ghl-play-btn-pulse.',
      '5. En la parte inferior inserta una caja con clase "ghl-narrative-card" con el texto oficial y los 2 botones.',
      '6. (SPARKS / DESTELLOS FLOTANTES): Inserta el CSS de sparks abajo y un bloque Custom HTML con <div class="ghl-sparkles-container"></div> y el script de destellos para que los destellos dorados floten idénticos al prototipo.'
    ],
    cssSnippet: `/* ==========================================================================
   04. BRIEFING VIP CON VIDEO DE ORIENTACIÓN & SPARKS (GHL CSS)
   ========================================================================== */

.ghl-briefing-section,
.ghl-sparkles-bg {
  background: #0B0B0B !important;
  padding: 95px 24px !important;
  position: relative !important;
  overflow: hidden !important;
  isolation: isolate !important;
  border-top: 1px solid rgba(221, 168, 59, 0.25) !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.25) !important;
}

/* DOBLE FLARE INTENSO EN EL FONDO (::before y ::after) CON AMBAS ANIMACIONES Y Z-INDEX 0 */
.ghl-briefing-section::before {
  content: "" !important;
  position: absolute !important;
  top: 15% !important;
  left: 10% !important;
  width: 750px !important;
  height: 420px !important;
  background: radial-gradient(ellipse at center, rgba(221, 168, 59, 0.38) 0%, rgba(221, 168, 59, 0.12) 55%, transparent 80%) !important;
  filter: blur(120px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 0 !important;
  animation: flareHeartbeatDrift 9s ease-in-out infinite, floatSlow 8s ease-in-out infinite !important;
}

.ghl-briefing-section::after {
  content: "" !important;
  position: absolute !important;
  bottom: 15% !important;
  right: 10% !important;
  width: 800px !important;
  height: 450px !important;
  background: radial-gradient(ellipse at center, rgba(245, 211, 114, 0.35) 0%, rgba(221, 168, 59, 0.1) 55%, transparent 80%) !important;
  filter: blur(130px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 0 !important;
  animation: flareHeartbeatDrift 9s ease-in-out infinite, floatSlow 8s ease-in-out infinite !important;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(1deg);
  }
}

@keyframes flareHeartbeatDrift {
  0% {
    transform: translate(0px, 0px) scale(0.94);
    opacity: 0.22;
  }
  22% {
    transform: translate(-10px, -8px) scale(1.03);
    opacity: 0.38;
  }
  38% {
    transform: translate(-5px, -4px) scale(0.98);
    opacity: 0.28;
  }
  52% {
    transform: translate(12px, -12px) scale(1.07);
    opacity: 0.42;
  }
  74% {
    transform: translate(8px, 6px) scale(0.97);
    opacity: 0.26;
  }
  100% {
    transform: translate(0px, 0px) scale(0.94);
    opacity: 0.22;
  }
}

/* SPARKS / DESTELLOS DORADOS FLOTANTES (Background Sparks) */
.ghl-sparkles-container {
  position: absolute !important;
  inset: 0 !important;
  pointer-events: none !important;
  z-index: 0 !important;
  overflow: hidden !important;
}

.ghl-spark {
  position: absolute !important;
  background: #FFF3D1 !important;
  border-radius: 50% !important;
  box-shadow: 0 0 12px #DDA83B, 0 0 24px #FFF3D1 !important;
  animation: sparkFloatTwinkle 6s ease-in-out infinite !important;
  opacity: 0.85 !important;
}

@keyframes sparkFloatTwinkle {
  0% {
    transform: translateY(0px) scale(0.5);
    opacity: 0.15;
  }
  50% {
    transform: translateY(-45px) scale(1.25);
    opacity: 0.95;
  }
  100% {
    transform: translateY(-90px) scale(0.3);
    opacity: 0;
  }
}

/* Tarjeta Cinema de Gran Formato con Fondo de Villa */
.ghl-cinema-card {
  position: relative !important;
  min-height: 540px !important;
  border: 1px solid rgba(221, 168, 59, 0.4) !important;
  border-radius: 2px !important;
  overflow: hidden !important;
  background-size: cover !important;
  background-position: center !important;
  padding: 40px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9) !important;
}

/* Capa de oscurecimiento cinemático */
.ghl-cinema-card::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(180deg, rgba(11, 11, 11, 0.3) 0%, rgba(11, 11, 11, 0.6) 60%, rgba(11, 11, 11, 0.95) 100%) !important;
  z-index: 1 !important;
}

.ghl-cinema-card > * {
  position: relative !important;
  z-index: 2 !important;
}

/* Botón Circular de Play Dorado con Animación de Pulso y Resplandor (Glow) */
.ghl-play-btn-pulse {
  position: relative !important;
  width: 90px !important;
  height: 90px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #FFF3D1 0%, #F5D372 25%, #DDA83B 60%, #B88220 100%) !important;
  color: #000000 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 30px auto !important;
  box-shadow: 0 0 50px rgba(221, 168, 59, 0.6) !important;
  cursor: pointer !important;
  transition: transform 0.3s ease !important;
}

.ghl-play-btn-pulse::after {
  content: '' !important;
  position: absolute !important;
  inset: -8px !important;
  border-radius: 50% !important;
  border: 2px solid rgba(221, 168, 59, 0.75) !important;
  animation: btnPulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite !important;
  pointer-events: none !important;
}

@keyframes btnPulseRing {
  0% {
    transform: scale(1);
    opacity: 0.85;
  }
  100% {
    transform: scale(1.38);
    opacity: 0;
  }
}

.ghl-play-btn-pulse:hover {
  transform: scale(1.08) !important;
}

/* Tarjeta Narrativa Inferior */
.ghl-narrative-card {
  background: rgba(14, 14, 14, 0.95) !important;
  border: 1px solid rgba(221, 168, 59, 0.4) !important;
  border-radius: 2px !important;
  padding: 28px !important;
  backdrop-filter: blur(12px) !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8) !important;
}

/* BLOQUE HTML ESTÁTICO PARA DESTELLOS Y FLARES EN GHL (Pégalo en tu Custom HTML) */
<div class="ghl-sparkles-container">
  <div class="ghl-spark" style="top:15%; left:12%; width:2px; height:2px; animation-duration:5s; animation-delay:0s;"></div>
  <div class="ghl-spark" style="top:28%; left:85%; width:3px; height:3px; animation-duration:6s; animation-delay:1s;"></div>
  <div class="ghl-spark" style="top:45%; left:25%; width:2.5px; height:2.5px; animation-duration:4.5s; animation-delay:0.5s;"></div>
  <div class="ghl-spark" style="top:60%; left:75%; width:3.5px; height:3.5px; animation-duration:7s; animation-delay:2s;"></div>
  <div class="ghl-spark" style="top:80%; left:40%; width:2px; height:2px; animation-duration:5.5s; animation-delay:1.5s;"></div>
  <div class="ghl-spark" style="top:20%; left:50%; width:3px; height:3px; animation-duration:6.5s; animation-delay:0.8s;"></div>
  <div class="ghl-spark" style="top:70%; left:15%; width:2.5px; height:2.5px; animation-duration:5s; animation-delay:2.5s;"></div>
  <div class="ghl-spark" style="top:35%; left:90%; width:2px; height:2px; animation-duration:4s; animation-delay:0.3s;"></div>
  <div class="ghl-spark" style="top:85%; left:80%; width:3px; height:3px; animation-duration:6s; animation-delay:1.8s;"></div>
  <div class="ghl-spark" style="top:50%; left:8%; width:2.5px; height:2.5px; animation-duration:5.8s; animation-delay:1.2s;"></div>
  <div class="ghl-spark" style="top:10%; left:65%; width:2px; height:2px; animation-duration:4.8s; animation-delay:0.7s;"></div>
  <div class="ghl-spark" style="top:90%; left:30%; width:3px; height:3px; animation-duration:6.2s; animation-delay:2.2s;"></div>
  <div class="ghl-spark" style="top:40%; left:45%; width:2.5px; height:2.5px; animation-duration:5.2s; animation-delay:0.4s;"></div>
  <div class="ghl-spark" style="top:25%; left:30%; width:2px; height:2px; animation-duration:5.6s; animation-delay:1.6s;"></div>
  <div class="ghl-spark" style="top:75%; left:60%; width:3.5px; height:3.5px; animation-duration:6.8s; animation-delay:2.4s;"></div>
</div>

`,
    tips: [
      'Al hacer clic en el botón de Play en GHL, configuras "Open Popup" para que reproduzca el video.',
      'La caja narrativa protege la legibilidad sin importar la foto de fondo.'
    ]
  },
  {
    id: 'quote-divider',
    number: '05',
    title: 'Divisor Parallax 3D Pop-Out Quote',
    subtitle: 'Comillas heráldicas de oro, frase célebre de Rey Perez y relieve tridimensional',
    ghlClass: '.ghl-quote-divider, .ghl-quote-mark, .ghl-quote-text, .ghl-quote-author',
    summary:
      'El separador de alto impacto emocional: Presenta la frase célebre de Rey Perez: "You will gain access to his lifestyle and learn the best-kept secrets to his success. Space is limited." Con comillas gigantes doradas semitransparentes, relieve de sombra proyectada y firma de autor en oro.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE: Halo radial cálido central (750x220px, blur 120px) integrado en el fondo radial de la sección para proyectar la cita hacia el usuario.',
    howToBuild: [
      '1. Crea una Sección en GHL con clase: ghl-quote-divider (el flare radial cálido ya viene en el CSS).',
      '2. Coloca un icono o símbolo de comillas dobles (") con clase: ghl-quote-mark.',
      '3. Agrega el texto de la cita con clase: ghl-quote-text.',
      '4. Agrega el autor "REY PEREZ · GLOBAL BRANDING EXPERT" con clase: ghl-quote-author.'
    ],
    cssSnippet: `/* ==========================================================================
   05. DIVISOR DE CITA CELEBRE 3D (GHL CSS)
   ========================================================================== */

/* Sección con halo radial cálido central integrado */
.ghl-quote-divider {
  background: radial-gradient(ellipse at center, #1C1812 0%, #12100D 45%, #0B0B0B 80%) !important;
  padding: 90px 24px !important;
  border-top: 1px solid rgba(221, 168, 59, 0.2) !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.2) !important;
  text-align: center !important;
  position: relative !important;
}

/* Comillas gigantes de fondo en oro */
.ghl-quote-mark {
  font-size: 72px !important;
  line-height: 1 !important;
  color: #DDA83B !important;
  opacity: 0.45 !important;
  display: block !important;
  margin-bottom: 12px !important;
}

/* Texto de la frase con relieve tridimensional */
.ghl-quote-text {
  font-size: clamp(22px, 3.2vw, 38px) !important;
  line-height: 1.35 !important;
  color: #FFFFFF !important;
  max-width: 900px !important;
  margin: 0 auto 20px auto !important;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9), 0 0 25px rgba(221, 168, 59, 0.25) !important;
  font-weight: 700 !important;
}

/* Firma del autor */
.ghl-quote-author {
  font-size: 12px !important;
  font-weight: 700 !important;
  letter-spacing: 0.25em !important;
  text-transform: uppercase !important;
  color: #DDA83B !important;
  display: block !important;
}`,
    tips: [
      'El fondo radial genera el halo cálido en el centro de la pantalla de forma nativa en CSS.',
      'Asegúrate de que el autor esté en mayúsculas con espaciado amplio.'
    ]
  },
  {
    id: 'founder',
    number: '06',
    title: 'Founder Dossier: Rey Perez',
    subtitle: 'Retrato con placa flotante, franja de 3 métricas de autoridad y biografía oficial',
    ghlClass: '.ghl-founder-section, .ghl-portrait-wrapper, .ghl-metrics-strip, .ghl-founder-bio-card',
    summary:
      'La sección biográfica de Rey Perez: A la izquierda luce el retrato editorial con marco de oro unificado (.ghl-portrait-wrapper), la placa flotante "Rey Perez - CEO & Founder, AMP Productions" y la franja inferior con las 3 métricas de autoridad (15+ Years Exp, 1,000s Brands Built, 20+ Years Enterprise). A la derecha, la tarjeta oscura con los 3 párrafos de biografía oficial y botones de acción.',
    hasFlare: false,
    flareDetails:
      'NO LLEVA FLARE DE FONDO: Esta sección mantiene un fondo negro obsidiana puro (#0B0B0B) sin halos de luz ambientales en el fondo para garantizar la máxima solemnidad de expediente editorial. Lo que sí lleva es: 1) El Canvas interactivo de destellos dorados en movimiento (.ghl-sparkles-canvas), y 2) El marco del retrato de Rey Perez con resplandor dorado perimetral y zoom al hover en la misma clase .ghl-portrait-wrapper.',
    howToBuild: [
      '1. Crea la Sección en GHL con clase: ghl-founder-section (Fondo negro obsidiana puro, SIN halos de fondo).',
      '2. Agrega una Fila de 2 Columnas (Izquierda 5/12, Derecha 7/12). Encabezado alineado 100% a la izquierda.',
      '3. Columna Izquierda: Contenedor con clase única "ghl-portrait-wrapper" con la foto de Rey Perez (que incluye el borde, sombra, halo de luz y efecto hover de zoom). Debajo de la foto coloca la franja con clase "ghl-metrics-strip" dividida en 3 para las estadísticas.',
      '4. Columna Derecha: Contenedor con clase "ghl-founder-bio-card" con la biografía oficial y los botones de acción.'
    ],
    cssSnippet: `/* ==========================================================================
   06. FOUNDER DOSSIER: REY PEREZ - COLUMNA IZQUIERDA Y DERECHA (GHL CSS DEFINITIVO)
   Pega este código en GHL: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Contenedor principal de la tarjeta con borde dorado y brillo de sombra (halo limpio) */
.ghl-portrait-wrapper {
  position: relative !important;
  background: #141414 !important;
  border: 1px solid rgba(221, 168, 59, 0.5) !important;
  border-radius: 4px !important;
  overflow: hidden !important;
  box-shadow: 0 0 30px rgba(221, 168, 59, 0.25), 0 25px 50px rgba(0, 0, 0, 0.9) !important;
  transition: box-shadow 0.4s ease, border-color 0.4s ease !important;
}

.ghl-portrait-wrapper:hover {
  border-color: rgba(221, 168, 59, 0.8) !important;
  box-shadow: 0 0 45px rgba(221, 168, 59, 0.4), 0 30px 60px rgba(0, 0, 0, 0.95) !important;
}

/* 2. Contenedor de la imagen con proporción 4:5 */
.ghl-portrait-image-container {
  position: relative !important;
  aspect-ratio: 4 / 5 !important;
  background: #121212 !important;
  overflow: hidden !important;
}

/* 3. Imagen con zoom cinemático al hover en el wrapper */
.ghl-portrait-wrapper img,
.ghl-portrait-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  filter: brightness(0.95) contrast(1.05) !important;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.ghl-portrait-wrapper:hover img,
.ghl-portrait-wrapper:hover .ghl-portrait-image {
  transform: scale(1.05) !important;
}

/* 4. Degradado inferior sobre la foto */
.ghl-portrait-gradient {
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(to top, #0B0B0B 0%, rgba(11, 11, 11, 0.3) 40%, transparent 100%) !important;
  pointer-events: none !important;
}

/* 5. Placa flotante inferior ("Rey Perez - CEO & Founder") */
.ghl-portrait-badge {
  position: absolute !important;
  bottom: 24px !important;
  left: 24px !important;
  right: 24px !important;
  padding: 16px !important;
  border-radius: 2px !important;
  background: rgba(0, 0, 0, 0.85) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border: 1px solid rgba(221, 168, 59, 0.4) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8) !important;
  z-index: 3 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

.ghl-portrait-badge h3 {
  font-family: serif !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  margin: 0 0 4px 0 !important;
  letter-spacing: -0.02em !important;
}

.ghl-portrait-badge p {
  font-size: 11px !important;
  color: #DDA83B !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  font-weight: 500 !important;
  margin: 0 !important;
}

/* 6. Franja inferior de 3 métricas de autoridad */
.ghl-metrics-strip {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  background: #0E0E0E !important;
  border-top: 1px solid rgba(221, 168, 59, 0.25) !important;
  padding: 16px !important;
  text-align: center !important;
}

.ghl-metrics-strip > div {
  padding: 0 4px !important;
}

.ghl-metrics-strip > div:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.ghl-metrics-strip .metric-num {
  color: #DDA83B !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  font-family: serif !important;
  display: block !important;
  margin-bottom: 2px !important;
}

.ghl-metrics-strip .metric-label {
  color: rgba(247, 244, 239, 0.6) !important;
  font-size: 9px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.15em !important;
  display: block !important;
}

/* 7. Tarjeta de Biografía Oficial (Columna Derecha) */
.ghl-founder-bio-card {
  background: #121212 !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 36px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8) !important;
}`,
    tips: [
      'El encabezado de esta sección está 100% alineado a la izquierda.',
      'Las 3 métricas de autoridad aportan credibilidad antes de leer la biografía.'
    ]
  },
  {
    id: 'portfolio',
    number: '07',
    title: 'Visual Portfolio & Client Stills',
    subtitle: 'Filtros de categoría y cuadrícula de casos reales con zoom cinemático al hover',
    ghlClass: '.ghl-portfolio-section, .ghl-portfolio-item, .ghl-portfolio-overlay',
    summary:
      'La galería fotográfica de clientes reales: Incluye la barra superior con botones de filtro por nicho y la cuadrícula fotográfica con proporción 16:10 de cine. Al posar el mouse sobre cualquier tarjeta, la imagen hace un zoom suave y revela el nombre del cliente y su título con resplandor dorado.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO): Halo dorado ambiental en el lateral derecho (top: 25%, right: 0 / -100px, 500x500px, blur 140px) que equilibra visualmente el flare izquierdo de arquetipos. Cuenta con animación de latido tenue (heartbeat de 9 segundos) con suave desplazamiento flotante sin explosiones bruscas. Viene incluido automáticamente en el CSS (.ghl-portfolio-section::before).',
    howToBuild: [
      '1. Crea la Sección en GHL con clase: ghl-portfolio-section (el Flare lateral derecho con latido tenue de 9s se genera solo).',
      '2. Coloca la fila superior con el título 100% a la izquierda y los botones de filtro.',
      '3. Agrega una Fila de 3 Columnas con elementos Image o Contenedores.',
      '4. En cada caja asigna la clase "ghl-portfolio-item" y coloca el overlay oscuro inferior (.ghl-portfolio-overlay).'
    ],
    cssSnippet: `/* ==========================================================================
   07. VISUAL PORTFOLIO & CLIENT STILLS (GHL CSS)
   ========================================================================== */

.ghl-portfolio-section {
  background: #0E0E0E !important;
  padding: 95px 24px !important;
  position: relative !important;
  overflow: hidden !important;
}

/* FLARE LATERAL DERECHO DE ORO (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO FLOTANTE) */
.ghl-portfolio-section::before {
  content: "" !important;
  position: absolute !important;
  top: 25% !important;
  right: -100px !important;
  width: 500px !important;
  height: 500px !important;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.18) 0%, rgba(221, 168, 59, 0.04) 50%, transparent 75%) !important;
  filter: blur(100px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 1 !important;
  animation: flareHeartbeatRight 9s ease-in-out infinite !important;
}

@keyframes flareHeartbeatRight {
  0% {
    transform: translateY(0px) translateX(0px) scale(0.94);
    opacity: 0.22;
  }
  22% {
    transform: translateY(-10px) translateX(-12px) scale(1.03);
    opacity: 0.36;
  }
  38% {
    transform: translateY(-5px) translateX(-5px) scale(0.98);
    opacity: 0.28;
  }
  52% {
    transform: translateY(-14px) translateX(-16px) scale(1.07);
    opacity: 0.40;
  }
  74% {
    transform: translateY(6px) translateX(-8px) scale(0.97);
    opacity: 0.26;
  }
  100% {
    transform: translateY(0px) translateX(0px) scale(0.94);
    opacity: 0.22;
  }
}

.ghl-portfolio-section > * {
  position: relative !important;
  z-index: 2 !important;
}

/* Tarjeta de Fotograma de Cliente */
.ghl-portfolio-item {
  position: relative !important;
  border: 1px solid rgba(221, 168, 59, 0.25) !important;
  border-radius: 2px !important;
  overflow: hidden !important;
  aspect-ratio: 16 / 10 !important;
  background: #070707 !important;
  cursor: pointer !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.ghl-portfolio-item img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.6s ease, filter 0.6s ease !important;
  filter: brightness(0.85) contrast(1.1) !important;
}

.ghl-portfolio-item:hover img {
  transform: scale(1.08) !important;
  filter: brightness(1) contrast(1.15) !important;
}

.ghl-portfolio-item:hover {
  border-color: #DDA83B !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(221, 168, 59, 0.25) !important;
}

/* Superposición oscura inferior con nombre de cliente */
.ghl-portfolio-overlay {
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(180deg, transparent 40%, rgba(7, 7, 7, 0.95) 100%) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-end !important;
  padding: 20px !important;
  pointer-events: none !important;
}

.ghl-portfolio-client-name {
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
}

.ghl-portfolio-client-title {
  font-size: 11px !important;
  color: #DDA83B !important;
  letter-spacing: 0.1em !important;
}`,
    tips: [
      '¿Tiene Flare? SÍ: La regla ::before genera el halo dorado derecho automáticamente.',
      'La proporción 16:10 mantiene alineadas todas las tarjetas.'
    ]
  },
  {
    id: 'testimonials',
    number: '08',
    title: 'Testimonials & Metrics Reel',
    subtitle: 'Tarjetas de retroalimentación VIP, 5 estrellas doradas, foto del cliente y métricas ROI',
    ghlClass: '.ghl-testimonials-section, .ghl-testimonial-card, .ghl-stars, .ghl-metric-pill',
    summary:
      'La sección de testimonios de líderes de la industria y clientes VIP: Cada tarjeta incluye foto del cliente, 5 estrellas doradas de autoridad, la cita textual de transformación, el nombre del cliente y una píldora con la métrica de resultado económico obtenido.',
    hasFlare: false,
    flareDetails:
      'NO LLEVA FLARE DE FONDO: Mantiene el fondo obsidiana sobrio (#0B0B0B) sin halos dorados de fondo para no distraer de la lectura de los testimonios. La iluminación proviene del resplandor luminoso (glow) de las 5 estrellas doradas (#DDA83B con sombra de luz de 10px) y el borde reactivo de cada tarjeta al posar el cursor.',
    howToBuild: [
      '1. Crea la Sección en GHL con clase: ghl-testimonials-section (Fondo negro sobrio, SIN halos de fondo).',
      '2. Encabezado alineado 100% a la izquierda: "Listen to our VIP Clients".',
      '3. Agrega una Fila de 2 o 3 Columnas.',
      '4. En cada columna coloca una tarjeta con clase "ghl-testimonial-card" con las estrellas (.ghl-stars), la cita, el autor y la píldora de métrica (.ghl-metric-pill).'
    ],
    cssSnippet: `/* ==========================================================================
   08. TESTIMONIALS & METRICS REEL (GHL CSS)
   ========================================================================== */

.ghl-testimonials-section {
  background: #0B0B0B !important;
  padding: 95px 24px !important;
}

/* Tarjeta individual de Testimonio */
.ghl-testimonial-card {
  background: linear-gradient(180deg, #161513 0%, #100F0E 100%) !important;
  border: 1px solid rgba(221, 168, 59, 0.3) !important;
  border-radius: 2px !important;
  padding: 32px 26px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}

.ghl-testimonial-card:hover {
  border-color: #DDA83B !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(221, 168, 59, 0.2) !important;
}

/* 5 Estrellas Doradas con resplandor */
.ghl-stars {
  color: #DDA83B !important;
  letter-spacing: 4px !important;
  font-size: 15px !important;
  margin-bottom: 14px !important;
  text-shadow: 0 0 10px rgba(221, 168, 59, 0.4) !important;
}

.ghl-testimonial-quote {
  font-size: 14px !important;
  line-height: 1.65 !important;
  color: rgba(253, 251, 247, 0.9) !important;
  font-style: italic !important;
  margin-bottom: 20px !important;
}

/* Píldora de Métrica de Retorno (ROI) */
.ghl-metric-pill {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  padding: 4px 12px !important;
  background: rgba(221, 168, 59, 0.12) !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  color: #DDA83B !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  border-radius: 2px !important;
  margin-top: 12px !important;
}`,
    tips: [
      'Las tarjetas se nivelan solas gracias al flexbox.',
      'La píldora de métrica cuantitativa aporta respaldo inmediato.'
    ]
  },
  {
    id: 'contact',
    number: '09',
    title: 'Split Contact & Penthouse Intake Form',
    subtitle: 'Diseño dividido: Penthouse y datos de conserjería a la izquierda + Formulario GHL estilizado a la derecha',
    ghlClass: '.ghl-contact-section, .ghl-concierge-card, .ghl-contact-form-box',
    summary:
      'La sección final de conversión donde los prospectos solicitan admisión: A la izquierda se presenta la fotografía del Penthouse con la tarjeta de contacto VIP de AMP Productions (teléfono concierge, email oficial y horarios). A la derecha, un contenedor oscuro que transforma todos los campos nativos de GoHighLevel a la estética obsidiana/oro.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA DOBLE FLARE (ANIMACIÓN DE LATIDO TENUE Y MOVIMIENTO): Doble halo dorado: uno izquierdo en el Penthouse y otro en la esquina inferior derecha detrás del formulario. Ambos tienen animación de latido tenue (heartbeat de 9 segundos) con suave desplazamiento flotante para dar vida cinematográfica sin cegar la visión de los campos. Vienen incluidos automáticamente en el CSS (::before y ::after).',
    howToBuild: [
      '1. Crea la Sección en GHL con clase: ghl-contact-section (el doble flare con latido tenue y movimiento se genera solo con este CSS).',
      '2. Encabezado alineado 100% a la izquierda: "Direct Contact & Private Intake".',
      '3. Fila de 2 Columnas (5/12 para conserjería y 7/12 para formulario).',
      '4. Columna Izquierda: Contenedor con clase "ghl-concierge-card" con foto del Penthouse y datos.',
      '5. Columna Derecha: Contenedor con clase "ghl-contact-form-box" con tu formulario nativo de GHL dentro.'
    ],
    cssSnippet: `/* ==========================================================================
   09. SPLIT CONTACT & PENTHOUSE INTAKE FORM (GHL CSS)
   ========================================================================== */

.ghl-contact-section {
  background: #0B0B0B !important;
  padding: 95px 24px !important;
  border-top: 1px solid rgba(221, 168, 59, 0.2) !important;
  position: relative !important;
  overflow: hidden !important;
}

/* FLARE 1: LATERAL IZQUIERDO CENTRAL (LATIDO TENUE Y MOVIMIENTO FLOTANTE) */
.ghl-contact-section::before {
  content: "" !important;
  position: absolute !important;
  top: 50% !important;
  left: -80px !important;
  width: 420px !important;
  height: 420px !important;
  background: radial-gradient(circle, rgba(197, 168, 128, 0.18) 0%, rgba(221, 168, 59, 0.04) 50%, transparent 75%) !important;
  filter: blur(100px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 1 !important;
  animation: flareHeartbeatLeft 9s ease-in-out infinite !important;
}

/* FLARE 2: ESQUINA INFERIOR DERECHA (LATIDO TENUE Y MOVIMIENTO FLOTANTE) */
.ghl-contact-section::after {
  content: "" !important;
  position: absolute !important;
  bottom: -60px !important;
  right: -60px !important;
  width: 420px !important;
  height: 420px !important;
  background: radial-gradient(circle, rgba(197, 168, 128, 0.16) 0%, rgba(221, 168, 59, 0.04) 50%, transparent 75%) !important;
  filter: blur(100px) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 1 !important;
  animation: flareHeartbeatRight 9s ease-in-out infinite !important;
}

@keyframes flareHeartbeatLeft {
  0% { transform: translateY(-50%) translateX(0px) scale(0.94); opacity: 0.22; }
  22% { transform: translateY(-53%) translateX(12px) scale(1.03); opacity: 0.36; }
  38% { transform: translateY(-51%) translateX(5px) scale(0.98); opacity: 0.28; }
  52% { transform: translateY(-47%) translateX(16px) scale(1.07); opacity: 0.40; }
  74% { transform: translateY(-49%) translateX(8px) scale(0.97); opacity: 0.26; }
  100% { transform: translateY(-50%) translateX(0px) scale(0.94); opacity: 0.22; }
}

@keyframes flareHeartbeatRight {
  0% { transform: translateY(0px) translateX(0px) scale(0.94); opacity: 0.22; }
  22% { transform: translateY(-10px) translateX(-12px) scale(1.03); opacity: 0.36; }
  38% { transform: translateY(-5px) translateX(-5px) scale(0.98); opacity: 0.28; }
  52% { transform: translateY(-14px) translateX(-16px) scale(1.07); opacity: 0.40; }
  74% { transform: translateY(6px) translateX(-8px) scale(0.97); opacity: 0.26; }
  100% { transform: translateY(0px) translateX(0px) scale(0.94); opacity: 0.22; }
}

.ghl-contact-section > * {
  position: relative !important;
  z-index: 2 !important;
}

/* Tarjeta de Conserjería VIP (Columna Izquierda) */
.ghl-concierge-card {
  background: linear-gradient(180deg, #161616 0%, #0E0E0E 100%) !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 36px 30px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8) !important;
  height: 100% !important;
}

/* Contenedor del Formulario (Columna Derecha) */
.ghl-contact-form-box {
  background: #111111 !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 36px 30px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8) !important;
}

/* Inputs, Selects y Textareas de GoHighLevel estilizados en obsidiana con enfoque dorado */
.ghl-contact-form-box input,
.ghl-contact-form-box select,
.ghl-contact-form-box textarea,
.ghl-contact-form-box .form-control {
  background: #1A1A1A !important;
  border: 1px solid rgba(221, 168, 59, 0.3) !important;
  color: #FFFFFF !important;
  border-radius: 2px !important;
  padding: 14px 16px !important;
  font-size: 13px !important;
  transition: all 0.25s ease !important;
  box-sizing: border-box !important;
  width: 100% !important;
}

.ghl-contact-form-box input:focus,
.ghl-contact-form-box select:focus,
.ghl-contact-form-box textarea:focus,
.ghl-contact-form-box .form-control:focus {
  border-color: #DDA83B !important;
  box-shadow: 0 0 15px rgba(221, 168, 59, 0.45) !important;
  background: #201E1A !important;
  outline: none !important;
}

.ghl-contact-form-box label {
  color: #DDA83B !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  margin-bottom: 6px !important;
  display: block !important;
}`,
    tips: [
      '¿Tiene Flare? SÍ: El doble halo dorado (izquierdo y derecho) viene programado en el CSS con ::before y ::after.',
      'Los inputs de GHL adoptan automáticamente el estilo obsidiana con resplandor al hacer clic.'
    ]
  },
  {
    id: 'footer',
    number: '10',
    title: 'VIP Footer & Corporate Legal Crest',
    subtitle: 'Emblema heráldico de AMP Productions, enlaces corporativos y copyright legal',
    ghlClass: '.ghl-footer-section, .ghl-footer-brand-title, .ghl-footer-sub',
    summary:
      'El cierre del sitio web: Fondo obsidiana profundo con divisor superior dorado, el emblema heráldico VIP en oro, títulos institucionales de AMP Productions, enlaces discretos de navegación y la línea de copyright legal.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE: Halo dorado sutil central inferior (bottom: 0, 600x200px, blur 120px) que asienta el pie de página sobre el fondo oscuro.',
    howToBuild: [
      '1. Crea la Sección de pie de página en GHL con clase: ghl-footer-section (el halo central se genera solo).',
      '2. Coloca el emblema heráldico o logotipo en el centro.',
      '3. Agrega el nombre corporativo "VIP BRANDING EXPERIENCE" con clase: ghl-footer-brand-title.',
      '4. Añade los enlaces legales (Terms, Privacy, Concierge) y la línea de derechos reservados.'
    ],
    cssSnippet: `/* ==========================================================================
   10. VIP FOOTER & CORPORATE CREST (GHL CSS)
   ========================================================================== */

.ghl-footer-section {
  background-color: #060606 !important;
  border-top: 1px solid rgba(221, 168, 59, 0.25) !important;
  padding: 60px 24px 40px 24px !important;
  text-align: center !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Halo Dorado Central Inferior */
.ghl-footer-section::before {
  content: "" !important;
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 600px !important;
  height: 200px !important;
  background: radial-gradient(ellipse at bottom, rgba(221, 168, 59, 0.12) 0%, transparent 70%) !important;
  filter: blur(80px) !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

.ghl-footer-section > * {
  position: relative !important;
  z-index: 2 !important;
}

.ghl-footer-brand-title {
  font-size: 18px !important;
  font-weight: 800 !important;
  letter-spacing: 0.25em !important;
  text-transform: uppercase !important;
  color: #FFFFFF !important;
  margin: 16px 0 6px 0 !important;
}

.ghl-footer-sub {
  font-size: 11px !important;
  color: #DDA83B !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  margin-bottom: 24px !important;
}

.ghl-footer-links a {
  color: rgba(253, 251, 247, 0.6) !important;
  text-decoration: none !important;
  font-size: 12px !important;
  margin: 0 12px !important;
  transition: color 0.2s ease !important;
}

.ghl-footer-links a:hover {
  color: #DDA83B !important;
}`,
    tips: [
      '¿Tiene Flare? SÍ: El halo inferior ::before enmarca el pie de página con un brillo cálido de fondo.'
    ]
  }
  ,
  {
    id: 'video-popup',
    number: '11',
    title: 'VIP Video Popup Modal & Auto-Miniatura Vimeo',
    subtitle: 'Modal centrado al medio (50%/50%), miniatura automática de Vimeo y estética Obsidian/Gold',
    ghlClass: '.vip-videopopup, .vip-video-card, #video-popup-container, #video-popup-overlay',
    summary:
      'Sistema interactivo para incrustar videos de Vimeo o YouTube en GoHighLevel con miniatura de alta resolución obtenida automáticamente a partir del ID del video (sin tener que subir fotos a mano), botón flotante de Play circular con pulso y aura dorada, y un pop-up modal perfectamente centrado en el medio de la pantalla (usando top: 50%; left: 50%; transform: translate(-50%, -50%)), con fondo difuminado (backdrop-filter: blur) y cierre elegante.',
    hasFlare: true,
    flareDetails:
      'SÍ LLEVA FLARE & GLOW: Resplandor circular de oro suave (#DDA83B) con onda expansiva en el botón de reproducción y halo perimetral de 40px en el contenedor del pop-up (box-shadow: 0 0 40px rgba(221, 168, 59, 0.25)) con backdrop blur de 12px.',
    howToBuild: [
      'Paso 1 (HTML de la Tarjeta en GHL): En el constructor de GHL, añade un bloque de Custom HTML/JS con la clase "vip-videopopup" y el atributo data-id="TU_VIMEO_ID". No necesitas poner ninguna imagen; la miniatura se carga sola.',
      'Paso 2 (Estructura del Popup): Coloca el código HTML del modal (#video-popup-overlay y #video-popup-container) UNA SOLA VEZ en la página de GHL (al final de la página o en el footer).',
      'Paso 3 (Pegar CSS): Ve a Page Settings -> Custom Code -> Custom CSS y pega el código de estilos. Incluye centrado exacto y relación de aspecto de cine 16:9.',
      'Paso 4 (Pegar JavaScript): Ve a Page Settings -> Custom Code -> Footer Tracking Code y pega el script JS que descarga automáticamente la miniatura oficial de Vimeo y gestiona la apertura/cierre sin errores CORS ni conflictos de jQuery en GHL.'
    ],
    cssSnippet: `/* ==========================================================================
   11. VIP VIDEO POPUP & CENTRADO EXACTO (GHL CSS)
   Pega este código en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* Contenedor principal de la tarjeta de video con branding VIP */
.vip-videopopup {
  cursor: pointer !important;
  display: block !important;
  width: 100% !important;
  margin: 16px 0 !important;
}

.vip-video-card {
  position: relative !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  border: 1px solid rgba(221, 168, 59, 0.3) !important;
  background-color: #0b0b0b !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.vip-videopopup:hover .vip-video-card {
  border-color: #DDA83B !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 25px 50px rgba(221, 168, 59, 0.25) !important;
}

.vip-video-thumb-wrapper {
  position: relative !important;
  width: 100% !important;
  padding-bottom: 56.25% !important; /* Relación estándar 16:9 */
  background-color: #121212 !important;
  overflow: hidden !important;
}

.vip-vimeo-thumb {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.6s ease !important;
}

.vip-videopopup:hover .vip-vimeo-thumb {
  transform: scale(1.05) !important;
}

/* Botón flotante Play con pulso dorado */
.vip-play-overlay-btn {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 72px !important;
  height: 72px !important;
  background: rgba(11, 11, 11, 0.85) !important;
  border: 2px solid #DDA83B !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 0 30px rgba(221, 168, 59, 0.4) !important;
  transition: all 0.3s ease !important;
  z-index: 3 !important;
  pointer-events: none !important;
}

.vip-play-icon {
  width: 28px !important;
  height: 28px !important;
  fill: #DDA83B !important;
  margin-left: 3px !important;
  transition: transform 0.3s ease !important;
}

.vip-videopopup:hover .vip-play-overlay-btn {
  background: #DDA83B !important;
  transform: translate(-50%, -50%) scale(1.1) !important;
  box-shadow: 0 0 45px rgba(221, 168, 59, 0.7) !important;
}

.vip-videopopup:hover .vip-play-icon {
  fill: #0B0B0B !important;
}

/* --- POPUP MODAL CENTRADO EXACTO AL MEDIO DE LA PANTALLA --- */
#video-popup-overlay {
  display: none;
  position: fixed;
  z-index: 99995;
  top: 0;
  left: 0;
  background-color: rgba(6, 6, 6, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  width: 100%;
  height: 100%;
}

#video-popup-container {
  display: none;
  position: fixed;
  z-index: 99999;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 90% !important;
  max-width: 920px !important;
  background-color: #0b0b0b;
  border: 1px solid rgba(221, 168, 59, 0.4);
  border-radius: 16px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(221, 168, 59, 0.25);
  overflow: hidden;
}

#video-popup-iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background-color: #000;
}

#video-popup-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: #000;
}

#video-popup-close {
  cursor: pointer;
  position: absolute;
  right: -12px;
  top: -12px;
  z-index: 100000;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  background-color: #0b0b0b;
  border: 2px solid #DDA83B;
  line-height: 32px;
  color: #DDA83B;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  transition: all 0.2s ease;
}

#video-popup-close:hover {
  background-color: #DDA83B;
  color: #0b0b0b;
  transform: scale(1.1);
}`,
    jsSnippet: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  // 1. Carga automática de la miniatura nativa de Vimeo desde su ID (sin errores CORS)
  document.querySelectorAll('.vip-videopopup').forEach(function(el) {
    var vimeoId = el.getAttribute('data-id');
    var imgTag = el.querySelector('.vip-vimeo-thumb');
    if (vimeoId && imgTag) {
      imgTag.src = "https://vumbnail.com/" + vimeoId + ".jpg";
    }
  });

  // 2. Apertura del pop-up centrado con jQuery delegado para GoHighLevel
  jQuery(document).on('click', '.vip-videopopup', function(e) {
    e.preventDefault();
    var  = jQuery(this);
    var id = .data('id');
    var type = .data('type') || 'vimeo';
    var autoplay = .data('autoplay') !== false ? '?autoplay=1' : '';
    
    var srchref = (type === 'youtube') ? "https://www.youtube.com/embed/" : "//player.vimeo.com/video/";
    
    jQuery("#video-popup-iframe").attr('src', srchref + id + autoplay);
    jQuery("#video-popup-overlay, #video-popup-container, #video-popup-close").fadeIn(300);
  });

  // 3. Cierre del pop-up
  jQuery(document).on('click', '#video-popup-close, #video-popup-overlay', function(e) {
    e.preventDefault();
    jQuery("#video-popup-overlay, #video-popup-container, #video-popup-close").fadeOut(200);
    jQuery("#video-popup-iframe").attr('src', '');
  });
});
</script>
<script src="https://player.vimeo.com/api/player.js"></script>`,
    tips: [
      '¿Tiene Flare? SÍ: Resplandor radial de oro en el botón Play y aura perimetral dorada en el modal.',
      'El popup queda exactamente centrado en medio de la pantalla mediante transform translate.',
      'La miniatura es nativa y se obtiene automáticamente del ID del video de Vimeo sin subir fotos manuales.'
    ]
  }
];
