---
title: "Gérer les états d’une opération asynchrone"
layout: tuto
slug: "gerer-etats-operation-asynchrone"
permalink: /tutos/:slug/
tuto_id: "T.224.121"
type: "classique"
version: "normal"
ua: "UA.224.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Gérer les états d’une opération asynchrone"
layout: tuto
slug: "gerer-etats-operation-asynchrone"
permalink: /tutos/:slug/
tuto_id: "T.224.121"
type: "classique"
version: "normal"
ua: "UA.224.12"
nav_order: 1
data_html: |

  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Gestion des catégories</title>
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
              Enregistrer
          </button>

          <button type="button" id="btn-cancel-form">
              Annuler
          </button>
      </form>

      <p id="status-message"></p>
  </section>

  <h2>Liste des catégories</h2>

  <p id="loading-message" hidden>
      Chargement...
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
```

  </body>
  </html>
data_css: ""
data_js: |
  document.addEventListener('DOMContentLoaded', () => {
      const API_URL = 'backend/api.php';

```
  const tbody = document.getElementById('table-categories-body');
  const btnShowForm = document.getElementById('btn-show-form');
  const btnCancelForm = document.getElementById('btn-cancel-form');
  const btnSubmitForm = document.getElementById('btn-submit-form');

  const sectionForm = document.getElementById('section-form');
  const formCategorie = document.getElementById('form-categorie');

  const inputId = document.getElementById('cat-id');
  const inputNom = document.getElementById('cat-nom');
  const selectCouleur = document.getElementById('cat-couleur');
  const selectIcone = document.getElementById('cat-icone');

  const statusMessage = document.getElementById('status-message');
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

Dans ce tutoriel, vous allez apprendre à gérer les états d'une opération asynchrone.

Vous allez apprendre à représenter :

```text
État initial
     ↓
Chargement
     ↓
Succès
ou
Erreur
```

Vous allez utiliser JavaScript pour :

* afficher un état de chargement ;
* désactiver un bouton pendant une opération ;
* afficher la fin d'une opération ;
* gérer une erreur retournée par l'API ;
* gérer une erreur réseau ;
* utiliser `finally()` pour remettre l'interface dans son état normal.

Vous allez améliorer le CRUD de catégories réalisé dans T.224.112.

## 2. Prérequis

Vous devez avoir réalisé :

* T.224.111 — Manipuler le DOM et gérer les interactions ;
* T.224.112 — Communiquer avec une API avec Fetch.

Vous devez connaître :

* le DOM ;
* `addEventListener()` ;
* `fetch()` ;
* `then()` ;
* `catch()` ;
* les méthodes `POST`, `PUT` et `DELETE` ;
* JSON ;
* `classList` ;
* `disabled`.

## Données de départ

### HTML

La page contient déjà :

* le formulaire de catégorie ;
* le tableau des catégories ;
* le bouton **Enregistrer** ;
* une zone `status-message` pour représenter l'état de l'opération ;
* une zone `loading-message` pour représenter le chargement.

### CSS

Aucun CSS n'est nécessaire pour apprendre le fonctionnement des états.

### JavaScript

Le JavaScript contient déjà :

* la sélection des éléments du DOM ;
* l'affichage et le masquage du formulaire ;
* la réinitialisation du formulaire.

Le CRUD de T.224.112 sera complété dans la pratique.

## Partie 1 — Théorie

### 1.1. Un état d'interface

Une opération asynchrone peut passer par plusieurs états.

Exemple pour un enregistrement :

```text
Initial
   ↓
Chargement
   ↓
Succès
```

En cas de problème :

```text
Initial
   ↓
Chargement
   ↓
Erreur
```

L'interface doit changer selon l'état de l'opération.

### 1.2. L'état initial

L'état initial correspond à une interface prête à recevoir une action.

Exemple :

```text
Bouton : Enregistrer
Formulaire : actif
Message : aucun
```

L'utilisateur peut commencer l'opération.

### 1.3. L'état de chargement

Pendant une requête `fetch()`, le serveur n'a pas encore répondu.

L'interface doit représenter cet état.

Par exemple :

```javascript
btnSubmitForm.disabled = true;
btnSubmitForm.textContent = 'Enregistrement...';
```

Le bouton est désactivé.

L'utilisateur ne peut pas lancer plusieurs fois la même opération.

### 1.4. Désactiver un contrôle

La propriété `disabled` permet de désactiver un bouton.

```javascript
btnSubmitForm.disabled = true;
```

Pour le réactiver :

```javascript
btnSubmitForm.disabled = false;
```

**À retenir :**

```text
true  → désactivé
false → actif
```

### 1.5. Représenter un message d'état

JavaScript peut modifier le contenu d'un élément.

```javascript
statusMessage.textContent = 'Enregistrement en cours...';
```

Après le traitement :

```javascript
statusMessage.textContent = 'Enregistrement terminé.';
```

L'élément reste le même.

Seul son contenu change.

### 1.6. L'état de succès

Une API peut retourner une réponse indiquant que l'opération est réussie.

Dans notre application :

```javascript
if (result.status === 'success') {
    // traitement du succès
}
```

On peut alors :

* réinitialiser le formulaire ;
* recharger les données ;
* remettre l'interface à son état initial.

### 1.7. L'erreur retournée par l'API

Une requête peut atteindre correctement le serveur mais l'API peut retourner une erreur métier.

Exemple :

```json
{
    "status": "error",
    "message": "Le nom existe déjà."
}
```

JavaScript peut tester cette réponse :

```javascript
if (result.status === 'error') {
    statusMessage.textContent = result.message;
}
```

Il faut donc distinguer :

```text
Erreur réseau
≠
Erreur retournée par l'API
```

### 1.8. L'erreur réseau

Une erreur réseau peut empêcher `fetch()` de terminer normalement.

Elle peut être traitée avec `catch()`.

```javascript
fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
```

Le `catch()` traite l'erreur de requête.

### 1.9. `finally()`

`finally()` est exécuté à la fin de la promesse.

Il est exécuté après un succès comme après une erreur.

```javascript
fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Fin de l'opération.');
    });
```

Dans notre interface, `finally()` peut servir à remettre le bouton dans son état normal.

### 1.10. Une fonction pour gérer le chargement

Pour éviter de répéter le même code, on peut créer une fonction :

```javascript
function setLoadingState(isLoading) {
    btnSubmitForm.disabled = isLoading;

    if (isLoading) {
        btnSubmitForm.textContent = 'Enregistrement...';
    } else {
        btnSubmitForm.textContent = 'Enregistrer';
    }
}
```

Puis :

```javascript
setLoadingState(true);
```

pour commencer le chargement.

Et :

```javascript
setLoadingState(false);
```

pour terminer le chargement.

### 1.11. À retenir

* Une opération asynchrone possède plusieurs états.
* Le chargement doit être visible.
* Un contrôle peut être désactivé pendant une opération.
* Une réponse `success` indique la réussite de l'opération.
* Une réponse `error` indique une erreur retournée par l'API.
* `catch()` traite une erreur de requête.
* `finally()` permet de terminer proprement l'opération.
* Une fonction peut centraliser la gestion de l'état.

## Partie 2 — Pratique

### 2.1. Sélectionner les éléments d'état

Dans `assets/js/app.js`, ajoutez :

```javascript
const statusMessage = document.getElementById('status-message');
const loadingMessage = document.getElementById('loading-message');
const btnSubmitForm = document.getElementById('btn-submit-form');
```

Ces éléments seront utilisés pour représenter l'état de l'interface.

### 2.2. Créer la fonction de chargement

Ajoutez :

```javascript
function setLoadingState(isLoading) {
    btnSubmitForm.disabled = isLoading;

    if (isLoading) {
        btnSubmitForm.textContent = 'Enregistrement...';
    } else {
        btnSubmitForm.textContent = 'Enregistrer';
    }
}
```

Testez la fonction temporairement :

```javascript
setLoadingState(true);
```

Le bouton doit être désactivé.

Remplacez ensuite par :

```javascript
setLoadingState(false);
```

Le bouton doit redevenir actif.

### 2.3. Représenter le chargement des catégories

Modifiez `chargerCategories()`.

Commencez par afficher le chargement :

```javascript
function chargerCategories() {
    loadingMessage.hidden = false;
    loadingMessage.textContent = 'Chargement...';

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

Le message est affiché pendant la requête.

À la fin de la requête, il est masqué.

### 2.4. Gérer une erreur de requête

Ajoutez un traitement dans `catch()` :

```javascript
.catch(error => {
    console.error('Erreur de requête :', error);
    loadingMessage.textContent = 'Erreur de chargement.';
});
```

Le navigateur affiche l'erreur dans la console.

L'interface affiche également un état d'erreur.

### 2.5. Gérer l'état pendant l'enregistrement

Dans le `submit`, activez le chargement avant `fetch()` :

```javascript
formCategorie.addEventListener('submit', event => {
    event.preventDefault();

    setLoadingState(true);

    const id = inputId.value;

    const data = {
        nom: inputNom.value,
        couleur: selectCouleur.value,
        icone: selectIcone.value
    };

    const method = id === '' ? 'POST' : 'PUT';

    if (id !== '') {
        data.id = id;
    }

    fetch(API_URL, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            setLoadingState(false);
        });
});
```

Testez avec une connexion fonctionnelle.

Le bouton doit :

```text
Enregistrer
     ↓
Enregistrement...
     ↓
Enregistrer
```

### 2.6. Gérer le succès

Dans `then()`, ajoutez le traitement du succès :

```javascript
.then(result => {
    if (result.status === 'success') {
        formCategorie.reset();
        inputId.value = '';
        sectionForm.hidden = true;
        chargerCategories();

        statusMessage.textContent = 'Opération réussie.';
    }
})
```

Le formulaire est fermé uniquement après la réussite.

### 2.7. Gérer l'erreur retournée par l'API

Ajoutez une deuxième branche :

```javascript
.then(result => {
    if (result.status === 'success') {
        formCategorie.reset();
        inputId.value = '';
        sectionForm.hidden = true;
        chargerCategories();

        statusMessage.textContent = 'Opération réussie.';
    } else {
        statusMessage.textContent = result.message;
    }
})
```

L'interface représente maintenant deux résultats :

```text
success → opération terminée
error   → opération refusée par l'API
```

### 2.8. Gérer l'erreur réseau

Ajoutez :

```javascript
.catch(error => {
    console.error('Erreur réseau :', error);
    statusMessage.textContent = 'Erreur de communication avec le serveur.';
})
```

Vous avez maintenant deux types d'erreurs :

```text
API
↓
result.status === "error"

Réseau
↓
catch()
```

### 2.9. Utiliser `finally()`

Terminez la requête avec :

```javascript
.finally(() => {
    setLoadingState(false);
});
```

Le bouton est donc réactivé :

* après un succès ;
* après une erreur API ;
* après une erreur réseau.

Le flux devient :

```text
Initial
   ↓
Chargement
   ↓
Succès
   ↓
Initial
```

ou :

```text
Initial
   ↓
Chargement
   ↓
Erreur
   ↓
Initial
```

### 2.10. Appliquer le même principe à la suppression

La suppression est également une opération asynchrone.

Avant `fetch()` :

```javascript
btnDelete.disabled = true;
btnDelete.textContent = '...';
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
            chargerCategories();
            statusMessage.textContent = 'Suppression réussie.';
        } else {
            statusMessage.textContent = result.message;
        }
    })
    .catch(error => {
        console.error(error);
        statusMessage.textContent = 'Erreur de communication avec le serveur.';
    })
    .finally(() => {
        btnDelete.disabled = false;
        btnDelete.textContent = 'Supprimer';
    });
```

Le bouton de suppression est ainsi bloqué pendant la requête.

### 2.11. Vérifier tous les états

Testez l'ajout d'une catégorie.

Vérifiez :

```text
Avant la requête
→ bouton actif

Pendant la requête
→ bouton désactivé
→ "Enregistrement..."

Après succès
→ formulaire fermé
→ données actualisées

Après erreur
→ formulaire reste disponible
→ erreur affichée
```

Testez ensuite la suppression.

Vérifiez le même principe.

### 2.12. Tester une erreur

Pour observer l'état d'erreur, utilisez volontairement une URL incorrecte :

```javascript
const API_URL = 'backend/api-test.php';
```

Rechargez la page.

Vérifiez que :

* le chargement apparaît ;
* l'erreur est détectée ;
* l'interface revient à un état utilisable.

Remettez ensuite l'URL correcte :

```javascript
const API_URL = 'backend/api.php';
```

### 2.13. Vérifier la synchronisation

Après une opération réussie, utilisez :

```javascript
chargerCategories();
```

L'interface recharge les données du serveur.

Le tableau correspond donc à nouveau aux données du serveur.

**Résultat attendu :**

```text
Action utilisateur
       ↓
État de chargement
       ↓
Requête API
       ↓
┌───────────────┐
│               │
Succès        Erreur
│               │
↓               ↓
Mise à jour   Message d'erreur
│               │
└───────┬───────┘
        ↓
Retour à un état normal
```

**Travail à faire :**

Améliorez l'interface de gestion des catégories pour représenter clairement les états des opérations asynchrones.

Pour les opérations d'ajout, modification et suppression :

* désactivez le contrôle pendant la requête ;
* indiquez l'état de chargement ;
* traitez le succès retourné par l'API ;
* traitez l'erreur retournée par l'API ;
* traitez l'erreur réseau ;
* utilisez `finally()` pour rétablir l'état normal.

Pour le chargement de la liste :

* affichez un état de chargement ;
* masquez cet état lorsque la requête est terminée.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

Chaque opération asynchrone passe clairement par un état de chargement puis par un état de succès ou d'erreur, et l'interface revient ensuite à un état utilisable.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-3-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

## Bilan

**Vous avez appris :**

* à représenter l'état d'une opération asynchrone ;
* à afficher un état de chargement ;
* à désactiver un contrôle pendant une requête ;
* à gérer un succès ;
* à gérer une erreur retournée par l'API ;
* à gérer une erreur réseau ;
* à utiliser `finally()` ;
* à remettre l'interface dans un état normal.

**Vous avez réalisé :**

Une interface qui représente le cycle :

```text
Initial → Chargement → Succès / Erreur → Initial
```

L'interface ne lance plus simplement une requête : elle représente maintenant l'état de cette opération.

## Glossaire

* **État** : situation actuelle d'une interface ou d'une opération.
* **État initial** : état dans lequel l'interface est prête à recevoir une action.
* **Chargement** : état pendant lequel une opération est en cours.
* **Succès** : état dans lequel l'opération s'est terminée correctement.
* **Erreur** : état dans lequel l'opération n'a pas abouti correctement.
* **Asynchrone** : opération qui peut continuer pendant que la page reste utilisable.
* **`disabled`** : propriété qui désactive un contrôle HTML.
* **`catch()`** : méthode utilisée pour traiter une erreur de requête.
* **`finally()`** : méthode exécutée à la fin d'une opération, qu'elle réussisse ou non.
* **Synchronisation** : mise à jour de l'interface pour qu'elle corresponde aux données du serveur.
