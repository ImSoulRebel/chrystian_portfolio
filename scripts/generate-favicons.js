/**
 * ===========================================
 * GENERADOR DE FAVICONS Y APP ICONS
 * ===========================================
 * Este script genera todos los favicons e íconos necesarios
 * para diferentes plataformas y dispositivos
 */

import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const CONFIG = {
  publicDir: join(__dirname, '..', 'public'),

  // Colores del tema
  colors: {
    background: '#0f0f23',
    primary: '#00d4ff',
    secondary: '#7928ca',
  },

  // Iniciales del nombre
  initials: 'CM',
};

/**
 * Genera el SVG del ícono
 */
function generateIconSvg(size = 512) {
  const { colors, initials } = CONFIG;
  const fontSize = Math.floor(size * 0.5);

  return `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Fondo -->
      <rect width="${size}" height="${size}" fill="${colors.background}" rx="${size * 0.15}"/>
      
      <!-- Borde con gradiente -->
      <rect width="${size}" height="${size}" fill="none" stroke="url(#iconGradient)" 
            stroke-width="${size * 0.04}" rx="${size * 0.15}"/>
      
      <!-- Iniciales -->
      <text x="50%" y="50%" 
            font-family="Arial, sans-serif" 
            font-size="${fontSize}" 
            font-weight="700" 
            fill="url(#iconGradient)" 
            text-anchor="middle" 
            dominant-baseline="central">
        ${initials}
      </text>
      
      <!-- Acento decorativo -->
      <circle cx="${size * 0.8}" cy="${size * 0.2}" r="${size * 0.08}" 
              fill="${colors.primary}" opacity="0.5"/>
    </svg>
  `;
}

/**
 * Genera un favicon o app icon
 */
async function generateIcon(outputPath, size, format = 'png') {
  console.log(`Generando ${outputPath} (${size}x${size})...`);

  try {
    const svgBuffer = Buffer.from(generateIconSvg(size));

    const pipeline = sharp(svgBuffer).resize(size, size);

    if (format === 'png') {
      await pipeline.png().toFile(outputPath);
    } else if (format === 'ico') {
      // Para ICO, generamos PNG y lo renombramos
      await pipeline.png().toFile(outputPath.replace('.ico', '.png'));
      console.log(
        `⚠️  Nota: ${outputPath} generado como PNG. Usa una herramienta externa para convertir a ICO si es necesario.`
      );
    }

    console.log(`✅ Generado: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generando ${outputPath}:`, error.message);
  }
}

/**
 * Genera el manifest para PWA
 */
function generateWebManifest() {
  const manifest = {
    name: 'Chrystian Michell - Flutter Developer & Tech Lead',
    short_name: 'Chrystian M.',
    description:
      'Portfolio personal de Chrystian Michell - Flutter Developer & Tech Lead especializado en Clean Architecture, BLoC Pattern, Smart TV y plataformas OTT',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f23',
    theme_color: '#00d4ff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'es-ES',
    dir: 'ltr',
    scope: '/',
  };

  const manifestPath = join(CONFIG.publicDir, 'site.webmanifest');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Generado: ${manifestPath}`);
}

/**
 * Genera el browserconfig para Windows
 */
function generateBrowserConfig() {
  const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#0f0f23</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

  const configPath = join(CONFIG.publicDir, 'browserconfig.xml');
  writeFileSync(configPath, browserconfig);
  console.log(`✅ Generado: ${configPath}`);
}

/**
 * Función principal
 */
async function main() {
  console.log('🎨 Generando favicons y app icons...\n');

  // Asegurar que existe el directorio public
  if (!existsSync(CONFIG.publicDir)) {
    mkdirSync(CONFIG.publicDir, { recursive: true });
  }

  // Generar todos los íconos
  await Promise.all([
    // Favicon estándar
    generateIcon(join(CONFIG.publicDir, 'favicon-16x16.png'), 16),
    generateIcon(join(CONFIG.publicDir, 'favicon-32x32.png'), 32),

    // Apple Touch Icon
    generateIcon(join(CONFIG.publicDir, 'apple-touch-icon.png'), 180),

    // Android Chrome
    generateIcon(join(CONFIG.publicDir, 'android-chrome-192x192.png'), 192),
    generateIcon(join(CONFIG.publicDir, 'android-chrome-512x512.png'), 512),

    // Microsoft Tile
    generateIcon(join(CONFIG.publicDir, 'mstile-150x150.png'), 150),
  ]);

  // Generar manifests
  generateWebManifest();
  generateBrowserConfig();

  console.log(
    '\n✨ ¡Todos los favicons y app icons han sido generados exitosamente!'
  );
  console.log('\nArchivos generados:');
  console.log('  Favicons:');
  console.log('    - favicon-16x16.png');
  console.log('    - favicon-32x32.png');
  console.log('    - favicon.svg (ya existente)');
  console.log('  \n  App Icons:');
  console.log('    - apple-touch-icon.png (180x180)');
  console.log('    - android-chrome-192x192.png');
  console.log('    - android-chrome-512x512.png');
  console.log('    - mstile-150x150.png');
  console.log('  \n  Configuración:');
  console.log('    - site.webmanifest (PWA manifest)');
  console.log('    - browserconfig.xml (Windows tiles)');
}

// Ejecutar
main().catch(console.error);
