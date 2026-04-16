/* ============================================
   Portfolio Slider — Arrow Navigation + Active State
   ============================================ */

export class PortfolioSlider {
  constructor(el) {
    this.el = el;
    this.track = el.querySelector('.portfolio-slider__track');
    this.slides = Array.from(el.querySelectorAll('.portfolio-slider__slide'));
    this.nextBtn = el.querySelector('.portfolio-slider__arrow--next');
    this.dotsContainer = el.querySelector('.portfolio-slider__dots');

    if (!this.track || !this.slides.length) return;

    this.currentIndex = 0;
    this.maxIndex = this.slides.length - 1;

    this._buildDots();
    this._updateActiveSlide(0, false);

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard navigation
    this.track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
        this._focusCurrentSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
        this._focusCurrentSlide();
      }
    });

    // Update active slide on scroll
    this.track.addEventListener('scroll', this._onScroll.bind(this), { passive: true });

    // Dot click
    if (this.dotsContainer) {
      this.dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.portfolio-slider__dot');
        if (!dot) return;
        const index = parseInt(dot.dataset.index, 10);
        this.goTo(index);
      });
    }
  }

  _buildDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    this.slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'portfolio-slider__dot';
      dot.dataset.index = i;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      this.dotsContainer.appendChild(dot);
    });
    this.dots = Array.from(this.dotsContainer.querySelectorAll('.portfolio-slider__dot'));
  }

  _onScroll() {
    const trackRect = this.track.getBoundingClientRect();
    const scrollLeft = this.track.scrollLeft;
    const slideWidth = this.slides[0] ? this.slides[0].offsetWidth : trackRect.width;
    const gap = 0; // scroll-snap slides have no gap in our impl
    const rawIndex = Math.round(scrollLeft / (slideWidth + gap));
    const index = Math.max(0, Math.min(rawIndex, this.maxIndex));
    if (index !== this.currentIndex) {
      this._updateActiveSlide(index, false);
    }
  }

  _updateActiveSlide(index, animate = true) {
    this.currentIndex = index;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });

    if (this.dots) {
      this.dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });
    }

    // Update arrow disabled state
    if (this.nextBtn) {
      this.nextBtn.disabled = index === this.maxIndex;
      this.nextBtn.style.opacity = index === this.maxIndex ? '0.3' : '';
    }
  }

  next() {
    const newIndex = Math.min(this.maxIndex, this.currentIndex + 1);
    this.goTo(newIndex);
  }

  goTo(index) {
    const slide = this.slides[index];
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const gap = 0;
    const offset = slide.offsetLeft - (index === 0 ? parseFloat(getComputedStyle(this.track).paddingLeft) || 0 : 0);
    this.track.scrollTo({ left: offset, behavior: 'smooth' });

    this._updateActiveSlide(index);
  }

  _focusCurrentSlide() {
    const current = this.slides[this.currentIndex];
    if (current) {
      current.focus({ preventScroll: true });
    }
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.portfolio-slider').forEach(el => {
    new PortfolioSlider(el);
  });
});
