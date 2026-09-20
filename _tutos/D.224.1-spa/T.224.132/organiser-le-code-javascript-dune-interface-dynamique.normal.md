---
title: "Organiser le code JavaScript d’une interface dynamique"
layout: tuto
slug: "organiser-le-code-javascript-dune-interface-dynamique"
permalink: /tutos/:slug/
tuto_id: "T.224.132"
type: "classique"
version: "normal"
ua: "UA.224.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Organiser le code JavaScript d’une interface dynamique"
layout: tuto
slug: "organiser-code-javascript-interface-dynamique"
permalink: /tutos/:slug/
tuto_id: "T.224.132"
type: "classique"
version: "normal"
ua: "UA.224.13"
nav_order: 2
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
data_css: ""
data_js: |
  document.addEventListener('DOMContentLoaded', () => {
      const API_URL = 'api/router.php?route=categories';

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
  const toastContainer = document.getElementById('toast-container');

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

  formCategorie.addEventListener('submit', event => {
      event.preventDefault();

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

      setLoadingState(true);

      fetch(API_URL, {
          method: method,
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => response.json())
          .then(result => {
              if (result.status === 'success') {
                  showToast(
                      id === ''
                          ? 'Catégorie ajoutée avec succès.'
                          : 'Catégorie modifiée avec succès.'
                  );

                  fermerFormulaire();
                  chargerCategories();
              } else {
                  showToast(result.message, 'error');
              }
          })
          .catch(() => {
              showToast('Erreur de communication avec le serveur.', 'error');
          })
          .finally(() => {
              setLoadingState(false);
          });
  });

  function chargerCategories() {
      loadingMessage.hidden = false;

      fetch(API_URL)
          .then(response => response.json())
          .then(result => {
              if (result.status === 'success') {
                  afficherCategories(result.data);
              } else {
                  showToast(result.message, 'error');
              }
          })
          .catch(() => {
              showToast('Erreur lors du chargement des catégories.', 'error');
          })
          .finally(() => {
              loadingMessage.hidden = true;
          });
  }

  function afficherCategories(categories) {
      tbody.innerHTML = '';

      categories.forEach(categorie => {
          const tr = document.createElement('tr');

          tr.innerHTML = `
              <td>${categorie.id}</td>
              <td>${categorie.nom}</td>
              <td>${categorie.couleur}</td>
              <td>
                  <button type="button" class="btn-edit">Éditer</button>
                  <button type="button" class="btn-delete">Supprimer</button>
              </td>
          `;

          tbody.appendChild(tr);
      });
  }

  function setLoadingState(isLoading) {
      btnSubmitForm.disabled = isLoading;
      spinnerSubmit.hidden = !isLoading;
      textSubmit.textContent = isLoading
          ? 'Enregistrement...'
          : 'Enregistrer';
  }

  function showToast(message, type = 'success') {
      const toast = document.createElement('div');
      toast.textContent = message;
      toastContainer.appendChild(toast);

      setTimeout(() => {
          toast.remove();
      }, 3000);
  }

  function fermerFormulaire() {
      sectionForm.hidden = true;
      formCategorie.reset();
      inputId.value = '';
      ligneEnEdition = null;
  }

  chargerCategories();
```

## });

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à organiser le JavaScript d'une interface dynamique.

Vous allez séparer le code en fonctions selon leur rôle :

* initialiser l'interface ;
* communiquer avec l'API ;
* afficher les données ;
* gérer les interactions ;
* gérer les fonctions utilitaires ;
* synchroniser l'interface avec le serveur.

Vous allez partir d'une interface CRUD déjà fonctionnelle.

L'objectif n'est pas d'ajouter une nouvelle fonctionnalité.

L'objectif est de rendre le code plus clair et plus facile à maintenir.

## 2. Prérequis

Vous devez avoir réalisé :

* T.224.111 — Manipuler le DOM et gérer les interactions ;
* T.224.112 — Communiquer avec une API avec Fetch ;
* T.224.121 — Gérer les états d'une opération asynchrone ;
* T.224.122 — Donner un retour à l'utilisateur ;
* T.224.131 — Consommer une API structurée.

Vous devez connaître :

* le DOM ;
* les événements ;
* `fetch()` ;
* les méthodes HTTP ;
* JSON ;
* les promesses ;
* `then()` ;
* `catch()` ;
* `finally()` ;
* les fonctions JavaScript.

## Données de départ

### HTML

La page contient :

* le bouton **Nouvelle catégorie** ;
* le formulaire ;
* le tableau ;
* le bouton **Enregistrer** ;
* l'indicateur de chargement ;
* le conteneur des Toasts.

### CSS

Aucun CSS particulier n'est nécessaire.

### JavaScript

Le code de départ contient déjà plusieurs responsabilités dans un même fichier :

```text
API
DOM
affichage
événements
chargement
feedback
formulaire
```

Dans ce tutoriel, vous allez organiser ces responsabilités dans des fonctions clairement séparées.

## Partie 1 — Théorie

### 1.1. Pourquoi organiser le code

Un fichier JavaScript peut fonctionner même si toutes les instructions sont placées les unes après les autres.

Mais un code non organisé devient rapidement difficile à lire.

Exemple :

```text
fetch()
HTML
fetch()
Toast
formulaire
DOM
fetch()
chargement
DOM
formulaire
```

Il devient difficile de savoir quelle partie du code est responsable de quoi.

Une meilleure organisation consiste à regrouper les responsabilités.

### 1.2. Les fonctions d'API

Les fonctions d'API s'occupent des communications avec le serveur.

Exemples :

```text
chargerCategories()
ajouterCategorie()
modifierCategorie()
supprimerCategorie()
```

Elles utilisent `fetch()`.

Leur rôle est de communiquer avec l'API.

### 1.3. Les fonctions d'affichage

Les fonctions d'affichage s'occupent du DOM.

Exemple :

```javascript
afficherCategories(categories);
```

Cette fonction reçoit les données et construit le tableau.

Son rôle n'est pas de communiquer avec l'API.

### 1.4. Les fonctions d'interaction

Les fonctions d'interaction s'occupent des actions de l'utilisateur.

Exemples :

```text
ouvrirFormulaire()
fermerFormulaire()
editerCategorie()
```

Elles permettent de gérer le comportement de l'interface.

### 1.5. Les fonctions utilitaires

Une fonction utilitaire réalise une tâche utilisée à plusieurs endroits.

Exemples :

```text
setLoadingState()
showToast()
```

Une fonction comme `showToast()` peut être appelée après :

* un ajout ;
* une modification ;
* une suppression ;
* une erreur.

Il est donc préférable de l'écrire une seule fois.

### 1.6. Les fonctions de synchronisation

Après une opération sur le serveur, l'interface doit être actualisée.

Exemple :

```javascript
chargerCategories();
```

Cette fonction récupère à nouveau les données du serveur.

On obtient :

```text
Modification
    ↓
API
    ↓
Succès
    ↓
chargerCategories()
    ↓
afficherCategories()
```

### 1.7. Séparer les responsabilités

Une organisation simple peut être :

```text
1. Initialisation
2. Éléments du DOM
3. Fonctions utilitaires
4. Fonctions API
5. Fonctions d'affichage
6. Fonctions d'interaction
7. Événements
8. Démarrage
```

Cette organisation permet de retrouver plus facilement une partie du code.

### 1.8. Une fonction = un rôle principal

Une fonction doit avoir un rôle clair.

Exemple :

```javascript
function afficherCategories(categories) {
    // affichage
}
```

Cette fonction ne doit pas :

* envoyer une requête ;
* afficher un Toast ;
* gérer le formulaire ;
* modifier une autre partie de l'interface sans raison.

On cherche à garder des responsabilités simples.

### 1.9. Les fonctions peuvent travailler ensemble

Les fonctions ne sont pas isolées.

Elles peuvent s'appeler.

Exemple :

```text
soumission du formulaire
        ↓
enregistrerCategorie()
        ↓
API
        ↓
succès
        ↓
chargerCategories()
        ↓
afficherCategories()
```

Chaque fonction garde cependant son rôle.

### 1.10. À retenir

* Organiser le code facilite sa lecture.
* Les fonctions d'API communiquent avec le serveur.
* Les fonctions d'affichage manipulent le DOM.
* Les fonctions d'interaction gèrent les actions de l'utilisateur.
* Les fonctions utilitaires évitent de répéter du code.
* La synchronisation permet de garder l'interface à jour.
* Une fonction doit avoir un rôle principal clair.

## Partie 2 — Pratique

### 2.1. Définir une organisation

Commencez par organiser le fichier avec des commentaires :

```javascript
// Éléments du DOM

// État de l'interface

// Fonctions utilitaires

// Fonctions API

// Fonctions d'affichage

// Fonctions d'interaction

// Événements

// Initialisation
```

Ces blocs servent à retrouver rapidement les différentes parties.

### 2.2. Regrouper les éléments du DOM

Placez toutes les références DOM au début du script :

```javascript
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

const spinnerSubmit = document.getElementById('spinner-submit');
const textSubmit = document.getElementById('text-submit');

const loadingMessage = document.getElementById('loading-message');
const toastContainer = document.getElementById('toast-container');
```

Vous savez maintenant où trouver les éléments de la page.

### 2.3. Regrouper l'état

L'interface possède également un état.

Dans notre exemple :

```javascript
let ligneEnEdition = null;
```

Cette variable indique si une ligne est en cours de modification.

Gardez les variables d'état ensemble :

```javascript
let ligneEnEdition = null;
```

L'objectif est de distinguer :

```text
éléments du DOM
```

et :

```text
état de l'interface
```

### 2.4. Organiser les fonctions utilitaires

Commencez par `setLoadingState()` :

```javascript
function setLoadingState(isLoading) {
    btnSubmitForm.disabled = isLoading;
    spinnerSubmit.hidden = !isLoading;

    textSubmit.textContent = isLoading
        ? 'Enregistrement...'
        : 'Enregistrer';
}
```

Puis `showToast()` :

```javascript
function showToast(message, type = 'success') {
    const toast = document.createElement('div');

    toast.textContent = message;

    if (type === 'error') {
        toast.classList.add('toast-error');
    } else {
        toast.classList.add('toast-success');
    }

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
```

Ces fonctions sont maintenant disponibles pour les autres parties du code.

### 2.5. Créer la fonction de fermeture du formulaire

Au lieu de répéter :

```javascript
sectionForm.hidden = true;
formCategorie.reset();
inputId.value = '';
ligneEnEdition = null;
```

créez :

```javascript
function fermerFormulaire() {
    sectionForm.hidden = true;
    formCategorie.reset();
    inputId.value = '';
    ligneEnEdition = null;
}
```

L'action **Annuler** peut maintenant utiliser :

```javascript
btnCancelForm.addEventListener('click', () => {
    fermerFormulaire();
});
```

### 2.6. Organiser la fonction de chargement

Placez les fonctions qui communiquent avec l'API dans un même bloc.

Commencez avec :

```javascript
function chargerCategories() {
    loadingMessage.hidden = false;

    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                afficherCategories(result.data);
            } else {
                showToast(result.message, 'error');
            }
        })
        .catch(() => {
            showToast(
                'Erreur lors du chargement des catégories.',
                'error'
            );
        })
        .finally(() => {
            loadingMessage.hidden = true;
        });
}
```

Cette fonction possède maintenant un rôle clair :

> récupérer les catégories et lancer leur affichage.

### 2.7. Séparer l'affichage

La fonction `afficherCategories()` ne doit pas appeler `fetch()`.

Elle reçoit directement les données :

```javascript
function afficherCategories(categories) {
    tbody.innerHTML = '';

    categories.forEach(categorie => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${categorie.id}</td>
            <td>${categorie.nom}</td>
            <td>${categorie.couleur}</td>
            <td>
                <button type="button" class="btn-edit">
                    Éditer
                </button>

                <button type="button" class="btn-delete">
                    Supprimer
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}
```

La fonction réalise uniquement l'affichage.

### 2.8. Créer une fonction pour enregistrer

Le `submit` contient plusieurs responsabilités.

Créez une fonction :

```javascript
function enregistrerCategorie() {
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

    setLoadingState(true);

    fetch(API_URL, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                const message = id === ''
                    ? 'Catégorie ajoutée avec succès.'
                    : 'Catégorie modifiée avec succès.';

                showToast(message);
                fermerFormulaire();
                chargerCategories();
            } else {
                showToast(result.message, 'error');
            }
        })
        .catch(() => {
            showToast(
                'Erreur de communication avec le serveur.',
                'error'
            );
        })
        .finally(() => {
            setLoadingState(false);
        });
}
```

Le gestionnaire `submit` devient beaucoup plus simple :

```javascript
formCategorie.addEventListener('submit', event => {
    event.preventDefault();
    enregistrerCategorie();
});
```

### 2.9. Créer une fonction pour supprimer

Déplacez également la logique de suppression dans une fonction :

```javascript
function supprimerCategorie(id) {
    fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
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
        .catch(() => {
            showToast(
                'Erreur de communication avec le serveur.',
                'error'
            );
        });
}
```

Le code qui demande la suppression ne contient plus la communication détaillée avec l'API.

### 2.10. Créer une fonction pour préparer l'édition

Créez une fonction :

```javascript
function preparerEdition(categorie) {
    inputId.value = categorie.id;
    inputNom.value = categorie.nom;
    selectCouleur.value = categorie.couleur;
    selectIcone.value = categorie.icone;

    sectionForm.hidden = false;
}
```

Cette fonction s'occupe uniquement de préparer le formulaire.

### 2.11. Relier les actions aux lignes

Dans `afficherCategories()`, après la création de la ligne :

```javascript
const btnEdit = tr.querySelector('.btn-edit');
const btnDelete = tr.querySelector('.btn-delete');
```

Ajoutez :

```javascript
btnEdit.addEventListener('click', () => {
    preparerEdition(categorie);
});
```

Puis :

```javascript
btnDelete.addEventListener('click', () => {
    supprimerCategorie(categorie.id);
});
```

Le code devient plus lisible :

```text
Bouton Éditer
     ↓
preparerEdition()

Bouton Supprimer
     ↓
supprimerCategorie()
```

### 2.12. Organiser les événements

Les gestionnaires d'événements doivent être regroupés.

```javascript
btnShowForm.addEventListener('click', () => {
    sectionForm.hidden = false;
});

btnCancelForm.addEventListener('click', () => {
    fermerFormulaire();
});

formCategorie.addEventListener('submit', event => {
    event.preventDefault();
    enregistrerCategorie();
});
```

Les fonctions contiennent le traitement.

Les événements indiquent simplement quelle fonction doit être appelée.

### 2.13. Créer une fonction d'initialisation

Le démarrage de l'interface peut être centralisé :

```javascript
function initialiser() {
    chargerCategories();
}
```

Puis :

```javascript
initialiser();
```

Vous pouvez ensuite regrouper les événements dans une fonction :

```javascript
function initialiserEvenements() {
    btnShowForm.addEventListener('click', () => {
        sectionForm.hidden = false;
    });

    btnCancelForm.addEventListener('click', () => {
        fermerFormulaire();
    });

    formCategorie.addEventListener('submit', event => {
        event.preventDefault();
        enregistrerCategorie();
    });
}
```

Et utiliser :

```javascript
function initialiser() {
    initialiserEvenements();
    chargerCategories();
}
```

### 2.14. Organiser le fichier final

Votre fichier peut maintenant suivre cette structure :

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // 1. Configuration
    const API_URL = 'api/router.php?route=categories';

    // 2. Éléments du DOM
    // ...

    // 3. État
    // ...

    // 4. Fonctions utilitaires
    // showToast()
    // setLoadingState()

    // 5. Fonctions API
    // chargerCategories()
    // enregistrerCategorie()
    // supprimerCategorie()

    // 6. Fonctions d'affichage
    // afficherCategories()

    // 7. Fonctions d'interaction
    // preparerEdition()
    // fermerFormulaire()

    // 8. Événements
    // initialiserEvenements()

    // 9. Initialisation
    // initialiser()
});
```

Cette organisation correspond aux responsabilités de l'interface.

### 2.15. Vérifier la synchronisation

Après une création :

```text
enregistrerCategorie()
        ↓
API
        ↓
succès
        ↓
chargerCategories()
        ↓
afficherCategories()
```

Après une modification :

```text
enregistrerCategorie()
        ↓
API
        ↓
succès
        ↓
chargerCategories()
        ↓
afficherCategories()
```

Après une suppression :

```text
supprimerCategorie()
        ↓
API
        ↓
succès
        ↓
chargerCategories()
        ↓
afficherCategories()
```

La fonction `chargerCategories()` devient donc le point commun pour actualiser les données affichées.

### 2.16. Vérifier les responsabilités

Pour chaque fonction, posez la question :

```text
Quel est son rôle ?
```

Exemple :

```text
chargerCategories()
→ récupérer les catégories

afficherCategories()
→ afficher les catégories

enregistrerCategorie()
→ envoyer la création ou modification

supprimerCategorie()
→ envoyer la suppression

preparerEdition()
→ remplir le formulaire

fermerFormulaire()
→ fermer et réinitialiser le formulaire

showToast()
→ informer l'utilisateur

setLoadingState()
→ gérer le chargement
```

Chaque fonction possède ainsi un rôle identifiable.

### 2.17. Tester l'interface complète

Testez :

1. charger la page ;
2. vérifier le chargement des catégories ;
3. ouvrir le formulaire ;
4. ajouter une catégorie ;
5. modifier une catégorie ;
6. supprimer une catégorie ;
7. vérifier les Toasts ;
8. vérifier le chargement ;
9. vérifier que la liste est actualisée après chaque opération ;
10. vérifier que les fonctions restent indépendantes.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-6-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Réorganisez le JavaScript de l'interface de gestion des catégories.

Le fichier doit séparer clairement :

* les éléments du DOM ;
* l'état de l'interface ;
* les fonctions utilitaires ;
* les fonctions de communication avec l'API ;
* les fonctions d'affichage ;
* les fonctions d'interaction ;
* les événements ;
* l'initialisation.

Les fonctions doivent conserver les mêmes fonctionnalités que l'interface précédente.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

L'interface conserve son fonctionnement CRUD, mais le JavaScript est organisé en fonctions clairement séparées selon leur responsabilité.

## Bilan

**Vous avez appris :**

* à organiser un fichier JavaScript ;
* à séparer les responsabilités ;
* à créer des fonctions API ;
* à créer des fonctions d'affichage ;
* à créer des fonctions d'interaction ;
* à créer des fonctions utilitaires ;
* à organiser les événements ;
* à centraliser l'initialisation ;
* à maintenir la synchronisation entre le serveur et l'interface.

**Vous avez réalisé :**

Une interface CRUD connectée à une API structurée et organisée en fonctions clairement séparées.

L'organisation finale suit :

```text
Initialisation
      ↓
Événements
      ↓
Fonctions d'interaction
      ↓
Fonctions API
      ↓
Données
      ↓
Fonctions d'affichage
      ↓
DOM
```

Le code reste simple, mais chaque partie possède maintenant un rôle clair.

## Glossaire

* **Organisation du code** : manière de regrouper le code pour faciliter sa lecture et sa maintenance.
* **Responsabilité** : rôle principal d'une fonction ou d'une partie du code.
* **Fonction API** : fonction qui communique avec le serveur.
* **Fonction d'affichage** : fonction qui met à jour le DOM.
* **Fonction d'interaction** : fonction qui traite une action de l'utilisateur.
* **Fonction utilitaire** : fonction réutilisée par plusieurs parties du code.
* **Initialisation** : préparation de l'interface au démarrage.
* **Synchronisation** : mise à jour de l'interface avec les données du serveur.
* **Maintenance** : action consistant à modifier ou améliorer un code existant plus facilement.
