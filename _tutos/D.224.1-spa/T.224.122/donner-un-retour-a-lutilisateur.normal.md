---
title: "Donner un retour à l’utilisateur"
layout: tuto
slug: "donner-retour-utilisateur"
permalink: /tutos/:slug/
tuto_id: "T.224.122"
type: "classique"
version: "normal"
ua: "UA.224.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Donner un retour à l’utilisateur"
layout: tuto
slug: "donner-retour-utilisateur"
permalink: /tutos/:slug/
tuto_id: "T.224.122"
type: "classique"
version: "normal"
ua: "UA.224.12"
nav_order: 2
data_html: |

  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Gestion des catégories</title>
      <link rel="stylesheet" href="assets/css/app.css">
  </head>
  <body>
      <h1>Catégories</h1>

```
  <button type="button" id="btn-show-form">
      Nouvelle catégorie
  </button>

  <section id="section-form" hidden>
      <h2>Ajouter / Modifier une catégorie</h2>

      <form id="form-categorie">
          <input type="hidden" id="cat-id" value="">

          <div>
              <label for="cat-nom">Nom</label>
              <input type="text" id="cat-nom" required>
          </div>

          <div>
              <label for="cat-couleur">Couleur</label>
              <select id="cat-couleur" required>
                  <option value="">Choisir</option>
                  <option value="Bleu">Bleu</option>
                  <option value="Rose">Rose</option>
                  <option value="Emeraude">Émeraude</option>
                  <option value="Violet">Violet</option>
              </select>
          </div>

          <div>
              <label for="cat-icone">Icône</label>
              <select id="cat-icone" required>
                  <option value="">Choisir</option>
                  <option value="Code">Code</option>
                  <option value="Pinceau">Pinceau</option>
                  <option value="Eclair">Éclair</option>
                  <option value="Livre">Livre</option>
              </select>
          </div>

          <button type="submit" id="btn-submit-form">
              <span id="spinner-submit" hidden>...</span>
              <span id="text-submit">Enregistrer</span>
          </button>

          <button type="button" id="btn-cancel-form">
              Annuler
          </button>
      </form>
  </section>

  <p id="loading-message" hidden>
      Chargement des catégories...
  </p>

  <table>
      <thead>
          <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Couleur</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody id="table-categories-body">
      </tbody>
  </table>

  <div id="toast-container"></div>
```

  </body>
  </html>
data_css: |
  body {
      font-family: Arial, sans-serif;
      padding: 30px;
  }

#toast-container {
position: fixed;
right: 20px;
bottom: 20px;
display: flex;
flex-direction: column;
gap: 10px;
}

.toast {
color: white;
padding: 12px 16px;
border-radius: 6px;
min-width: 220px;
}

.toast-success {
background: #16a34a;
}

.toast-error {
background: #dc2626;
}
data_js: |
document.addEventListener('DOMContentLoaded', () => {
const API_URL = 'backend/api.php';

```
  const tbody = document.getElementById('table-categories-body');
  const btnShowForm = document.getElementById('btn-show-form');
  const btnCancelForm = document.getElementById('btn-cancel-form');
  const sectionForm = document.getElementById('section-form');
  const formCategorie = document.getElementById('form-categorie');

  const inputId = document.getElementById('cat-id');
  const inputNom = document.getElementById('cat-nom');
  const selectCouleur = document.getElementById('cat-couleur');
  const selectIcone = document.getElementById('cat-icone');

  const btnSubmitForm = document.getElementById('btn-submit-form');
  const spinnerSubmit = document.getElementById('spinner-submit');
  const textSubmit = document.getElementById('text-submit');
  const loadingMessage = document.getElementById('loading-message');

  let ligneEnEdition = null;

  btnShowForm.addEventListener('click', () => {
      sectionForm.hidden = false;
  });

  btnCancelForm.addEventListener('click', () => {
      sectionForm.hidden = true;
      formCategorie.reset();
      inputId.value = '';
      ligneEnEdition = null;
  });
```

## });

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à donner un retour clair à l'utilisateur après une opération.

Vous allez ajouter :

* un indicateur de chargement ;
* un bouton avec un état de chargement ;
* un message de succès ;
* un message d'erreur ;
* une notification temporaire avec un Toast ;
* le rafraîchissement de la liste après une opération.

Vous allez améliorer l'interface de gestion des catégories réalisée dans les tutoriels précédents.

L'objectif est que l'utilisateur sache toujours ce qui vient de se passer.

## 2. Prérequis

Vous devez avoir réalisé :

* T.224.111 — Manipuler le DOM et gérer les interactions ;
* T.224.112 — Communiquer avec une API avec Fetch ;
* T.224.121 — Gérer les états d'une opération asynchrone.

Vous devez connaître :

* le DOM ;
* `fetch()` ;
* `then()` ;
* `catch()` ;
* `finally()` ;
* `classList` ;
* `textContent` ;
* `disabled`.

## Données de départ

### HTML

La page contient déjà :

* le formulaire de catégorie ;
* le tableau des catégories ;
* le bouton d'enregistrement ;
* une zone de chargement ;
* une zone `toast-container` pour les notifications ;
* un élément `spinner-submit` pour représenter le chargement du bouton.

### CSS

Le fichier `data_css` contient uniquement les styles nécessaires à l'affichage des Toasts.

Ces styles servent à visualiser le fonctionnement du feedback.

### JavaScript

Le JavaScript contient déjà :

* la sélection des éléments du DOM ;
* l'ouverture du formulaire ;
* l'annulation du formulaire.

Les fonctions de communication avec l'API seront complétées pendant la pratique.

## Partie 1 — Théorie

### 1.1. Le feedback utilisateur

Après une action, l'utilisateur doit savoir ce qui se passe.

Par exemple, après un clic sur **Enregistrer** :

```text
Utilisateur
    ↓
Clique sur Enregistrer
    ↓
Enregistrement en cours...
    ↓
Catégorie ajoutée avec succès.
```

Sans feedback, l'utilisateur peut penser que l'application ne fonctionne pas.

### 1.2. L'indicateur de chargement

Pendant une requête, l'application peut afficher un indicateur.

Exemple :

```text
Enregistrer
```

devient :

```text
... Enregistrement...
```

Le changement permet à l'utilisateur de comprendre que l'application travaille.

### 1.3. Désactiver le bouton

Pendant une opération, le bouton doit être désactivé.

```javascript
btnSubmitForm.disabled = true;
```

Cela évite un deuxième envoi avant la fin du premier.

Le bouton est ensuite réactivé :

```javascript
btnSubmitForm.disabled = false;
```

### 1.4. Changer le texte du bouton

Le texte d'un élément peut être modifié avec `textContent`.

```javascript
textSubmit.textContent = 'Enregistrement...';
```

Puis :

```javascript
textSubmit.textContent = 'Enregistrer';
```

L'utilisateur voit ainsi l'état de l'opération directement sur le bouton.

### 1.5. Afficher un indicateur

Un élément HTML peut être masqué ou affiché avec la propriété `hidden`.

Pour afficher :

```javascript
spinnerSubmit.hidden = false;
```

Pour masquer :

```javascript
spinnerSubmit.hidden = true;
```

On peut donc obtenir :

```text
Enregistrement...
```

avec un indicateur visible à côté du texte.

### 1.6. Le message de succès

Après une opération réussie, l'application peut afficher :

```text
Catégorie ajoutée avec succès.
```

Ce message confirme à l'utilisateur que son action a fonctionné.

### 1.7. Le message d'erreur

Lorsqu'une opération échoue, l'utilisateur doit recevoir une information compréhensible.

Exemple :

```text
Erreur lors de l'enregistrement.
```

Ou lorsque l'API fournit un message :

```javascript
result.message
```

Le message retourné par l'API peut alors être affiché.

### 1.8. Le Toast

Un Toast est une petite notification temporaire.

Exemple :

```text
┌─────────────────────────────┐
│ Catégorie ajoutée avec succès. │
└─────────────────────────────┘
```

Le Toast apparaît après l'opération.

Il disparaît ensuite automatiquement.

### 1.9. Créer un Toast avec JavaScript

On peut créer un élément :

```javascript
const toast = document.createElement('div');
```

Puis définir son contenu :

```javascript
toast.textContent = 'Catégorie ajoutée avec succès.';
```

Enfin, on l'ajoute dans le conteneur :

```javascript
container.appendChild(toast);
```

### 1.10. Faire disparaître un Toast

`setTimeout()` permet d'exécuter une action après un délai.

Exemple :

```javascript
setTimeout(() => {
    toast.remove();
}, 3000);
```

Le Toast est donc supprimé après 3 secondes.

### 1.11. Rafraîchir les données

Après une création, une modification ou une suppression, le tableau doit correspondre au serveur.

On peut rappeler :

```javascript
chargerCategories();
```

Le cycle devient :

```text
Opération
    ↓
API
    ↓
Succès
    ↓
chargerCategories()
    ↓
Liste actualisée
```

### 1.12. Une fonction pour centraliser le feedback

Le même comportement peut être utilisé pour plusieurs opérations.

On peut créer :

```javascript
function showToast(message, type = 'success') {
    // création du Toast
}
```

Puis :

```javascript
showToast('Catégorie ajoutée avec succès.');
```

ou :

```javascript
showToast('Erreur lors de l\'enregistrement.', 'error');
```

Cela évite de répéter le même code.

### 1.13. À retenir

* Le feedback informe l'utilisateur après une action.
* Un indicateur montre qu'une opération est en cours.
* Un bouton peut être désactivé pendant l'opération.
* `textContent` permet de modifier le texte affiché.
* `hidden` permet de montrer ou masquer un élément.
* Un Toast affiche une notification temporaire.
* `setTimeout()` permet de supprimer automatiquement le Toast.
* `chargerCategories()` permet de resynchroniser la liste.

## Partie 2 — Pratique

### 2.1. Préparer les éléments du feedback

Dans `assets/js/app.js`, ajoutez :

```javascript
const btnSubmitForm = document.getElementById('btn-submit-form');
const spinnerSubmit = document.getElementById('spinner-submit');
const textSubmit = document.getElementById('text-submit');
const loadingMessage = document.getElementById('loading-message');
const toastContainer = document.getElementById('toast-container');
```

Ces éléments seront utilisés pour le feedback.

### 2.2. Gérer le chargement du bouton

Créez la fonction :

```javascript
function setLoadingState(isLoading) {
    btnSubmitForm.disabled = isLoading;

    if (isLoading) {
        spinnerSubmit.hidden = false;
        textSubmit.textContent = 'Enregistrement...';
    } else {
        spinnerSubmit.hidden = true;
        textSubmit.textContent = 'Enregistrer';
    }
}
```

Cette fonction centralise l'état du bouton.

Pour commencer le chargement :

```javascript
setLoadingState(true);
```

Pour terminer :

```javascript
setLoadingState(false);
```

### 2.3. Afficher le chargement de la liste

Modifiez `chargerCategories()` :

```javascript
function chargerCategories() {
    loadingMessage.hidden = false;
    loadingMessage.textContent = 'Chargement des catégories...';

    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                afficherCategories(result.data);
            }
        })
        .catch(error => {
            console.error('Erreur de requête :', error);
        })
        .finally(() => {
            loadingMessage.hidden = true;
        });
}
```

Lors du chargement :

```text
Chargement des catégories...
```

est affiché.

Après la requête, il disparaît.

### 2.4. Créer la fonction `showToast()`

Ajoutez :

```javascript
function showToast(message, type = 'success') {
    const toast = document.createElement('div');

    toast.classList.add('toast');

    if (type === 'success') {
        toast.classList.add('toast-success');
    } else {
        toast.classList.add('toast-error');
    }

    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
```

Cette fonction crée un Toast et le supprime automatiquement après 3 secondes.

### 2.5. Tester un Toast

Ajoutez temporairement après le chargement de la page :

```javascript
showToast('Bienvenue.');
```

Rechargez la page.

Le message doit apparaître en bas à droite.

Supprimez ensuite cet appel temporaire.

### 2.6. Afficher le succès d'un ajout

Dans le `submit`, après une réponse réussie :

```javascript
.then(result => {
    if (result.status === 'success') {
        showToast('Catégorie ajoutée avec succès.');

        formCategorie.reset();
        inputId.value = '';
        sectionForm.hidden = true;

        chargerCategories();
    }
})
```

Le cycle devient :

```text
Enregistrer
    ↓
Chargement
    ↓
Succès
    ↓
Toast
    ↓
Actualisation de la liste
```

### 2.7. Afficher l'erreur

Ajoutez le traitement de l'erreur retournée par l'API :

```javascript
.then(result => {
    if (result.status === 'success') {
        showToast('Catégorie ajoutée avec succès.');

        formCategorie.reset();
        inputId.value = '';
        sectionForm.hidden = true;

        chargerCategories();
    } else {
        showToast(result.message, 'error');
    }
})
```

L'utilisateur reçoit maintenant un retour dans les deux cas.

### 2.8. Gérer l'erreur réseau

Ajoutez :

```javascript
.catch(error => {
    console.error('Erreur lors de l\'enregistrement :', error);
    showToast('Erreur de communication avec le serveur.', 'error');
})
```

L'utilisateur ne voit pas seulement une erreur dans la console.

Il reçoit également un retour visuel.

### 2.9. Remettre le bouton dans son état normal

Ajoutez `finally()` :

```javascript
.finally(() => {
    setLoadingState(false);
});
```

Le bouton fonctionne maintenant ainsi :

```text
Enregistrer
     ↓
[chargement]
     ↓
Enregistrement...
     ↓
fin de la requête
     ↓
Enregistrer
```

Le même comportement est conservé en cas de succès ou d'erreur.

### 2.10. Afficher le bon message en création ou modification

Le formulaire peut effectuer deux opérations.

Créez une variable :

```javascript
const isUpdate = inputId.value !== '';
```

Puis :

```javascript
if (result.status === 'success') {
    const message = isUpdate
        ? 'Catégorie modifiée avec succès.'
        : 'Catégorie ajoutée avec succès.';

    showToast(message);

    formCategorie.reset();
    inputId.value = '';
    sectionForm.hidden = true;

    chargerCategories();
}
```

L'utilisateur reçoit maintenant un message correspondant à son action.

### 2.11. Donner un feedback lors de la suppression

Dans l'action **Supprimer**, utilisez :

```javascript
btnDelete.disabled = true;
btnDelete.textContent = 'Suppression...';
```

Puis :

```javascript
fetch(API_URL, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: categorie.id
    })
})
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            showToast('Catégorie supprimée avec succès.');
            chargerCategories();
        } else {
            showToast(result.message, 'error');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la suppression :', error);
        showToast('Erreur de communication avec le serveur.', 'error');
    })
    .finally(() => {
        btnDelete.disabled = false;
        btnDelete.textContent = 'Supprimer';
    });
```

La suppression possède maintenant son propre feedback.

### 2.12. Vérifier le rafraîchissement

Ajoutez une nouvelle catégorie.

Observez :

```text
1. Bouton désactivé
2. Indicateur de chargement
3. Réponse de l'API
4. Toast de succès
5. Formulaire fermé
6. Liste actualisée
```

Modifiez une catégorie.

Vérifiez le même principe.

Supprimez une catégorie.

Vérifiez également :

```text
1. Bouton Supprimer désactivé
2. Texte "Suppression..."
3. Réponse de l'API
4. Toast
5. Liste actualisée
```

### 2.13. Vérifier le comportement en erreur

Provoquez une erreur de requête.

Vérifiez :

```text
Chargement
    ↓
Erreur
    ↓
Toast d'erreur
    ↓
Contrôle réactivé
```

L'utilisateur doit toujours pouvoir continuer à utiliser l'interface.

### 2.14. Vérifier la synchronisation

Après chaque opération réussie, la liste doit être rechargée :

```javascript
chargerCategories();
```

Ne modifiez pas seulement le tableau local.

Demandez à nouveau les données au serveur.

L'interface reste ainsi synchronisée avec les données du serveur.

### 2.15. Tester l'interface complète

Testez :

1. charger la liste ;
2. ouvrir le formulaire ;
3. ajouter une catégorie ;
4. observer le chargement ;
5. observer le Toast de succès ;
6. vérifier le rafraîchissement de la liste ;
7. modifier une catégorie ;
8. observer le Toast de modification ;
9. supprimer une catégorie ;
10. observer le Toast de suppression ;
11. provoquer une erreur ;
12. vérifier le Toast d'erreur ;
13. vérifier que les boutons redeviennent utilisables.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-4-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Améliorez l'interface de gestion des catégories pour fournir un feedback après chaque opération asynchrone.

L'interface doit :

* afficher le chargement lors d'une opération ;
* désactiver le contrôle concerné ;
* afficher un message de succès ;
* afficher un message d'erreur ;
* afficher les notifications avec un Toast ;
* supprimer automatiquement les Toasts ;
* rafraîchir la liste après une opération réussie ;
* remettre les contrôles dans leur état normal après la requête.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

Après chaque opération, l'utilisateur voit clairement son état, reçoit un feedback de succès ou d'erreur, puis retrouve une interface utilisable avec une liste synchronisée avec le serveur.

## Bilan

**Vous avez appris :**

* à informer l'utilisateur pendant une opération ;
* à afficher un indicateur de chargement ;
* à modifier le texte d'un bouton ;
* à désactiver un contrôle ;
* à afficher un message de succès ;
* à afficher un message d'erreur ;
* à créer une notification Toast ;
* à supprimer automatiquement un Toast ;
* à rafraîchir les données après une opération.

**Vous avez réalisé :**

Une interface CRUD qui informe l'utilisateur pendant et après les opérations asynchrones.

Le cycle complet devient :

```text
Action utilisateur
       ↓
Chargement
       ↓
API
       ↓
Succès / Erreur
       ↓
Feedback utilisateur
       ↓
Actualisation
       ↓
Interface prête
```

## Glossaire

* **Feedback** : information donnée à l'utilisateur après ou pendant une action.
* **Notification** : message affiché pour informer l'utilisateur.
* **Toast** : petite notification temporaire affichée dans l'interface.
* **Indicateur de chargement** : élément qui montre qu'une opération est en cours.
* **`textContent`** : propriété utilisée pour modifier le texte d'un élément.
* **`hidden`** : propriété permettant de masquer ou d'afficher un élément.
* **`disabled`** : propriété permettant de désactiver un contrôle.
* **`setTimeout()`** : fonction permettant d'exécuter une action après un délai.
* **Rafraîchissement** : nouvelle récupération des données pour mettre à jour l'interface.
* **Synchronisation** : maintien de la correspondance entre l'interface et les données du serveur.
