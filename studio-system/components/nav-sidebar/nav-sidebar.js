/* ============================================
   STUDIO SYSTEM — Nav Sidebar JS
   Match: cabanana.pt .menu-selector / .nav-selectors
   Left: div with "MENU" text opens overlay
   Right: up/down arrows scroll between sections
   ============================================ */

class NavSidebar {
  constructor() {
    // Menu trigger — cabanana uses a div, not a button
    this.menuTrigger = document.getElementById('menu-trigger');
    this.menuOverlay = document.getElementById('menu-overlay');
    this.menuClose = document.getElementById('menu-close');
    this.scrollUp = document.getElementById('scroll-up');
    this.scrollDown = document.getElementById('scroll-down');
    this.sections = document.querySelectorAll('.section');
    this.currentSection = 0;
    this.isOverlayOpen = false;

    this._bind();
  }

  _bind() {
    // Menu open/close — MENU text is a div, not button
    if (this.menuTrigger) {
      this.menuTrigger.addEventListener('click', () => this._openMenu());
      this.menuTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') this._openMenu();
      });
    }
    this.menuClose?.addEventListener('click', () => this._closeMenu());
    this.menuOverlay?.addEventListener('click', (e) => {
      if (e.target === this.menuOverlay) this._closeMenu();
    });

    // Scroll arrows
    this.scrollUp?.addEventListener('click', () => this._scrollToSection(this.currentSection - 1));
    this.scrollDown?.addEventListener('click', () => this._scrollToSection(this.currentSection + 1));

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOverlayOpen) this._closeMenu();
    });

    // Track current section via IntersectionObserver
    if (this.sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = Array.from(this.sections).indexOf(entry.target);
          }
        });
      }, { threshold: 0.5 });
      this.sections.forEach(s => observer.observe(s));
    }
  }

  _openMenu() {
    this.isOverlayOpen = true;
    this.menuOverlay.classList.add('is-open');
    this.menuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.menuClose?.focus();
  }

  _closeMenu() {
    this.isOverlayOpen = false;
    this.menuOverlay?.classList.remove('is-open');
    this.menuOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  _scrollToSection(index) {
    if (index >= 0 && index < this.sections.length) {
      this.sections[index].scrollIntoView({ behavior: 'smooth' });
      this.currentSection = index;
    }
  }
}

export default NavSidebar;
