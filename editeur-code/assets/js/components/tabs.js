// Logique du composant des onglets (Tabs)
function tabsComponentLogic() {
    return {
        activeTab: window.currentTabId || 'html',
        tabs: [],
        init() {
            // Mettre à jour les onglets lors de l'initialisation ou de la réception des données
            const updateTabs = () => {
                this.tabs = [
                    { id: 'html', label: 'HTML' },
                    { id: 'css', label: 'CSS' },
                    { id: 'js', label: 'JavaScript' },
                    { id: 'php', label: 'PHP' },
                    { id: 'index.php', label: 'index.php' }
                ].filter(tab => window.exerciseData && tab.id in window.exerciseData);
                this.activeTab = window.currentTabId || (this.tabs.length > 0 ? this.tabs[0].id : 'html');
            };

            // Initialiser avec les données actuelles (qui peuvent être partielles)
            updateTabs();

            // Écouter l'événement indiquant que les données asynchrones sont prêtes
            document.addEventListener('exercise-data-ready', () => {
                updateTabs();
            });

            // On observe les changements d'onglets pour prévenir Monaco Editor plus tard
            this.$watch('activeTab', (value) => {
                console.log(`[UI] Changement d'onglet vers : ${value}`);
                // Cet événement sera écouté par le composant éditeur (Sprint 2)
                document.dispatchEvent(new CustomEvent('editor-tab-changed', {
                    detail: { language: value }
                }));
            });
        }
    };
}
