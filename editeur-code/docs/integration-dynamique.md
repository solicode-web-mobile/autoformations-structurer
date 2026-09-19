# Intégration Dynamique (API / SPA / Iframe)

Cette méthode est recommandée si vous construisez une Single Page Application (React, Vue, Angular, Alpine.js) ou si vous chargez les exercices de manière asynchrone (AJAX/Fetch) sans recharger la page complète.

L'éditeur ne rechargeant pas de lui-même, il faut injecter les données dans l'instance JavaScript existante.

## 1. Intégration Asynchrone dans la même page (AJAX)

Si l'éditeur est affiché sur la page et que vous récupérez un nouvel exercice via une API, vous devez suivre ces 3 étapes :

```javascript
async function chargerExercice(idExercice) {
    // 1. Récupération des données depuis votre API
    const response = await fetch(`/api/exercices/${idExercice}`);
    const data = await response.json();
    
    // 2. Mise à jour de la variable globale ET de l'état initial (pour le bouton Reset)
    window.exerciseData = {
        html: data.html_code || '',
        css: data.css_code || '',
        js: data.js_code || '',
        php: data.php_code || '',
        'index.php': data.index_php_code || ''
    };
    window.initialExerciseData = Object.assign({}, window.exerciseData);
    
    // 3. Mettre à jour l'éditeur Monaco (S'il est déjà instancié)
    if (window.monacoEditorInstance) {
        // window.currentTabId contient l'onglet actif ('html', 'css', etc.)
        const activeCode = window.exerciseData[window.currentTabId] || '';
        window.monacoEditorInstance.setValue(activeCode);
        
        // 4. Forcer le rafraîchissement du rendu (Live Preview)
        document.dispatchEvent(new CustomEvent('editor-code-changed'));
    }
}
```

## 2. Intégration via une Iframe (Isolation)

L'utilisation d'une Iframe est une excellente approche pour isoler l'éditeur de votre LMS ou de votre blog, évitant ainsi les conflits CSS/JS avec votre application principale.

**Côté HTML (LMS / Blog) :**
```html
<iframe id="mon-editeur" src="/chemin/vers/editeur/index.html" style="width: 100%; height: 600px; border: none;"></iframe>
```

**Côté Javascript (Injection depuis le parent) :**
Lorsque vous souhaitez charger un exercice dans l'iframe, vous manipulez l'objet `contentWindow` de l'iframe.

```javascript
function envoyerExerciceIframe(donneesExercice) {
    const iframe = document.getElementById('mon-editeur');
    
    // Assurez-vous que l'iframe a fini de charger
    if (iframe && iframe.contentWindow) {
        
        // 1. Écraser les données dans le contexte de l'iframe
        iframe.contentWindow.exerciseData = donneesExercice;
        iframe.contentWindow.initialExerciseData = Object.assign({}, donneesExercice);
        
        // 2. Mettre à jour Monaco s'il est prêt
        if (iframe.contentWindow.monacoEditorInstance) {
            const currentTab = iframe.contentWindow.currentTabId || 'html';
            iframe.contentWindow.monacoEditorInstance.setValue(donneesExercice[currentTab] || '');
            
            // 3. Rafraîchir l'aperçu
            iframe.contentWindow.document.dispatchEvent(new CustomEvent('editor-code-changed'));
        }
    }
}
```
*Note : Pour des raisons de sécurité (CORS), la page appelante et l'iframe doivent être sur le même domaine.*
