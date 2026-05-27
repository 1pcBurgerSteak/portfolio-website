// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navRight  = document.getElementById('nav-right');

hamburger.addEventListener('click', () => {
  const isOpen = navRight.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeMenu() {
  navRight.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navRight.contains(e.target)) closeMenu();
});

// ── GAME CARD SLIDER ──
function initSliders() {
  document.querySelectorAll('.game-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const dotsEl = slider.querySelector('.slider-dots');

    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(slider, i));
      dotsEl.appendChild(dot);
    });
  });
}

function goToSlide(slider, index) {
  const slides = slider.querySelectorAll('.slide');
  const dots   = slider.querySelectorAll('.slider-dot');
  const total  = slides.length;

  // Stop video on current slide by removing the src entirely
  const current = parseInt(slider.dataset.index) || 0;
  const currentSlide = slides[current];
  if (currentSlide && currentSlide.classList.contains('slide-video')) {
    const iframe = currentSlide.querySelector('iframe');
    if (iframe) iframe.removeAttribute('src'); // ← KEY FIX: remove, don't blank
  }

  // Wrap index
  index = ((index % total) + total) % total;
  slider.dataset.index = index;

  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i)   => d.classList.toggle('active', i === index));

  // Load YouTube only when arriving at the video slide
  const newSlide = slides[index];
  if (newSlide && newSlide.classList.contains('slide-video')) {
    const iframe = newSlide.querySelector('iframe');
    if (iframe && iframe.dataset.src) {
      iframe.src = iframe.dataset.src; // ← Always re-set from data-src
    }
  }
}

function slideCard(btn, dir) {
  const slider = btn.closest('.game-slider');
  const current = parseInt(slider.dataset.index) || 0;
  goToSlide(slider, current + dir);
}

// ── LIGHTBOX ──
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.querySelectorAll('.slide:not(.slide-video) img').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src));
});

initSliders();