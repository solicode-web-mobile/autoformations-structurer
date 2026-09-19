// Logique du composant des onglets (Tabs)
function tabsComponentLogic() {
    return {
        activeTab: window.currentTabId || 'html',
        tabs: [
            { id: 'html', label: 'HTML' },
            { id: 'css', label: 'CSS' },
            { id: 'js', label: 'JavaScript' },
            { id: 'php', label: 'PHP' },
            { id: 'index.php', label: 'index.php' }
        ].filter(tab => window.exerciseData && tab.id in window.exerciseData),
        init() {
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
