/* ============================================
   STUDIO SYSTEM — Form JS
   ============================================ */

class EnquiryForm {
  constructor(formEl) {
    this.form = formEl;
    this.submitBtn = formEl.querySelector('[type="submit"]');
    this.successEl = formEl.querySelector('.form-success');
    this.action = formEl.dataset.action || '#';

    this._onSubmit = this._onSubmit.bind(this);
    this.form.addEventListener('submit', this._onSubmit);
  }

  async _onSubmit(e) {
    e.preventDefault();
    if (!this._validate()) return;

    this.submitBtn.disabled = true;
    this.submitBtn.textContent = 'Sending…';

    const data = new FormData(this.form);

    try {
      const res = await fetch(this.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        this.form.reset();
        this.successEl.classList.add('is-visible');
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      this._showServerError();
    } finally {
      this.submitBtn.disabled = false;
      this.submitBtn.textContent = 'Send Message';
    }
  }

  _validate() {
    let valid = true;
    const fields = this.form.querySelectorAll('[required]');
    fields.forEach(field => {
      const parent = field.closest('.form-field');
      if (!field.value.trim()) {
        parent.classList.add('has-error');
        valid = false;
      } else {
        parent.classList.remove('has-error');
      }
    });
    return valid;
  }

  _showServerError() {
    const errorEl = document.createElement('div');
    errorEl.className = 'form-error-global';
    errorEl.style.cssText = 'color:var(--color-error);font-size:var(--text-sm);margin-bottom:var(--space-4);';
    errorEl.textContent = 'Something went wrong. Please try again or email us directly.';
    this.form.insertBefore(errorEl, this.form.firstChild);
    setTimeout(() => errorEl.remove(), 5000);
  }
}

export default EnquiryForm;
