/* ============================================
   STUDIO SYSTEM — Menu Overlay JS
   ============================================ */

class MenuOverlay {
  constructor(el) {
    this.el = el;
    this.closeBtn = el.querySelector('.menu-overlay__close');
    this.isOpen = false;

    this._onKeyDown = this._onKeyDown.bind(this);
    this._init();
  }

  _init() {
    this.closeBtn.addEventListener('click', () => this.close());
    document.addEventListener('keydown', this._onKeyDown);
  }

  open() {
    this.isOpen = true;
    this.el.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this.el.setAttribute('aria-hidden', 'false');
    this.closeBtn.focus();
  }

  close() {
    this.isOpen = false;
    this.el.classList.remove('is-open');
    document.body.style.overflow = '';
    this.el.setAttribute('aria-hidden', 'true');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  _onKeyDown(e) {
    if (e.key === 'Escape' && this.isOpen) {
      this.close();
    }
  }

  destroy() {
    document.removeEventListener('keydown', this._onKeyDown);
  }
}

export default MenuOverlay;
