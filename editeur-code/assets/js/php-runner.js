// Enregistrer le composant Alpine.js pour la gestion du PHP
document.addEventListener('alpine:init', () => {
    Alpine.data('phpComponent', () => ({
        isLoading: true,
        buttonText: 'Chargement WASM...',
        php: null,
        hasPhp: false,
        wasmInitialized: false,
        
        PhpWebClass: null,
        isExecutingCLI: false,
        
        init() {
            const initWasm = async () => {
                if (this.wasmInitialized) return;
                
                this.hasPhp = window.hasPhpCode;
                if (!this.hasPhp) {
                    this.isLoading = false;
                    return;
                }

                this.wasmInitialized = true;

                try {
                    // Chargement de PHP-WASM depuis l'URL fournie
                    const { PhpWeb } = await import('https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs');
                    this.PhpWebClass = PhpWeb;
                    
                    await this.refreshPhp();

                    this.isLoading = false;
                    this.buttonText = 'Exécuter PHP';
                    
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
            };

            // On lance le initWasm soit directement si les données sont prêtes, soit après l'événement
            if (window.exerciseData && Object.keys(window.exerciseData).length > 0) {
                initWasm();
            }
            document.addEventListener('exercise-data-ready', initWasm);
        },
        
        async refreshPhp() {
            if (!this.PhpWebClass) return;
            
            // Recréer le moteur pour nettoyer l'état précédent (classes redéclarées, variables globales...)
            this.php = new this.PhpWebClass();
            
            // Intercepter la sortie standard (echo, print)
            this.php.addEventListener('output', (event) => {
                this.phpOutputBuffer = (this.phpOutputBuffer || '') + event.detail;
                const consoleEl = document.getElementById('php-console');
                // Ne l'afficher dans la console noire que si ce n'est pas une exécution silencieuse
                if (consoleEl && this.isExecutingCLI) {
                    consoleEl.textContent += event.detail;
                }
            });
            
            // Intercepter les erreurs PHP
            this.php.addEventListener('error', (event) => {
                const consoleEl = document.getElementById('php-console');
                if (consoleEl && this.isExecutingCLI) {
                    consoleEl.textContent += '\n[Erreur PHP] ' + event.detail;
                }
            });

            return new Promise(resolve => {
                this.php.addEventListener('ready', resolve);
            });
        },
        
        async runPhpSilent() {
            if (this.isLoading || !this.php) return;
            this.phpOutputBuffer = '';
            this.isExecutingCLI = false;
            
            try {
                await this.refreshPhp();
                
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
            this.isExecutingCLI = true;
            
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
                await this.refreshPhp();
                
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
                this.isExecutingCLI = false;
            }
        }
    }));
});
