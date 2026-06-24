document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Sécurité : on vérifie que les éléments existent sur la page avant d'ajouter l'écouteur
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
});