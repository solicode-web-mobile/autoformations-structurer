// Logique du Live Preview (HTML/CSS/JS)
// Dépend de l'objet global exerciseData défini dans editor-init.js

let lastPhpHtml = null;
let currentViewMode = 'html'; // 'html' ou 'php'

function updateLivePreview(htmlContent = null) {
    const iframe = document.getElementById('live-preview');
    if (!iframe) return;

    if (htmlContent !== null) {
        lastPhpHtml = htmlContent;
        currentViewMode = 'php'; // Forcer le mode PHP si on reçoit une exécution
    }

    // Basculer la source HTML selon le mode de vue actif
    let html = '';
    if (currentViewMode === 'php') {
        html = lastPhpHtml || '';
    } else {
        html = window.exerciseData.html || '';
    }

    // --- Sprint 9 : Proxy Console JS et affichage ---
    const jsConsoleContainer = document.getElementById('js-console-container');
    const jsConsole = document.getElementById('js-console');
    if (jsConsoleContainer) {
        jsConsoleContainer.style.display = (window.exerciseData.js !== undefined) ? 'flex' : 'none';
    }
    if (jsConsole) jsConsole.innerHTML = ''; // Vidage de la console à chaque exécution

    const jsProxy = `
<script>
(function() {
    function send(type, args) {
        try {
            const msg = Array.from(args).map(arg => {
                if (arg instanceof Error) return arg.message;
                if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
                return String(arg);
            }).join(' ');
            window.parent.postMessage({ type: 'console', level: type, message: msg }, '*');
        } catch(e) {}
    }
    const oLog = console.log, oWarn = console.warn, oErr = console.error;
    console.log = function(...a) { send('log', a); oLog.apply(console, a); };
    console.warn = function(...a) { send('warn', a); oWarn.apply(console, a); };
    console.error = function(...a) { send('error', a); oErr.apply(console, a); };
    window.onerror = function(m, s, l, c, e) { send('error', [m + ' at line ' + l]); return false; };
})();
<\/script>
`;

    const cssCode = window.exerciseData.css || '';
    const css = cssCode ? `<style>\n${cssCode}\n</style>` : '';
    // Injection du proxy AVANT le script de l'utilisateur
    const js = window.exerciseData.js !== undefined ? `${jsProxy}\n<script>${window.exerciseData.js}<\/script>` : '';

    // --- Sprint 10 : Smart Wrapping ---
    // Vérifier si l'apprenant a écrit une page complète ou juste des fragments
    const isFullDocument = /<html/i.test(html) || /<body/i.test(html) || /<head/i.test(html);
    
    // --- Sprint 11 : Extraction du Titre ---
    const titleEl = document.getElementById('browser-title');
    if (titleEl) {
        const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
        if (titleMatch && titleMatch[1].trim() !== '') {
            titleEl.textContent = titleMatch[1].trim();
        } else {
            titleEl.textContent = isFullDocument ? "Sans titre" : "Aperçu en direct";
        }
    }
    
    let combinedCode = '';

    if (isFullDocument) {
        // L'apprenant gère la structure. On injecte nos ressources intelligemment.
        combinedCode = html;
        
        // Injection CSS avant </head>, sinon tout en haut
        if (css) {
            if (/<\/head>/i.test(combinedCode)) {
                combinedCode = combinedCode.replace(/<\/head>/i, `${css}\n</head>`);
            } else {
                combinedCode = `${css}\n${combinedCode}`;
            }
        }
        
        // Injection JS avant </body>, sinon tout en bas
        if (js) {
            if (/<\/body>/i.test(combinedCode)) {
                combinedCode = combinedCode.replace(/<\/body>/i, `${js}\n</body>`);
            } else {
                combinedCode = `${combinedCode}\n${js}`;
            }
        }
    } else {
        // L'apprenant écrit des fragments. On enveloppe dans un template standard.
        combinedCode = `
<!DOCTYPE html>
<html>
<head>
    ${css}
</head>
<body>
    ${html}
    ${js}
</body>
</html>
        `;
    }

    // Injecter dans l'iframe via srcdoc
    iframe.srcdoc = combinedCode;
}

// Initialiser le rendu au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Si l'onglet initial est index.php, on bascule
    if (window.currentTabId === 'index.php') {
        currentViewMode = 'php';
    }
    setTimeout(updateLivePreview, 100);
});

// Écouter les modifications en direct depuis l'éditeur
document.addEventListener('editor-code-changed', (e) => {
    const tabId = e && e.detail ? e.detail.tabId : null;
    
    // Mettre à jour le contexte visuel selon l'onglet
    if (tabId === 'html') currentViewMode = 'html';
    if (tabId === 'index.php') currentViewMode = 'php';
    
    // Mettre à jour l'iframe si c'est une techno Web
    if (!tabId || tabId === 'html' || tabId === 'css' || tabId === 'js' || tabId === 'index.php') {
        updateLivePreview();
    }
});

// Écouter la fin de l'exécution PHP (Back-end)
document.addEventListener('php-executed', (e) => {
    if (e && e.detail && e.detail.html !== undefined) {
        updateLivePreview(e.detail.html);
    }
});

// --- Sprint 9 : Réception des messages de la console JS ---
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'console') {
        const consoleEl = document.getElementById('js-console');
        if (consoleEl) {
            let color = 'text-green-400';
            let prefix = '> ';
            if (event.data.level === 'warn') { color = 'text-yellow-400'; }
            if (event.data.level === 'error') { color = 'text-red-400'; prefix = '[Erreur] '; }
            
            const line = document.createElement('div');
            line.className = color;
            line.textContent = prefix + event.data.message;
            consoleEl.appendChild(line);
            consoleEl.scrollTop = consoleEl.scrollHeight; // Auto-scroll
        }
    }
});
