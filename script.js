/* ========================== toggle icon nav bar ================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
} 

/* ========================== Dark Theme ================= */

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const themeLabel = document.getElementById('theme-label');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        checkbox.checked = currentTheme === 'light-mode';
        themeLabel.textContent = checkbox.checked ? '☀️' : '🌙';
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            themeLabel.textContent = '☀️'; // Ícone para o tema claro
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeLabel.textContent = '🌙'; // Ícone para o tema escuro
        }
    });
});

/* ========================== scroll section active link ================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* ========================== sticky navbar ================= */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========================== remove toggle icon and navbar ================= */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ========================== scroll reveal ================= */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio, .portfolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

/* ========================== typed text ================= */

const typed = new Typed('.multiple-text', {
    strings: ['Bacharel em Eng. de Software', 'Front-end Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
