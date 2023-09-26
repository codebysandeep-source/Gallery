//open image lightbox
function openImage(imgElement) {
    const galleryImagePath = imgElement.getAttribute('src');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightbox.style.display = 'block';
    lightbox.style.backgroundImage = `url(${galleryImagePath})`;
    lightboxImage.style.backgroundImage = `url(${galleryImagePath})`;
    // lightboxImage.src = galleryImagePath;
}

//close
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

//pre & next
let currentImageIndex = -1;
const images = document.querySelectorAll('.gallery-image');
function move(step) {
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;
    const nextImage = images[currentImageIndex];
    openImage(nextImage);
}

//close if click outside the image
lightbox.addEventListener('click', function(event) {
    const lightboxImage1 = document.getElementById('lightboxImage');
    if (event.target !== lightboxImage1) {
        closeLightbox();
    }
});
