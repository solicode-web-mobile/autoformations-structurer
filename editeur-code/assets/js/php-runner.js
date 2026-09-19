// Enregistrer le composant Alpine.js pour la gestion du PHP
document.addEventListener('alpine:init', () => {
    Alpine.data('phpComponent', () => ({
        isLoading: true,
        buttonText: 'Chargement WASM...',
        php: null,
        hasPhp: window.hasPhpCode,
        
        async init() {
            if (!this.hasPhp) return; // Sprint 7 : Ne pas charger WASM si inutile

            try {
                // Chargement de PHP-WASM depuis l'URL fournie (qui fonctionne localement sans bundler)
                const { PhpWeb } = await import('https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs');
                
                // Création du runtime PHP
                this.php = new PhpWeb();

                // Intercepter la sortie standard (echo, print)
                this.php.addEventListener('output', (event) => {
                    this.phpOutputBuffer = (this.phpOutputBuffer || '') + event.detail;
                    const consoleEl = document.getElementById('php-console');
                    if (consoleEl) {
                        // event.detail contient directement le texte dans ce module
                        consoleEl.textContent += event.detail;
                    }
                });
                
                // Intercepter les erreurs PHP
                this.php.addEventListener('error', (event) => {
                    const consoleEl = document.getElementById('php-console');
                    if (consoleEl) {
                        consoleEl.textContent += '\n[Erreur PHP] ' + event.detail;
                    }
                });

                // Attendre que PHP soit prêt avant d'activer le bouton
                this.php.addEventListener('ready', () => {
                    this.isLoading = false;
                    this.buttonText = 'Exécuter PHP';
                });
                
                // Écouter la demande d'exécution en direct
                document.addEventListener('request-php-execution', () => {
                    if (this.debounceTimer) clearTimeout(this.debounceTimer);
                    this.debounceTimer = setTimeout(() => {
                        this.runPhpSilent();
                    }, 500); // 500ms debounce
                });
                
            } catch (err) {
                this.buttonText = 'Erreur chargement';
                console.error("Erreur d'initialisation de PHP-WASM :", err);
            }
        },
        
        async runPhpSilent() {
            if (this.isLoading || !this.php) return;
            this.phpOutputBuffer = '';
            // Remplacer stdout temporairement pour ne pas polluer la console noire
            const oldOutput = this.php.listeners ? this.php.listeners['output'] : null;
            
            try {
                let code = window.exerciseData ? window.exerciseData['index.php'] : '';
                await this.php.run(code);
                document.dispatchEvent(new CustomEvent('php-executed', {
                    detail: { html: this.phpOutputBuffer || '' }
                }));
            } catch (err) {
                console.error("Erreur PHP en direct :", err);
            }
        },
        
        async runPhp() {
            if (this.isLoading || !this.php) return;
            
            this.buttonText = 'Exécution...';
            this.isLoading = true;
            this.phpOutputBuffer = '';
            
            const consoleEl = document.getElementById('php-console');
            let isCliMode = window.currentTabId === 'php';
            let code = '';

            if (isCliMode) {
                code = window.exerciseData.php || '';
                if (consoleEl) consoleEl.textContent = '> php script.php\n\n';
            } else {
                code = window.exerciseData['index.php'] || '';
                if (consoleEl) consoleEl.textContent = '> php index.php\n\n';
            }
            
            try {
                await this.php.run(code);
                
                if (!isCliMode) {
                    // Mode Web : on met à jour la preview
                    document.dispatchEvent(new CustomEvent('php-executed', {
                        detail: { html: this.phpOutputBuffer || '' }
                    }));
                    if (consoleEl) consoleEl.textContent += '\n\n> [Processus terminé - Aperçu mis à jour]';
                } else {
                    // Mode CLI : on laisse la sortie dans la console
                    if (consoleEl) consoleEl.textContent += '\n\n> [Processus terminé]';
                }
            } catch (err) {
                if (consoleEl) consoleEl.textContent += '\n\n[Erreur fatale]\n' + err.message;
            } finally {
                this.isLoading = false;
                this.buttonText = 'Exécuter PHP';
            }
        }
    }));
});
