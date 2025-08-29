// in menu.js
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    // Alterna a classe 'hidden' que controla a visibilidade
    menuLinks.classList.toggle('hidden');
    
    // Adiciona ou remove as classes de estilo para o menu mobile
    // para que não conflitem com o layout desktop.
    menuLinks.classList.toggle('mobile-menu'); 
});