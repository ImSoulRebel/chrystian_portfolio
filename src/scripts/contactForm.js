// Contact form functionality
export class ContactForm {
  constructor() {
    this.form = null;
    this.message = null;
    this.submitBtn = null;
    this.btnText = null;
    this.btnLoading = null;

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupForm());
    } else {
      this.setupForm();
    }
  }

  setupForm() {
    this.form = document.getElementById("contact-form");
    this.message = document.getElementById("form-message");

    if (!this.form) return;

    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.btnText = this.submitBtn?.querySelector(".btn-text");
    this.btnLoading = this.submitBtn?.querySelector(".btn-loading");

    this.bindEvents();
    this.setupMessageObserver();
  }

  bindEvents() {
    if (!this.form) return;

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.form || !this.submitBtn || !this.btnText || !this.btnLoading)
      return;

    // Show loading state
    this.btnText.style.display = "none";
    this.btnLoading.style.display = "flex";
    this.submitBtn.disabled = true;

    try {
      const formData = new FormData(this.form);
      const response = await fetch(this.form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        this.showSuccessMessage();
        this.form.reset();
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      this.showErrorMessage();
    } finally {
      this.resetButtonState();
    }
  }

  showSuccessMessage() {
    if (!this.message) return;

    this.message.textContent =
      "¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.";
    this.message.className = "form-message success";
    this.message.style.display = "block";
  }

  showErrorMessage() {
    if (!this.message) return;

    this.message.textContent =
      "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente por email.";
    this.message.className = "form-message error";
    this.message.style.display = "block";
  }

  resetButtonState() {
    if (!this.btnText || !this.btnLoading || !this.submitBtn) return;

    this.btnText.style.display = "block";
    this.btnLoading.style.display = "none";
    this.submitBtn.disabled = false;
  }

  hideMessage() {
    if (!this.message) return;

    setTimeout(() => {
      if (this.message.style.display === "block") {
        this.message.style.display = "none";
      }
    }, 5000);
  }

  setupMessageObserver() {
    if (!this.message) return;

    // Auto-hide message after 5 seconds
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          if (this.message.style.display === "block") {
            this.hideMessage();
          }
        }
      });
    });

    observer.observe(this.message, { attributes: true });
  }

  // Cleanup method
  destroy() {
    // Remove event listeners and observers if needed
    if (this.form) {
      this.form.removeEventListener("submit", this.handleSubmit);
    }
  }
}
