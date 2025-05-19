const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const links = document.querySelectorAll('#nav-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
