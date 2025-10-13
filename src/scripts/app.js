// Main application scripts coordinator
import { PageInteractions } from "./interactions.js";

// Main app class to coordinate all page functionality
export class App {
  constructor() {
    this.pageInteractions = null;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    // Initialize global page interactions (scroll, animations)
    this.pageInteractions = new PageInteractions();

    // Add any other global app functionality here
    this.initializeTheme();
    this.initializePerformanceOptimizations();
  }

  initializeTheme() {
    // Handle theme-related functionality if needed
    // This could include dark/light mode toggle, system preference detection, etc.

    // Example: Respect user's system theme preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.body.classList.add("reduce-motion");
    }
  }

  initializePerformanceOptimizations() {
    // Add any performance optimizations

    // Example: Lazy loading for images that might not be handled by browser
    this.initializeLazyLoading();

    // Example: Preload critical resources
    this.preloadCriticalResources();
  }

  initializeLazyLoading() {
    // Enhanced lazy loading for better performance
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    }
  }

  preloadCriticalResources() {
    // Preload critical resources for better performance
    const criticalImages = [
      // Add paths to critical images that should be preloaded
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Cleanup method
  destroy() {
    if (this.pageInteractions) {
      this.pageInteractions.destroy();
    }
  }
}
