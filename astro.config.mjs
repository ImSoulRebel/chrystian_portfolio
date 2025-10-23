import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';

// Obtener valores de configuración de process.env
// Estos valores se cargan desde:
// - Archivo .env para desarrollo local
// - GitHub Variables para GitHub Actions
// - Variables de entorno de Netlify para despliegues en Netlify
const siteUrl = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const basePath = process.env.PUBLIC_BASE_PATH || '';

export default defineConfig({
  output: 'static',
  site: siteUrl,
  base: basePath,
  integrations: [mdx()],

  env: {
    schema: {
      // ===========================================
      // CONFIGURACIÓN DEL SITIO
      // ===========================================
      PUBLIC_SITE_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'http://localhost:4321',
      }),
      PUBLIC_BASE_PATH: envField.string({
        context: 'client',
        access: 'public',
        default: '',
        optional: true,
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

      // ===========================================
      // INFORMACIÓN PERSONAL
      // ===========================================
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

      // ===========================================
      // CONTACTO
      // ===========================================
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

      // ===========================================
      // REDES SOCIALES
      // ===========================================
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
      PUBLIC_LINKEDIN_USERNAME: envField.string({
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

      // ===========================================
      // PERFIL Y MEDIA
      // ===========================================
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
      PUBLIC_OG_IMAGE: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_OG_IMAGE_WIDTH: envField.number({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_OG_IMAGE_HEIGHT: envField.number({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // ===========================================
      // SERVICIOS EXTERNOS
      // ===========================================
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),

      // ===========================================
      // DESARROLLO Y DEBUG
      // ===========================================
      PUBLIC_DEBUG_MODE: envField.boolean({
        context: 'client',
        access: 'public',
        default: false,
      }),

      // ===========================================
      // VERSIÓN
      // ===========================================
      PUBLIC_SITE_VERSION: envField.string({
        context: 'client',
        access: 'public',
        default: '1.0.0',
      }),
    },
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
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    css: {
      devSourcemap: true,
    },
  },
  compressHTML: true,
});
