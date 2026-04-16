/* ============================================
   STUDIO SYSTEM — Home Page JS
   - Menu overlay open/close
   - Section scroll navigation
   - Portfolio carousel (up/down + pagination)
   ============================================ */
import NavSidebar from '../../components/nav-sidebar/nav-sidebar.js';

const sidebar = new NavSidebar();

// ── Portfolio Carousel ────────────────────────
const slides = document.querySelectorAll('.portfolio__slide');
const dots = document.querySelectorAll('.portfolio__dot');
const arrowUp = document.getElementById('portfolio-up');
const arrowDown = document.getElementById('portfolio-down');
let currentSlide = 0;
const totalSlides = slides.length;

function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides[currentSlide].classList.remove('is-active');
  dots[currentSlide].classList.remove('is-active');

  currentSlide = index;

  slides[currentSlide].classList.add('is-active');
  dots[currentSlide].classList.add('is-active');

  // Update arrow opacity (up arrow opacity 0.3 when at first)
  if (arrowUp) {
    arrowUp.style.opacity = currentSlide === 0 ? '0.3' : '1';
  }
  if (arrowDown) {
    arrowDown.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
  }
}

arrowUp?.addEventListener('click', () => goToSlide(currentSlide - 1));
arrowDown?.addEventListener('click', () => goToSlide(currentSlide + 1));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Initial arrow state
if (arrowUp) arrowUp.style.opacity = '0.3';
