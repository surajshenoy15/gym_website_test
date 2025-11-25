// LIGHTBOX.JS
function openLightbox(src) {
    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    if (img) img.src = src;
    if (box) box.style.display = "flex";
}

function closeLightbox() {
    const box = document.getElementById("lightbox");
    if (box) box.style.display = "none";
}
