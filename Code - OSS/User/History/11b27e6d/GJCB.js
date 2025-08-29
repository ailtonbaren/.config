document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

    if (sectionsToAnimate.length === 0) {
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // A função que será chamada quando uma seção entrar ou sair da tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Verifica se a seção está visível na tela (isIntersecting)
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' para ativar a transição CSS
                entry.target.classList.add('is-visible');

                // (Opcional) Depois que a animação acontece uma vez, para de observar o elemento
                // Isso melhora a performance, pois a animação não tentará rodar de novo.
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Manda o observer "observar" cada uma das seções
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
