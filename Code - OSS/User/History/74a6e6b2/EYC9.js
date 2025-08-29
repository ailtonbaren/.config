// in menu.js
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('hidden');

    menuLinks.classList.toggle('mobile-menu');
});
