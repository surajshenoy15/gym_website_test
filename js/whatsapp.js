// WHATSAPP.JS
function sendWhatsAppMessage() {
    const goal = document.getElementById("goalSelect").value;

    const message = `Hello Weapon Fitness 2, I am interested in your gym and my primary fitness goal is ${goal}. Could you please share more details on suitable programs?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919916577094?text=${encoded}`);
}
