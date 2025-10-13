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

// Cargar el archivo .env correspondiente solo si no está en CI/CD
if (!process.env.CI) {
  const envFile = `.env.${deploymentPlatform}`;
  const envPath = resolve(__dirname, envFile);

  console.log('📄 Loading env from:', envFile);
  config({ path: envPath, override: false });
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
      PUBLIC_GITHUB_USERNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_LINKEDIN_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // SERVICIOS EXTERNOS (Secretas - Solo servidor)
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      WEBHOOK_URL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      ANALYTICS_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
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
      prefixDefaultLocale: true, // Ahora español también tendrá prefijo /es/
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
