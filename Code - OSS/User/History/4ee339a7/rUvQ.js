document.addEventListener("DOMContentLoaded", () => {
  const observers = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // anima só 1 vez
        }
      });
    },
    { threshold: 0.2 } // dispara quando 20% do elemento aparece
  );

  observers.forEach((el) => observer.observe(el));
});