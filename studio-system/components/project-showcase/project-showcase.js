/* ============================================
   STUDIO SYSTEM — Project Showcase JS
   ============================================ */

class ProjectShowcase {
  constructor(el) {
    this.el = el;
    this.track = el.querySelector('.project-showcase__track');
    this.dots = el.querySelectorAll('.project-showcase__dot');
    this._bind();
  }

  _bind() {
    const prev = this.el.querySelector('.project-showcase__arrow--prev');
    const next = this.el.querySelector('.project-showcase__arrow--next');

    if (prev) {
      prev.addEventListener('click', () => this._scroll(-1));
    }
    if (next) {
      next.addEventListener('click', () => this._scroll(1));
    }

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this._goToSlide(i));
    });

    if (this.track) {
      this.track.addEventListener('scroll', () => this._updateDots(), { passive: true });
    }
  }

  _scroll(dir) {
    if (!this.track) return;
    const cardWidth = this.track.querySelector('.project-card')?.offsetWidth || window.innerWidth * 0.7;
    this.track.scrollBy({ left: dir * (cardWidth + 32), behavior: 'smooth' });
  }

  _goToSlide(index) {
    if (!this.track) return;
    const cards = this.track.querySelectorAll('.project-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  }

  _updateDots() {
    if (!this.track) return;
    const cards = this.track.querySelectorAll('.project-card');
    const trackRect = this.track.getBoundingClientRect();
    let closest = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.left - trackRect.left);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === closest);
    });
  }
}

export default ProjectShowcase;
