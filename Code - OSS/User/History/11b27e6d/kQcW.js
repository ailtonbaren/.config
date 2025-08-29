document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');

    if (!sections.length) {
        return;
    }

    const observerOptions = {
        root: null, // usa o viewport como a área de intersecção
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' para ativar a animação CSS
                entry.target.classList.add('is-visible');
                
                // Para de "observar" o elemento para que a animação não se repita
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Inicia a observação para cada seção
    sections.forEach(section => {
        observer.observe(section);
    });
});