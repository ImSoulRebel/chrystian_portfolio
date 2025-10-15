/**
 * ===========================================
 * GENERADOR DE IMÁGENES OPEN GRAPH
 * ===========================================
 * Este script genera automáticamente las imágenes Open Graph
 * para compartir en redes sociales (Twitter, LinkedIn, Facebook)
 */

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const CONFIG = {
  // Rutas
  publicDir: join(__dirname, '..', 'public'),
  profileImage: join(__dirname, '..', 'public', 'profile-image.jpg'),

  // Información del perfil
  name: 'Chrystian Michell',
  title: 'Flutter Developer + Tech Lead',
  subtitle: 'Clean Architecture - BLoC Pattern - Smart TV - OTT',

  // Colores del tema (basados en tu diseño)
  colors: {
    background: '#0f0f23',
    primary: '#00d4ff',
    secondary: '#7928ca',
    text: '#ffffff',
    textSecondary: '#94a3b8',
  },

  // Dimensiones estándar
  sizes: {
    // Open Graph estándar (Facebook, LinkedIn, general)
    og: { width: 1200, height: 630 },
    // Twitter Large Card
    twitter: { width: 1200, height: 675 },
    // Cuadrado (Instagram, WhatsApp preview)
    square: { width: 1200, height: 1200 },
  },
};

/**
 * Genera el buffer SVG para la imagen OG
 */
function generateOGSvg(width, height, variant = 'default') {
  const { colors, name, title, subtitle } = CONFIG;

  // Ajustes según el variant
  const layouts = {
    default: {
      nameY: height * 0.4,
      titleY: height * 0.52,
      subtitleY: height * 0.6,
      nameFontSize: Math.floor(height * 0.08),
      titleFontSize: Math.floor(height * 0.045),
      subtitleFontSize: Math.floor(height * 0.028),
      profileSize: Math.floor(height * 0.25),
      profileY: height * 0.15,
    },
    twitter: {
      nameY: height * 0.42,
      titleY: height * 0.54,
      subtitleY: height * 0.62,
      nameFontSize: Math.floor(height * 0.08),
      titleFontSize: Math.floor(height * 0.045),
      subtitleFontSize: Math.floor(height * 0.028),
      profileSize: Math.floor(height * 0.22),
      profileY: height * 0.18,
    },
    square: {
      nameY: height * 0.55,
      titleY: height * 0.63,
      subtitleY: height * 0.69,
      nameFontSize: Math.floor(height * 0.06),
      titleFontSize: Math.floor(height * 0.035),
      subtitleFontSize: Math.floor(height * 0.022),
      profileSize: Math.floor(height * 0.2),
      profileY: height * 0.25,
    },
  };

  const layout = layouts[variant] || layouts.default;

  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.background};stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a1a2e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.background};stop-opacity:1" />
        </linearGradient>
        
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Fondo con gradiente -->
      <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>
      
      <!-- Patrón de puntos -->
      <g opacity="0.1">
        ${Array.from({
          length: Math.floor(width / 40) * Math.floor(height / 40),
        })
          .map((_, i) => {
            const col = i % Math.floor(width / 40);
            const row = Math.floor(i / Math.floor(width / 40));
            return `<circle cx="${col * 40 + 20}" cy="${row * 40 + 20}" r="2" fill="${colors.primary}"/>`;
          })
          .join('')}
      </g>
      
      <!-- Círculos decorativos -->
      <circle cx="${width * 0.15}" cy="${height * 0.25}" r="100" fill="${colors.primary}" opacity="0.03"/>
      <circle cx="${width * 0.85}" cy="${height * 0.75}" r="120" fill="${colors.secondary}" opacity="0.03"/>
      
      <!-- Líneas decorativas superiores -->
      <line x1="0" y1="${layout.profileY - layout.profileSize / 2 - 20}" 
            x2="${width * 0.3}" y2="${layout.profileY - layout.profileSize / 2 - 20}" 
            stroke="url(#accentGradient)" stroke-width="3" opacity="0.6"/>
      <line x1="${width * 0.7}" y1="${layout.profileY - layout.profileSize / 2 - 20}" 
            x2="${width}" y2="${layout.profileY - layout.profileSize / 2 - 20}" 
            stroke="url(#accentGradient)" stroke-width="3" opacity="0.6"/>
      
      <!-- Círculo para foto de perfil -->
      <circle cx="${width / 2}" cy="${layout.profileY}" r="${layout.profileSize / 2}" 
              fill="none" stroke="url(#accentGradient)" stroke-width="6"/>
      
      <!-- Nombre -->
      <text x="${width / 2}" y="${layout.nameY}" 
            font-family="Arial, sans-serif" 
            font-size="${layout.nameFontSize}" 
            font-weight="700" 
            fill="${colors.text}" 
            text-anchor="middle">
        ${name}
      </text>
      
      <!-- Título principal -->
      <text x="${width / 2}" y="${layout.titleY}" 
            font-family="Arial, sans-serif" 
            font-size="${layout.titleFontSize}" 
            font-weight="600" 
            fill="${colors.primary}" 
            text-anchor="middle">
        ${title}
      </text>
      
      <!-- Subtítulo -->
      <text x="${width / 2}" y="${layout.subtitleY}" 
            font-family="Arial, sans-serif" 
            font-size="${layout.subtitleFontSize}" 
            font-weight="400" 
            fill="${colors.textSecondary}" 
            text-anchor="middle">
        ${subtitle}
      </text>
      
      <!-- Línea inferior decorativa -->
      <rect x="${width * 0.25}" y="${height * 0.85}" 
            width="${width * 0.5}" height="4" 
            rx="2" fill="url(#accentGradient)" opacity="0.5"/>
    </svg>
  `;
}

/**
 * Genera una imagen OG completa
 */
async function generateOGImage(outputPath, width, height, variant = 'default') {
  console.log(`Generando ${outputPath}...`);

  try {
    // Generar el SVG base
    const svgBuffer = Buffer.from(generateOGSvg(width, height, variant));

    // Crear la imagen base desde el SVG
    let image = sharp(svgBuffer).resize(width, height).png();

    // Si existe la imagen de perfil, componerla
    if (existsSync(CONFIG.profileImage)) {
      const layout =
        variant === 'square'
          ? { profileSize: Math.floor(height * 0.2), profileY: height * 0.25 }
          : variant === 'twitter'
            ? {
                profileSize: Math.floor(height * 0.22),
                profileY: height * 0.18,
              }
            : {
                profileSize: Math.floor(height * 0.25),
                profileY: height * 0.15,
              };

      const profileSize = layout.profileSize;
      const profileY = Math.floor(layout.profileY);

      // Procesar la foto de perfil
      const profileBuffer = await sharp(CONFIG.profileImage)
        .resize(profileSize, profileSize, { fit: 'cover' })
        .composite([
          {
            input: Buffer.from(`
            <svg width="${profileSize}" height="${profileSize}">
              <circle cx="${profileSize / 2}" cy="${profileSize / 2}" r="${profileSize / 2}" fill="white"/>
            </svg>
          `),
            blend: 'dest-in',
          },
        ])
        .png()
        .toBuffer();

      // Componer las imágenes
      const baseBuffer = await image.toBuffer();

      image = sharp(baseBuffer).composite([
        {
          input: profileBuffer,
          top: profileY - Math.floor(profileSize / 2),
          left: Math.floor(width / 2) - Math.floor(profileSize / 2),
        },
      ]);
    }

    // Guardar la imagen final
    await image.jpeg({ quality: 90, progressive: true }).toFile(outputPath);

    console.log(`✅ Generada: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generando ${outputPath}:`, error.message);
  }
}

/**
 * Función principal
 */
async function main() {
  console.log('🎨 Generando imágenes Open Graph...\n');

  // Asegurar que existe el directorio public
  if (!existsSync(CONFIG.publicDir)) {
    mkdirSync(CONFIG.publicDir, { recursive: true });
  }

  // Generar todas las variantes
  await Promise.all([
    // OG estándar (Facebook, LinkedIn, general)
    generateOGImage(
      join(CONFIG.publicDir, 'og-image.jpg'),
      CONFIG.sizes.og.width,
      CONFIG.sizes.og.height,
      'default'
    ),

    // Twitter Large Card
    generateOGImage(
      join(CONFIG.publicDir, 'og-image-twitter.jpg'),
      CONFIG.sizes.twitter.width,
      CONFIG.sizes.twitter.height,
      'twitter'
    ),

    // Cuadrado (Instagram, WhatsApp)
    generateOGImage(
      join(CONFIG.publicDir, 'og-image-square.jpg'),
      CONFIG.sizes.square.width,
      CONFIG.sizes.square.height,
      'square'
    ),
  ]);

  console.log('\n✨ ¡Todas las imágenes OG han sido generadas exitosamente!');
  console.log('\nArchivos generados:');
  console.log('  - og-image.jpg (1200x630) - Open Graph estándar');
  console.log('  - og-image-twitter.jpg (1200x675) - Twitter Large Card');
  console.log('  - og-image-square.jpg (1200x1200) - Cuadrado');
}

// Ejecutar
main().catch(console.error);
