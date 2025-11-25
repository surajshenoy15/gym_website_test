// FORMS.JS
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fields = form.querySelectorAll("input, textarea");
        let valid = true;

        fields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add("border-red-500");
                valid = false;
            } else {
                field.classList.remove("border-red-500");
            }
        });

        if (!valid) {
            alert("Please fill all required fields.");
            return;
        }

        alert("Your message has been submitted. We will contact you shortly.");
        form.reset();
    });
});
