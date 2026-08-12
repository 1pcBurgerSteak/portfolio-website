// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navRight = document.getElementById('nav-right');

if (hamburger && navRight) {
  hamburger.addEventListener('click', () => {
    const isOpen = navRight.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

function closeMenu() {
  if (!hamburger || !navRight) return;

  navRight.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (e) => {
  if (
    hamburger &&
    navRight &&
    !hamburger.contains(e.target) &&
    !navRight.contains(e.target)
  ) {
    closeMenu();
  }
});


// ── GAME CARD SLIDER ──
function initSliders() {
  document.querySelectorAll('.game-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const dotsEl = slider.querySelector('.slider-dots');

    if (!dotsEl || !slides.length) return;

    dotsEl.setAttribute('aria-label', 'Choose slide');

    slides.forEach((_, i) => {
      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');

      dot.setAttribute(
        'aria-label',
        `Show item ${i + 1} of ${slides.length}`
      );

      dot.setAttribute(
        'aria-pressed',
        i === 0 ? 'true' : 'false'
      );

      dot.addEventListener('click', () => {
        goToSlide(slider, i);
      });

      dotsEl.appendChild(dot);
    });

    const prev = slider.querySelector('.slider-btn.prev');
    const next = slider.querySelector('.slider-btn.next');

    if (prev) {
      prev.setAttribute('aria-label', 'Previous item');
    }

    if (next) {
      next.setAttribute('aria-label', 'Next item');
    }
  });
}


function goToSlide(slider, index) {
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.slider-dot');
  const total = slides.length;

  if (!total) return;

  const current =
    parseInt(slider.dataset.index, 10) || 0;

  const currentSlide = slides[current];

  // Stop video when leaving a video slide.
  if (
    currentSlide &&
    currentSlide.classList.contains('slide-video')
  ) {
    const iframe = currentSlide.querySelector('iframe');

    if (iframe) {
      iframe.removeAttribute('src');
    }
  }

  // Wrap around when reaching either end.
  index = ((index % total) + total) % total;

  slider.dataset.index = String(index);

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    const active = i === index;

    dot.classList.toggle('active', active);
    dot.setAttribute(
      'aria-pressed',
      String(active)
    );
  });

  // Load YouTube only when arriving at the video slide.
  const newSlide = slides[index];

  if (
    newSlide &&
    newSlide.classList.contains('slide-video')
  ) {
    const iframe = newSlide.querySelector('iframe');

    if (iframe && iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
    }
  }
}


function slideCard(btn, dir) {
  const slider = btn.closest('.game-slider');

  if (!slider) return;

  const current =
    parseInt(slider.dataset.index, 10) || 0;

  goToSlide(slider, current + dir);
}


// ── LIGHTBOX ──
let lightboxImages = [];
let lightboxIndex = 0;
let lastFocusedElement = null;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption =
  document.getElementById('lightbox-caption');


// Get only the image slides from the current game.
function collectLightboxImages(slider) {
  return Array.from(
    slider.querySelectorAll(
      '.slide:not(.slide-video) img'
    )
  );
}


// Update the image currently shown in the lightbox.
function updateLightbox() {
  if (
    !lightboxImg ||
    !lightboxImages.length
  ) {
    return;
  }

  const img = lightboxImages[lightboxIndex];

  lightboxImg.src = img.src;
  lightboxImg.alt =
    img.alt || 'Gameplay screenshot';

  if (lightboxCaption) {
    lightboxCaption.textContent =
      `${lightboxIndex + 1} of ${lightboxImages.length} · ` +
      `${img.alt || 'Gameplay screenshot'}`;
  }
}


// Open the lightbox for a specific image.
function openLightbox(img) {
  if (!lightbox || !img) return;

  const slider =
    img.closest('.game-slider');

  // Only show images belonging to this game card.
  lightboxImages = slider
    ? collectLightboxImages(slider)
    : [img];

  lightboxIndex =
    lightboxImages.indexOf(img);

  if (lightboxIndex === -1) {
    lightboxIndex = 0;
  }

  // Remember what had focus before opening.
  lastFocusedElement =
    document.activeElement;

  updateLightbox();

  lightbox.classList.add('open');
  lightbox.setAttribute(
    'aria-hidden',
    'false'
  );

  // Prevent page scrolling behind the lightbox.
  document.body.style.overflow = 'hidden';

  // Put keyboard focus on the close button.
  const closeButton =
    lightbox.querySelector(
      '.lightbox-close'
    );

  if (closeButton) {
    closeButton.focus();
  }
}


// Close the lightbox.
function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove('open');

  lightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.style.overflow = '';

  if (lightboxImg) {
    lightboxImg.src = '';
  }

  // Return focus to the image that opened it.
  if (
    lastFocusedElement &&
    typeof lastFocusedElement.focus === 'function'
  ) {
    lastFocusedElement.focus();
  }
}


// Move between images in the lightbox.
function lightboxMove(dir) {
  if (!lightboxImages.length) return;

  lightboxIndex =
    (
      lightboxIndex +
      dir +
      lightboxImages.length
    ) % lightboxImages.length;

  updateLightbox();
}


// ── KEYBOARD CONTROLS ──
document.addEventListener('keydown', e => {
  if (
    !lightbox ||
    !lightbox.classList.contains('open')
  ) {
    return;
  }

  if (e.key === 'Escape') {
    e.preventDefault();
    closeLightbox();
  }

  else if (e.key === 'ArrowRight') {
    e.preventDefault();
    lightboxMove(1);
  }

  else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    lightboxMove(-1);
  }
});


// ── LIGHTBOX BACKGROUND CLICK ──
// Only clicking the dark background closes it.
// Clicking the image or controls does not.
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}


// ── IMAGE ACCESSIBILITY ──
// Images can be opened using:
// - Mouse click
// - Enter
// - Space
document
  .querySelectorAll(
    '.slide:not(.slide-video) img'
  )
  .forEach(img => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');

    img.addEventListener('click', () => {
      openLightbox(img);
    });

    img.addEventListener('keydown', e => {
      if (
        e.key === 'Enter' ||
        e.key === ' '
      ) {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });


// ── INITIALIZE ──
initSliders();