let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
let logo = document.getElementsByClassName('logo')[0];
let logo2 = document.getElementsByClassName('logo')[1];
let carouselInner = document.getElementsByClassName('carousel-inner')[0];

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    logo.src = 'image/light-mode-logo.png';
    logo2.src = 'image/light-mode-logo.png';
    carouselInner.style.opacity = '100%';
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    logo.src = 'image/dark-mode-logo.png';
    logo2.src = 'image/dark-mode-logo.png';
    carouselInner.style.opacity = '90%';
}

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== "active" ? enableLightmode() : disableLightmode();
});


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault()
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
    document.getElementById('contactForm').reset();
});