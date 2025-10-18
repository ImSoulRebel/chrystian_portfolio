// Skills carousel functionality with TypeScript support

interface SkillElement extends Element {
  dataset: DOMStringMap & {
    skillUrl?: string;
  };
  querySelector(selector: string): Element | null;
  style: CSSStyleDeclaration;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): void;
  addEventListener(type: string, listener: EventListener, options?: AddEventListenerOptions | boolean): void;
}

interface CarouselConfig {
  autoScrollSpeed?: number;
  dragThreshold?: number;
  clickTimeLimit?: number;
  pauseOnHover?: boolean;
  enableKeyboardNav?: boolean;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters: Record<string, any>) => void;
  }
}

export class SkillsCarousel {
  private skillsTrack: HTMLElement | null = null;
  private skillsCarousel: HTMLElement | null = null;
  private isDragging: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private currentTranslate: number = 0;
  private animationFrame: number = 0;
  private isPaused: boolean = false;
  private hasInteracted: boolean = false;
  private readonly dragThreshold: number = 5;
  private startTime: number = 0;
  private readonly clickTime: number = 200;
  private readonly config: CarouselConfig;

  constructor(config: CarouselConfig = {}) {
    this.config = {
      autoScrollSpeed: 0.5,
      dragThreshold: 5,
      clickTimeLimit: 200,
      pauseOnHover: true,
      enableKeyboardNav: true,
      ...config,
    };

    this.init();
  }

  private init(): void {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupCarousel());
    } else {
      this.setupCarousel();
    }
  }

  private setupCarousel(): void {
    this.skillsTrack = document.querySelector<HTMLElement>('.skills-track');
    this.skillsCarousel = document.querySelector<HTMLElement>('.skills-carousel');

    if (!this.skillsTrack || !this.skillsCarousel) {
      console.warn('SkillsCarousel: Required elements not found');
      return;
    }

    this.bindEvents();
    this.setupSkillClicks();
    this.startAnimation();
  }

  // Calculate the width of one skill set (we have 3 copies, so divide by 3)
  private getOneSetWidth(): number {
    return this.skillsTrack?.scrollWidth ? this.skillsTrack.scrollWidth / 3 : 0;
  }

  // Reset position seamlessly when needed
  private resetPositionIfNeeded(): void {
    const oneSetWidth = this.getOneSetWidth();
    const currentPos = this.currentTranslate;

    // If we've scrolled past one full set, reset to the beginning
    if (currentPos <= -oneSetWidth) {
      this.currentTranslate = currentPos + oneSetWidth;
      this.updateTransform();
    }
    // If we've scrolled backwards past the start, reset to the end
    else if (currentPos > 0) {
      this.currentTranslate = currentPos - oneSetWidth;
      this.updateTransform();
    }
  }

  private updateTransform(): void {
    if (this.skillsTrack) {
      this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
    }
  }

  // Animation loop for continuous scrolling
  private animate = (): void => {
    if (!this.isDragging && this.skillsTrack) {
      this.currentTranslate -= this.config.autoScrollSpeed || 0.5;
      this.updateTransform();
      this.resetPositionIfNeeded();
    }
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  // Start the animation
  private startAnimation(): void {
    this.animate();
  }

  // Pause animation
  private pauseAnimation(): void {
    if (!this.isPaused) {
      this.isPaused = true;
      cancelAnimationFrame(this.animationFrame);
    }
  }

  // Resume animation
  private resumeAnimation(): void {
    if (this.isPaused && !this.isDragging) {
      this.isPaused = false;
      this.animate();
    }
  }

  // Start drag functionality
  private startDrag = (e: MouseEvent | TouchEvent): void => {
    this.isDragging = false; // Will be set to true only if we actually drag
    this.pauseAnimation();

    const clientX = 'touches' in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY ?? 0 : e.clientY;
    this.startX = clientX;
    this.startY = clientY;
    this.startTime = Date.now();

    if (this.skillsCarousel) {
      this.skillsCarousel.style.cursor = 'grabbing';
    }
    e.preventDefault();
  };

  // Handle drag movement
  private drag = (e: MouseEvent | TouchEvent): void => {
    if (!this.startX) return; // No drag started

    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY ?? 0 : e.clientY;

    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // If movement exceeds threshold, consider it a drag
    if (distance > this.dragThreshold && !this.isDragging) {
      this.isDragging = true;
    }

    if (this.isDragging) {
      this.currentTranslate += deltaX;
      this.startX = clientX;

      this.updateTransform();
      this.resetPositionIfNeeded();
    }
  };

  // End drag functionality
  private endDrag = (e: MouseEvent | TouchEvent): void => {
    if (!this.startX) return; // No drag started

    const wasDragging = this.isDragging;
    const timeElapsed = Date.now() - this.startTime;

    // If it wasn't a drag and was quick enough, it might be a click
    if (!wasDragging && timeElapsed < this.clickTime) {
      this.handlePotentialClick(e);
    }

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.startTime = 0;
    
    if (this.skillsCarousel) {
      this.skillsCarousel.style.cursor = 'grab';
    }

    // Resume animation after a short delay
    setTimeout(() => {
      if (this.skillsCarousel && !this.skillsCarousel.matches(':hover')) {
        this.resumeAnimation();
      }
    }, 1000);
  };

  // Handle potential click on skill
  private handlePotentialClick(e: MouseEvent | TouchEvent): void {
    const target = (e.target as Element)?.closest('.skill-item') as SkillElement;
    if (target?.classList.contains('skill-clickable')) {
      const url = target.dataset.skillUrl;
      if (url) {
        this.openSkillUrl(url, target);
      }
    }
  }

  // Open skill URL
  private openSkillUrl(url: string, skillElement: SkillElement): void {
    // Add visual feedback
    this.addClickFeedback(skillElement);

    // Open URL in new tab
    window.open(url, '_blank', 'noopener,noreferrer');

    // Track click for analytics
    this.trackSkillClick(skillElement, url);
  }

  // Add visual feedback for click
  private addClickFeedback(skillElement: SkillElement): void {
    skillElement.style.transform = 'translateY(-8px) scale(1.05)';
    skillElement.style.transition = 'transform 0.2s ease';

    setTimeout(() => {
      skillElement.style.transform = '';
      skillElement.style.transition = '';
    }, 200);
  }

  // Track skill click for analytics
  private trackSkillClick(skillElement: SkillElement, url: string): void {
    const skillNameElement = skillElement.querySelector('.skill-name');
    const skillName = skillNameElement?.textContent || 'unknown';

    // Send analytics event if gtag is available
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'skill_click', {
        event_category: 'Skills',
        event_label: skillName,
        value: url,
      });
    }

    // Dispatch custom event for other tracking systems
    window.dispatchEvent(
      new CustomEvent('skillClicked', {
        detail: {
          skillName,
          url,
          timestamp: new Date().toISOString(),
        },
      })
    );
  }

  // Setup skill click handlers
  private setupSkillClicks(): void {
    if (!this.skillsTrack) return;

    const skillItems = this.skillsTrack.querySelectorAll<SkillElement>('.skill-clickable');

    skillItems.forEach((skillItem) => {
      // Make focusable for accessibility
      if (!skillItem.hasAttribute('tabindex')) {
        skillItem.setAttribute('tabindex', '0');
      }

      // Add aria-label for accessibility
      const skillNameElement = skillItem.querySelector('.skill-name');
      const skillName = skillNameElement?.textContent || 'skill';
      const url = skillItem.dataset.skillUrl;
      if (url) {
        skillItem.setAttribute(
          'aria-label',
          `Abrir sitio web de ${skillName} en nueva pestaña`
        );
      }

      // Handle keyboard navigation
      skillItem.addEventListener('keydown', (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          const url = skillItem.dataset.skillUrl;
          if (url) {
            this.openSkillUrl(url, skillItem);
          }
        }
      });
    });
  }

  // Hide interaction indicator
  private hideIndicator(): void {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      const indicatorText = document.querySelector<HTMLElement>('.indicator-text');
      if (indicatorText) {
        indicatorText.style.opacity = '0';
        indicatorText.style.transition = 'opacity 0.5s ease';
      }
    }
  }

  // Bind all event listeners
  private bindEvents(): void {
    if (!this.skillsCarousel) return;

    // Mouse hover events
    if (this.config.pauseOnHover) {
      this.skillsCarousel.addEventListener('mouseenter', () => this.pauseAnimation());
      this.skillsCarousel.addEventListener('mouseleave', () => this.resumeAnimation());
    }

    // Mouse drag events
    this.skillsCarousel.addEventListener('mousedown', (e) => {
      this.startDrag(e);
      this.hideIndicator();
    });
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.endDrag);

    // Touch events
    this.skillsCarousel.addEventListener(
      'touchstart',
      (e) => {
        this.startDrag(e);
        this.hideIndicator();
      },
      { passive: false }
    );
    document.addEventListener('touchmove', this.drag, { passive: false });
    document.addEventListener('touchend', this.endDrag);

    // Prevent context menu
    this.skillsCarousel.addEventListener('contextmenu', (e) => e.preventDefault());

    // Accessibility events
    this.skillsCarousel.addEventListener('focusin', () => this.pauseAnimation());
    this.skillsCarousel.addEventListener('focusout', () => {
      if (!this.isDragging) this.resumeAnimation();
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      this.destroy();
    });
  }

  // Public API methods
  public pause(): void {
    this.pauseAnimation();
  }

  public resume(): void {
    this.resumeAnimation();
  }

  public setSpeed(speed: number): void {
    this.config.autoScrollSpeed = speed;
  }

  // Cleanup method
  public destroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    
    // Remove event listeners
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.endDrag);
    document.removeEventListener('touchmove', this.drag);
    document.removeEventListener('touchend', this.endDrag);
  }
}