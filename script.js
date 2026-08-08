// ================= TYPING EFFECT =================
const text = [
    "Video Editor 🎬",
    "Logo Designer 🎨",
    "Banner Creator 🚀"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
    const el = document.getElementById("typing");

    if (!el) return;

    if (!isDeleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } 
    else if (isDeleting && j >= 0) {
        current = text[i].substring(0, j--);
    }

    el.innerHTML = current;

    // typing speed control
    let speed = isDeleting ? 80 : 150;

    if (j === text[i].length) {
        isDeleting = true;
        speed = 1000; // pause at full text
    }

    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// ================= EMAIL JS =================
document.addEventListener("DOMContentLoaded", function () {

    // init EmailJS
    emailjs.init("62KuctRvN9v5M3DxM");

    const form = document.getElementById("contact-form");

    if (!form) {
        console.log("Form not found ❌");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = form.querySelector("button");
        btn.innerText = "Sending... ⏳";

        emailjs.sendForm(
            "service_iql7qas",
            "template_rt16qr6",
            this
        )
        .then(() => {
            btn.innerText = "Send Message 🚀";
            alert("Message Sent Successfully 😎");
            form.reset();
        })
        .catch((error) => {
            btn.innerText = "Send Message 🚀";
            alert("Failed 😢 " + JSON.stringify(error));
        });
    });

});
