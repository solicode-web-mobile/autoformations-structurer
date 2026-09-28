// Récupération des paramètres d'URL (ex: ?html=...&css=...)
const urlParams = new URLSearchParams(window.location.search);

window.exerciseData = {};
let currentTabId = 'html'; // Valeur par défaut, mise à jour après chargement

async function loadExerciseData() {
    // Déterminer s'il y a des paramètres
    const hasAnyParam = Array.from(urlParams.keys()).length > 0;
    
    if (hasAnyParam) {
        const fetchParam = async (paramName) => {
            if (!urlParams.has(paramName)) return;
            const value = urlParams.get(paramName);
            if (value && (value.startsWith('http://') || value.startsWith('https://'))) {
                try {
                    const response = await fetch(value);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    window.exerciseData[paramName] = await response.text();
                } catch (e) {
                    window.exerciseData[paramName] = `/* Erreur de chargement du code : ${e.message} */\n// Vérifiez l'URL ou les paramètres CORS du serveur distant.`;
                }
            } else {
                window.exerciseData[paramName] = value;
            }
        };

        await Promise.all([
            fetchParam('html'),
            fetchParam('css'),
            fetchParam('js'),
            fetchParam('php'),
            fetchParam('index.php')
        ]);
        
        if (urlParams.has('activeTab')) window.exerciseData.activeTab = urlParams.get('activeTab');
    } else {
        // Valeurs par défaut si aucun paramètre
        window.exerciseData = {
            html: `<div class="container">\n  <h1>Bonjour le monde !</h1>\n  <p>Ceci est un test en direct.</p>\n</div>`,
            css: `.container {\n  padding: 20px;\n  text-align: center;\n}\n\nh1 {\n  color: #F97316;\n}`,
            js: `console.log("Prêt pour l'action !");`,
            php: `<?php\n// Écrivez votre code PHP ici\necho "Bienvenue dans l'éditeur PHP !";\n?>`,
            'index.php': `<?php\n  $titre = "Site Dynamique PHP";\n?>\n<h1><?= $titre ?></h1>`
        };
    }

    window.hasPhpCode = ('php' in window.exerciseData || 'index.php' in window.exerciseData);

    // Sauvegarde de l'état initial pour le bouton Réinitialiser
    window.initialExerciseData = Object.assign({}, window.exerciseData);

    // --- Sprint 12 : Sélection Dynamique de l'Onglet Actif ---
    let requestedTab = window.exerciseData.activeTab;
    // On s'assure que l'onglet demandé existe vraiment dans les données de l'exercice
    currentTabId = requestedTab && (requestedTab in window.exerciseData)
        ? requestedTab 
        : Object.keys(window.exerciseData).find(key => key !== 'activeTab') || 'html';

    window.currentTabId = currentTabId;

    // Déclencher un événement pour indiquer que les données sont prêtes (utilisé par live-preview)
    document.dispatchEvent(new CustomEvent('exercise-data-ready'));

    // Initialiser l'éditeur maintenant que les données sont chargées
    initMonacoEditor();
}

// Mapping des IDs d'onglets vers les langages reconnus par Monaco
const monacoLanguages = {
    'html': 'html',
    'css': 'css',
    'js': 'javascript',
    'php': 'php',
    'index.php': 'php'
};

// Fonction d'initialisation de Monaco Editor
function initMonacoEditor() {
    // Configuration de RequireJS pour trouver les fichiers Monaco sur le CDN
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
    
    require(['vs/editor/editor.main'], function() {
        const container = document.getElementById('monaco-editor-container');
        
        // Vider le conteneur (enlever le message de chargement)
        container.innerHTML = '';
        
        // Création de l'instance Monaco
        monacoEditorInstance = monaco.editor.create(container, {
            value: window.exerciseData[currentTabId],
            language: monacoLanguages[currentTabId],
            theme: 'vs-dark',
            automaticLayout: true, // Très important pour le responsive
            minimap: { enabled: false }, // Désactivé pour la "Ligne Claire" (moins de bruit visuel)
            fontSize: 15,
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            roundedSelection: false,
            wordWrap: "on"
        });
        
        // Écouter les événements de changement d'onglet (déclenchés par Alpine.js)
        document.addEventListener('editor-tab-changed', (e) => {
            const newTabId = e.detail.language;
            
            if (newTabId !== currentTabId && monacoLanguages[newTabId]) {
                // 1. Sauvegarder le code en cours de frappe dans notre objet
                window.exerciseData[currentTabId] = monacoEditorInstance.getValue();
                
                // 2. Mettre à jour l'onglet actif
                currentTabId = newTabId;
                window.currentTabId = newTabId;
                
                // 3. Informer Monaco du nouveau langage
                const newMonacoLang = monacoLanguages[newTabId];
                monaco.editor.setModelLanguage(monacoEditorInstance.getModel(), newMonacoLang);
                
                // 4. Injecter le code correspondant
                monacoEditorInstance.setValue(window.exerciseData[newTabId]);
            }
        });
        
        // Écouter l'événement de réinitialisation
        document.addEventListener('reset-editor', () => {
            // Restaurer les données initiales
            window.exerciseData = Object.assign({}, window.initialExerciseData);
            
            // Mettre à jour l'éditeur Monaco avec le code restauré de l'onglet actif
            monacoEditorInstance.setValue(window.exerciseData[currentTabId]);
            
            // Si on est sur un onglet Web (HTML/CSS/JS), on rafraîchit la preview
            if (['html', 'css', 'js', 'index.php'].includes(currentTabId)) {
                document.dispatchEvent(new CustomEvent('editor-code-changed', {
                    detail: { tabId: currentTabId }
                }));
            }
        });
        
        // Debounce timer pour l'exécution automatique
        let debounceTimer;

        // Écouter l'événement d'exécution manuelle globale (HTML/CSS/JS)
        document.addEventListener('request-code-execution', () => {
            document.dispatchEvent(new CustomEvent('editor-code-changed', {
                detail: { 
                    tabId: currentTabId, 
                    code: window.exerciseData[currentTabId]
                }
            }));
        });

        // (Préparation pour Sprint 3 & 4) Diffuser les changements de code
        monacoEditorInstance.onDidChangeModelContent(() => {
            const currentCode = monacoEditorInstance.getValue();
            // Mettre à jour les données locales en temps réel (sans exécuter)
            window.exerciseData[currentTabId] = currentCode;
            
            // Si Alpine existe et que l'auto-run est désactivé, on ne déclenche pas le refresh
            if (window.Alpine && window.Alpine.store('editor') && !window.Alpine.store('editor').autoRun) {
                return;
            }
            
            // Logique de Debounce (800ms) pour ne pas figer le navigateur
            if (debounceTimer) clearTimeout(debounceTimer);
            
            debounceTimer = setTimeout(() => {
                if (currentTabId === 'index.php') {
                    document.dispatchEvent(new CustomEvent('request-php-execution'));
                } else {
                    document.dispatchEvent(new CustomEvent('editor-code-changed', {
                        detail: { 
                            tabId: currentTabId, 
                            code: currentCode 
                        }
                    }));
                }
            }, 800);
        });

        // --- Sprint 6 : Ajustement Dynamique de la Hauteur sur Mobile ---
        const updateEditorHeight = () => {
            const section = container.closest('section');
            if (window.innerWidth < 768) { // Point de rupture "md" de Tailwind
                const contentHeight = monacoEditorInstance.getContentHeight();
                // ~2 lignes de sécurité (font 15px + interligne) = ~40px
                const securityMargin = 40; 
                // Hauteur des onglets
                const tabsHeight = section.querySelector('.flex.bg-gray-900').offsetHeight || 40;
                
                const totalHeight = contentHeight + securityMargin + tabsHeight;
                const maxHeight = window.innerHeight * 0.6; // Max 60% de l'écran
                
                section.style.flex = 'none';
                section.style.height = `${Math.min(totalHeight, maxHeight)}px`;
            } else {
                // Rétablir le comportement normal sur grand écran
                section.style.flex = '';
                section.style.height = '';
            }
            // Forcer Monaco à recalculer son layout immédiatement
            monacoEditorInstance.layout();
        };

        monacoEditorInstance.onDidContentSizeChange((e) => {
            if (e.contentHeightChanged) {
                updateEditorHeight();
            }
        });
        
        window.addEventListener('resize', updateEditorHeight);
        // Ajustement initial après le chargement
        setTimeout(updateEditorHeight, 50);
    });
}

// Variable globale pour stocker l'instance de Monaco
let monacoEditorInstance = null;

// Lancer le chargement asynchrone quand le DOM est prêt
document.addEventListener('DOMContentLoaded', loadExerciseData);
