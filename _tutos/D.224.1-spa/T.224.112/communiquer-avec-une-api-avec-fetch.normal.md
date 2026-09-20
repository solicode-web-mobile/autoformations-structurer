---
title: "Communiquer avec une API avec Fetch"
layout: tuto
slug: "communiquer-avec-une-api-avec-fetch"
permalink: /tutos/:slug/
tuto_id: "T.224.112"
type: "classique"
version: "normal"
ua: "UA.224.11"
nav_order: 2
data_html: |

  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-UTF-8">
      <title>Gestion des catégories</title>
  </head>
  <body>
      <h1>Catégories</h1>
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

          <button type="submit">Enregistrer</button>
          <button type="button" id="btn-cancel-form">Annuler</button>
      </form>
  </section>

  <h2>Liste des catégories</h2>

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

  </body>
  </html>
data_css: ""
data_js: |
  document.addEventListener('DOMContentLoaded', () => {
      const tbody = document.getElementById('table-categories-body');
      const btnShowForm = document.getElementById('btn-show-form');
      const btnCancelForm = document.getElementById('btn-cancel-form');
      const sectionForm = document.getElementById('section-form');
      const formCategorie = document.getElementById('form-categorie');
      const inputId = document.getElementById('cat-id');
      const inputNom = document.getElementById('cat-nom');
      const selectCouleur = document.getElementById('cat-couleur');
      const selectIcone = document.getElementById('cat-icone');
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
  });
---


<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à communiquer avec une API depuis JavaScript avec `fetch`.

Vous allez apprendre à :

* envoyer une requête `GET` ;
* lire une réponse JSON ;
* envoyer une requête `POST` ;
* envoyer une requête `PUT` ;
* envoyer une requête `DELETE` ;
* convertir les données JavaScript en JSON ;
* convertir une réponse en objet JavaScript ;
* mettre à jour le DOM avec les données reçues par l'API ;
* empêcher le rechargement classique du formulaire.

Vous allez transformer l'interface réalisée dans T.224.111 en interface connectée à l'API des catégories.

## 2. Prérequis

Vous devez connaître :

* le HTML ;
* les formulaires HTML ;
* le DOM ;
* `getElementById()` ;
* `addEventListener()` ;
* `click` ;
* `submit` ;
* `value` ;
* `innerHTML` ;
* `createElement()` ;
* `appendChild()` ;
* `reset()` ;
* `preventDefault()` ;
* les bases de JavaScript.

Vous devez avoir réalisé T.224.111.

## Données de départ

### HTML

La page contient le formulaire et le tableau des catégories.

Le formulaire possède notamment :

```text
cat-id
cat-nom
cat-couleur
cat-icone
```

Le tableau utilise :

```text
table-categories-body
```

### CSS

Aucun CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Le JavaScript de départ reprend la structure construite dans T.224.111.

Il permet déjà :

* d'afficher le formulaire ;
* de masquer le formulaire ;
* de réinitialiser le formulaire ;
* de sélectionner les champs du formulaire.

L'objectif du tutoriel est maintenant d'ajouter la communication avec l'API.

## Partie 1 — Théorie

### 1.1. Une API

Une API permet à une application cliente de demander ou de modifier des données sur un serveur.

Dans notre application :

```text
Interface JavaScript
        ↓
       API
        ↓
     Serveur
        ↓
    Données
```

JavaScript ne manipule donc plus directement la liste des catégories.

Il demande les données à l'API.

### 1.2. `fetch()`

`fetch()` permet d'envoyer une requête HTTP depuis JavaScript.

**Exemple :**

```javascript
fetch('backend/api.php');
```

Cette instruction demande des données à l'adresse indiquée.

`fetch()` retourne une promesse.

Vous pouvez ensuite traiter la réponse avec `then()`.

### 1.3. La méthode `GET`

`GET` est utilisée pour récupérer des données.

**Exemple :**

```javascript
fetch('backend/api.php', {
    method: 'GET'
});
```

`GET` est aussi la méthode utilisée par défaut.

On peut donc écrire simplement :

```javascript
fetch('backend/api.php');
```

### 1.4. Lire une réponse JSON

L'API retourne des données JSON.

La réponse HTTP doit être transformée en objet JavaScript avec :

```javascript
response.json()
```

**Exemple :**

```javascript
fetch('backend/api.php')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
```

Après `response.json()`, `result` contient les données JSON transformées en objet JavaScript.

### 1.5. La structure de la réponse

Dans notre API, une réponse peut avoir cette structure :

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "nom": "Développement Web",
            "couleur": "Bleu",
            "icone": "Code"
        }
    ]
}
```

JavaScript peut donc accéder à :

```javascript
result.status
```

et :

```javascript
result.data
```

### 1.6. La méthode `POST`

`POST` permet d'envoyer de nouvelles données au serveur.

**Exemple :**

```javascript
fetch('backend/api.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nom: 'JavaScript',
        couleur: 'Emeraude',
        icone: 'Code'
    })
});
```

Ici :

* `method` indique la méthode HTTP ;
* `headers` indique que le corps contient du JSON ;
* `body` contient les données envoyées.

### 1.7. `JSON.stringify()`

`JSON.stringify()` transforme un objet JavaScript en texte JSON.

**Exemple :**

```javascript
const categorie = {
    nom: 'JavaScript',
    couleur: 'Emeraude',
    icone: 'Code'
};

const json = JSON.stringify(categorie);
```

Le résultat peut être envoyé dans `body`.

### 1.8. La méthode `PUT`

`PUT` permet de modifier une donnée existante.

**Exemple :**

```javascript
fetch('backend/api.php', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 3,
        nom: 'JavaScript avancé',
        couleur: 'Violet',
        icone: 'Code'
    })
});
```

L'identifiant permet à l'API de savoir quelle catégorie doit être modifiée.

### 1.9. La méthode `DELETE`

`DELETE` permet de supprimer une donnée.

**Exemple :**

```javascript
fetch('backend/api.php', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 3
    })
});
```

L'ID de la catégorie est envoyé à l'API.

### 1.10. `preventDefault()`

Lorsqu'un formulaire est envoyé, le navigateur recharge normalement la page.

Dans notre SPA, nous voulons éviter ce rechargement.

Nous utilisons donc :

```javascript
event.preventDefault();
```

**Exemple :**

```javascript
formCategorie.addEventListener('submit', event => {
    event.preventDefault();
});
```

JavaScript peut maintenant envoyer la requête `fetch()` sans recharger la page.

### 1.11. `catch()`

Une requête peut rencontrer un problème réseau.

`catch()` permet de traiter ce type d'erreur.

**Exemple :**

```javascript
fetch('backend/api.php')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
```

La gestion avancée de l'affichage d'erreur et des états sera étudiée dans le Sprint 2.

### 1.12. À retenir

* `fetch()` envoie une requête HTTP.
* `GET` récupère des données.
* `POST` crée une donnée.
* `PUT` modifie une donnée.
* `DELETE` supprime une donnée.
* `response.json()` lit une réponse JSON.
* `JSON.stringify()` transforme un objet en JSON.
* `preventDefault()` empêche le rechargement du formulaire.
* `then()` permet de traiter le résultat.
* `catch()` permet de traiter une erreur de requête.

## Partie 2 — Pratique

### 2.1. Définir l'adresse de l'API

Ouvrez :

```text
assets/js/app.js
```

Ajoutez une constante :

```javascript
const API_URL = 'backend/api.php';
```

Cette constante représente l'adresse utilisée pour les catégories.

### 2.2. Charger les catégories avec `GET`

Créez la fonction :

```javascript
function chargerCategories() {
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Erreur de requête :', error);
        });
}
```

Appelez cette fonction à la fin du script :

```javascript
chargerCategories();
```

Ouvrez la console du navigateur.

Les données retournées par l'API doivent apparaître.

### 2.3. Afficher les catégories reçues

Créez une fonction qui affiche les données reçues :

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
                <button type="button" class="btn-edit">Éditer</button>
                <button type="button" class="btn-delete">Supprimer</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}
```

Modifiez maintenant `chargerCategories()` :

```javascript
function chargerCategories() {
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                afficherCategories(result.data);
            }
        })
        .catch(error => {
            console.error('Erreur de requête :', error);
        });
}
```

Testez la page.

Les catégories enregistrées sur le serveur doivent apparaître dans le tableau.

### 2.4. Remplacer l'ajout local par `POST`

Le formulaire doit maintenant envoyer les données à l'API.

Dans l'événement `submit`, récupérez les champs :

```javascript
formCategorie.addEventListener('submit', event => {
    event.preventDefault();

    const data = {
        nom: inputNom.value,
        couleur: selectCouleur.value,
        icone: selectIcone.value
    };
});
```

Ajoutez ensuite la requête :

```javascript
fetch(API_URL, {
    method: 'POST',
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
        console.error('Erreur lors de l’ajout :', error);
    });
```

Testez l'ajout d'une catégorie.

Vérifiez ensuite dans la base de données que la catégorie a bien été enregistrée.

### 2.5. Actualiser la liste après l'ajout

Après une création réussie, rechargez la liste avec `chargerCategories()`.

Utilisez :

```javascript
.then(result => {
    if (result.status === 'success') {
        formCategorie.reset();
        inputId.value = '';
        sectionForm.hidden = true;
        chargerCategories();
    }
})
```

La page reste affichée.

Seules les données du tableau sont actualisées.

### 2.6. Préparer la modification avec `PUT`

Lorsqu'une catégorie est éditée, son identifiant doit être conservé.

Dans l'action **Éditer**, utilisez :

```javascript
btnEdit.addEventListener('click', () => {
    inputId.value = categorie.id;
    inputNom.value = categorie.nom;
    selectCouleur.value = categorie.couleur;
    selectIcone.value = categorie.icone;

    sectionForm.hidden = false;
});
```

Le champ caché `cat-id` contient maintenant l'identifiant.

### 2.7. Déterminer `POST` ou `PUT`

Dans le formulaire, récupérez l'ID :

```javascript
const id = inputId.value;
```

Déterminez ensuite la méthode :

```javascript
const method = id === '' ? 'POST' : 'PUT';
```

Construisez les données :

```javascript
const data = {
    nom: inputNom.value,
    couleur: selectCouleur.value,
    icone: selectIcone.value
};

if (id !== '') {
    data.id = id;
}
```

Vous pouvez maintenant envoyer la requête :

```javascript
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
            formCategorie.reset();
            inputId.value = '';
            sectionForm.hidden = true;
            chargerCategories();
        }
    })
    .catch(error => {
        console.error('Erreur lors de l’enregistrement :', error);
    });
```

Vous utilisez maintenant :

```text
ID vide     → POST → création
ID présent  → PUT  → modification
```

### 2.8. Supprimer avec `DELETE`

Lors du chargement des catégories, ajoutez l'action **Supprimer**.

Le principe est :

```javascript
btnDelete.addEventListener('click', () => {
    const id = categorie.id;

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
                chargerCategories();
            }
        })
        .catch(error => {
            console.error('Erreur lors de la suppression :', error);
        });
});
```

Après la suppression, `chargerCategories()` permet de synchroniser le tableau avec le serveur.

### 2.9. Reconnecter les actions aux lignes

Dans `afficherCategories()`, chaque catégorie doit créer une ligne et ses deux boutons.

Utilisez :

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
                <button type="button" class="btn-edit">Éditer</button>
                <button type="button" class="btn-delete">Supprimer</button>
            </td>
        `;

        const btnEdit = tr.querySelector('.btn-edit');
        const btnDelete = tr.querySelector('.btn-delete');

        btnEdit.addEventListener('click', () => {
            inputId.value = categorie.id;
            inputNom.value = categorie.nom;
            selectCouleur.value = categorie.couleur;
            selectIcone.value = categorie.icone;

            sectionForm.hidden = false;
        });

        btnDelete.addEventListener('click', () => {
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
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la suppression :', error);
                });
        });

        tbody.appendChild(tr);
    });
}
```

Les actions utilisent maintenant les données reçues du serveur.

### 2.10. Finaliser le formulaire

Le formulaire complet doit maintenant gérer la création et la modification.

Utilisez :

```javascript
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
                formCategorie.reset();
                inputId.value = '';
                sectionForm.hidden = true;
                chargerCategories();
            } else {
                console.error(result.message);
            }
        })
        .catch(error => {
            console.error('Erreur lors de l’enregistrement :', error);
        });
});
```

### 2.11. Vérifier le cycle complet

Testez les quatre opérations :

```text
GET
 ↓
Afficher les catégories

POST
 ↓
Créer une catégorie

PUT
 ↓
Modifier une catégorie

DELETE
 ↓
Supprimer une catégorie
```

Vérifiez également que la page ne se recharge pas après une opération.

### 2.12. Tester l'interface

Testez les actions suivantes :

1. ouvrir la page ;
2. vérifier que les catégories du serveur apparaissent ;
3. ouvrir le formulaire ;
4. ajouter une catégorie ;
5. vérifier qu'elle apparaît dans la liste ;
6. modifier cette catégorie ;
7. vérifier la nouvelle valeur ;
8. supprimer la catégorie ;
9. vérifier qu'elle disparaît ;
10. vérifier que la page n'a pas été rechargée.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-2-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Connectez l'interface de gestion des catégories à l'API.

L'interface doit permettre :

* de charger les catégories avec `GET` ;
* d'ajouter une catégorie avec `POST` ;
* de modifier une catégorie avec `PUT` ;
* de supprimer une catégorie avec `DELETE` ;
* d'envoyer et de recevoir des données JSON ;
* de mettre à jour le tableau sans recharger la page.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

Le CRUD des catégories utilise l'API avec `fetch` et les données affichées dans le tableau correspondent aux données du serveur.

## Bilan

**Vous avez appris :**

* à utiliser `fetch()` ;
* à envoyer une requête `GET` ;
* à envoyer une requête `POST` ;
* à envoyer une requête `PUT` ;
* à envoyer une requête `DELETE` ;
* à envoyer du JSON avec `JSON.stringify()` ;
* à lire du JSON avec `response.json()` ;
* à traiter une réponse avec `then()` ;
* à traiter une erreur de requête avec `catch()`.

**Vous avez réalisé :**

Une interface CRUD connectée à une API.

L'interface peut maintenant récupérer, créer, modifier et supprimer des catégories sans recharger complètement la page.

## Glossaire

* **API** : interface qui permet à une application de communiquer avec un serveur.
* **HTTP** : protocole utilisé pour communiquer entre le client et le serveur.
* **GET** : méthode HTTP utilisée pour récupérer des données.
* **POST** : méthode HTTP utilisée pour créer une donnée.
* **PUT** : méthode HTTP utilisée pour modifier une donnée.
* **DELETE** : méthode HTTP utilisée pour supprimer une donnée.
* **JSON** : format texte utilisé pour échanger des données.
* **`fetch()`** : fonction JavaScript utilisée pour envoyer une requête HTTP.
* **`response.json()`** : transforme la réponse JSON en objet JavaScript.
* **`JSON.stringify()`** : transforme un objet JavaScript en JSON.
* **endpoint** : adresse utilisée pour accéder à une ressource d'une API.
* **requête** : demande envoyée par l'application au serveur.
* **réponse** : résultat retourné par le serveur.
