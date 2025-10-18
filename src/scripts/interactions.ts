// Global scripts for page interactions with TypeScript support

interface IntersectionObserverConfig {
  threshold?: number;
  rootMargin?: string;
  animationDelay?: number;
  animationDuration?: number;
}

interface AnimationConfig {
  opacity: string;
  transform: string;
  transition: string;
}

export class PageInteractions {
  private observer: IntersectionObserver | null = null;
  private config: Required<IntersectionObserverConfig>;

  constructor(config: IntersectionObserverConfig = {}) {
    this.config = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      animationDelay: 0,
      animationDuration: 0.6,
      ...config,
    };

    this.init();
  }

  private init(): void {
    this.initSmoothScrolling();
    this.initIntersectionObserver();
  }

  // Smooth scrolling for anchor links
  private initSmoothScrolling(): void {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const href = anchor.getAttribute('href');
        if (!href) return;

        const target = document.querySelector<HTMLElement>(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Optional: Update URL hash without jumping
          if (history.replaceState) {
            history.replaceState(null, '', href);
          }
        }
      });
    });
  }

  // Intersection Observer for animations
  private initIntersectionObserver(): void {
    const observerOptions: IntersectionObserverInit = {
      threshold: this.config.threshold,
      rootMargin: this.config.rootMargin,
    };

    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target as HTMLElement);
          }
        });
      },
      observerOptions
    );

    this.setupAnimationElements();
  }

  private setupAnimationElements(): void {
    const selectors = [
      '.project-card',
      '.skill-item',
      '.experience-item',
      '.highlight-item',
      '.stat-item',
    ];

    const elements = document.querySelectorAll<HTMLElement>(
      selectors.join(', ')
    );

    elements.forEach((element) => {
      this.setupElementForAnimation(element);
      this.observer?.observe(element);
    });
  }

  private setupElementForAnimation(element: HTMLElement): void {
    const initialState: AnimationConfig = {
      opacity: '0',
      transform: 'translateY(30px)',
      transition: `opacity ${this.config.animationDuration}s ease, transform ${this.config.animationDuration}s ease`,
    };

    Object.assign(element.style, initialState);
  }

  private animateElement(element: HTMLElement): void {
    const finalState: AnimationConfig = {
      opacity: '1',
      transform: 'translateY(0)',
      transition: element.style.transition, // Keep existing transition
    };

    // Add delay if configured
    if (this.config.animationDelay > 0) {
      setTimeout(() => {
        Object.assign(element.style, finalState);
      }, this.config.animationDelay);
    } else {
      Object.assign(element.style, finalState);
    }

    // Remove from observer after animation
    this.observer?.unobserve(element);
  }

  // Public API methods
  public updateConfig(newConfig: Partial<IntersectionObserverConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public observeElement(element: HTMLElement): void {
    this.setupElementForAnimation(element);
    this.observer?.observe(element);
  }

  public unobserveElement(element: HTMLElement): void {
    this.observer?.unobserve(element);
  }

  // Cleanup method
  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
