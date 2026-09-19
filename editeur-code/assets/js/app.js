// Initialisation de l'application Alpine.js
document.addEventListener('alpine:init', () => {
    // Enregistrement du composant des onglets
    Alpine.data('tabsComponent', tabsComponentLogic);
});
