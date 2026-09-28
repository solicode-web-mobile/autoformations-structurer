// Initialisation de l'application Alpine.js
document.addEventListener('alpine:init', () => {
    // État global pour l'éditeur
    Alpine.store('editor', {
        autoRun: localStorage.getItem('spartel_autorun') !== 'false',
        init() {
            // Sauvegarder automatiquement lors des changements
            Alpine.effect(() => {
                localStorage.setItem('spartel_autorun', this.autoRun);
            });
        }
    });

    // Enregistrement du composant des onglets
    Alpine.data('tabsComponent', tabsComponentLogic);
});
