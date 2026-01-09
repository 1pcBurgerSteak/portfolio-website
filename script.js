// 1. Existing Slider Logic
function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.getElementsByClassName('slide');
    let activeIndex = 0;

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            activeIndex = i;
            if (slides[i].tagName === 'VIDEO') {
                slides[i].pause();
                slides[i].currentTime = 0;
            }
            slides[i].classList.remove('active');
            break;
        }
    }

    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    const nextSlide = slides[newIndex];
    nextSlide.classList.add('active');

    if (nextSlide.tagName === 'VIDEO') {
        nextSlide.play();
    }
}

// 2. Fixed Lightbox Logic (Event Delegation)
document.addEventListener('click', function (e) {
    // Check if the clicked element is an image with the class 'slide'
    if (e.target.classList.contains('slide') && e.target.tagName === 'IMG') {
        openLightbox(e.target.src);
    }
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        // Prevent scrolling while lightbox is open
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    // Restore scrolling
    document.body.style.overflow = 'auto';
}

// Close on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});