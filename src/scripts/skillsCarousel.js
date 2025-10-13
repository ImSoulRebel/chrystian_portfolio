// Skills carousel functionality
export class SkillsCarousel {
  constructor() {
    this.skillsTrack = null;
    this.skillsCarousel = null;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.animationFrame = 0;
    this.isPaused = false;
    this.hasInteracted = false;

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupCarousel());
    } else {
      this.setupCarousel();
    }
  }

  setupCarousel() {
    this.skillsTrack = document.querySelector(".skills-track");
    this.skillsCarousel = document.querySelector(".skills-carousel");

    if (!this.skillsTrack || !this.skillsCarousel) return;

    this.bindEvents();
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
    this.isDragging = true;
    this.pauseAnimation();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    this.startX = clientX;

    this.skillsCarousel.style.cursor = "grabbing";
    e.preventDefault();
  }

  // Handle drag movement
  drag(e) {
    if (!this.isDragging) return;

    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - this.startX;

    this.currentTranslate += deltaX;
    this.startX = clientX;

    this.skillsTrack.style.transform = `translateX(${this.currentTranslate}px)`;
    this.resetPositionIfNeeded();
  }

  // End drag functionality
  endDrag() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.skillsCarousel.style.cursor = "grab";

    // Resume animation after a short delay
    setTimeout(() => {
      if (!this.skillsCarousel.matches(":hover")) {
        this.resumeAnimation();
      }
    }, 1000);
  }

  // Hide interaction indicator
  hideIndicator() {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      const indicatorText = document.querySelector(".indicator-text");
      if (indicatorText) {
        indicatorText.style.opacity = "0";
        indicatorText.style.transition = "opacity 0.5s ease";
      }
    }
  }

  // Bind all event listeners
  bindEvents() {
    // Mouse hover events
    this.skillsCarousel.addEventListener("mouseenter", () =>
      this.pauseAnimation(),
    );
    this.skillsCarousel.addEventListener("mouseleave", () =>
      this.resumeAnimation(),
    );

    // Mouse drag events
    this.skillsCarousel.addEventListener("mousedown", (e) => {
      this.startDrag(e);
      this.hideIndicator();
    });
    document.addEventListener("mousemove", (e) => this.drag(e));
    document.addEventListener("mouseup", () => this.endDrag());

    // Touch events
    this.skillsCarousel.addEventListener(
      "touchstart",
      (e) => {
        this.startDrag(e);
        this.hideIndicator();
      },
      { passive: false },
    );
    document.addEventListener("touchmove", (e) => this.drag(e), {
      passive: false,
    });
    document.addEventListener("touchend", () => this.endDrag());

    // Prevent context menu
    this.skillsCarousel.addEventListener("contextmenu", (e) =>
      e.preventDefault(),
    );

    // Accessibility events
    this.skillsCarousel.addEventListener("focusin", () =>
      this.pauseAnimation(),
    );
    this.skillsCarousel.addEventListener("focusout", () => {
      if (!this.isDragging) this.resumeAnimation();
    });

    // Cleanup on page unload
    window.addEventListener("beforeunload", () => {
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
