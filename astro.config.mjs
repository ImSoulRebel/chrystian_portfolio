import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
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
  // Configuración de sitemap y robots
  site: 'https://imsoulrebel.github.io/chrystian_portfolio', // Cambia por tu dominio
});
