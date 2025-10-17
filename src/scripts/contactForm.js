// Contact form functionality
export class ContactForm {
  constructor(translations = {}) {
    this.form = null;
    this.message = null;
    this.submitBtn = null;
    this.btnText = null;
    this.btnLoading = null;
    this.translations = translations;

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupForm());
    } else {
      this.setupForm();
    }
  }

  setupForm() {
    this.form = document.getElementById('contact-form');
    this.message = document.getElementById('form-message');

    if (!this.form) return;

    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.btnText = this.submitBtn?.querySelector('.btn-text');
    this.btnLoading = this.submitBtn?.querySelector('.btn-loading');

    // ContactForm initialized successfully

    this.bindEvents();
    this.setupMessageObserver();
  }

  bindEvents() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Add real-time validation
    const requiredFields = this.form.querySelectorAll(
      'input[required], select[required], textarea[required]'
    );
    requiredFields.forEach((field) => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });
  }

  validateField(field) {
    const isValid = field.checkValidity();
    const fieldContainer =
      field.closest('.formGroup') || field.closest('[class*="formGroup"]');

    if (!isValid) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      this.showFieldError(field, fieldContainer);
    } else {
      field.classList.add('valid');
      field.classList.remove('invalid');
      this.hideFieldError(fieldContainer);
    }

    return isValid;
  }

  clearFieldError(field) {
    field.classList.remove('invalid');
    const fieldContainer =
      field.closest('.formGroup') || field.closest('[class*="formGroup"]');
    this.hideFieldError(fieldContainer);
  }

  showFieldError(field, container) {
    if (!container) return;

    let errorMsg = container.querySelector('.field-error');
    if (!errorMsg) {
      errorMsg = document.createElement('div');
      errorMsg.className = 'field-error';
      container.appendChild(errorMsg);
    }

    errorMsg.textContent =
      field.validationMessage ||
      this.translations?.validation?.required ||
      'This field is required';
    errorMsg.style.display = 'block';
  }

  hideFieldError(container) {
    if (!container) return;

    const errorMsg = container.querySelector('.field-error');
    if (errorMsg) {
      errorMsg.style.display = 'none';
    }
  }

  validateForm() {
    const requiredFields = this.form.querySelectorAll(
      'input[required], select[required], textarea[required]'
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.form || !this.submitBtn) {
      return;
    }

    // Validate form before submission
    if (!this.validateForm()) {
      this.showValidationError();
      return;
    }

    // Hide any previous messages
    if (this.message) {
      this.message.style.display = 'none';
    }

    // Show loading state
    if (this.btnText) this.btnText.style.display = 'none';
    if (this.btnLoading) this.btnLoading.style.display = 'flex';
    this.submitBtn.disabled = true;

    try {
      const formData = new FormData(this.form);

      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        this.showSuccessMessage();
        this.form.reset();
        // Clear validation states after reset
        this.clearAllValidation();
      } else {
        throw new Error(`Error en el envío: ${response.status}`);
      }
    } catch (error) {
      this.showErrorMessage();
    } finally {
      this.resetButtonState();
    }
  }

  showValidationError() {
    if (!this.message) return;

    this.message.innerHTML = `
      <span class="statusIcon">⚠</span>
      ${this.translations?.validation?.completeRequired || 'Please complete all required fields before submitting.'}
    `;
    this.message.className = 'status-message error';
    this.message.style.display = 'flex';
  }

  clearAllValidation() {
    const fields = this.form.querySelectorAll('input, select, textarea');
    fields.forEach((field) => {
      field.classList.remove('valid', 'invalid');
    });

    const errorMsgs = this.form.querySelectorAll('.field-error');
    errorMsgs.forEach((msg) => (msg.style.display = 'none'));
  }

  showSuccessMessage() {
    if (!this.message) return;
    this.message.innerHTML = `
      <span class="statusIcon">✓</span>
      ${this.translations?.validation?.submitSuccess || 'Thank you! Your message has been sent successfully. I will respond as soon as possible.'}
    `;
    this.message.className = 'status-message success';
    this.message.style.display = 'flex';
  }

  showErrorMessage() {
    if (!this.message) return;
    this.message.innerHTML = `
      <span class="statusIcon">⚠</span>
      ${this.translations?.validation?.submitError || 'There was an error sending the message. Please try again or contact directly via email.'}
    `;
    this.message.className = 'status-message error';
    this.message.style.display = 'flex';
  }

  resetButtonState() {
    if (this.btnText) this.btnText.style.display = 'block';
    if (this.btnLoading) this.btnLoading.style.display = 'none';
    if (this.submitBtn) this.submitBtn.disabled = false;
  }

  hideMessage() {
    if (!this.message) return;

    setTimeout(() => {
      if (this.message.style.display === 'block') {
        this.message.style.display = 'none';
      }
    }, 5000);
  }

  setupMessageObserver() {
    if (!this.message) return;

    // Auto-hide message after 5 seconds
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          if (this.message.style.display === 'block') {
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
      this.form.removeEventListener('submit', this.handleSubmit);
    }
  }
}
