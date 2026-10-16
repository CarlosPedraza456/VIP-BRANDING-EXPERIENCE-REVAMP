import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Layers,
  ArrowRight,
  Copy,
  Check,
  Play,
  Cpu,
  Monitor,
  Zap,
  Sliders,
  FileCode,
  Palette,
  ShieldCheck,
  MousePointer,
  HelpCircle,
  ExternalLink,
  Eye,
  Activity,
  Flame,
  Sun,
  Stars,
  Menu,
  X,
  ChevronRight,
  Crown,
  Phone,
  Mail,
  LayoutTemplate
} from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { SectionSparkleCanvas } from './SectionSparkleCanvas';
import { sectionsTutorialData } from '../data/sectionsTutorialData';
import {
  officialColorPalette,
  officialHeadingGradients,
  masterPaletteCssForGHL
} from '../data/colorPaletteData';

export const AnimationsTutorials: React.FC<{ onBackToOfficial: () => void }> = ({
  onBackToOfficial
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'menu' | 'sections' | 'palette' | 'backgrounds' | 'css' | 'js' | 'guide' | 'demo'>('palette');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('header-hero');
  const [simulatedScroll, setSimulatedScroll] = useState<number>(0);
  const [testMenuOpen, setTestMenuOpen] = useState(false);
  const [testNativePopupOpen, setTestNativePopupOpen] = useState(false);
  const [menuSnippetSubTab, setMenuSnippetSubTab] = useState<'html' | 'css' | 'js' | 'native'>('native');
  const [copied, setCopied] = useState<string | null>(null);
  const [demoState, setDemoState] = useState<'slide-left' | 'slide-right' | 'zoom-in' | 'hybrid-left' | 'hybrid-right' | '3d-popout'>('3d-popout');
  const [demoTriggerKey, setDemoTriggerKey] = useState(0);
  const [sparkleDensityDemo, setSparkleDensityDemo] = useState<'subtle' | 'medium' | 'high'>('medium');
  const [flareSpeedDemo, setFlareSpeedDemo] = useState<'normal' | 'fast' | 'slow'>('normal');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // ==========================================
  // MENU POPUP OVERLAY SNIPPETS FOR GHL
  // ==========================================
  const menuPopupHtmlSnippet = `<!-- ==============================================================
     VIP BRANDING - POPUP FULLSCREEN NAV MENU HTML
     Pega este bloque en un elemento "Custom JS/HTML" en tu página de GHL
     ============================================================== -->
<div id="ghl-vip-menu-overlay" class="ghl-vip-menu-overlay" aria-hidden="true">
  <!-- Botón de Cerrar (X) Flotante -->
  <button type="button" class="ghl-vip-menu-close" id="ghl-vip-menu-close-btn" aria-label="Cerrar Menú">
    <span class="close-text">CLOSE</span>
    <span class="close-icon">&times;</span>
  </button>

  <div class="ghl-vip-menu-container">
    <div class="ghl-vip-menu-grid">
      
      <!-- COLUMNA IZQUIERDA: Directorio de Enlaces con Smooth Scroll -->
      <div class="ghl-vip-menu-directory">
        <div class="ghl-vip-menu-badge">
          <span>◆ DIRECTORIO OFICIAL · VIP BRANDING EXPERIENCE</span>
        </div>

        <nav class="ghl-vip-nav-list">
          <a href="#archetypes" class="ghl-vip-nav-link">
            <span class="link-num">01</span>
            <div class="link-info">
              <span class="link-title">Brand Archetypes</span>
              <span class="link-sub">Executive · Entrepreneur · Artist · Corporate</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#founder" class="ghl-vip-nav-link">
            <span class="link-num">02</span>
            <div class="link-info">
              <span class="link-title">Founder Rey Perez</span>
              <span class="link-sub">Global Branding Expert & CEO AMP Productions</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#deliverables" class="ghl-vip-nav-link">
            <span class="link-num">03</span>
            <div class="link-info">
              <span class="link-title">Deliverables Suite</span>
              <span class="link-sub">Credibility Card, 360 Video, Social Kits & QR</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#brand-identity" class="ghl-vip-nav-link">
            <span class="link-num">04</span>
            <div class="link-info">
              <span class="link-title">Brand Guidelines Sheet</span>
              <span class="link-sub">Vector Identity & Chromatic Architecture</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#clients" class="ghl-vip-nav-link">
            <span class="link-num">05</span>
            <div class="link-info">
              <span class="link-title">Real Client Portfolio</span>
              <span class="link-sub">Ann Law, Adam Gaskill, Gerald Rogers & More</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#calculator" class="ghl-vip-nav-link">
            <span class="link-num">06</span>
            <div class="link-info">
              <span class="link-title">Brand Equity Calculator</span>
              <span class="link-sub">Deal Flow Multiplier & Valuation Diagnostics</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#packages" class="ghl-vip-nav-link">
            <span class="link-num">07</span>
            <div class="link-info">
              <span class="link-title">VIP Memberships & Programs</span>
              <span class="link-sub">Brand in 2 Days · Sovereign Identity · Empire Ecosystem</span>
            </div>
            <span class="link-arrow">→</span>
          </a>

          <a href="#contact" class="ghl-vip-nav-link">
            <span class="link-num">08</span>
            <div class="link-info">
              <span class="link-title">Contact & Application</span>
              <span class="link-sub">Direct Intake with Rey Perez Team</span>
            </div>
            <span class="link-arrow">→</span>
          </a>
        </nav>
      </div>

      <!-- COLUMNA DERECHA: Tarjeta Ejecutiva y Reserva Rápida -->
      <div class="ghl-vip-menu-sidebar">
        <div class="sidebar-top">
          <div class="sidebar-crown-tag">
            <span class="crown-icon">👑</span>
            <span>AMP CONCEPTS INC</span>
          </div>
          <h3 class="sidebar-heading">GLOBAL BRANDING HEADQUARTERS</h3>
          <p class="sidebar-desc">
            Led by Rey Perez. We create celebrity brands for high-achieving entrepreneurs who want to dominate their niche.
          </p>

          <div class="sidebar-contact-card">
            <div class="contact-row">
              <span class="contact-lbl">Direct Phone:</span>
              <a href="tel:+13055047337" class="contact-val">+1 (305) 504-7337</a>
            </div>
            <div class="contact-row">
              <span class="contact-lbl">Corporate Email:</span>
              <a href="mailto:info@iampyourbrand.com" class="contact-val">info@iampyourbrand.com</a>
            </div>
            <div class="contact-row">
              <span class="contact-lbl">Headquarters:</span>
              <span class="contact-val gold">Hialeah, FL 33015</span>
            </div>
          </div>
        </div>

        <div class="sidebar-bottom">
          <a href="#contact" class="btn-gold-luxury sidebar-cta-btn">
            <span>Request VIP Admission</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Pie inferior del menú -->
    <div class="ghl-vip-menu-footer">
      <span>© VIP BRANDING EXPERIENCE · AMP CONCEPTS INC.</span>
      <span class="footer-gold">Best of the Best Personal Branding</span>
    </div>
  </div>
</div>`;

  const menuPopupCssSnippet = `/* ==========================================================================
   VIP BRANDING EXPERIENCE - MENÚ POPUP OVERLAY FULLSCREEN (GHL CSS)
   Pega este código en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Fuente oficial Fira Sans para el menú */
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap');

/* 2. Capa Fullscreen del Pop-up con Blur y Fondo Obsidiana */
.ghl-vip-menu-overlay {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999999 !important;
  background-color: rgba(7, 7, 7, 0.96) !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s ease !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  box-sizing: border-box !important;
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
  color: #FDFBF7 !important;
  padding: 85px 24px 40px 24px !important;
  display: flex !important;
  flex-direction: column !important;
}

/* Estado cuando se abre el menú */
.ghl-vip-menu-overlay.is-open {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

/* Bloqueo del scroll en la página de fondo al abrir el menú */
body.ghl-menu-locked {
  overflow: hidden !important;
  height: 100vh !important;
}

/* 3. Botón Flotante para Cerrar (X) */
.ghl-vip-menu-close {
  position: fixed !important;
  top: 24px !important;
  right: 28px !important;
  z-index: 1000000 !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  background: rgba(22, 22, 22, 0.9) !important;
  border: 1px solid rgba(221, 168, 59, 0.45) !important;
  color: #DDA83B !important;
  padding: 8px 18px !important;
  border-radius: 2px !important;
  cursor: pointer !important;
  font-family: 'Fira Sans', sans-serif !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  transition: all 0.25s ease !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6) !important;
}

.ghl-vip-menu-close:hover {
  background: #1C1814 !important;
  border-color: #DDA83B !important;
  color: #FFFFFF !important;
  transform: scale(1.04) !important;
  box-shadow: 0 0 20px rgba(221, 168, 59, 0.3) !important;
}

.ghl-vip-menu-close .close-icon {
  font-size: 20px !important;
  line-height: 1 !important;
  color: #DDA83B !important;
}

/* 4. Estructura y Distribución Central */
.ghl-vip-menu-container {
  max-width: 1240px !important;
  width: 100% !important;
  margin: auto !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}

.ghl-vip-menu-grid {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 40px !important;
  margin-bottom: 30px !important;
}

@media (min-width: 992px) {
  .ghl-vip-menu-grid {
    grid-template-columns: 7fr 5fr !important;
    gap: 48px !important;
    align-items: stretch !important;
  }
}

/* 5. Columna Izquierda: Directorio de Enlaces */
.ghl-vip-menu-badge {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  padding-bottom: 14px !important;
  margin-bottom: 20px !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.2) !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.25em !important;
  color: #DDA83B !important;
  text-transform: uppercase !important;
}

.ghl-vip-nav-list {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
}

.ghl-vip-nav-link {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 10px 14px !important;
  background: transparent !important;
  border: 1px solid transparent !important;
  border-radius: 2px !important;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
}

.ghl-vip-nav-link:hover {
  background: rgba(22, 22, 22, 0.85) !important;
  border-color: rgba(221, 168, 59, 0.35) !important;
  transform: translateX(6px) !important;
}

.ghl-vip-nav-link .link-num {
  font-size: 14px !important;
  font-weight: 700 !important;
  color: rgba(221, 168, 59, 0.65) !important;
  margin-right: 16px !important;
  min-width: 24px !important;
}

.ghl-vip-nav-link:hover .link-num {
  color: #DDA83B !important;
}

.ghl-vip-nav-link .link-info {
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
}

.ghl-vip-nav-link .link-title {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  line-height: 1.25 !important;
  transition: color 0.25s ease !important;
}

.ghl-vip-nav-link:hover .link-title {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 25%, #F0CA68 55%, #DDA83B 80%, #AA771C 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.ghl-vip-nav-link .link-sub {
  font-size: 11px !important;
  color: rgba(253, 251, 247, 0.45) !important;
  margin-top: 2px !important;
  font-weight: 300 !important;
}

.ghl-vip-nav-link:hover .link-sub {
  color: rgba(253, 251, 247, 0.85) !important;
}

.ghl-vip-nav-link .link-arrow {
  color: rgba(221, 168, 59, 0.35) !important;
  font-size: 16px !important;
  transition: all 0.25s ease !important;
}

.ghl-vip-nav-link:hover .link-arrow {
  color: #DDA83B !important;
  transform: translateX(4px) !important;
}

/* 6. Columna Derecha: Tarjeta Ejecutiva y Reserva */
.ghl-vip-menu-sidebar {
  background: linear-gradient(180deg, #181614 0%, #121110 50%, #0A0A0A 100%) !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 32px 28px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(221, 168, 59, 0.25) !important;
}

.sidebar-crown-tag {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.22em !important;
  color: #DDA83B !important;
  margin-bottom: 12px !important;
}

.sidebar-heading {
  font-size: 20px !important;
  font-weight: 800 !important;
  color: #FFFFFF !important;
  margin: 0 0 10px 0 !important;
  line-height: 1.2 !important;
}

.sidebar-desc {
  font-size: 12px !important;
  line-height: 1.6 !important;
  color: rgba(253, 251, 247, 0.7) !important;
  font-weight: 300 !important;
  margin-bottom: 24px !important;
}

.sidebar-contact-card {
  background: #0E0E0E !important;
  border: 1px solid rgba(221, 168, 59, 0.2) !important;
  border-radius: 2px !important;
  padding: 16px !important;
  margin-bottom: 24px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
}

.contact-row {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  font-size: 11px !important;
}

.contact-lbl {
  color: rgba(253, 251, 247, 0.5) !important;
}

.contact-val {
  color: #FFFFFF !important;
  font-weight: 600 !important;
  text-decoration: none !important;
}

.contact-val.gold {
  color: #DDA83B !important;
}

.sidebar-cta-btn {
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  text-decoration: none !important;
}

/* 7. Footer Inferior del Menú */
.ghl-vip-menu-footer {
  border-top: 1px solid rgba(221, 168, 59, 0.15) !important;
  padding-top: 18px !important;
  margin-top: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  font-size: 11px !important;
  color: rgba(253, 251, 247, 0.45) !important;
}

@media (min-width: 640px) {
  .ghl-vip-menu-footer {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
  }
}

.ghl-vip-menu-footer .footer-gold {
  color: #DDA83B !important;
}`;

  const menuPopupJsSnippet = `<script>
/**
 * ==========================================================================
 * VIP BRANDING - MOTOR JAVASCRIPT DEL MENÚ POPUP OVERLAY PARA GHL
 * Pega este script en: Page Settings -> Tracking Code -> Footer Tracking Code
 * (o adentro del mismo elemento Custom JS/HTML de GHL)
 * ==========================================================================
 */
(function() {
  function initGhlVipMenu() {
    const overlay = document.getElementById('ghl-vip-menu-overlay');
    const closeBtn = document.getElementById('ghl-vip-menu-close-btn');
    if (!overlay) return;

    // Detecta cualquier botón con la clase .btn-open-menu, .ghl-menu-trigger o enlace a #menu
    const triggerSelector = '.btn-open-menu, .ghl-menu-trigger, [data-trigger="menu"], a[href="#menu"]';
    const triggers = document.querySelectorAll(triggerSelector);

    function openMenu(e) {
      if (e) e.preventDefault();
      overlay.classList.add('is-open');
      document.body.classList.add('ghl-menu-locked');
      overlay.setAttribute('aria-hidden', 'false');
    }

    function closeMenu(e) {
      if (e) e.preventDefault();
      overlay.classList.remove('is-open');
      document.body.classList.remove('ghl-menu-locked');
      overlay.setAttribute('aria-hidden', 'true');
    }

    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', openMenu);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Cerrar al hacer clic en el fondo exterior
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeMenu();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Smooth Scroll y cierre automático al hacer clic en enlaces del menú
    const navLinks = overlay.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            closeMenu();
            setTimeout(function() {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 250);
          } else {
            closeMenu();
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGhlVipMenu);
  } else {
    initGhlVipMenu();
  }
})();
</script>`;

  const menuPopupNativeCssSnippet = `/* ==========================================================================
   OPCIÓN B: ESTILOS PARA POPUP NATIVO DE GHL CON LA CLASE "luxury-popup"
   Pega esto en: Page Settings -> Custom Code -> Custom CSS
   Convierte el popup predeterminado de GHL con clase "luxury-popup" en un modal VIP de oro
   ========================================================================== */

/* 1. Caja Principal del Modal (GHL asigna la clase .luxury-popup al contenedor o al modal-dialog) */
.luxury-popup,
.luxury-popup.modal-dialog,
.luxury-popup .modal-dialog,
.luxury-popup .modal-content,
.luxury-popup.modal-content,
#popup-container.luxury-popup,
#popup-container.luxury-popup .modal-content,
.preview-popup.luxury-popup,
.preview-popup.luxury-popup .modal-content,
div[id*="popup"].luxury-popup .modal-content,
/* Fallback genérico para cuando no se asigna clase o en vista previa */
.modal-dialog .modal-content,
#popup-container .modal-content,
.preview-popup .modal-content {
  background: #070707 !important;
  background-color: #070707 !important;
  border: 1px solid rgba(221, 168, 59, 0.45) !important;
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.95), 0 0 35px rgba(221, 168, 59, 0.18) !important;
  border-radius: 4px !important;
  color: #FDFBF7 !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  overflow: hidden !important;
}

/* 2. Limpieza de Fondos Blancos de GHL (secciones, filas y columnas adentro del popup) */
.luxury-popup .inner-container,
.luxury-popup .c-section,
.luxury-popup .c-row,
.luxury-popup .c-column,
.luxury-popup .c-column-inner,
.luxury-popup .modal-body,
.luxury-popup .modal-header,
.luxury-popup .modal-footer {
  background: transparent !important;
  background-color: transparent !important;
  border-color: rgba(221, 168, 59, 0.2) !important;
}

/* 3. Fondo Oscurecido con Desenfoque de Cine (Backdrop detrás del popup) */
.modal-backdrop,
.modal-backdrop.in,
.modal-backdrop.show,
.luxury-popup ~ .modal-backdrop {
  background-color: rgba(4, 4, 4, 0.94) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  opacity: 1 !important;
}

/* 4. Botón de Cerrar Nativo de GHL estilizado en Oro con giro en Hover */
.luxury-popup .close-popup,
.luxury-popup .modal-header .close,
.luxury-popup .popup-close,
.luxury-popup button.close,
.close-popup,
.modal-header .close,
.popup-close,
.modal-dialog button.close {
  color: #DDA83B !important;
  opacity: 0.9 !important;
  text-shadow: none !important;
  font-size: 28px !important;
  line-height: 1 !important;
  transition: all 0.25s ease !important;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  cursor: pointer !important;
  z-index: 9999 !important;
}

.luxury-popup .close-popup:hover,
.luxury-popup .modal-header .close:hover,
.luxury-popup .popup-close:hover,
.luxury-popup button.close:hover,
.close-popup:hover,
.modal-header .close:hover,
.popup-close:hover,
.modal-dialog button.close:hover {
  color: #FFFFFF !important;
  transform: rotate(90deg) scale(1.15) !important;
  opacity: 1 !important;
}

/* 5. Textos y Encabezados adentro del Popup (Fuente Fira Sans) */
.luxury-popup h1,
.luxury-popup h2,
.luxury-popup h3,
.luxury-popup h4,
.luxury-popup h5,
.luxury-popup h6 {
  font-family: 'Fira Sans', sans-serif !important;
  color: #FFFFFF !important;
}

.luxury-popup p,
.luxury-popup span,
.luxury-popup label {
  color: rgba(253, 251, 247, 0.85) !important;
}

.luxury-popup a {
  color: #DDA83B !important;
  transition: color 0.2s ease !important;
}

.luxury-popup a:hover {
  color: #FFFFFF !important;
}

/* 6. Inputs o Formularios si decides colocar campos en el popup */
.luxury-popup input,
.luxury-popup select,
.luxury-popup textarea {
  background: #141414 !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  color: #FFFFFF !important;
  border-radius: 2px !important;
}

.luxury-popup input:focus,
.luxury-popup select:focus,
.luxury-popup textarea:focus {
  border-color: #DDA83B !important;
  box-shadow: 0 0 10px rgba(221, 168, 59, 0.3) !important;
  outline: none !important;
}`;

  // ==========================================
  // BACKGROUND 1: HEARTBEAT FLARE SNIPPETS
  // ==========================================
  const heartbeatCssSnippet = `/* ==========================================================================
   BACKGROUND 1: FLARE PULSANTE CON LATIDO (HEARTBEAT FLARE)
   Pega esto en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Asigna esta clase a tu Sección en GoHighLevel */
.bg-flare-heartbeat,
.ghl-heartbeat-section {
  position: relative !important;
  overflow: hidden !important;
  background-color: #0B0B0B !important;
}

/* 2. Capa de resplandor / Flare radial con latido tenue y movimiento flotante */
.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.18) 0%, rgba(200, 149, 43, 0.06) 45%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: flareHeartbeatTenue 9s ease-in-out infinite;
  will-change: transform, opacity;
}

/* 3. Animación de latido tenue orgánico (crece lentamente y se mueve suavemente) */
@keyframes flareHeartbeatTenue {
  0% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
  22% {
    /* Primer pulso suave con leve deriva hacia arriba-izquierda */
    transform: translate(-52%, -51%) scale(1.03);
    opacity: 0.36;
  }
  38% {
    /* Pausa intermedia tenue */
    transform: translate(-51%, -50%) scale(0.98);
    opacity: 0.28;
  }
  52% {
    /* Segundo pulso suave con deriva hacia la derecha */
    transform: translate(-48%, -49%) scale(1.07);
    opacity: 0.40;
  }
  74% {
    /* Descenso gradual y relajación */
    transform: translate(-49%, -52%) scale(0.97);
    opacity: 0.25;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
}`;

  const heartbeatHtmlSnippet = `<!-- ==============================================================
     OPCIÓN RÁPIDA EN GHL: Elemento "Custom Code" (HTML/JS)
     Arrastra un elemento Custom JS/HTML dentro de tu Sección en GHL y pega:
     ============================================================== -->
<div class="heartbeat-flare-layer"></div>
<style>
.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.18) 0%, rgba(200, 149, 43, 0.06) 45%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: flareHeartbeatTenue 9s ease-in-out infinite;
}
@keyframes flareHeartbeatTenue {
  0% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
  22% {
    transform: translate(-52%, -51%) scale(1.03);
    opacity: 0.36;
  }
  38% {
    transform: translate(-51%, -50%) scale(0.98);
    opacity: 0.28;
  }
  52% {
    transform: translate(-48%, -49%) scale(1.07);
    opacity: 0.40;
  }
  74% {
    transform: translate(-49%, -52%) scale(0.97);
    opacity: 0.25;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
}
</style>`;

  // ==========================================
  // BACKGROUND 2: MOVING SPARKLES & STARS CANVAS SNIPPETS
  // ==========================================
  const sparklesJsSnippet = `<script>
/**
 * ==========================================================================
 * BACKGROUND 2: DESTELLOS MÓVILES & ESTRELLAS DORADAS (CANVAS ENGINE)
 * Pega esto en: Page Settings -> Tracking Code -> Footer Tracking Code
 * O en un elemento Custom Code dentro de la sección.
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".ghl-sparkles-bg, .bg-sparkles, [data-bg='sparkles']");
  
  sections.forEach(function (section) {
    if (section.querySelector(".ghl-sparkles-canvas")) return; // Evitar duplicar
    
    section.style.position = "relative";
    section.style.overflow = "hidden";
    
    const canvas = document.createElement("canvas");
    canvas.className = "ghl-sparkles-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    section.insertBefore(canvas, section.firstChild);
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let width = 0, height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function resize() {
      const rect = section.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);
    
    // Mouse coords relativos a la sección
    let mouse = { x: -1000, y: -1000, active: false };
    section.addEventListener("mousemove", function (e) {
      const rect = section.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    section.addEventListener("mouseleave", function () {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });
    
    // Generar destellos y estrellas
    const count = Math.max(30, Math.min(80, Math.floor(width * height * 0.000045)));
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const isStar = Math.random() > 0.65;
      const maxOpacity = Math.random() * 0.7 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isStar ? Math.random() * 3.2 + 2.0 : Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15), // Ascenso suave
        opacity: Math.random() * maxOpacity,
        maxOpacity: maxOpacity,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isStar: isStar,
        starRotation: Math.random() * Math.PI * 2,
        starRotSpeed: (Math.random() - 0.5) * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.008
      });
    }
    
    function drawStar(x, y, r, opacity, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Resplandor radial exterior
      const radialGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.8);
      radialGlow.addColorStop(0, "rgba(255, 243, 209, " + (opacity * 0.9) + ")");
      radialGlow.addColorStop(0.35, "rgba(221, 168, 59, " + (opacity * 0.6) + ")");
      radialGlow.addColorStop(1, "rgba(221, 168, 59, 0)");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.8, 0, Math.PI * 2);
      ctx.fill();
      
      // Estrella de 4 puntas de diamante
      ctx.fillStyle = "rgba(255, 255, 255, " + (opacity * 0.95) + ")";
      ctx.beginPath();
      const points = 4;
      const innerR = r * 0.28;
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? r * 1.6 : innerR;
        const angle = (i * Math.PI) / points;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    
    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      frame++;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.swayOffset += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayOffset) * 0.22;
        p.y += p.speedY;
        
        // Reposicionar al salir de la pantalla
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        
        // Titilar
        p.opacity += Math.sin(frame * p.pulseSpeed + p.swayOffset) * 0.015;
        p.opacity = Math.max(0.1, Math.min(p.maxOpacity, p.opacity));
        
        // Efecto imán / proximidad de cursor
        let effectiveOpacity = p.opacity;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            effectiveOpacity = Math.min(1, p.opacity + (1 - dist / 160) * 0.6);
            p.x -= (dx / dist) * 0.4;
            p.y -= (dy / dist) * 0.4;
          }
        }
        
        if (p.isStar) {
          p.starRotation += p.starRotSpeed;
          drawStar(p.x, p.y, p.size, effectiveOpacity, p.starRotation);
        } else {
          // Destello circular con halo dorado
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
          g.addColorStop(0, "rgba(255, 243, 209, " + (effectiveOpacity * 0.95) + ")");
          g.addColorStop(0.4, "rgba(221, 168, 59, " + (effectiveOpacity * 0.7) + ")");
          g.addColorStop(1, "rgba(221, 168, 59, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  });
});
</script>`;

  // ==========================================
  // 1. PURE VANILLA CSS FOR GOHIGHLEVEL (GHL)
  // ==========================================
  const ghlCssSnippet = `/* ==========================================================================
   VIP BRANDING EXPERIENCE - MASTER CSS FOR GOHIGHLEVEL (GHL)
   Add this entire code into: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. TYPOGRAPHY & GOLD GRADIENTS FOR HEADINGS */
/* Fuente oficial de encabezados: FIRA SANS */
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap');

h1, h2, h3, h4, h5, h6, .heading-fira, .font-serif-luxury, .ghl-heading {
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  letter-spacing: -0.01em;
}

.gold-gradient-text,
.text-gold-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: 700;
}

.text-gold-metallic {
  background: linear-gradient(135deg, #FFF8E7 0%, #FCE394 22%, #E5B842 50%, #C8952B 75%, #8B5C0F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 2. HIGH-IMPACT LUXURY GOLD BUTTONS */
.btn-gold-luxury {
  position: relative;
  background: linear-gradient(135deg, #FDE68A 0%, #E5B842 35%, #DDA83B 65%, #966817 100%) !important;
  color: #0B0B0B !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.18em !important;
  font-size: 11px !important;
  border-radius: 2px !important;
  padding: 14px 28px !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 0 10px 30px rgba(197, 168, 128, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.7) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  overflow: hidden !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  text-decoration: none !important;
}

/* Laser Shine Flare Sweep on Button Hover */
.btn-gold-luxury::before {
  content: '';
  position: absolute;
  top: 0;
  left: -120%;
  width: 80%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.85), transparent);
  transform: skewX(-25deg);
  transition: all 0.75s ease;
}

.btn-gold-luxury:hover::before {
  left: 140%;
}

.btn-gold-luxury:hover {
  transform: translateY(-2px) scale(1.02) !important;
  background: linear-gradient(135deg, #FFF0A8 0%, #F5CA58 35%, #E5B842 65%, #AA771C 100%) !important;
  box-shadow: 0 16px 40px rgba(197, 168, 128, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.9) !important;
  filter: brightness(1.08);
}

.btn-gold-luxury:active {
  transform: translateY(1px) scale(0.99) !important;
}

/* Secondary Gold-Outline Button */
.btn-gold-secondary {
  position: relative;
  background: #141414 !important;
  color: #DDA83B !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.16em !important;
  font-size: 11px !important;
  border-radius: 2px !important;
  padding: 13px 26px !important;
  border: 1px solid rgba(197, 168, 128, 0.45) !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;
  text-decoration: none !important;
}

.btn-gold-secondary:hover {
  border-color: #DDA83B !important;
  background: #1C1914 !important;
  color: #FFFFFF !important;
  box-shadow: 0 0 25px rgba(197, 168, 128, 0.25) !important;
}

/* 3. LUXURY CARDS & HOVER SHIMMER EFFECTS */
.luxury-card {
  position: relative;
  background: linear-gradient(180deg, #161616 0%, #101010 100%) !important;
  border: 1px solid rgba(197, 168, 128, 0.3) !important;
  border-radius: 2px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
  overflow: hidden;
}

.luxury-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(197, 168, 128, 0.8), transparent);
}

.luxury-card:hover {
  border-color: #DDA83B !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 25px 60px rgba(197, 168, 128, 0.18), 0 0 30px rgba(197, 168, 128, 0.1) !important;
}

/* 4. ANIMATED BACKGROUNDS (LATIDO & DESTELLOS) */
.bg-flare-heartbeat,
.ghl-heartbeat-section {
  position: relative !important;
  overflow: hidden !important;
}

.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.18) 0%, rgba(200, 149, 43, 0.06) 45%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: flareHeartbeatTenue 9s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes flareHeartbeatTenue {
  0% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
  22% {
    transform: translate(-52%, -51%) scale(1.03);
    opacity: 0.36;
  }
  38% {
    transform: translate(-51%, -50%) scale(0.98);
    opacity: 0.28;
  }
  52% {
    transform: translate(-48%, -49%) scale(1.07);
    opacity: 0.40;
  }
  74% {
    transform: translate(-49%, -52%) scale(0.97);
    opacity: 0.25;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.22;
  }
}

.ghl-sparkles-bg,
.bg-sparkles {
  position: relative !important;
  overflow: hidden !important;
}

.ghl-sparkles-bg::before,
.bg-sparkles::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.12) 0%, rgba(200, 149, 43, 0.03) 45%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* 5. PURE CSS PARALLAX ON SCROLL CLASSES */
.ghl-parallax,
.parallax-left,
.parallax-right,
.parallax-zoom,
.parallax-zoom-in,
.parallax-fade-zoom,
.parallax-hybrid-left,
.parallax-hybrid-right,
.parallax-3d-popout,
.ghl-parallax-left,
.ghl-parallax-right,
.ghl-parallax-zoom,
.ghl-parallax-fade-zoom,
.ghl-parallax-hybrid-left,
.ghl-parallax-hybrid-right,
.ghl-parallax-3d-popout {
  opacity: 0;
  will-change: transform, opacity;
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation: ghlParallaxFallbackShow 0.01s 2.5s forwards;
}

@keyframes ghlParallaxFallbackShow {
  to {
    opacity: 1;
  }
}

/* 1. PARALLAX DESDE LA IZQUIERDA */
.parallax-left,
.ghl-parallax-left,
.ghl-parallax[data-parallax="slide-left"] {
  transform: translateX(-120px) rotate(-3deg) scale(0.94);
}

/* 2. PARALLAX DESDE LA DERECHA */
.parallax-right,
.ghl-parallax-right,
.ghl-parallax[data-parallax="slide-right"] {
  transform: translateX(120px) rotate(3deg) scale(0.94);
}

/* 3. PARALLAX ZOOM */
.parallax-zoom,
.parallax-zoom-in,
.ghl-parallax-zoom,
.ghl-parallax[data-parallax="zoom-in"] {
  transform: scale(0.82) translateY(50px);
}

/* 4. PARALLAX FADE ZOOM */
.parallax-fade-zoom,
.ghl-parallax-fade-zoom,
.ghl-parallax[data-parallax="fade-zoom"] {
  transform: scale(0.88);
}

/* 5. PARALLAX HÍBRIDO IZQUIERDA */
.parallax-hybrid-left,
.ghl-parallax-hybrid-left,
.ghl-parallax[data-parallax="hybrid-left"] {
  transform: translateX(-140px) scale(0.8) rotate(-4deg);
}

/* 6. PARALLAX HÍBRIDO DERECHA */
.parallax-hybrid-right,
.ghl-parallax-hybrid-right,
.ghl-parallax[data-parallax="hybrid-right"] {
  transform: translateX(140px) scale(0.8) rotate(4deg);
}

/* 7. PARALLAX 3D POP-OUT (EFECTO CINE 3D) */
.parallax-3d-popout,
.ghl-parallax-3d-popout,
.ghl-parallax[data-parallax="3d-popout"] {
  transform: perspective(1000px) translateZ(-120px) scale(0.76) rotateX(14deg);
  opacity: 0.08;
}

/* Active In-View State */
.ghl-parallax.is-inview,
.parallax-left.is-inview,
.parallax-right.is-inview,
.parallax-zoom.is-inview,
.parallax-zoom-in.is-inview,
.parallax-fade-zoom.is-inview,
.parallax-hybrid-left.is-inview,
.parallax-hybrid-right.is-inview,
.parallax-3d-popout.is-inview,
.ghl-parallax-left.is-inview,
.ghl-parallax-right.is-inview,
.ghl-parallax-zoom.is-inview,
.ghl-parallax-fade-zoom.is-inview,
.ghl-parallax-hybrid-left.is-inview,
.ghl-parallax-hybrid-right.is-inview,
.ghl-parallax-3d-popout.is-inview {
  opacity: 1 !important;
  transform: perspective(1000px) translateZ(40px) scale(1.05) rotateX(0deg) translateY(0) rotate(0deg) !important;
}

/* 6. DYNAMIC HEADER SCROLL & BOTTOM TRANSPARENCY */
.ghl-custom-header,
.ghl-header,
.custom-header,
.luxury-header,
#ghl-custom-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.ghl-custom-header.header-top,
.ghl-header.header-top,
.custom-header.header-top,
.luxury-header.header-top,
#ghl-custom-header.header-top {
  background: linear-gradient(180deg, rgba(11, 11, 11, 0.9) 0%, rgba(11, 11, 11, 0.4) 60%, transparent 100%);
  border-bottom: 1px solid transparent;
  padding: 18px 0;
}

.ghl-custom-header.header-scrolled,
.ghl-header.header-scrolled,
.custom-header.header-scrolled,
.luxury-header.header-scrolled,
#ghl-custom-header.header-scrolled {
  background: rgba(11, 11, 11, 0.92) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.3) !important;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.9) !important;
  padding: 10px 0 !important;
}

.ghl-custom-header.header-at-bottom,
.ghl-header.header-at-bottom,
.custom-header.header-at-bottom,
.luxury-header.header-at-bottom,
#ghl-custom-header.header-at-bottom {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  opacity: 0.85;
}

/* 7. FULLSCREEN VIP NAV MENU POPUP & MODAL */
.ghl-vip-menu-overlay {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999999 !important;
  background-color: rgba(7, 7, 7, 0.96) !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s ease !important;
  overflow-y: auto !important;
  box-sizing: border-box !important;
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
  color: #FDFBF7 !important;
  padding: 85px 24px 40px 24px !important;
  display: flex !important;
  flex-direction: column !important;
}

.ghl-vip-menu-overlay.is-open {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

body.ghl-menu-locked {
  overflow: hidden !important;
  height: 100vh !important;
}

.ghl-vip-menu-close {
  position: fixed !important;
  top: 24px !important;
  right: 28px !important;
  z-index: 1000000 !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  background: rgba(22, 22, 22, 0.9) !important;
  border: 1px solid rgba(221, 168, 59, 0.45) !important;
  color: #DDA83B !important;
  padding: 8px 18px !important;
  border-radius: 2px !important;
  cursor: pointer !important;
  font-family: 'Fira Sans', sans-serif !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  transition: all 0.25s ease !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6) !important;
}

.ghl-vip-menu-close:hover {
  background: #1C1814 !important;
  border-color: #DDA83B !important;
  color: #FFFFFF !important;
  transform: scale(1.04) !important;
}

.ghl-vip-menu-container {
  max-width: 1240px !important;
  width: 100% !important;
  margin: auto !important;
  display: flex !important;
  flex-direction: column !important;
}

.ghl-vip-menu-grid {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 40px !important;
  margin-bottom: 30px !important;
}

@media (min-width: 992px) {
  .ghl-vip-menu-grid {
    grid-template-columns: 7fr 5fr !important;
    gap: 48px !important;
  }
}

.ghl-vip-nav-list {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
}

.ghl-vip-nav-link {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 10px 14px !important;
  background: transparent !important;
  border: 1px solid transparent !important;
  border-radius: 2px !important;
  text-decoration: none !important;
  transition: all 0.25s ease !important;
  cursor: pointer !important;
}

.ghl-vip-nav-link:hover {
  background: rgba(22, 22, 22, 0.85) !important;
  border-color: rgba(221, 168, 59, 0.35) !important;
  transform: translateX(6px) !important;
}

.ghl-vip-nav-link .link-num {
  font-size: 14px !important;
  font-weight: 700 !important;
  color: rgba(221, 168, 59, 0.65) !important;
  margin-right: 16px !important;
}

.ghl-vip-nav-link .link-title {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
}

.ghl-vip-nav-link:hover .link-title {
  color: #DDA83B !important;
}

.ghl-vip-nav-link .link-sub {
  font-size: 11px !important;
  color: rgba(253, 251, 247, 0.45) !important;
}

.ghl-vip-menu-sidebar {
  background: linear-gradient(180deg, #181614 0%, #121110 50%, #0A0A0A 100%) !important;
  border: 1px solid rgba(221, 168, 59, 0.35) !important;
  border-radius: 2px !important;
  padding: 32px 28px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}

/* 8. NATIVE GHL POPUP CON CLASE "luxury-popup" (OPCIÓN B) */
.luxury-popup,
.luxury-popup.modal-dialog,
.luxury-popup .modal-dialog,
.luxury-popup .modal-content,
.luxury-popup.modal-content,
#popup-container.luxury-popup,
#popup-container.luxury-popup .modal-content,
.preview-popup.luxury-popup,
.preview-popup.luxury-popup .modal-content,
div[id*="popup"].luxury-popup .modal-content {
  background: #070707 !important;
  background-color: #070707 !important;
  border: 1px solid rgba(221, 168, 59, 0.45) !important;
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.95), 0 0 35px rgba(221, 168, 59, 0.18) !important;
  border-radius: 4px !important;
  color: #FDFBF7 !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  overflow: hidden !important;
}

.luxury-popup .inner-container,
.luxury-popup .c-section,
.luxury-popup .c-row,
.luxury-popup .c-column,
.luxury-popup .c-column-inner,
.luxury-popup .modal-body,
.luxury-popup .modal-header,
.luxury-popup .modal-footer {
  background: transparent !important;
  background-color: transparent !important;
  border-color: rgba(221, 168, 59, 0.2) !important;
}

.luxury-popup ~ .modal-backdrop,
.luxury-popup .modal-backdrop {
  background-color: rgba(4, 4, 4, 0.94) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  opacity: 1 !important;
}

.luxury-popup .close-popup,
.luxury-popup .modal-header .close,
.luxury-popup .popup-close,
.luxury-popup button.close {
  color: #DDA83B !important;
  opacity: 0.9 !important;
  font-size: 28px !important;
  transition: all 0.25s ease !important;
}

.luxury-popup .close-popup:hover,
.luxury-popup .modal-header .close:hover,
.luxury-popup .popup-close:hover,
.luxury-popup button.close:hover {
  color: #FFFFFF !important;
  transform: rotate(90deg) scale(1.15) !important;
}

.luxury-popup h1, .luxury-popup h2, .luxury-popup h3, .luxury-popup h4 {
  font-family: 'Fira Sans', sans-serif !important;
  color: #FFFFFF !important;
}

.luxury-popup p, .luxury-popup span {
  color: rgba(253, 251, 247, 0.85) !important;
}`;

  // ==========================================
  // 2. PURE VANILLA JAVASCRIPT FOR GOHIGHLEVEL
  // ==========================================
  const ghlJsSnippet = `<script>
/**
 * ==========================================================================
 * VIP BRANDING EXPERIENCE - PURE JS SCROLL, MOTION & SPARKLE ENGINE FOR GHL
 * Add this script into: Page Settings -> Tracking Code -> Footer Tracking Code
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", function () {
  
  // -------------------------------------------------------------
  // 1. DYNAMIC HEADER SCROLL & END-OF-PAGE TRANSPARENCY DETECTOR
  // -------------------------------------------------------------
  const header = document.querySelector(".ghl-custom-header, .ghl-header, .custom-header, .luxury-header, #ghl-custom-header, header");

  function handleHeaderScroll() {
    if (!header) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    // Check if user has reached the bottom 100px of the page
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 100);

    if (isAtBottom) {
      header.classList.remove("header-scrolled", "header-top");
      header.classList.add("header-at-bottom");
    } else if (scrollTop > 30) {
      header.classList.remove("header-top", "header-at-bottom");
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled", "header-at-bottom");
      header.classList.add("header-top");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on init

  // -------------------------------------------------------------
  // 2. PARALLAX ON SCROLL ENGINE (TRIPLE-REDUNDANCY FOR GHL)
  // -------------------------------------------------------------
  const parallaxSelector = [
    ".ghl-parallax",
    ".parallax-left",
    ".parallax-right",
    ".parallax-zoom",
    ".parallax-zoom-in",
    ".parallax-fade-zoom",
    ".parallax-hybrid-left",
    ".parallax-hybrid-right",
    ".parallax-3d-popout",
    ".ghl-parallax-left",
    ".ghl-parallax-right",
    ".ghl-parallax-zoom",
    ".ghl-parallax-fade-zoom",
    ".ghl-parallax-hybrid-left",
    ".ghl-parallax-hybrid-right",
    ".ghl-parallax-3d-popout",
    "[data-parallax]"
  ].join(", ");

  function checkParallaxElements() {
    const parallaxElements = document.querySelectorAll(parallaxSelector);
    const triggerBottom = window.innerHeight * 0.92;
    parallaxElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerBottom && rect.bottom >= 0) {
        el.classList.add("is-inview");
      }
    });
  }

  const parallaxElements = document.querySelectorAll(parallaxSelector);

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: [0.001, 0.1]
    };

    const parallaxObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          entry.target.classList.add("is-inview");
        }
      });
    }, observerOptions);

    parallaxElements.forEach(function (el) {
      parallaxObserver.observe(el);
    });
  }

  // Run on scroll and load as foolproof fallback for GHL
  window.addEventListener("scroll", checkParallaxElements, { passive: true });
  window.addEventListener("resize", checkParallaxElements, { passive: true });
  setTimeout(checkParallaxElements, 100);
  setTimeout(checkParallaxElements, 500);

  // -------------------------------------------------------------
  // 3. AUTO FLOATING SPARKLES CANVAS FOR SECTIONS
  // -------------------------------------------------------------
  const sparkleContainers = document.querySelectorAll(".ghl-sparkles-bg, .bg-sparkles, [data-bg='sparkles']");
  sparkleContainers.forEach(function (sec) {
    if (sec.querySelector(".ghl-sparkles-canvas")) return;
    
    sec.style.position = "relative";
    sec.style.overflow = "hidden";
    
    const canvas = document.createElement("canvas");
    canvas.className = "ghl-sparkles-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";
    canvas.style.mixBlendMode = "screen";
    sec.insertBefore(canvas, sec.firstChild);
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function resize() {
      const rect = sec.getBoundingClientRect();
      w = rect.width || sec.offsetWidth || window.innerWidth;
      h = rect.height || sec.offsetHeight || 600;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);
    setTimeout(resize, 100);
    setTimeout(resize, 500);
    setTimeout(resize, 1500);
    
    let mouse = { x: -1000, y: -1000, active: false };
    sec.addEventListener("mousemove", function (e) {
      const rect = sec.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    sec.addEventListener("mouseleave", function () {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });
    
    const count = Math.max(25, Math.min(75, Math.floor(w * h * 0.000045)));
    const pts = [];
    for (let i = 0; i < count; i++) {
      const isStar = Math.random() > 0.65;
      const maxOp = Math.random() * 0.7 + 0.25;
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: isStar ? Math.random() * 3.2 + 2.0 : Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15),
        opacity: Math.random() * maxOp,
        maxOp: maxOp,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isStar: isStar,
        rot: Math.random() * Math.PI * 2,
        rotSpd: (Math.random() - 0.5) * 0.02,
        sway: Math.random() * Math.PI * 2,
        swaySpd: Math.random() * 0.02 + 0.008
      });
    }
    
    function drawStar(x, y, r, opacity, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.8);
      g.addColorStop(0, "rgba(255, 243, 209, " + (opacity * 0.9) + ")");
      g.addColorStop(0.35, "rgba(221, 168, 59, " + (opacity * 0.6) + ")");
      g.addColorStop(1, "rgba(221, 168, 59, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = "rgba(255, 255, 255, " + (opacity * 0.95) + ")";
      ctx.beginPath();
      const ptsCount = 4;
      const innerR = r * 0.28;
      for (let i = 0; i < ptsCount * 2; i++) {
        const radius = i % 2 === 0 ? r * 1.6 : innerR;
        const angle = (i * Math.PI) / ptsCount;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    
    let f = 0;
    function loop() {
      ctx.clearRect(0, 0, w, h);
      f++;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.sway += p.swaySpd;
        p.x += p.speedX + Math.sin(p.sway) * 0.22;
        p.y += p.speedY;
        if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        
        p.opacity += Math.sin(f * p.pulseSpeed + p.sway) * 0.015;
        p.opacity = Math.max(0.1, Math.min(p.maxOp, p.opacity));
        
        let op = p.opacity;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            op = Math.min(1, p.opacity + (1 - dist / 160) * 0.6);
            p.x -= (dx / dist) * 0.4;
            p.y -= (dy / dist) * 0.4;
          }
        }
        
        if (p.isStar) {
          p.rot += p.rotSpd;
          drawStar(p.x, p.y, p.size, op, p.rot);
        } else {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
          g.addColorStop(0, "rgba(255, 243, 209, " + (op * 0.95) + ")");
          g.addColorStop(0.4, "rgba(221, 168, 59, " + (op * 0.7) + ")");
          g.addColorStop(1, "rgba(221, 168, 59, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    }
    loop();
  });

  // -------------------------------------------------------------
  // 4. VIP MENU POPUP OVERLAY CONTROLLER
  // -------------------------------------------------------------
  const menuOverlay = document.getElementById("ghl-vip-menu-overlay");
  const menuCloseBtn = document.getElementById("ghl-vip-menu-close-btn");

  if (menuOverlay) {
    const triggers = document.querySelectorAll(".btn-open-menu, .ghl-menu-trigger, [data-trigger='menu'], a[href='#menu']");

    function openVipMenu(e) {
      if (e) e.preventDefault();
      menuOverlay.classList.add("is-open");
      document.body.classList.add("ghl-menu-locked");
      menuOverlay.setAttribute("aria-hidden", "false");
    }

    function closeVipMenu(e) {
      if (e) e.preventDefault();
      menuOverlay.classList.remove("is-open");
      document.body.classList.remove("ghl-menu-locked");
      menuOverlay.setAttribute("aria-hidden", "true");
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", openVipMenu);
    });

    if (menuCloseBtn) {
      menuCloseBtn.addEventListener("click", closeVipMenu);
    }

    menuOverlay.addEventListener("click", function (e) {
      if (e.target === menuOverlay) {
        closeVipMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuOverlay.classList.contains("is-open")) {
        closeVipMenu();
      }
    });

    const menuLinks = menuOverlay.querySelectorAll("a[href^='#']");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            closeVipMenu();
            setTimeout(function () {
              targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 250);
          } else {
            closeVipMenu();
          }
        }
      });
    });
  }

  console.log("VIP Branding Experience Motion & Sparkles Engine Initialized for GHL.");
});
</script>`;

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#0A0A0A] text-[#FDFBF7]">
      {/* Top Banner Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#1C1813] via-[#141414] to-[#101010] border border-[#DDA83B]/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/15 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>GoHighLevel (GHL) Master Integration Kit</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white font-serif">
              Animations, Backgrounds &amp; Motion Architecture
            </h1>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/75 font-light mt-1 max-w-2xl">
              Construye tus páginas en GoHighLevel con el constructor visual y añade estos fondos (latido y destellos móviles), parallax on scroll, encabezados dinámicos y estilos dorados premium con CSS y JavaScript.
            </p>
          </div>

          <button
            onClick={onBackToOfficial}
            className="btn-gold-luxury px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Back to Official Web</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Selector Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-sm bg-[#141414] border border-[#DDA83B]/30 shadow-lg">
          <button
            onClick={() => setActiveCodeTab('menu')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'menu'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Menu className="w-4 h-4" />
            <span>1. Menú Pop-Up Overlay GHL</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('sections')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'sections'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutTemplate className="w-4 h-4" />
            <span>2. CSS Sección por Sección (Header + Hero)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('palette')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'palette'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>3. Paleta de Colores &amp; Gradientes H1</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('backgrounds')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'backgrounds'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>4. Background FX (Latido &amp; Destellos)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('css')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'css'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>5. Master CSS (GHL Code)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('js')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'js'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>6. Footer Tracking JS (GHL Engine)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('guide')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'guide'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>7. Guía Paso a Paso GHL</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('demo')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'demo'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>8. Live Parallax &amp; UI Demo</span>
          </button>
        </div>

        {/* ========================================================
            TAB: POP-UP MENÚ OVERLAY GHL
            ======================================================== */}
        {activeCodeTab === 'menu' && (
          <div className="space-y-10">
            {/* Intro Banner */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <Menu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">Componente de Navegación VIP</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    Cómo implementar el Menú Pop-Up Overlay con un Botón en GoHighLevel
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light max-w-3xl leading-relaxed">
                El menú de este proyecto no es un menú desplegable común: es una <strong>experiencia inmersiva a pantalla completa (Fullscreen Overlay Modal)</strong> con fondo obsidiana profundo, efecto de desenfoque de cine (<code className="text-[#DDA83B]">backdrop-filter: blur(25px)</code>), tipografía oficial <strong>Fira Sans</strong>, directorio interactivo con números VIP (<code className="text-[#DDA83B]">01 - 08</code>) y tarjeta corporativa directa de Rey Perez con llamadas y admisiones.
              </p>
            </div>

            {/* LIVE SANDBOX / TEST BUTTON */}
            <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-br from-[#1A1612] via-[#121110] to-[#0A0A0A] border border-[#DDA83B]/60 shadow-[0_0_30px_rgba(221,168,59,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Live Sandbox</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-1">
                  Prueba el Pop-Up del Menú en Vivo
                </h3>
                <p className="text-xs text-[#A8A095] font-light max-w-xl leading-relaxed">
                  Haz clic en el botón para abrir el pop-up exactamente como se verá y comportará cuando un visitante haga clic en el botón de tu página en GoHighLevel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setTestMenuOpen(true)}
                  className="btn-gold-luxury px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-105 transition-all"
                >
                  <Menu className="w-4 h-4" />
                  <span>Probar Opción A (Fullscreen)</span>
                </button>

                <button
                  onClick={() => setTestNativePopupOpen(true)}
                  className="px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-[#DDA83B] border border-[#DDA83B]/50 bg-[#161412] hover:bg-[#DDA83B]/15 hover:border-[#DDA83B] inline-flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <Layers className="w-4 h-4" />
                  <span>Probar Opción B (.luxury-popup)</span>
                </button>
              </div>
            </div>

            {/* STEP BY STEP: HOW TO APPLY WITH A GHL BUTTON */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
                <HelpCircle className="w-5 h-5 text-[#DDA83B]" />
                <h3 className="text-lg font-bold text-white font-serif">
                  Guía Paso a Paso: Cómo enlazar tu Botón en el constructor de GHL
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-sm bg-[#090909] border border-[#222]">
                  <span className="w-7 h-7 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-3">1</span>
                  <h4 className="text-sm font-bold text-white mb-2">Crea tu Botón en GHL</h4>
                  <p className="text-xs text-[#A8A095] leading-relaxed">
                    Arrastra un elemento <strong>Button</strong> en tu Header o donde quieras abrir el menú (puede decir "MENU", tener un icono de hamburguesa o ser el botón que prefieras).
                  </p>
                </div>

                <div className="p-5 rounded-sm bg-[#090909] border border-[#222]">
                  <span className="w-7 h-7 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-3">2</span>
                  <h4 className="text-sm font-bold text-white mb-2">Asigna la Clase CSS</h4>
                  <p className="text-xs text-[#A8A095] leading-relaxed">
                    Con el botón seleccionado, ve a la pestaña <strong>Advanced</strong> en la barra lateral derecha. En el campo <strong>Custom Class</strong>, escribe:
                  </p>
                  <div className="mt-2 flex items-center justify-between p-2 rounded bg-[#161616] border border-[#DDA83B]/30">
                    <code className="text-xs font-mono text-[#DDA83B] font-bold">btn-open-menu</code>
                    <button
                      onClick={() => handleCopy('btn-open-menu', 'c-btnmenu')}
                      className="text-[10px] text-[#A8A095] hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copied === 'c-btnmenu' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied === 'c-btnmenu' ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                  <span className="text-[10px] text-[#A8A095]/70 block mt-1.5">O pon en el link del botón: <code className="text-[#DDA83B]">#menu</code></span>
                </div>

                <div className="p-5 rounded-sm bg-[#090909] border border-[#222]">
                  <span className="w-7 h-7 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-3">3</span>
                  <h4 className="text-sm font-bold text-white mb-2">Agrega el Elemento Custom Code</h4>
                  <p className="text-xs text-[#A8A095] leading-relaxed">
                    Arrastra un elemento <strong>Custom JS/HTML</strong> en tu página (puede ir al final del footer o dentro del header) y pega el bloque <strong>HTML del Menú</strong> que tienes abajo.
                  </p>
                </div>
              </div>
            </div>

            {/* CODE VIEWER WITH SUB-TABS */}
            <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
              <div className="p-4 sm:p-6 bg-[#161616] border-b border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setMenuSnippetSubTab('html')}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      menuSnippetSubTab === 'html'
                        ? 'bg-gold-gradient text-black shadow-md'
                        : 'bg-[#202020] text-[#A8A095] hover:text-white'
                    }`}
                  >
                    1. HTML del Menú (Custom JS/HTML)
                  </button>

                  <button
                    onClick={() => setMenuSnippetSubTab('css')}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      menuSnippetSubTab === 'css'
                        ? 'bg-gold-gradient text-black shadow-md'
                        : 'bg-[#202020] text-[#A8A095] hover:text-white'
                    }`}
                  >
                    2. CSS del Menú (Custom CSS)
                  </button>

                  <button
                    onClick={() => setMenuSnippetSubTab('js')}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      menuSnippetSubTab === 'js'
                        ? 'bg-gold-gradient text-black shadow-md'
                        : 'bg-[#202020] text-[#A8A095] hover:text-white'
                    }`}
                  >
                    3. JS Motor (Footer Tracking)
                  </button>

                  <button
                    onClick={() => setMenuSnippetSubTab('native')}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      menuSnippetSubTab === 'native'
                        ? 'bg-gold-gradient text-black shadow-md'
                        : 'bg-[#202020] text-[#A8A095] hover:text-white'
                    }`}
                  >
                    Opción B: CSS Popup Nativo GHL
                  </button>
                </div>

                <button
                  onClick={() => {
                    const text =
                      menuSnippetSubTab === 'html'
                        ? menuPopupHtmlSnippet
                        : menuSnippetSubTab === 'css'
                        ? menuPopupCssSnippet
                        : menuSnippetSubTab === 'js'
                        ? menuPopupJsSnippet
                        : menuPopupNativeCssSnippet;
                    handleCopy(text, `menu-sub-${menuSnippetSubTab}`);
                  }}
                  className="btn-gold-luxury px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md self-end sm:self-auto"
                >
                  {copied === `menu-sub-${menuSnippetSubTab}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === `menu-sub-${menuSnippetSubTab}` ? '¡Código Copiado!' : 'Copiar Este Código'}</span>
                </button>
              </div>

              {/* Code Pre container */}
              <div className="p-4 bg-[#080808]">
                <div className="text-[11px] text-[#A8A095] mb-2 px-2 flex items-center justify-between">
                  <span>
                    {menuSnippetSubTab === 'html' && 'Pega esto dentro de un elemento Custom JS/HTML de GHL:'}
                    {menuSnippetSubTab === 'css' && 'Pega esto en Page Settings -> Custom Code -> Custom CSS:'}
                    {menuSnippetSubTab === 'js' && 'Pega esto en Page Settings -> Tracking Code -> Footer Tracking Code:'}
                    {menuSnippetSubTab === 'native' && 'Si usas el popup del constructor de GHL, pega esto en Custom CSS:'}
                  </span>
                  <span className="font-mono text-[#DDA83B] text-[10px]">Select All / Auto-Selectable</span>
                </div>

                <pre className="overflow-x-auto p-4 bg-[#0A0A0A] border border-[#1E1E1E] rounded-sm text-xs font-mono text-[#DDA83B] leading-relaxed max-h-[550px] select-all">
                  <code>
                    {menuSnippetSubTab === 'html' && menuPopupHtmlSnippet}
                    {menuSnippetSubTab === 'css' && menuPopupCssSnippet}
                    {menuSnippetSubTab === 'js' && menuPopupJsSnippet}
                    {menuSnippetSubTab === 'native' && menuPopupNativeCssSnippet}
                  </code>
                </pre>
              </div>
            </div>

            {/* Comparison Cards: Opción A vs Opción B */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-sm bg-[#121212] border border-[#DDA83B]/40 shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B] block mb-1">
                  Método Recomendado (Más Fácil y Más Lujoso)
                </span>
                <h4 className="text-base font-bold text-white font-serif mb-2">
                  Opción A: Fullscreen Overlay HTML/CSS/JS (Control Total)
                </h4>
                <p className="text-xs text-[#A8A095] font-light leading-relaxed mb-4">
                  Es la que usamos en este proyecto. Te da control milimétrico sobre el diseño: desenfoque <code className="text-[#DDA83B]">backdrop-filter</code> de alta gama, dos columnas perfectamente divididas, enlaces con números VIP elegantes, scroll automático fluido al ID de la sección y cierre al pulsar ESC o la 'X'.
                </p>
                <div className="text-[11px] text-[#DDA83B] bg-[#DDA83B]/10 p-3 rounded-sm border border-[#DDA83B]/20">
                  ✔ <strong>¿Cómo se hace?</strong> Solo creas un botón en GHL con la clase <code className="font-mono text-white">btn-open-menu</code> y pegas el bloque de HTML una sola vez. No tienes que diseñar nada adentro del editor.
                </div>
              </div>

              <div className="p-6 rounded-sm bg-[#121212] border border-[#2D2D2D] shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#A8A095] block mb-1">
                  Método Alternativo (Constructor Visual)
                </span>
                <h4 className="text-base font-bold text-white font-serif mb-2">
                  Opción B: Popup Nativo del Constructor de GHL
                </h4>
                <p className="text-xs text-[#A8A095] font-light leading-relaxed mb-4">
                  Si prefieres usar la función "Popup" que viene arriba en el editor de GoHighLevel y armar las columnas con el builder visual, puedes configurar el botón para "Open Popup" y luego usar los estilos de la pestaña <strong>Opción B</strong> para transformar la caja blanca en un contenedor obsidian negro con halo dorado.
                </p>
                <div className="text-[11px] text-[#A8A095] bg-[#181818] p-3 rounded-sm border border-[#2D2D2D]">
                  ✔ <strong>¿Lleva clase?</strong> Puedes ponerle la clase <code className="font-mono text-[#DDA83B]">luxury-popup</code> en la pestaña Advanced del Popup en GHL, pero el CSS ya lo detecta automáticamente sin necesidad obligatoria de clase.
                </div>
              </div>
            </div>

            {/* Quick Decision Guide & Clarification */}
            <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#171410] to-[#0E0E0E] border border-[#DDA83B]/50 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  ¿Cuál es la manera IDEAL de implementarlo? Orientación Clara:
                </h3>
              </div>

              <div className="space-y-3 text-xs text-[#A8A095] leading-relaxed">
                <p>
                  <strong className="text-white text-sm">💡 Respuesta Directa:</strong> La manera <strong>MÁS SENCILLA Y CON MEJOR RESULTADO</strong> es la <span className="text-[#DDA83B] font-bold">Opción A</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                    <span className="text-[#DDA83B] font-bold block mb-1">¿Por qué la Opción A es la ideal?</span>
                    <p className="text-[11px]">
                      Porque el popup nativo de GHL es una cajita flotante de formulario pequeña y centrada que cuesta mucho forzar a ocupar el 100% de la pantalla sin deformarse en móviles. En cambio, con la <strong>Opción A</strong>, el menú ya viene 100% programado con el diseño idéntico al de esta web, responsivo para móvil y desktop, con los 8 enlaces y el teléfono listos.
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                    <span className="text-white font-bold block mb-1">Si de verdad quieres usar la Opción B (Popup Nativo):</span>
                    <p className="text-[11px]">
                      1. En el editor de GHL haz clic en <strong>Popup</strong> (arriba al centro).<br />
                      2. En la barra derecha ve a <strong>Advanced</strong> y en <em>Custom Class</em> escribe: <code className="text-[#DDA83B]">luxury-popup</code>.<br />
                      3. En tu botón de GHL, en <em>Button Actions</em> elige: <strong>Open Popup</strong>.<br />
                      4. Pega el CSS de la sub-pestaña <em>Opción B</em> en Custom CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: CSS SECCIÓN POR SECCIÓN & HEADER-HERO INTEGRATION
            ======================================================== */}
        {activeCodeTab === 'sections' && (
          <div className="space-y-10">
            {/* Intro Header */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">
                    Arquitectura GoHighLevel · Sección por Sección
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    Códigos CSS y Configuración para Cada Sección de la Web
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light max-w-3xl leading-relaxed">
                Aquí tienes la guía definitiva y los bloques CSS independientes para cada sección de la landing page. En lugar de lidiar con un archivo gigante, selecciona la sección que estés construyendo en GoHighLevel para ver <strong>qué elementos arrastrar, qué clase ponerle y el CSS exacto listo para copiar</strong>.
              </p>
            </div>

            {/* SECTIONS SELECTOR CAROUSEL / PILLS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#DDA83B] flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Selecciona una Sección para ver su CSS y Configuración:</span>
                </span>
                <span className="text-[11px] text-[#A8A095]">
                  {sectionsTutorialData.length} Secciones Disponibles
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {sectionsTutorialData.map((sec) => {
                  const isSelected = selectedSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setSelectedSectionId(sec.id)}
                      className={`p-3 rounded-sm border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1C1812] border-[#DDA83B] shadow-[0_0_15px_rgba(221,168,59,0.25)]'
                          : 'bg-[#121212] border-[#262626] hover:border-[#DDA83B]/40 hover:bg-[#161616]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#DDA83B]' : 'text-gray-500'}`}>
                          {sec.number}
                        </span>
                        {sec.hasFlare ? (
                          <span className="text-[9px] font-mono font-black text-[#DDA83B] bg-[#DDA83B]/15 px-1.5 py-0.5 rounded-sm border border-[#DDA83B]/35">
                            ✦ FLARE
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono text-gray-500 bg-[#181818] px-1.5 py-0.5 rounded-sm border border-[#2A2A2A]">
                            SIN FLARE
                          </span>
                        )}
                      </div>
                      <span className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-white' : 'text-[#C5BFB5]'}`}>
                        {sec.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE SECTION DETAIL VIEW */}
            {(() => {
              const currentSec = sectionsTutorialData.find((s) => s.id === selectedSectionId) || sectionsTutorialData[0];
              return (
                <div className="space-y-8">
                  {/* Section Title & Class Header */}
                  <div className="p-6 rounded-sm bg-gradient-to-r from-[#171410] via-[#121110] to-[#0D0D0D] border border-[#DDA83B]/45 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] font-mono text-[10px] font-bold">
                          SECCIÓN {currentSec.number}
                        </span>
                        <span className="text-xs text-[#DDA83B] font-semibold">
                          {currentSec.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                        {currentSec.title}
                      </h3>
                      <p className="text-xs text-[#A8A095] mt-1.5 max-w-2xl leading-relaxed">
                        {currentSec.summary}
                      </p>
                    </div>

                    <div className="bg-[#090909] border border-[#333] p-3 rounded-sm flex flex-col items-start gap-1 shrink-0">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                        Clase CSS en GHL (Advanced -&gt; Custom Class):
                      </span>
                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono font-bold text-[#DDA83B] bg-black/60 px-2 py-1 rounded-sm border border-[#DDA83B]/30">
                          {currentSec.ghlClass}
                        </code>
                        <button
                          onClick={() => handleCopy(currentSec.ghlClass, `class-${currentSec.id}`)}
                          className="p-1 rounded-sm text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
                          title="Copiar Clase"
                        >
                          {copied === `class-${currentSec.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ESPECIFICACIÓN EXPLÍCITA DE FLARE & LUZ AMBIENTAL */}
                  <div className={`p-4 sm:p-5 rounded-sm border flex items-start gap-3.5 shadow-lg ${
                    currentSec.hasFlare 
                      ? 'bg-gradient-to-r from-[#1A160F] to-[#12110E] border-[#DDA83B]/60' 
                      : 'bg-[#121212] border-[#2A2A2A]'
                  }`}>
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5 ${
                      currentSec.hasFlare ? 'bg-[#DDA83B]/25 text-[#DDA83B]' : 'bg-gray-800 text-gray-400'
                    }`}>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase font-black tracking-widest text-[#DDA83B]">
                          ESPECIFICACIÓN DE FLARE &amp; LUZ AMBIENTAL:
                        </span>
                        <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-black uppercase tracking-wider ${
                          currentSec.hasFlare ? 'bg-[#DDA83B] text-black shadow-sm' : 'bg-gray-800 text-gray-400'
                        }`}>
                          {currentSec.hasFlare ? 'SÍ, ESTA SECCIÓN LLEVA FLARE' : 'NO LLEVA FLARE'}
                        </span>
                      </div>
                      <p className="text-xs text-[#E6E1D8] leading-relaxed">
                        {currentSec.flareDetails}
                      </p>
                    </div>
                  </div>

                  {/* SPECIAL INTERACTIVE SIMULATOR FOR HEADER & HERO (SECTION 01) */}
                  {currentSec.id === 'header-hero' && (
                    <div className="p-6 sm:p-8 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/50 shadow-[0_0_40px_rgba(221,168,59,0.12)] space-y-6">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[#222]">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/15 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Simulador Interactivo de Scroll</span>
                          </div>
                          <h4 className="text-lg font-bold text-white font-serif">
                            Prueba cómo el Header se integra al Hero al hacer Scroll
                          </h4>
                          <p className="text-xs text-[#A8A095] max-w-xl">
                            Mueve el deslizador para simular la posición de la pantalla del usuario. Observa cómo al estar en el tope (0px), la imagen del Jet Privado pasa a través del header transparente sin cortes. Al bajar (&gt;30px), se vuelve negro sólido con desenfoque.
                          </p>
                        </div>

                        {/* Interactive Controls */}
                        <div className="bg-[#141414] p-4 rounded-sm border border-[#2a2a2a] flex flex-col gap-3 min-w-[280px]">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#A8A095] font-bold">Scroll Simulado:</span>
                            <span className="font-mono text-[#DDA83B] font-bold">{simulatedScroll} px</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="140"
                            step="5"
                            value={simulatedScroll}
                            onChange={(e) => setSimulatedScroll(Number(e.target.value))}
                            className="w-full accent-[#DDA83B] cursor-pointer"
                          />
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSimulatedScroll(0)}
                              className={`flex-1 py-1 px-2 text-[10px] uppercase font-bold rounded-sm border transition-all cursor-pointer ${
                                simulatedScroll === 0
                                  ? 'bg-[#DDA83B] text-black border-[#DDA83B]'
                                  : 'bg-[#0B0B0B] text-gray-300 border-[#333] hover:border-gray-500'
                              }`}
                            >
                              Top (0px - Transparente)
                            </button>
                            <button
                              onClick={() => setSimulatedScroll(90)}
                              className={`flex-1 py-1 px-2 text-[10px] uppercase font-bold rounded-sm border transition-all cursor-pointer ${
                                simulatedScroll > 30
                                  ? 'bg-[#DDA83B] text-black border-[#DDA83B]'
                                  : 'bg-[#0B0B0B] text-gray-300 border-[#333] hover:border-gray-500'
                              }`}
                            >
                              Bajar (90px - Barra Sticky)
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* VIRTUAL BROWSER FRAME */}
                      <div className="rounded-sm border border-[#333] overflow-hidden bg-black shadow-2xl">
                        {/* Browser Top Window Bar */}
                        <div className="bg-[#171717] px-4 py-2 border-b border-[#262626] flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="bg-[#0A0A0A] px-4 py-0.5 rounded-sm text-[11px] text-gray-400 font-mono border border-[#222]">
                            https://tu-pagina-ghl.com/vip-branding
                          </div>
                          <div className="text-[10px] font-mono text-[#DDA83B]">
                            {simulatedScroll <= 30 ? 'HEADER INTEGRADO (0px)' : 'STICKY BLUR (>30px)'}
                          </div>
                        </div>

                        {/* Interactive Viewport Area */}
                        <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
                          {/* Simulated Fixed Header */}
                          <div
                            className={`absolute top-0 left-0 right-0 z-20 px-6 transition-all duration-500 flex items-center justify-between ${
                              simulatedScroll > 30
                                ? 'bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#DDA83B]/35 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
                                : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent py-5 border-b border-transparent'
                            }`}
                          >
                            {/* Left: Contact Info */}
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full border border-[#DDA83B]/40 bg-[#161616] flex items-center justify-center text-[#DDA83B]">
                                <Phone className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-bold text-white hidden sm:inline">
                                +1 (305) 504-7337
                              </span>
                            </div>

                            {/* Center: Brand Crest */}
                            <div className="flex items-center gap-2">
                              <VipCrestEmblem size={24} className="text-[#DDA83B]" />
                              <span className="font-serif font-black tracking-widest text-xs uppercase text-white">
                                VIP BRANDING
                              </span>
                            </div>

                            {/* Right: CTA Button */}
                            <div className="flex items-center gap-2">
                              <div className="px-3 py-1 rounded-sm bg-[#DDA83B] text-black font-extrabold text-[10px] uppercase tracking-wider">
                                VIP MENU
                              </div>
                            </div>
                          </div>

                          {/* Hero Background Image & Content Behind Header */}
                          <div
                            className="absolute inset-0 transition-transform duration-300"
                            style={{
                              transform: `translateY(-${Math.min(simulatedScroll * 0.4, 40)}px)`
                            }}
                          >
                            <img
                              src="/src/assets/images/hero_executive_private_jet_1791321323222.jpg"
                              alt="Hero Jet Preview"
                              className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15]"
                            />
                            {/* Hero Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]/70" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0B0B_100%)]" />

                            {/* Simulated Hero Foreground Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/40 bg-[#141414]/90 backdrop-blur-md mb-3 text-[10px] text-[#DDA83B] font-bold tracking-widest uppercase">
                                <Crown className="w-3 h-3" />
                                <span>VIP BRANDING EXPERIENCE</span>
                              </div>
                              <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif uppercase tracking-tight max-w-xl">
                                Your Story Is Worth <span className="text-[#DDA83B]">Millions</span>
                              </h1>
                              <p className="text-xs text-white/70 max-w-md mt-2">
                                When you stand before kings, your presence must declare authority before you speak a single word.
                              </p>
                              <div className="mt-4 px-5 py-2 rounded-sm bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-lg">
                                Explore The Experience
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Explanation Card */}
                      <div className="p-4 sm:p-5 rounded-sm bg-[#141414] border border-[#262626] space-y-2">
                        <span className="text-xs uppercase font-bold text-[#DDA83B] tracking-wider flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>¿Por qué este efecto funciona tan bien y cómo replicarlo en GoHighLevel?</span>
                        </span>
                        <p className="text-xs text-[#A8A095] leading-relaxed">
                          1. <strong>Sin espacio muerto:</strong> La sección Hero no empieza debajo de una barra blanca o negra; la fotografía del jet sube hasta el borde superior de la pantalla detrás del Header.<br />
                          2. <strong>Degradado sutil (en el tope):</strong> El Header al inicio usa un <code className="text-[#DDA83B]">background: linear-gradient(...)</code> transparente que oscurece sutilmente la parte superior para que los iconos y el teléfono sean 100% legibles sin tapar la foto.<br />
                          3. <strong>Transición fluida al scroll:</strong> Con el script en Footer Tracking, al pasar de 30px de scroll se añade la clase <code className="text-[#DDA83B]">.scrolled</code> que activa el fondo oscuro y el borde de oro. Al volver hacia arriba, la transición de 0.45s hace que el header se reintegre suavemente a la imagen.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* HOW TO BUILD IN GHL (STEP BY STEP) */}
                  <div className="p-6 rounded-sm bg-[#121212] border border-[#262626] space-y-4">
                    <h4 className="text-sm uppercase font-bold tracking-wider text-[#DDA83B] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" />
                      <span>Cómo armar esta sección en el constructor de GoHighLevel:</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentSec.howToBuild.map((step, idx) => (
                        <div key={idx} className="p-3.5 rounded-sm bg-[#0A0A0A] border border-[#222] text-xs text-[#C5BFB5] leading-relaxed flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#DDA83B]/20 text-[#DDA83B] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CSS CODE SNIPPET */}
                  <div className="rounded-sm border border-[#DDA83B]/30 overflow-hidden bg-[#0A0A0A] shadow-xl">
                    <div className="bg-[#141414] px-4 py-3 border-b border-[#262626] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-[#DDA83B]" />
                        <span className="text-xs font-bold text-white">
                          Código CSS para esta sección (Pegar en: Settings -&gt; Custom Code -&gt; Custom CSS)
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy(currentSec.cssSnippet, `css-${currentSec.id}`)}
                        className="btn-gold-luxury px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        {copied === `css-${currentSec.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-black" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar CSS</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 sm:p-5 text-xs font-mono text-[#D4D4D4] overflow-x-auto leading-relaxed max-h-[420px] overflow-y-auto">
                      <code>{currentSec.cssSnippet}</code>
                    </pre>
                  </div>

                  {/* JS CODE SNIPPET (IF APPLICABLE) */}
                  {currentSec.jsSnippet && (
                    <div className="rounded-sm border border-[#DDA83B]/30 overflow-hidden bg-[#0A0A0A] shadow-xl">
                      <div className="bg-[#141414] px-4 py-3 border-b border-[#262626] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-[#DDA83B]" />
                          <span className="text-xs font-bold text-white">
                            Código JavaScript para el Scroll (Pegar en: Settings -&gt; Custom Code -&gt; Footer Tracking Code)
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(currentSec.jsSnippet!, `js-${currentSec.id}`)}
                          className="btn-gold-luxury px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                        >
                          {copied === `js-${currentSec.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-black" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Script</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 sm:p-5 text-xs font-mono text-[#D4D4D4] overflow-x-auto leading-relaxed max-h-[300px] overflow-y-auto">
                        <code>{currentSec.jsSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* PRO TIPS FOR THIS SECTION */}
                  {currentSec.tips && currentSec.tips.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-sm bg-[#141310] border border-[#DDA83B]/25 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#DDA83B] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Consejos Pro para esta Sección en GHL:
                        </span>
                        <ul className="text-xs text-[#A8A095] space-y-1 list-disc list-inside">
                          {currentSec.tips.map((t, idx) => (
                            <li key={idx}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================
            TAB: PALETA DE COLORES Y GRADIENTES DE ENCABEZADOS
            ======================================================== */}
        {activeCodeTab === 'palette' && (
          <div className="space-y-12">
            {/* Header intro */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">
                    Sistema de Identidad Visual · GoHighLevel Ready
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    Paleta Oficial Calibrada &amp; Encabezados con Gradiente Dorado
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light max-w-3xl leading-relaxed">
                Aquí tienes la especificación cromática completa de la web. Encuentra los <strong>códigos HEX exactos con botón de copiado rápido</strong>, los <strong>4 estilos de gradiente de oro para titulares y H1</strong>, y el bloque CSS listo para pegar en GoHighLevel.
              </p>
            </div>

            {/* SECCIÓN 1: ENCABEZADOS GRADIENT (H1, H2 & TITULARES) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#262626]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDA83B]">
                    Estilos Tipográficos de Alto Impacto
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                    1. Encabezados Oficiales con Gradiente de Oro y Blanco Puro (Fira Sans)
                  </h3>
                </div>
                <span className="text-xs text-[#A8A095]">
                  4 Variantes Calibradas · 100% Centrado
                </span>
              </div>

              {/* DESTACADO ESPECIAL: TITULAR HERO AUTÉNTICO */}
              <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-2 border-[#DDA83B]/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#DDA83B] text-black font-mono text-[10px] font-black uppercase tracking-wider rounded-bl-sm">
                  DISEÑO OFICIAL HERO · 100% CENTRADO
                </div>
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mx-auto">
                    <VipCrestEmblem className="w-3.5 h-3.5 text-[#DDA83B]" />
                    <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                      EL DISEÑO EXACTO QUE TIENES EN EL HERO
                    </span>
                  </div>

                  {/* Vista Previa en Vivo Idéntica al Hero */}
                  <div className="py-6 px-4 rounded-sm bg-black/70 border border-[#DDA83B]/30 my-4 text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-serif text-center w-full block leading-[1.12]">
                      <span className="block text-[#FFFFFF] drop-shadow-md text-center">
                        ELITE ENTREPRENEUR &amp;
                      </span>
                      <span className="text-gold-gradient block mt-1.5 text-center">
                        BUSINESS LEADERSHIP BRANDING
                      </span>
                    </h1>
                    <p className="text-[11px] text-[#A8A095] uppercase tracking-[0.25em] mt-3 font-semibold text-center">
                      Línea 1 Blanco Puro (#FFFFFF) + Línea 2 Oro Metálico VIP · Centrado Total
                    </p>
                  </div>

                  {/* Explicación de cómo implementarlo en GoHighLevel sin que quede a la izquierda */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-2">
                    <div className="p-4 rounded-sm bg-[#121212] border border-[#262626]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase mb-2">
                        <span className="w-5 h-5 rounded-full bg-[#DDA83B] text-black text-[10px] font-black flex items-center justify-center shrink-0">1</span>
                        Opción A (Recomendada en GHL - Sin HTML):
                      </div>
                      <ol className="text-xs text-[#A8A095] space-y-1.5 list-decimal list-inside leading-relaxed">
                        <li>En GHL añade <strong>dos elementos Headline</strong> (uno arriba de otro).</li>
                        <li>En la barra de GHL de ambos, pulsa el botón <strong>Alinear al Centro</strong>.</li>
                        <li>Titular 1: escribe <code className="text-white">ELITE ENTREPRENEUR &amp;</code> y color <strong>Blanco (#FFFFFF)</strong>.</li>
                        <li>Titular 2: escribe <code className="text-[#DDA83B]">BUSINESS LEADERSHIP BRANDING</code>, ve a <em>Advanced -&gt; Custom Class</em> y escribe: <code className="text-[#DDA83B] font-mono">gold-gradient-text</code>.</li>
                      </ol>
                    </div>

                    <div className="p-4 rounded-sm bg-[#121212] border border-[#262626]">
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase mb-2">
                        <span className="w-5 h-5 rounded-full bg-[#DDA83B] text-black text-[10px] font-black flex items-center justify-center shrink-0">2</span>
                        Opción B (En un solo bloque HTML/CSS):
                      </div>
                      <p className="text-xs text-[#A8A095] mb-2 leading-relaxed">
                        Añade un elemento <strong>Custom JS/HTML</strong> en GHL y pega:
                      </p>
                      <pre className="p-2.5 rounded-sm bg-black font-mono text-[11px] text-[#DDA83B] overflow-x-auto border border-[#333]">
{`<div class="hero-title-main">
  <span class="hero-white-text">ELITE ENTREPRENEUR &amp;</span>
  <span class="hero-gold-text">BUSINESS LEADERSHIP BRANDING</span>
</div>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECCIÓN TIPOGRÁFICA OFICIAL: GUÍA DE CONFIGURACIÓN GHL */}
              <div className="p-6 rounded-sm bg-[#101010] border border-[#DDA83B]/30 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <VipCrestEmblem className="w-4 h-4 text-[#DDA83B]" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Configuración de Tipografías en GoHighLevel (Typography Settings)
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Encabezados */}
                  <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#222]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DDA83B] block mb-1">
                      Headline Font (Titulares H1-H6)
                    </span>
                    <div className="text-xl font-black text-white font-serif mb-1">
                      Fira Sans
                    </div>
                    <p className="text-xs text-[#A8A095] leading-relaxed">
                      Usado para todos los encabezados con presencia ejecutiva y autoridad. En GHL configúralo como <strong>Headline Font</strong> en <em>Typography Settings</em>.
                    </p>
                  </div>

                  {/* Párrafos */}
                  <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#DDA83B]/40 ring-1 ring-[#DDA83B]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DDA83B] block mb-1">
                      Content / Body Font (Párrafos)
                    </span>
                    <div className="text-xl font-bold text-white font-sans mb-1">
                      Inter
                    </div>
                    <p className="text-xs text-[#C5BFB5] leading-relaxed">
                      La fuente oficial para <strong>todos los párrafos y textos de lectura</strong>. En GHL configúralo como <strong>Content Font</strong> con peso Light (300) o Regular (400) y color Champagne Off-White (<code className="text-[#DDA83B]">#FDFBF7</code>).
                    </p>
                  </div>

                  {/* Acentos y Botones */}
                  <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#222]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DDA83B] block mb-1">
                      Accent &amp; Buttons (Botones y Badges)
                    </span>
                    <div className="text-xl font-bold text-white font-brand-sans tracking-wider uppercase mb-1">
                      Montserrat
                    </div>
                    <p className="text-xs text-[#A8A095] leading-relaxed">
                      Usado en botones CTA, badges de selección VIP y etiquetas técnicas en mayúsculas con espaciado entre letras (tracking abierto).
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {officialHeadingGradients.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B]/60 transition-all flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] font-mono text-[10px] font-bold">
                          {item.badge}
                        </span>
                        <code className="text-xs font-mono text-[#DDA83B] bg-black/60 px-2 py-0.5 rounded-sm border border-[#DDA83B]/25">
                          .{item.className}
                        </code>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#A8A095] mb-5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Live Typography Preview Box */}
                      <div className="p-6 rounded-sm bg-[#050505] border border-[#222] text-center mb-5 flex flex-col items-center justify-center min-h-[120px] w-full">
                        {item.id === 'hero-twotone-official' ? (
                          <div className="w-full text-center flex flex-col items-center justify-center">
                            <span className="block text-white font-serif font-black text-lg sm:text-2xl tracking-tight text-center drop-shadow-md">
                              ELITE ENTREPRENEUR &amp;
                            </span>
                            <span className="block text-center mt-1 text-lg sm:text-2xl font-serif font-black tracking-tight text-gold-gradient">
                              BUSINESS LEADERSHIP BRANDING
                            </span>
                          </div>
                        ) : (
                          <h2
                            className={`text-xl sm:text-2xl font-black uppercase font-serif tracking-tight text-center w-full block ${item.className}`}
                            style={{
                              background:
                                item.id === 'vip-gold-signature'
                                  ? 'linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%)'
                                  : item.id === 'gold-metallic-warm'
                                  ? 'linear-gradient(135deg, #FFF8E7 0%, #FCE394 22%, #E5B842 50%, #C8952B 75%, #8B5C0F 100%)'
                                  : 'linear-gradient(90deg, #DDA83B 0%, #FFF3D1 30%, #FFFFFF 50%, #FFF3D1 70%, #DDA83B 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              color: 'transparent',
                              display: 'block',
                              textAlign: 'center',
                              margin: '0 auto'
                            }}
                          >
                            {item.sampleText}
                          </h2>
                        )}
                        {item.subText && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A095] font-semibold mt-2 block text-center">
                            {item.subText}
                          </span>
                        )}
                      </div>

                      {/* How to use in GHL note */}
                      <div className="p-3 rounded-sm bg-[#141414] border border-[#222] text-[11px] text-[#C5BFB5] leading-relaxed mb-4 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#DDA83B] shrink-0 mt-0.5" />
                        <span><strong>Cómo usar en GHL:</strong> {item.usageNotes}</span>
                      </div>
                    </div>

                    {/* Copy CSS snippet */}
                    <div className="pt-3 border-t border-[#1E1E1E] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#A8A095]">Regla CSS individual</span>
                      <button
                        onClick={() => handleCopy(item.cssRule, `grad-${item.id}`)}
                        className="btn-gold-luxury px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        {copied === `grad-${item.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-black" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar CSS</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 2: PALETA DE COLORES OFICIAL (COLOR MATRIX) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#262626]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDA83B]">
                    Arquitectura Cromática Oficial
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                    2. Paleta de Colores de la Marca (Regla 60-30-10)
                  </h3>
                </div>
                <span className="text-xs text-[#A8A095]">
                  Haz clic en cualquier código HEX para copiarlo
                </span>
              </div>

              {/* 60-30-10 Rule Explanation Bar */}
              <div className="p-4 rounded-sm bg-[#141310] border border-[#DDA83B]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-[#DDA83B]" />
                    <span>Regla de Proporción Cromática de Lujo:</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#0B0B0B] border border-white/20" />
                    <span className="text-[#A8A095]"><strong>60%</strong> Obsidiana</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#141414] border border-white/20" />
                    <span className="text-[#A8A095]"><strong>30%</strong> Charcoal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#DDA83B]" />
                    <span className="text-[#DDA83B]"><strong>10%</strong> Oro VIP</span>
                  </div>
                </div>
              </div>

              {/* Swatch Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {officialColorPalette.map((color) => (
                  <div
                    key={color.id}
                    className="rounded-sm border border-[#262626] bg-[#0E0E0E] p-4 flex flex-col justify-between hover:border-[#DDA83B]/50 transition-all group"
                  >
                    <div>
                      {/* Swatch Box */}
                      <div
                        className={`w-full h-20 rounded-sm mb-3 border ${color.borderStyle} relative flex items-end justify-end p-2 shadow-inner`}
                        style={{ backgroundColor: color.hex }}
                      >
                        <button
                          onClick={() => handleCopy(color.hex, `hex-${color.id}`)}
                          className="px-2 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] font-mono text-white flex items-center gap-1 border border-white/20 hover:border-[#DDA83B] hover:text-[#DDA83B] transition-all cursor-pointer"
                          title="Copiar Código"
                        >
                          {copied === `hex-${color.id}` ? (
                            <Check className="w-3.5 h-3.5 text-[#DDA83B]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copied === `hex-${color.id}` ? 'Copiado!' : color.hex}</span>
                        </button>
                      </div>

                      <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                        {color.name}
                      </h4>
                      <p className="text-[11px] text-[#A8A095] leading-relaxed mb-3">
                        {color.role}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#1C1C1C] space-y-1 text-[10px] font-mono text-gray-400">
                      <div className="flex justify-between items-center">
                        <span>HEX:</span>
                        <span className="text-[#DDA83B] font-bold">{color.hex}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>RGB:</span>
                        <span>{color.rgb}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 3: MASTER CSS PARA GOHIGHLEVEL */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDA83B]">
                    Código CSS Listo para Pegar en GHL
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif">
                    3. Código CSS Completo de Tipografía y Gradientes
                  </h3>
                </div>
              </div>

              <div className="rounded-sm border border-[#DDA83B]/30 overflow-hidden bg-[#0A0A0A] shadow-xl">
                <div className="bg-[#141414] px-4 py-3 border-b border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#DDA83B]" />
                    <span className="text-xs font-bold text-white">
                      Pega este bloque en: Page Settings -&gt; Custom Code -&gt; Custom CSS
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(masterPaletteCssForGHL, 'master-palette-css')}
                    className="btn-gold-luxury px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {copied === 'master-palette-css' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>¡Copiado al portapapeles!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Código Completo</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 sm:p-5 text-xs font-mono text-[#D4D4D4] overflow-x-auto leading-relaxed max-h-[440px] overflow-y-auto">
                  <code>{masterPaletteCssForGHL}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: BACKGROUND FX TUTORIALS (LATIDO & DESTELLOS)
            ======================================================== */}
        {activeCodeTab === 'backgrounds' && (
          <div className="space-y-12">
            {/* Header intro */}
            <div className="p-6 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  Tutoriales de Fondos VIP: Destellos Flotantes y Flare con Latido
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light max-w-3xl">
                Aprende cómo agregar los 2 fondos animados característicos de la web en cualquier sección de GoHighLevel (GHL): el <strong>Fondo de Flare Pulsante con Latido Cardíaco</strong> y el <strong>Fondo de Destellos Móviles y Estrellas en Canvas con interacción al mouse</strong>.
              </p>
            </div>

            {/* TUTORIAL 1: BACKGROUND FLARE CON LATIDO */}
            <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-[#262626] bg-[#161616] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#DDA83B]/30 to-[#966817]/20 flex items-center justify-center text-[#DDA83B] border border-[#DDA83B]/40">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">Fondo Animado 1</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                      Background Flare con Latido Orgánico (Heartbeat Pulse)
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopy(heartbeatCssSnippet, 'hb-css')}
                    className="btn-gold-luxury px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {copied === 'hb-css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'hb-css' ? '¡CSS Copiado!' : 'Copiar CSS del Latido'}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(heartbeatHtmlSnippet, 'hb-html')}
                    className="btn-gold-secondary px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-[#DDA83B] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied === 'hb-html' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Code className="w-3.5 h-3.5" />}
                    <span>{copied === 'hb-html' ? '¡HTML Copiado!' : 'Copiar Bloque Custom Code GHL'}</span>
                  </button>
                </div>
              </div>

              {/* Live Preview Sandbox for Heartbeat */}
              <div className="p-6 bg-[#080808] border-b border-[#222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#DDA83B]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-white">Vista Previa en Vivo (Sandbox)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A8A095]">Velocidad de Latido:</span>
                    {(['slow', 'normal', 'fast'] as const).map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setFlareSpeedDemo(spd)}
                        className={`px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                          flareSpeedDemo === spd
                            ? 'bg-[#DDA83B] text-black'
                            : 'bg-[#181818] text-[#A8A095] hover:text-white border border-[#2D2D2D]'
                        }`}
                      >
                        {spd === 'slow' ? 'Ultra Tenue (10s)' : spd === 'normal' ? 'Tenue Orgánico (8s)' : 'Suave (6s)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Heartbeat preview container with gentle organic tenue drift */}
                <div className="relative h-64 sm:h-80 w-full rounded-sm bg-[#0A0A0A] border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-6">
                  {/* The Tenue Heartbeat Flare with slow floating drift */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[340px] sm:w-[700px] sm:h-[420px] rounded-full bg-gradient-radial from-[#DDA83B]/20 via-[#DDA83B]/06 to-transparent blur-[90px] pointer-events-none"
                    style={{
                      animation: `flareHeartbeatTenue ${
                        flareSpeedDemo === 'slow' ? '10s' : flareSpeedDemo === 'fast' ? '6s' : '8s'
                      } ease-in-out infinite`
                    }}
                  />

                  {/* Soft Secondary Ambient Aura (No harsh flashes) */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[220px] rounded-full bg-gradient-radial from-[#FDE68A]/14 via-[#DDA83B]/05 to-transparent blur-[70px] pointer-events-none"
                    style={{
                      animation: `flareHeartbeatTenue ${
                        flareSpeedDemo === 'slow' ? '10s' : flareSpeedDemo === 'fast' ? '6s' : '8s'
                      } ease-in-out infinite`,
                      animationDelay: '-2.5s'
                    }}
                  />

                  {/* Sample Content overlay */}
                  <div className="relative z-10 text-center max-w-md p-5 rounded-sm bg-[#121212]/80 backdrop-blur-md border border-[#DDA83B]/30 shadow-2xl">
                    <VipCrestEmblem className="w-8 h-8 text-[#DDA83B] mx-auto mb-2" />
                    <h4 className="text-base sm:text-lg font-bold text-white font-serif uppercase tracking-wider">
                      Atelier Studio &amp; Extended Suite
                    </h4>
                    <p className="text-xs text-[#A8A095] mt-1 font-light leading-relaxed">
                      El flare dorado respira y se desplaza de forma ultra tenue y lenta (8s - 10s) simulando un latido orgánico en reposo, sin cegar ni explotar en el centro de la pantalla.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions and Code Accordion */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#DDA83B]" />
                    <span>¿Cómo implementarlo en GoHighLevel (GHL)?</span>
                  </h4>
                  <ol className="space-y-3 text-xs text-[#A8A095] font-light leading-relaxed list-decimal list-inside">
                    <li>
                      <strong>Método A (Recomendado - Clases CSS)</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        1. Pega el código de la pestaña <strong>2. Master CSS</strong> en <em>Page Settings → Custom CSS</em>.
                        <br />
                        2. Selecciona la Sección deseada en el editor de GHL.
                        <br />
                        3. En la pestaña <strong>Advanced</strong>, agrega la clase <code className="text-[#DDA83B] font-mono font-bold">bg-flare-heartbeat</code>.
                        <br />
                        4. Agrega un elemento <em>Custom JS/HTML</em> adentro de la sección con <code className="text-[#DDA83B] font-mono">&lt;div class="heartbeat-flare-layer"&gt;&lt;/div&gt;</code>.
                      </p>
                    </li>
                    <li>
                      <strong>Método B (Auto-contenido en 1 solo paso)</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        Arrastra un elemento <strong>Custom JS/HTML</strong> al inicio de tu sección y pega directamente el bloque de <em>Custom Code GHL</em> que tienes arriba.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#DDA83B]" />
                    <span>Código CSS Puro (Snippet Completo)</span>
                  </h4>
                  <pre className="overflow-x-auto p-4 rounded-sm bg-[#080808] text-[11px] font-mono text-[#FDE08A] leading-relaxed max-h-56 select-all border border-[#222]">
                    <code>{heartbeatCssSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* TUTORIAL 2: BACKGROUND DESTELLOS MÓVILES (SPARKLES CANVAS) */}
            <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-[#262626] bg-[#161616] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#DDA83B]/30 to-[#966817]/20 flex items-center justify-center text-[#DDA83B] border border-[#DDA83B]/40">
                    <Stars className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">Fondo Animado 2</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                      Background de Destellos Móviles y Estrellas (Canvas Reactivo)
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopy(sparklesJsSnippet, 'sp-js')}
                    className="btn-gold-luxury px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {copied === 'sp-js' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'sp-js' ? '¡Script Copiado!' : 'Copiar Script de Destellos JS'}</span>
                  </button>
                </div>
              </div>

              {/* Live Preview Sandbox for Sparkles Canvas */}
              <div className="p-6 bg-[#080808] border-b border-[#222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#DDA83B]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-white">Vista Previa Interactiva (Mueve el mouse sobre el recuadro)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A8A095]">Densidad de Destellos:</span>
                    {(['subtle', 'medium', 'high'] as const).map((dns) => (
                      <button
                        key={dns}
                        onClick={() => setSparkleDensityDemo(dns)}
                        className={`px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                          sparkleDensityDemo === dns
                            ? 'bg-[#DDA83B] text-black'
                            : 'bg-[#181818] text-[#A8A095] hover:text-white border border-[#2D2D2D]'
                        }`}
                      >
                        {dns === 'subtle' ? 'Sutil' : dns === 'medium' ? 'Medio' : 'Alta Densidad'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real Canvas Live Component Preview */}
                <div className="relative h-72 sm:h-96 w-full rounded-sm bg-[#090909] border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-6 cursor-crosshair">
                  <SectionSparkleCanvas density={sparkleDensityDemo} glowIntensity="medium" />

                  <div className="relative z-10 text-center max-w-lg p-6 rounded-sm bg-[#121212]/85 backdrop-blur-md border border-[#DDA83B]/30 shadow-2xl pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Meet the Global Branding Expert / VIP Experience</span>
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-white font-serif uppercase tracking-wider">
                      Destellos Dorados &amp; Diamantes de Luz
                    </h4>
                    <p className="text-xs text-[#A8A095] mt-2 font-light leading-relaxed">
                      Flotación ascendente con oscilación senoidal natural, estrellas de 4 puntas que giran a velocidad diferenciada e iluminación por proximidad del cursor.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#DDA83B]">
                      <MousePointer className="w-3.5 h-3.5" />
                      <span>Prueba mover tu cursor alrededor de esta tarjeta</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions and Code Accordion */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#DDA83B]" />
                    <span>¿Cómo activarlo en cualquier sección de GHL?</span>
                  </h4>
                  <ol className="space-y-3 text-xs text-[#A8A095] font-light leading-relaxed list-decimal list-inside">
                    <li>
                      <strong>Paso 1 - Agregar el Script Motor</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        Copia el <strong>Script de Destellos JS</strong> con el botón superior y pégalo en <em>Page Settings → Tracking Code → Footer Tracking Code</em>.
                      </p>
                    </li>
                    <li>
                      <strong>Paso 2 - Asignar la Clase en GHL</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        En el constructor de GHL, haz clic en cualquier Sección (por ejemplo la de <em>Meet the Global Branding Expert</em> o <em>VIP Packages</em>).
                      </p>
                    </li>
                    <li>
                      <strong>Paso 3 - Campo Custom Class</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        En la barra derecha <strong>Advanced</strong>, agrega en <strong>Custom Class</strong> la clase <code className="text-[#DDA83B] font-mono font-bold">ghl-sparkles-bg</code>. El script generará y animará automáticamente el canvas dentro de esa sección.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#DDA83B]" />
                    <span>Motor JavaScript Puro para GHL</span>
                  </h4>
                  <pre className="overflow-x-auto p-4 rounded-sm bg-[#080808] text-[11px] font-mono text-[#DDA83B] leading-relaxed max-h-56 select-all border border-[#222]">
                    <code>{sparklesJsSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: GHL CUSTOM CSS
            ======================================================== */}
        {activeCodeTab === 'css' && (
          <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-[#DDA83B]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                    GoHighLevel Master Custom CSS
                  </h3>
                  <p className="text-[11px] text-[#A8A095]">
                    Copy and paste into GHL: <strong>Page Settings → Custom Code → Custom CSS</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(ghlCssSnippet, 'css')}
                className="btn-gold-luxury px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg mt-2 sm:mt-0"
              >
                {copied === 'css' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>CSS Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy All CSS Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="overflow-x-auto p-6 bg-[#080808] text-xs font-mono text-[#FDE08A] leading-relaxed max-h-[600px] select-all">
              <code>{ghlCssSnippet}</code>
            </pre>
          </div>
        )}

        {/* ========================================================
            TAB 3: GHL FOOTER TRACKING JS
            ======================================================== */}
        {activeCodeTab === 'js' && (
          <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-[#DDA83B]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                    GoHighLevel Pure JavaScript Motion Engine
                  </h3>
                  <p className="text-[11px] text-[#A8A095]">
                    Copy and paste into GHL: <strong>Page Settings → Tracking Code → Footer Tracking Code</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(ghlJsSnippet, 'js')}
                className="btn-gold-luxury px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg mt-2 sm:mt-0"
              >
                {copied === 'js' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>JS Script Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Pure JS Engine</span>
                  </>
                )}
              </button>
            </div>

            <pre className="overflow-x-auto p-6 bg-[#080808] text-xs font-mono text-[#DDA83B] leading-relaxed max-h-[600px] select-all">
              <code>{ghlJsSnippet}</code>
            </pre>
          </div>
        )}

        {/* ========================================================
            TAB 4: HOW TO APPLY IN GHL BUILDER
            ======================================================== */}
        {activeCodeTab === 'guide' && (
          <div className="space-y-8">
            {/* Step by Step GHL Walkthrough */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-white font-serif">
                ¿Cómo agregar las animaciones y estilos en GoHighLevel (Paso a Paso)?
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light leading-relaxed">
                Una vez que hayas pegado el código de la pestaña <strong>Master CSS</strong> en los ajustes de la página y el de <strong>Footer Tracking JS</strong> en el Footer Tracking Code, solo debes asignar clases CSS a cualquier elemento desde el constructor visual de GHL:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">1</span>
                  <h4 className="text-sm font-bold text-white mb-1">Selecciona el elemento</h4>
                  <p className="text-[11px] text-[#A8A095]">Haz clic sobre el Botón, Tarjeta, Sección, Columna, Imagen o Título en el editor de GHL.</p>
                </div>
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">2</span>
                  <h4 className="text-sm font-bold text-white mb-1">Abre la pestaña "Advanced"</h4>
                  <p className="text-[11px] text-[#A8A095]">En la barra lateral derecha, ve a la pestaña <strong>Advanced</strong> y busca el campo <strong>Custom Class</strong>.</p>
                </div>
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">3</span>
                  <h4 className="text-sm font-bold text-white mb-1">Escribe la clase deseada</h4>
                  <p className="text-[11px] text-[#A8A095]">Escribe la clase de animación, fondo o estilo (por ejemplo: <code className="text-[#DDA83B]">parallax-zoom</code>, <code className="text-[#DDA83B]">ghl-sparkles-bg</code> o <code className="text-[#DDA83B]">btn-gold-luxury</code>) y guarda.</p>
                </div>
              </div>
            </div>

            {/* Parallax Classes Table / Cards */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Clases de Animación Parallax on Scroll (Elige según el efecto)
                  </h3>
                  <p className="text-xs text-[#A8A095] font-light">
                    Solo copia la clase y pégala en el campo <strong>Custom Class</strong> del elemento en GHL:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Zoom */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Zoom Frontal</span>
                      <button
                        onClick={() => handleCopy('parallax-zoom', 'p-zoom')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-zoom' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-zoom' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-zoom</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Emerge con zoom frontal hacia el usuario y desvanecimiento suave al entrar en viewport.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Tarjetas centrales, Video cinema, Grilla de fotos.</span>
                </div>

                {/* 2. Slide Left */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Desde la Izquierda</span>
                      <button
                        onClick={() => handleCopy('parallax-left', 'p-left')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-left' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-left' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-left</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Se desliza suavemente desde la izquierda con leve inclinación 3D y se acopla en su lugar.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Títulos de columna izquierda, retratos, dossieres.</span>
                </div>

                {/* 3. Slide Right */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Desde la Derecha</span>
                      <button
                        onClick={() => handleCopy('parallax-right', 'p-right')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-right' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-right' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-right</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Se desliza desde la derecha con leve ángulo 3D y se fija suavemente.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Formularios en columna derecha, detalles de paquetes.</span>
                </div>

                {/* 4. Hybrid Left */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Híbrido Izquierda</span>
                      <button
                        onClick={() => handleCopy('parallax-hybrid-left', 'p-hleft')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-hleft' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-hleft' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-hybrid-left</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Combina traslación desde la izquierda + zoom hacia adelante al mismo tiempo.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Citas destacadas de testimonios, tarjetas VIP de alto impacto.</span>
                </div>

                {/* 5. Hybrid Right */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Híbrido Derecha</span>
                      <button
                        onClick={() => handleCopy('parallax-hybrid-right', 'p-hright')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-hright' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-hright' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-hybrid-right</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Combina traslación desde la derecha + zoom hacia adelante al mismo tiempo.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Tarjeta de precios VIP, blueprint interactivo.</span>
                </div>

                {/* 6. Fade Zoom */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Fade Zoom Suave</span>
                      <button
                        onClick={() => handleCopy('parallax-fade-zoom', 'p-fzoom')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-fzoom' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-fzoom' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-fade-zoom</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Aparición sutil mediante escala menor (0.88) y opacidad progresiva.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Bloques de texto explicativo, subtítulos, badges.</span>
                </div>

                {/* 7. 3D Pop-Out Cinema */}
                <div className="p-5 rounded-sm bg-gradient-to-br from-[#1A1610] to-[#0E0E0E] border border-[#DDA83B]/60 shadow-[0_0_20px_rgba(221,168,59,0.15)] hover:border-[#DDA83B] transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm bg-[#DDA83B] text-black shadow-[0_0_10px_#DDA83B]">Efecto 3D Pop-Out Cinema (Sale de la Pantalla)</span>
                      <button
                        onClick={() => handleCopy('parallax-3d-popout', 'p-3d')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer font-bold"
                      >
                        {copied === 'p-3d' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-3d' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FDE08A] font-bold block mb-2">parallax-3d-popout</code>
                    <p className="text-xs text-[#E5E0D8] font-light leading-relaxed">
                      Efecto de proyección cinematográfica en 3D: el elemento surge desde la profundidad del fondo, se proyecta hacia adelante rompiendo el plano visual de la pantalla (translateZ + scale 1.18x + sombras 3D multicapa) y gira sutilmente según la inclinación.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B] font-bold mt-3 pt-2 border-t border-[#DDA83B]/20">Ideal para: La sección de Cita VIP ("You will gain access to his lifestyle..."), Banners de Impacto y Logros Exclusivos.</span>
                </div>
              </div>
            </div>

            {/* Other Classes: Buttons, Cards, Gradients, Header, Backgrounds */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Clases de Estilos, Botones, Tarjetas y Fondos para GHL
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Puedes combinar estas clases con las de parallax agregando un espacio (ej: <code className="text-[#DDA83B]">luxury-card parallax-zoom</code>):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.ghl-sparkles-bg</code>
                    <p className="text-xs text-[#A8A095] font-light">Agrega el canvas animado de destellos y estrellas doradas a cualquier sección.</p>
                  </div>
                  <button onClick={() => handleCopy('ghl-sparkles-bg', 'c-spk')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-spk' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.bg-flare-heartbeat</code>
                    <p className="text-xs text-[#A8A095] font-light">Asigna el resplandor de respiración y flare con latido a la sección.</p>
                  </div>
                  <button onClick={() => handleCopy('bg-flare-heartbeat', 'c-hb')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-hb' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.btn-gold-luxury</code>
                    <p className="text-xs text-[#A8A095] font-light">Botón de oro con brillo láser en hover, sombra 3D y bordes biselados.</p>
                  </div>
                  <button onClick={() => handleCopy('btn-gold-luxury', 'c-btn')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-btn' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.luxury-card</code>
                    <p className="text-xs text-[#A8A095] font-light">Tarjeta obsidiana con borde dorado fino, línea superior de brillo y halo hover.</p>
                  </div>
                  <button onClick={() => handleCopy('luxury-card', 'c-card')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-card' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.heading-fira (Fira Sans)</code>
                    <p className="text-xs text-[#A8A095] font-light">Aplica la fuente oficial Fira Sans a cualquier título o texto en GHL (también automático en h1-h6).</p>
                  </div>
                  <button onClick={() => handleCopy('heading-fira', 'c-fira')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-fira' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.gold-gradient-text</code>
                    <p className="text-xs text-[#A8A095] font-light">Degradado metálico de oro de 4 paradas para cualquier encabezado o texto.</p>
                  </div>
                  <button onClick={() => handleCopy('gold-gradient-text', 'c-txt')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-txt' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.ghl-custom-header</code>
                    <p className="text-xs text-[#A8A095] font-light">Clase para el Header en GHL. Cambia a vidrio oscuro al scroll y transparente al fondo.</p>
                  </div>
                  <button onClick={() => handleCopy('ghl-custom-header', 'c-hdr')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-hdr' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: LIVE COMPONENT & MOTION DEMO
            ======================================================== */}
        {activeCodeTab === 'demo' && (
          <div className="space-y-10">
            {/* Visual Buttons & Hover Playground */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Live Buttons &amp; Hover Effects Sandbox
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Hover over the buttons below to test the laser shine sweep flare and ripple wave pulse:
              </p>

              <div className="flex flex-wrap items-center gap-6 p-6 rounded-sm bg-[#090909] border border-[#222]">
                {/* Primary Button */}
                <button className="btn-gold-luxury">
                  <span>Apply For Private Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <button className="btn-gold-secondary">
                  <span>View Full Portfolio</span>
                </button>

                {/* Video Play Button Pulse */}
                <div className="flex items-center gap-3">
                  <div className="play-button-pulse cursor-pointer">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#DDA83B] font-bold">
                    Watch Briefing
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Card Hover Sandbox */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Luxury Card Hover &amp; Gold Glow
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Test the razor-sharp border elevation and gold halo hover effect:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <VipCrestEmblem className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Executive Mastermind
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    2-Day Private Immersion
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Exclusive luxury villa retreat with turnkey Hollywood-grade media asset creation.
                  </p>
                </div>

                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Credibility Card
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    Digital Omnipresence
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    High-impact digital authority profile with integrated QR for frictionless deal flow.
                  </p>
                </div>

                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Million Dollar Moments
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    Time Condensation
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Rey Perez's proven decision matrix to command 7-8 figure personal brand equity.
                  </p>
                </div>
              </div>
            </div>

            {/* Parallax Motion Simulation */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Parallax Trigger Simulation
                  </h3>
                  <p className="text-xs text-[#A8A095] font-light">
                    Simulate how elements react when scrolling into view:
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'slide-left', label: 'Slide Left' },
                    { id: 'slide-right', label: 'Slide Right' },
                    { id: 'zoom-in', label: 'Zoom In' },
                    { id: 'hybrid-left', label: 'Hybrid Left' },
                    { id: '3d-popout', label: '3D Pop-Out' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setDemoState(m.id as any);
                        setDemoTriggerKey((k) => k + 1);
                      }}
                      className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        demoState === m.id
                          ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                          : 'bg-[#181818] text-[#FDFBF7]/70 hover:text-white border border-[#2A2A2A]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-sm bg-[#090909] border border-[#222] flex items-center justify-center min-h-[260px] overflow-hidden">
                <div
                  key={demoTriggerKey}
                  className={`luxury-card p-6 max-w-sm w-full text-center transition-all duration-700 ${
                    demoState === 'slide-left'
                      ? 'animate-in fade-in slide-in-from-left duration-700'
                      : demoState === 'slide-right'
                      ? 'animate-in fade-in slide-in-from-right duration-700'
                      : demoState === 'zoom-in'
                      ? 'animate-in fade-in zoom-in-75 duration-700'
                      : demoState === '3d-popout'
                      ? 'animate-in fade-in zoom-in-50 duration-700 scale-105 shadow-[0_0_50px_rgba(221,168,59,0.35)]'
                      : 'animate-in fade-in slide-in-from-left zoom-in-75 duration-700'
                  }`}
                >
                  <VipCrestEmblem className="w-8 h-8 text-[#DDA83B] mx-auto mb-3" />
                  <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-1">
                    Simulated GHL Element
                  </span>
                  <h4 className="text-lg font-bold text-white font-serif mb-2 uppercase">
                    {demoState.replace('-', ' ')}
                  </h4>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Smoothly interpolated using vanilla CSS classes and the IntersectionObserver engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LIVE INTERACTIVE POPUP MENU SIMULATION */}
      {testMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#070707]/96 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto pt-24 pb-12 px-6 sm:px-12 lg:px-20 animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={() => setTestMenuOpen(false)}
            className="fixed top-6 right-8 z-[60] flex items-center gap-2.5 px-4 py-2 rounded-sm bg-[#161616]/90 border border-[#DDA83B]/45 text-[#DDA83B] hover:text-white hover:border-[#DDA83B] hover:bg-[#1C1814] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-2xl"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
            {/* Left Column: Navigation Directory */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#DDA83B]/20">
                <VipCrestEmblem size={24} className="w-6 h-6 text-[#DDA83B]" />
                <span className="font-brand-sans text-[11px] uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                  OFFICIAL DIRECTORY · VIP BRANDING EXPERIENCE
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {[
                  { num: '01', label: 'Brand Archetypes', sub: 'Executive · Entrepreneur · Artist · Corporate' },
                  { num: '02', label: 'Founder Rey Perez', sub: 'Global Branding Expert & CEO AMP Productions' },
                  { num: '03', label: 'Deliverables Suite', sub: 'Credibility Card, 360 Video, Social Kits & QR' },
                  { num: '04', label: 'Brand Guidelines Sheet', sub: 'Vector Identity & Chromatic Architecture' },
                  { num: '05', label: 'Real Client Portfolio', sub: 'Ann Law, Adam Gaskill, Gerald Rogers & More' },
                  { num: '06', label: 'Brand Equity Calculator', sub: 'Deal Flow Multiplier & Valuation Diagnostics' },
                  { num: '07', label: 'VIP Memberships & Programs', sub: 'Brand in 2 Days · Sovereign Identity · Empire Ecosystem' },
                  { num: '08', label: 'Contact & Application', sub: 'Direct Intake with Rey Perez Team' },
                ].map((item) => (
                  <div
                    key={item.num}
                    onClick={() => setTestMenuOpen(false)}
                    className="group w-full flex items-center justify-between text-left p-2.5 rounded-sm hover:bg-[#141414]/90 border border-transparent hover:border-[#DDA83B]/35 transition-all cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif-luxury text-sm font-bold text-[#DDA83B]/70 group-hover:text-[#DDA83B] tabular-nums">
                        {item.num}
                      </span>
                      <div>
                        <span className="font-serif-luxury text-base sm:text-xl font-bold text-white group-hover:text-gold-gradient transition-colors block">
                          {item.label}
                        </span>
                        <span className="font-body text-xs text-[#FDFBF7]/50 group-hover:text-[#FDFBF7]/85 transition-colors hidden sm:block">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#DDA83B]/40 group-hover:text-[#DDA83B] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Headquarters & Contact */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded bg-gradient-to-b from-[#181614] via-[#121110] to-[#0A0A0A] border border-[#DDA83B]/35 shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-[#DDA83B]" />
                  <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                    AMP CONCEPTS INC
                  </span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                  GLOBAL BRANDING HEADQUARTERS
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#FDFBF7]/75 leading-relaxed mb-6 font-light">
                  Led by Rey Perez. We create celebrity brands for high-achieving entrepreneurs who want to dominate their niche.
                </p>
                <div className="space-y-3 p-4 rounded bg-[#0E0E0E] border border-[#DDA83B]/20 mb-6 text-xs font-brand-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FDFBF7]/55">Direct Phone:</span>
                    <a href="tel:+13055047337" className="text-white font-semibold hover:text-[#DDA83B]">
                      +1 (305) 504-7337
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FDFBF7]/55">Corporate Email:</span>
                    <a href="mailto:info@iampyourbrand.com" className="text-white font-medium hover:text-[#DDA83B]">
                      info@iampyourbrand.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FDFBF7]/55">Headquarters:</span>
                    <span className="text-[#DDA83B] font-medium">Hialeah, FL 33015</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setTestMenuOpen(false)}
                  className="w-full py-4 px-6 rounded font-brand-sans font-bold text-xs uppercase tracking-[0.22em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow shadow-xl cursor-pointer transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <span>Request VIP Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full pt-6 mt-4 border-t border-[#DDA83B]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-brand-sans text-[#FDFBF7]/45">
            <span>© {new Date().getFullYear()} VIP BRANDING EXPERIENCE · AMP CONCEPTS INC.</span>
            <span className="text-[#DDA83B]">Best of the Best Personal Branding</span>
          </div>
        </div>
      )}

      {/* SIMULATED OPTION B: NATIVE GHL POPUP WITH .luxury-popup */}
      {testNativePopupOpen && (
        <div className="fixed inset-0 z-50 bg-[#040404]/94 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="luxury-popup relative w-full max-w-2xl bg-[#070707] border border-[#DDA83B]/45 rounded-sm p-6 sm:p-8 shadow-[0_25px_65px_rgba(0,0,0,0.95),0_0_35px_rgba(221,168,59,0.18)] max-h-[90vh] overflow-y-auto">
            {/* Native GHL Close Button */}
            <button
              onClick={() => setTestNativePopupOpen(false)}
              className="absolute top-4 right-4 text-[#DDA83B] hover:text-white text-3xl font-light leading-none hover:rotate-90 transition-transform cursor-pointer"
              aria-label="Close Popup"
            >
              &times;
            </button>

            {/* Header badge */}
            <div className="flex items-center gap-2 mb-3">
              <VipCrestEmblem size={22} className="w-5 h-5 text-[#DDA83B]" />
              <span className="text-[10px] font-brand-sans uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                GoHighLevel Native Popup · Class: luxury-popup
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">
              VIP BRANDING NAVIGATION MENU
            </h3>
            <p className="text-xs text-[#A8A095] mb-6 font-light leading-relaxed">
              Esta es una simulación exacta de cómo luce el Popup nativo del constructor de GoHighLevel al asignarle la clase <code className="text-[#DDA83B] font-mono">luxury-popup</code> y nuestro CSS.
            </p>

            {/* Quick 2-Column Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { num: '01', title: 'Brand Archetypes' },
                { num: '02', title: 'Founder Rey Perez' },
                { num: '03', title: 'Deliverables Suite' },
                { num: '04', title: 'Brand Guidelines' },
                { num: '05', title: 'Real Portfolio' },
                { num: '06', title: 'Equity Calculator' },
                { num: '07', title: 'VIP Programs' },
                { num: '08', title: 'Contact & Application' }
              ].map((item) => (
                <div
                  key={item.num}
                  onClick={() => setTestNativePopupOpen(false)}
                  className="p-2.5 rounded bg-[#121212] border border-[#262626] hover:border-[#DDA83B]/40 hover:bg-[#181818] flex items-center justify-between cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#DDA83B] tabular-nums font-mono">{item.num}</span>
                    <span className="text-xs font-bold text-white hover:text-[#DDA83B]">{item.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#DDA83B]/50" />
                </div>
              ))}
            </div>

            {/* Bottom VIP CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#222]">
              <span className="text-[11px] text-[#A8A095]">AMP Concepts Inc · Miami, FL</span>
              <button
                onClick={() => setTestNativePopupOpen(false)}
                className="btn-gold-luxury px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-black w-full sm:w-auto text-center"
              >
                Cerrar Simulación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
