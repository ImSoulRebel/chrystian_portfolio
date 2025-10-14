import { defineConfig, envField } from 'astro/config';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ===========================================
// DETECCIÓN DE PLATAFORMA DE DEPLOYMENT
// ===========================================
// Cargar variables de entorno según la plataforma
const deploymentPlatform =
  process.env.PUBLIC_DEPLOYMENT_PLATFORM || 'development';

// ===========================================
// PATRÓN BASE + OVERRIDES
// ===========================================
// 1. Cargar .env.production (configuración base) si no es development
// 2. Cargar .env.{platform} específico con override: true
if (!process.env.CI) {
  if (deploymentPlatform !== 'development') {
    const productionEnvPath = resolve(__dirname, '.env.production');
    console.log('📄 Loading base config from: .env.production');
    config({ path: productionEnvPath, override: false });
  }

  // Cargar archivo específico de plataforma (sobreescribe base)
  const platformEnvFile = `.env.${deploymentPlatform}`;
  const platformEnvPath = resolve(__dirname, platformEnvFile);
  console.log('📄 Loading platform overrides from:', platformEnvFile);
  config({ path: platformEnvPath, override: true });
}

const isGitHub = deploymentPlatform === 'github';
const isNetlify = deploymentPlatform === 'netlify';
const isDevelopment = deploymentPlatform === 'development';

// Configuración dinámica según plataforma
const siteUrl = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const basePath = process.env.PUBLIC_BASE_PATH || undefined;

console.log('🚀 Deployment Platform:', deploymentPlatform);
console.log('🌐 Site URL:', siteUrl);
console.log('📁 Base Path:', basePath || '(root)');

export default defineConfig({
  output: 'static',
  site: siteUrl,
  // Base path dinámico: solo para GitHub Pages
  base: basePath,

  // ===========================================
  // SCHEMA DE VARIABLES DE ENTORNO (TYPE SAFE)
  // ===========================================
  env: {
    schema: {
      // ===========================================
      // CONFIGURACIÓN DE DEPLOYMENT
      // ===========================================
      PUBLIC_DEPLOYMENT_PLATFORM: envField.string({
        context: 'client',
        access: 'public',
        default: 'development',
      }),
      PUBLIC_BASE_PATH: envField.string({
        context: 'client',
        access: 'public',
        default: '',
        optional: true,
      }),

      // ===========================================
      // CONFIGURACIÓN DEL SITIO (Públicas)
      // ===========================================
      PUBLIC_SITE_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'https://localhost:4321',
      }),
      PUBLIC_BASE_DOMAIN: envField.string({
        context: 'client',
        access: 'public',
        default: 'https://www.midominio.com',
      }),
      PUBLIC_SITE_TITLE: envField.string({
        context: 'client',
        access: 'public',
        default: 'Mi Portfolio',
      }),
      PUBLIC_SITE_DESCRIPTION: envField.string({
        context: 'client',
        access: 'public',
        default: 'Portfolio personal de desarrollador',
      }),

      // INFORMACIÓN PERSONAL (Públicas)
      PUBLIC_AUTHOR_NAME: envField.string({
        context: 'client',
        access: 'public',
        default: 'Desarrollador',
      }),
      PUBLIC_AUTHOR_GIVEN_NAME: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_AUTHOR_FAMILY_NAME: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_EMAIL: envField.string({
        context: 'client',
        access: 'public',
        default: 'contacto@example.com',
      }),
      PUBLIC_CONTACT_PHONE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_ADDRESS: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_STREET: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_POSTAL_CODE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_CITY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_REGION: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_CONTACT_COUNTRY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GITHUB_USERNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GITHUB_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_LINKEDIN_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_TWITTER_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_TWITTER_HANDLE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_INSTAGRAM_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // PERFIL Y MEDIA (Públicas)
      PUBLIC_PROFILE_IMAGE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_PROFILE_IMAGE_WIDTH: envField.number({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_PROFILE_IMAGE_HEIGHT: envField.number({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // SERVICIOS EXTERNOS (Públicas)
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // CONFIGURACIÓN DE DESARROLLO (Públicas - Servidor)
      PUBLIC_DEV_PORT: envField.number({
        context: 'server',
        access: 'public',
        default: 4321,
      }),
      PUBLIC_DEBUG_MODE: envField.boolean({
        context: 'client',
        access: 'public',
        default: false,
      }),

      // CONFIGURACIÓN DE PRODUCCIÓN (Públicas)
      PUBLIC_SITE_VERSION: envField.string({
        context: 'client',
        access: 'public',
        default: '1.0.0',
      }),

      // REDES SOCIALES (Públicas)
      PUBLIC_TWITTER_HANDLE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_INSTAGRAM_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
    // Validar secrets al inicio (recomendado para producción)
    validateSecrets: true,
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  build: {
    // Genera sitemap automáticamente
    inlineStylesheets: 'auto',
    // Optimiza assets
    assets: '_astro',
  },
  vite: {
    build: {
      // Optimizaciones de CSS
      cssCodeSplit: true,
      // Compresión de assets
      assetsInlineLimit: 4096,
      // Optimización de chunks
      rollupOptions: {
        output: {
          // Separa vendor chunks para mejor caching
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    // Optimizaciones de desarrollo
    css: {
      devSourcemap: true,
    },
  },
  // Compresión adicional
  compressHTML: true,
});
