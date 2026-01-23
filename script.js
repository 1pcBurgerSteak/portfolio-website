let gallery = [];
let currentIndex = 0;

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-thumb')) {
        gallery = JSON.parse(e.target.dataset.gallery);
        currentIndex = 0;
        openLightbox();
    }
});

function openLightbox() {
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
    showMedia();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';

    const video = document.getElementById('lightbox-video');
    video.pause();
}

function changeMedia(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = gallery.length - 1;
    if (currentIndex >= gallery.length) currentIndex = 0;
    showMedia();
}

function showMedia() {
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');

    img.style.display = 'none';
    video.style.display = 'none';
    video.pause();

    const src = gallery[currentIndex];

    if (src.endsWith('.mp4')) {
        video.src = src;
        video.style.display = 'block';
        video.play();
    } else {
        img.src = src;
        img.style.display = 'block';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
