if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

// in menu.js
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('hidden');
});