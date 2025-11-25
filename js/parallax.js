// PARALLAX.JS
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap !== "undefined" && document.getElementById("heroImg")) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#heroImg", {
            scale: 1.2,
            y: 60,
            ease: "none",
            scrollTrigger: {
                trigger: "#heroImg",
                start: "top top",
                scrub: true
            }
        });
    }
});
