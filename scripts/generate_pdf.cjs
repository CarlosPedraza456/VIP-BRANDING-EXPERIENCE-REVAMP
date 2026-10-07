const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public dir exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'VIP_Branding_Experience_Content.pdf');
const rootOutputPath = path.join(__dirname, '..', 'VIP_Branding_Experience_Content.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  bufferPages: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const GOLD = '#A67C52';
const DARK = '#1E1E1E';
const MUTED = '#555555';
const LIGHT_BG = '#F9F8F5';

function drawHeader(title, subtitle) {
  doc.rect(0, 0, doc.page.width, 100).fill('#111111');
  
  doc.fillColor('#C5A880')
     .font('Helvetica-Bold')
     .fontSize(20)
     .text('VIP BRANDING EXPERIENCE', 50, 30, { align: 'center' });
     
  doc.fillColor('#E0D5C1')
     .font('Helvetica')
     .fontSize(11)
     .text(subtitle || 'Documento Oficial de Extracción y Clasificación de Contenidos', 50, 58, { align: 'center' });
     
  doc.fillColor('#A67C52')
     .fontSize(9)
     .text('Fuente: https://vipbrandingexperience.com/ | AMP Concepts Inc.', 50, 75, { align: 'center' });
     
  doc.y = 120;
}

function addSectionTitle(number, title) {
  if (doc.y > 680) doc.addPage();
  doc.moveDown(0.8);
  
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 24).fill('#F4EFE6');
  
  doc.fillColor(GOLD)
     .font('Helvetica-Bold')
     .fontSize(12)
     .text(`${number}. ${title.toUpperCase()}`, 60, y + 6);
     
  doc.y = y + 32;
  doc.fillColor(DARK);
}

function addSubheading(text) {
  if (doc.y > 700) doc.addPage();
  doc.moveDown(0.4);
  doc.fillColor(DARK)
     .font('Helvetica-Bold')
     .fontSize(10.5)
     .text(text);
  doc.moveDown(0.2);
}

function addParagraph(text) {
  if (doc.y > 720) doc.addPage();
  doc.fillColor(MUTED)
     .font('Helvetica')
     .fontSize(9.5)
     .text(text, { lineGap: 3, align: 'justify' });
  doc.moveDown(0.4);
}

function addBullet(title, desc) {
  if (doc.y > 720) doc.addPage();
  doc.fillColor(DARK)
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(`• ${title}: `, { continued: true });
     
  doc.fillColor(MUTED)
     .font('Helvetica')
     .text(desc, { lineGap: 2.5 });
  doc.moveDown(0.3);
}

// Page 1: Cover & Intro
drawHeader('VIP BRANDING EXPERIENCE', 'Extracción Integral y Clasificación de Contenido Web');

addSectionTitle('1', 'Encabezado & Declaración de Propósito (Hero)');
addParagraph('Mensaje de selección exclusiva para líderes de alto rendimiento:');
doc.rect(50, doc.y, doc.page.width - 100, 68).fillAndStroke('#FAF8F5', '#E5DCce');
doc.fillColor('#222222')
   .font('Helvetica-Oblique')
   .fontSize(9)
   .text('"If you are on this website you have been selected to be part of an exclusive group of ELITE Entrepreneurs and Business Professionals who want a full service, custom tailored VIP experience delivered for their personal brand. You are invited to join one of the most talented, passionate and successful entrepreneurial branding experts on the planet. You will gain access to his lifestyle and learn the best-kept secrets to his success. Join a small group of top achievers and indulge in a luxury lifestyle experience while creating the most high-level marketing collaterals for your marketing. Space is limited. Do not miss this once in lifetime opportunity."', 60, doc.y + 8, { width: doc.page.width - 120, align: 'justify' });
doc.y += 76;

addBullet('Llamados a la Acción (CTAs)', 'View The Experience | View Branding Packages | Apply Now');

addSectionTitle('2', 'Segmentación por Arquetipos de Marca');
addParagraph('Clasificación inicial para los visitantes ("Before you view our branding packages please tell us which brand type are you?"):');

addBullet('1. Executive (Ejecutivo)', 'C-Level Executives & Business Professionals que buscan una marca limpia, coherente y profesional en todas sus plataformas digitales.');
addBullet('2. Entrepreneur (Emprendedor)', 'Dueños de negocio y fundadores que son el rostro de su empresa y desean vender con mayor autoridad y menor resistencia digital.');
addBullet('3. Artist (Artista / Creativo)', 'Actores, músicos, fotógrafos, modelos y creadores de contenido que buscan maximizar su exposición e impacto visual de marca.');
addBullet('4. Corporate (Corporativo)', 'Branding integral enfocado en potenciar el valor del nombre e identidad corporativa para equipos ejecutivos.');

addSectionTitle('3', 'Perfil del Fundador & Global Branding Expert');
addSubheading('Rey Perez – CEO & Fundador de AMP Concepts Inc. / AMP Productions');
addParagraph('Conferencista internacional, presentador de televisión, filántropo y coach de negocios de élite:');
doc.rect(50, doc.y, doc.page.width - 100, 68).fillAndStroke('#FAF8F5', '#E5DCce');
doc.fillColor('#222222')
   .font('Helvetica')
   .fontSize(8.8)
   .text('"Leveraging over 15 years of sales and marketing experience Rey and his team create world-class celebrity brands for top entrepreneurs and professionals who want to dominate their niche or industry. Rey is a self-made entrepreneur with a tenacious drive and work ethic. He built multiple successful companies over the last 2 decades. He has worked with thousands of entrepreneurs and business owners to achieve next level success with their brands. Rey’s true passion is leading high achievers and elite entrepreneurs to their greatest victories. He and his companies support multiple Charities and Foundations focused on Empowering Today\'s Youth."', 60, doc.y + 8, { width: doc.page.width - 120, align: 'justify' });
doc.y += 76;
addBullet('Canales Oficiales', 'LinkedIn, Instagram, Twitter/X, Facebook, Video Vlog & Podcast.');

// Page 2: Deliverables & Portafolio
doc.addPage();
drawHeader('VIP BRANDING EXPERIENCE', 'Entregables de Producción & Casos de Estudio');

addSectionTitle('4', 'Suite de Activos & Entregables de Producción');
addParagraph('Materiales de alta costura generados durante la experiencia "Brand in 2 Days":');

addBullet('Credibility Card', 'Tarjeta interactiva digital de credibilidad que condensa trayectoria, especialidad y llamada a la acción en un formato de rápido impacto.');
addBullet('Fotografía Editorial & Motion GIFs', 'Sesión fotográfica de nivel editorial y avatares animados dinámicos para firmas y perfiles.');
addBullet('360 Welcome Video', 'Video de bienvenida guiada para prospectos que recorre el ecosistema digital completo y multiplica el engagement.');
addBullet('Brand Launch Video', 'Producción cinemática detrás de cámaras para generar anticipación y posicionamiento de estatus.');
addBullet('Personal Intro & Business Spotlight', 'Videos de conexión humana y piezas corporativas para páginas "About Us" e inversores.');
addBullet('Kits de Redes Sociales (Omnipresencia)', 'Banners y cabeceras personalizadas para LinkedIn, YouTube, X (Twitter), Facebook Personal y portadas de Instagram Stories.');
addBullet('Herramientas de Networking', 'Firma HTML corporativa para email y fondo de pantalla móvil con código QR directo.');

addSectionTitle('5', 'Portafolio de Clientes VIP & Casos Reales');
addBullet('Ann Law ("America\'s Wellness Coach")', 'FNP/RPA, empresaria con 25+ años en gestión de salud, fundadora de la Nurse Practitioner Organization NY, destacada en el libro "A Few Strong Women".');
addBullet('Adam Gaskill ("Global Contribution & Marketing Strategist")', 'Editor de 45+ autores, creador de 60+ ONGs, 2x Tony Robbins Business Mastery Champion, socio de Gary Malkin (7x Emmy Winner), presentado en FOX5 y PIX11.');
addBullet('Nichole Gonzalez ("Behavior Analyst")', 'Analista de conducta con B.S. en UCF y Master en Applied Behavior Analysis por Ball State University.');
addBullet('Alfonzo Alexander ("Medical Education Specialist")', 'Autor bestseller y emprendedor con 30+ años de trayectoria y 15+ años capacitando médicos de alto nivel.');
addBullet('Gerald Rogers ("Soul Alchemist & Transformational Leader")', 'Más de 180 retiros internacionales (Bali, Hawái, Kenia), conferencista junto a Les Brown y Brian Tracy, presentado en The Today Show.');
addBullet('Mayah Rose ("Founder of Mayah Rose Academy")', 'Autora, coach y oradora premiada por Les Brown, facilitadora de procesos de transformación de liderazgo femenino.');
addBullet('Star Durand ("Wealth & Profitability Strategist")', 'Broker de fondos privados e inversión inmobiliaria, veterano militar y de seguridad pública, formado con Grant Cardone y Dave Ramsey.');
addBullet('Coach Chuck Barnard ("The Champion\'s Mindset Mentor")', 'Autor, educador con 30+ años de experiencia, Master NLP & Hypnotherapy Practitioner, entrenador deportivo.');
addBullet('Kathrine Gasc ("Love & Intimacy Activator")', 'Autora y mentora de relaciones de pareja de alto rendimiento.');
addBullet('Paige Clark ("Breakthrough Specialist")', 'Especialista en escalamiento de relaciones y negocios para líderes de bienes raíces.');

addSectionTitle('6', 'Testimonios & Evidencia Social');
addBullet('Felipe Rodriguez (Boca Raton, FL)', '"Learning from a branding and marketing expert and understanding his wisdom on condensing time has made a dramatic impact in every aspect of my life... He forces you to take immediate action."');
addBullet('Raj Singh (Jersey City, NJ)', '"The best part was the \'Million Dollar Moments\' and learning what controls my filter. This section really helped me to set effective goals without getting sidetracked."');
addBullet('Video Testimonios Adicionales', 'Kristina Grube, Tim Cox, Jerrad Havins, Billy Wease, Robert Syfert, Eric L. Dunavant, Saen Higgins, Jared Irby, Shawn Feurer.');

addSectionTitle('7', 'Datos Corporativos & Contacto Legal');
addBullet('Razón Social', 'AMP CONCEPTS INC (AMP Productions)');
addBullet('Dirección', '7857 NW 188th Lane, Hialeah, FL 33015');
addBullet('Contacto', 'Teléfono: +1 (305) 504-7337 | Email: info@iampyourbrand.com | Web: https://vipbrandingexperience.com');

// Footer & page numbers
const pages = doc.bufferedPageRange();
for (let i = 0; i < pages.count; i++) {
  doc.switchToPage(i);
  doc.rect(50, doc.page.height - 40, doc.page.width - 100, 0.5).fill('#CCCCCC');
  doc.fillColor('#888888')
     .font('Helvetica')
     .fontSize(8)
     .text('VIP Branding Experience — Documento de Referencia de Contenido', 50, doc.page.height - 32, { align: 'left' });
  doc.text(`Página ${i + 1} de ${pages.count}`, 50, doc.page.height - 32, { align: 'right' });
}

doc.end();

writeStream.on('finish', () => {
  fs.copyFileSync(outputPath, rootOutputPath);
  console.log('PDF generated successfully at:', outputPath);
});
