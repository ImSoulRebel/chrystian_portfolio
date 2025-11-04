// Main application scripts coordinator
import { PageInteractions } from '../../src/scripts/interactions';

export class App {
  constructor() {
    this.pageInteractions = null;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    this.pageInteractions = new PageInteractions();
    this.initializeTheme();
    this.initializePerformanceOptimizations();
  }

  initializeTheme() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.body.classList.add('reduce-motion');
    }
  }

  initializePerformanceOptimizations() {
    this.initializeLazyLoading();
    this.preloadCriticalResources();
  }

  initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              imageObserver.unobserve(img);
            }
          }
        });
      });
      images.forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  preloadCriticalResources() {
    // Implementar si es necesario
  }
}

// Inicializar la app global
new App();
