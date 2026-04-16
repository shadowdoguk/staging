/* ============================================
   STUDIO SYSTEM — Header JS
   ============================================ */

class Header {
  constructor(el) {
    this.el = el;
    this.hamburger = el.querySelector('.header__hamburger');
    this.scrollThreshold = 80;

    this._onScroll = this._onScroll.bind(this);
    this._init();
  }

  _init() {
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._onScroll();
  }

  _onScroll() {
    if (window.scrollY > this.scrollThreshold) {
      this.el.classList.add('is-scrolled');
    } else {
      this.el.classList.remove('is-scrolled');
    }
  }

  setOverlayOpen(isOpen) {
    if (isOpen) {
      this.el.classList.add('is-overlay-open');
    } else {
      this.el.classList.remove('is-overlay-open');
    }
  }

  destroy() {
    window.removeEventListener('scroll', this._onScroll);
  }
}

export default Header;
