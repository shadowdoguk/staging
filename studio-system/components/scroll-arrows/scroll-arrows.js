/* ============================================
   STUDIO SYSTEM — Scroll Arrows JS
   ============================================ */

class ScrollArrows {
  constructor(el) {
    this.el = el;
    this._bind();
  }

  _bind() {
    const up = this.el.querySelector('.scroll-arrow--up');
    const down = this.el.querySelector('.scroll-arrow--down');

    if (up) {
      up.addEventListener('click', () => {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
      });
    }

    if (down) {
      down.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      });
    }
  }
}

export default ScrollArrows;
