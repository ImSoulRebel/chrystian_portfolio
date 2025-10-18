// Modern Contact Form Class with better error handling and CSS module support
export class ContactForm {
  constructor(config = {}) {
    this.config = {
      formId: 'contact-form',
      messageId: 'form-message',
      translations: {},
      cssClasses: {},
      autoHideDelay: 5000,
      enableLogging: true,
      ...config,
    };

    this.elements = {};
    this.isSubmitting = false;

    this.init();
  }

  // Initialize the form
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupForm());
    } else {
      this.setupForm();
    }
  }

  // Setup form elements and event listeners
  setupForm() {
    this.elements.form = document.getElementById(this.config.formId);
    this.elements.message = document.getElementById(this.config.messageId);

    if (!this.elements.form) {
      this.log(
        'error',
        `Form element with id "${this.config.formId}" not found`
      );
      return;
    }

    if (!this.elements.message) {
      this.log(
        'error',
        `Message element with id "${this.config.messageId}" not found`
      );
      return;
    }

    // Find form elements
    this.elements.submitBtn = this.elements.form.querySelector(
      'button[type="submit"]'
    );
    this.elements.btnText = this.elements.submitBtn?.querySelector('.btn-text');
    this.elements.btnLoading =
      this.elements.submitBtn?.querySelector('.btn-loading');

    if (!this.elements.submitBtn) {
      this.log('error', 'Submit button not found');
      return;
    }

    // Validate form configuration
    if (!this.elements.form.action || this.elements.form.action === '') {
      this.log(
        'error',
        'Form action is not set. Check PUBLIC_FORMSPREE_ENDPOINT configuration.'
      );
      this.showConfigurationError();
      return;
    }

    this.log('info', 'Form initialized successfully');
    this.log('info', `Form action: ${this.elements.form.action}`);

    this.bindEvents();
    this.setupMessageObserver();
  }

  // Bind all event listeners
  bindEvents() {
    if (!this.elements.form) return;

    // Form submission
    this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Real-time validation for required fields
    const requiredFields = this.elements.form.querySelectorAll(
      'input[required], select[required], textarea[required]'
    );

    requiredFields.forEach((field) => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));

      // Add mobile-specific events
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        field.addEventListener('touchstart', () => this.onInputFocus(field), {
          passive: true,
        });
      }
    });

    // Additional input events for better UX
    const allInputs = this.elements.form.querySelectorAll(
      'input, select, textarea'
    );

    allInputs.forEach((input) => {
      input.addEventListener('focus', () => this.onInputFocus(input));
      input.addEventListener('change', () => this.onInputChange(input));
    });

    // Prevent double-tap zoom on submit button for mobile
    if (
      this.elements.submitBtn &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    ) {
      this.elements.submitBtn.addEventListener(
        'touchend',
        (e) => {
          e.preventDefault();
          if (!this.isSubmitting) {
            this.elements.submitBtn.click();
          }
        },
        { passive: false }
      );
    }
  }

  // Handle input focus
  onInputFocus(input) {
    const container = this.findFieldContainer(input);
    if (container) {
      container.classList.add('focused');
    }
  }

  // Handle input change
  onInputChange(input) {
    const container = this.findFieldContainer(input);
    if (container) {
      container.classList.remove('focused');
    }
  }

  // Find the field container using CSS module classes
  findFieldContainer(field) {
    // Try to find using CSS module classes first
    if (this.config.cssClasses.formGroup) {
      const container = field.closest(
        `[class*="${this.config.cssClasses.formGroup}"]`
      );
      if (container) return container;
    }

    // Fallback to conventional class names
    return (
      field.closest('.formGroup') ||
      field.closest('[class*="formGroup"]') ||
      field.closest('.form-group')
    );
  }

  // Validate individual field
  validateField(field) {
    const isValid = field.checkValidity();
    const container = this.findFieldContainer(field);

    if (!isValid) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      this.showFieldError(field, container);
    } else {
      field.classList.add('valid');
      field.classList.remove('invalid');
      this.hideFieldError(container);
    }

    return isValid;
  }

  // Clear field error state
  clearFieldError(field) {
    field.classList.remove('invalid');
    const container = this.findFieldContainer(field);
    this.hideFieldError(container);
  }

  // Show field-specific error message
  showFieldError(field, container) {
    if (!container) return;

    let errorMsg = container.querySelector('.field-error');
    if (!errorMsg) {
      errorMsg = document.createElement('div');
      errorMsg.className = 'field-error';
      container.appendChild(errorMsg);
    }

    const message =
      field.validationMessage ||
      this.config.translations?.validation?.required ||
      'This field is required';

    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }

  // Hide field error message
  hideFieldError(container) {
    if (!container) return;

    const errorMsg = container.querySelector('.field-error');
    if (errorMsg) {
      errorMsg.style.display = 'none';
    }
  }

  // Validate entire form
  validateForm() {
    const requiredFields = this.elements.form.querySelectorAll(
      'input[required], select[required], textarea[required]'
    );

    let isValid = true;
    const invalidFields = [];

    requiredFields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
        invalidFields.push(field);
      }
    });

    if (!isValid && invalidFields.length > 0) {
      // Focus on first invalid field
      invalidFields[0].focus();
    }

    return isValid;
  }

  // Handle form submission
  async handleSubmit(e) {
    e.preventDefault();

    if (this.isSubmitting) {
      this.log('warn', 'Form submission already in progress');
      return;
    }

    this.log('info', 'Form submission started');

    if (!this.elements.form || !this.elements.submitBtn) {
      this.log('error', 'Form or submit button not available');
      return;
    }

    // Validate form
    if (!this.validateForm()) {
      this.log('info', 'Form validation failed');
      this.showValidationError();
      return;
    }

    this.log('info', 'Form validation passed');

    // Hide any previous messages
    this.hideMessage();

    // Set loading state
    this.setLoadingState(true);
    this.isSubmitting = true;

    try {
      const formData = new FormData(this.elements.form);
      this.log('info', `Sending request to: ${this.elements.form.action}`);

      const response = await fetch(this.elements.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      this.log('info', `Response status: ${response.status}`);

      if (response.ok) {
        this.log('info', 'Form submitted successfully');
        await this.handleSuccessResponse(response);
      } else {
        const errorData = await this.extractErrorData(response);
        this.log('error', `Server error: ${response.status}`, errorData);
        throw new Error(`Server error: ${response.status}`);
      }
    } catch (error) {
      this.log('error', 'Submission error:', error);
      this.handleSubmissionError(error);
    } finally {
      this.setLoadingState(false);
      this.isSubmitting = false;
    }
  }

  // Handle successful response
  async handleSuccessResponse(response) {
    this.showSuccessMessage();
    this.elements.form.reset();
    this.clearAllValidation();

    // Optional: trigger custom success event
    this.elements.form.dispatchEvent(
      new CustomEvent('form:success', {
        detail: { response },
      })
    );
  }

  // Extract error data from response
  async extractErrorData(response) {
    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (e) {
      return null;
    }
  }

  // Handle submission error
  handleSubmissionError(error) {
    this.showErrorMessage();

    // Optional: trigger custom error event
    this.elements.form.dispatchEvent(
      new CustomEvent('form:error', {
        detail: { error },
      })
    );
  }

  // Set loading state for the submit button
  setLoadingState(isLoading) {
    if (!this.elements.submitBtn) return;

    this.elements.submitBtn.disabled = isLoading;

    if (isLoading) {
      if (this.elements.btnText) this.elements.btnText.style.display = 'none';
      if (this.elements.btnLoading)
        this.elements.btnLoading.style.display = 'flex';
      this.elements.submitBtn.classList.add('loading');
    } else {
      if (this.elements.btnText) this.elements.btnText.style.display = 'block';
      if (this.elements.btnLoading)
        this.elements.btnLoading.style.display = 'none';
      this.elements.submitBtn.classList.remove('loading');
    }
  }

  // Show validation error message
  showValidationError() {
    const message =
      this.config.translations?.validation?.completeRequired ||
      'Please complete all required fields before submitting.';

    this.showMessage(message, 'error', '⚠');
  }

  // Show success message
  showSuccessMessage() {
    const message =
      this.config.translations?.validation?.submitSuccess ||
      'Thank you! Your message has been sent successfully. I will respond as soon as possible.';

    this.showMessage(message, 'success', '✓');
  }

  // Show error message
  showErrorMessage(customMessage = null) {
    const message =
      customMessage ||
      this.config.translations?.validation?.submitError ||
      'There was an error sending the message. Please try again or contact directly via email.';

    this.showMessage(message, 'error', '⚠');
  }

  // Show configuration error
  showConfigurationError() {
    const message =
      'Form configuration error. Please contact the administrator.';
    this.showMessage(message, 'error', '⚠');
  }

  // Generic method to show messages
  showMessage(text, type, icon) {
    if (!this.elements.message) return;

    this.elements.message.innerHTML = `
      <span class="statusIcon">${icon}</span>
      ${text}
    `;

    this.elements.message.className = `status-message ${type}`;
    this.elements.message.style.display = 'flex';

    // Auto-hide after delay
    if (this.config.autoHideDelay > 0) {
      setTimeout(() => this.hideMessage(), this.config.autoHideDelay);
    }
  }

  // Hide message
  hideMessage() {
    if (!this.elements.message) return;
    this.elements.message.style.display = 'none';
  }

  // Clear all validation states
  clearAllValidation() {
    const fields = this.elements.form.querySelectorAll(
      'input, select, textarea'
    );
    fields.forEach((field) => {
      field.classList.remove('valid', 'invalid');
    });

    const errorMsgs = this.elements.form.querySelectorAll('.field-error');
    errorMsgs.forEach((msg) => (msg.style.display = 'none'));
  }

  // Setup message observer for auto-hide functionality
  setupMessageObserver() {
    if (!this.elements.message) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          if (this.elements.message.style.display === 'flex') {
            // Message is now visible, setup auto-hide if configured
            if (this.config.autoHideDelay > 0) {
              setTimeout(() => this.hideMessage(), this.config.autoHideDelay);
            }
          }
        }
      });
    });

    observer.observe(this.elements.message, { attributes: true });
  }

  // Logging utility
  log(level, message, ...args) {
    if (!this.config.enableLogging) return;

    const prefix = 'ContactForm:';
    switch (level) {
      case 'error':
        console.error(prefix, message, ...args);
        break;
      case 'warn':
        console.warn(prefix, message, ...args);
        break;
      case 'info':
        console.log(prefix, message, ...args);
        break;
      default:
        console.log(prefix, message, ...args);
    }
  }

  // Cleanup method
  destroy() {
    // Remove event listeners
    if (this.elements.form) {
      this.elements.form.removeEventListener('submit', this.handleSubmit);
    }

    // Clean up references
    this.elements = {};
    this.config = {};
  }

  // Static method to create and initialize form
  static init(config = {}) {
    return new ContactForm(config);
  }
}

// Clase principal ContactForm
