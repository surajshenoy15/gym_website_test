// MAIN.JS
document.addEventListener("DOMContentLoaded", () => {
    // Lucide Icons
    if (window.lucide) lucide.createIcons();

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Loader (optional)
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.classList.add("hidden");
        });
    }
});
