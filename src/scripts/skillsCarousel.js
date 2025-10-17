// Skills carousel functionality
export class SkillsCarousel {
  constructor() {
    this.skillsTrack = null;
    this.skillsCarousel = null;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.currentTranslate = 0;
    this.animationFrame = 0;
    this.isPaused = false;
    this.hasInteracted = false;
    this.dragThreshold = 5; // Minimum pixels to consider it a drag
    this.startTime = 0;
    this.clickTime = 200; // Maximum time for a click (ms)

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupCarousel());
    } else {
      this.setupCarousel();
    }
  }

  setupCarousel() {
    this.skillsTrack = document.querySelector('.skills-track');
    this.skillsCarousel = document.querySelector('.skills-carousel');

    if (!this.skillsTrack || !this.skillsCarousel) return;

    this.bindEvents();
    this.setupSkillClicks();
    this.startAnimation();
  }

  // Calculate the width of one skill set (we have 3 copies, so divide by 3)
  getOneSetWidth() {
    return this.skillsTrack.scrollWidth / 3;
  }

  // Reset position seamlessly when needed
  resetPositionIfNeeded() {
    const oneSetWidth = this.getOneSetWidth();
    const currentPos = this.currentTranslate;

    // If we've scrolled past one full set, reset to the beginning
    if (currentPos <= -oneSetWidth) {
      this.currentTranslate = currentPos + oneSetWidth;
      this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
    }
    // If we've scrolled backwards past the start, reset to the end
    else if (currentPos > 0) {
      this.currentTranslate = currentPos - oneSetWidth;
      this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
    }
  }

  // Animation loop for continuous scrolling
  animate() {
    if (!this.isDragging) {
      this.currentTranslate -= 0.5; // Adjust speed here
      this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
      this.resetPositionIfNeeded();
    }
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  // Start the animation
  startAnimation() {
    this.animate();
  }

  // Pause animation
  pauseAnimation() {
    if (!this.isPaused) {
      this.isPaused = true;
      cancelAnimationFrame(this.animationFrame);
    }
  }

  // Resume animation
  resumeAnimation() {
    if (this.isPaused && !this.isDragging) {
      this.isPaused = false;
      this.animate();
    }
  }

  // Start drag functionality
  startDrag(e) {
    this.isDragging = false; // Will be set to true only if we actually drag
    this.pauseAnimation();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    this.startX = clientX;
    this.startY = clientY;
    this.startTime = Date.now();

    this.skillsCarousel.style.cursor = 'grabbing';
    e.preventDefault();
  }

  // Handle drag movement
  drag(e) {
    if (!this.startX) return; // No drag started

    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

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

      this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
      this.resetPositionIfNeeded();
    }
  }

  // End drag functionality
  endDrag(e) {
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
    this.skillsCarousel.style.cursor = 'grab';

    // Resume animation after a short delay
    setTimeout(() => {
      if (!this.skillsCarousel.matches(':hover')) {
        this.resumeAnimation();
      }
    }, 1000);
  }

  // Handle potential click on skill
  handlePotentialClick(e) {
    const target = e.target.closest('.skill-item');
    if (target && target.classList.contains('skill-clickable')) {
      const url = target.dataset.skillUrl;
      if (url) {
        this.openSkillUrl(url, target);
      }
    }
  }

  // Open skill URL
  openSkillUrl(url, skillElement) {
    // Add visual feedback
    this.addClickFeedback(skillElement);

    // Open URL in new tab
    window.open(url, '_blank', 'noopener,noreferrer');

    // Track click for analytics
    this.trackSkillClick(skillElement, url);
  }

  // Add visual feedback for click
  addClickFeedback(skillElement) {
    skillElement.style.transform = 'translateY(-8px) scale(1.05)';
    skillElement.style.transition = 'transform 0.2s ease';

    setTimeout(() => {
      skillElement.style.transform = '';
      skillElement.style.transition = '';
    }, 200);
  }

  // Track skill click for analytics
  trackSkillClick(skillElement, url) {
    const skillName =
      skillElement.querySelector('.skill-name')?.textContent || 'unknown';

    // Send analytics event if gtag is available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'skill_click', {
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
  setupSkillClicks() {
    const skillItems = this.skillsTrack.querySelectorAll('.skill-clickable');

    skillItems.forEach((skillItem) => {
      // Make focusable for accessibility
      if (!skillItem.hasAttribute('tabindex')) {
        skillItem.setAttribute('tabindex', '0');
      }

      // Add aria-label for accessibility
      const skillName =
        skillItem.querySelector('.skill-name')?.textContent || 'skill';
      const url = skillItem.dataset.skillUrl;
      if (url) {
        skillItem.setAttribute(
          'aria-label',
          `Abrir sitio web de ${skillName} en nueva pestaña`
        );
      }

      // Handle keyboard navigation
      skillItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
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
  hideIndicator() {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      const indicatorText = document.querySelector('.indicator-text');
      if (indicatorText) {
        indicatorText.style.opacity = '0';
        indicatorText.style.transition = 'opacity 0.5s ease';
      }
    }
  }

  // Bind all event listeners
  bindEvents() {
    // Mouse hover events
    this.skillsCarousel.addEventListener('mouseenter', () =>
      this.pauseAnimation()
    );
    this.skillsCarousel.addEventListener('mouseleave', () =>
      this.resumeAnimation()
    );

    // Mouse drag events
    this.skillsCarousel.addEventListener('mousedown', (e) => {
      this.startDrag(e);
      this.hideIndicator();
    });
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', (e) => this.endDrag(e));

    // Touch events
    this.skillsCarousel.addEventListener(
      'touchstart',
      (e) => {
        this.startDrag(e);
        this.hideIndicator();
      },
      { passive: false }
    );
    document.addEventListener('touchmove', (e) => this.drag(e), {
      passive: false,
    });
    document.addEventListener('touchend', (e) => this.endDrag(e));

    // Prevent context menu
    this.skillsCarousel.addEventListener('contextmenu', (e) =>
      e.preventDefault()
    );

    // Accessibility events
    this.skillsCarousel.addEventListener('focusin', () =>
      this.pauseAnimation()
    );
    this.skillsCarousel.addEventListener('focusout', () => {
      if (!this.isDragging) this.resumeAnimation();
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(this.animationFrame);
    });
  }

  // Cleanup method
  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
