---
title: "Consommer une API structurée"
layout: tuto
slug: "consommer-api-structuree"
permalink: /tutos/:slug/
tuto_id: "T.224.131"
type: "classique"
version: "normal"
ua: "UA.224.13"
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
      </section>

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

      <div id="toast-container"></div>
  </body>
  </html>
data_css: ""
data_js: |
  document.addEventListener('DOMContentLoaded', () => {
      const API_URL = 'api/router.php?route=categories';

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
      const loadingMessage = document.getElementById('loading-message');

      btnShowForm.addEventListener('click', () => {
          sectionForm.hidden = false;
      });

      btnCancelForm.addEventListener('click', () => {
          sectionForm.hidden = true;
          formCategorie.reset();
          inputId.value = '';
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

Dans ce tutoriel, vous allez apprendre à utiliser une API structurée depuis une interface JavaScript.

Vous allez apprendre à :

* utiliser une URL d'API avec une route ;
* identifier un endpoint ;
* utiliser un paramètre de requête ;
* envoyer une méthode HTTP à un endpoint structuré ;
* envoyer un JSON ;
* lire un JSON retourné par l'API ;
* lire le statut retourné par l'API ;
* conserver la même interface avec une nouvelle organisation de l'API.

Dans les tutoriels précédents, l'interface utilisait :

```text
backend/api.php
```

Dans ce tutoriel, elle utilise :

```text
api/router.php?route=categories
```

L'objectif est d'adapter le JavaScript à cette nouvelle URL sans changer le fonctionnement de l'interface.

## 2. Prérequis

Vous devez avoir réalisé :

* T.224.111 — Manipuler le DOM et gérer les interactions ;
* T.224.112 — Communiquer avec une API avec Fetch ;
* T.224.121 — Gérer les états d'une opération asynchrone ;
* T.224.122 — Donner un retour à l'utilisateur.

Vous devez connaître :

* `fetch()` ;
* `GET` ;
* `POST` ;
* `PUT` ;
* `DELETE` ;
* JSON ;
* `JSON.stringify()` ;
* `response.json()` ;
* `then()` ;
* `catch()` ;
* `finally()`.

## Données de départ

### HTML

La page contient déjà :

* le formulaire des catégories ;
* le tableau des catégories ;
* les boutons d'action ;
* la zone de chargement ;
* la zone de notification.

L'interface est la même que celle construite dans les tutoriels précédents.

### CSS

Aucun CSS particulier n'est nécessaire pour apprendre la consommation de l'API structurée.

### JavaScript

Le JavaScript utilise déjà le DOM.

Dans ce tutoriel, vous allez principalement modifier l'adresse de l'API et vérifier la structure des requêtes et des réponses.

## Partie 1 — Théorie

### 1.1. Une API structurée

Une API peut organiser ses ressources avec des routes.

Exemple :

```text id="c5f7bv"
api/router.php?route=categories
```

Ici :

```text
api/router.php
```

est le point d'entrée de l'API.

Et :

```text
route=categories
```

indique la ressource demandée.

L'interface utilise donc une URL structurée.

### 1.2. L'endpoint

Un endpoint est une adresse utilisée pour accéder à une ressource de l'API.

Dans notre application :

```text id="jo8x2m"
api/router.php?route=categories
```

est l'endpoint utilisé pour les catégories.

Le même endpoint peut recevoir différentes méthodes HTTP :

```text id="l6bof6"
GET    → récupérer
POST   → créer
PUT    → modifier
DELETE → supprimer
```

Le JavaScript peut donc utiliser une même URL avec plusieurs méthodes.

### 1.3. Le paramètre de requête

Dans :

```text id="fzrj9r"
api/router.php?route=categories
```

la partie :

```text
route=categories
```

est un paramètre de requête.

Il permet d'indiquer la ressource utilisée par l'API.

Structure :

```text id="b7j2mi"
URL?paramètre=valeur
```

Exemple :

```text
api/router.php?route=categories
```

### 1.4. Une URL d'API dans une constante

Pour éviter de répéter l'URL dans le code, utilisez une constante :

```javascript id="s7xk4a"
const API_URL = 'api/router.php?route=categories';
```

Toutes les opérations utilisent cette constante.

Cela facilite la lecture du code et les modifications futures.

### 1.5. Utiliser `GET`

Pour récupérer les catégories :

```javascript id="w2t0p4"
fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
```

La méthode `GET` est utilisée automatiquement.

Vous pouvez aussi l'écrire explicitement :

```javascript id="s1s3c7"
fetch(API_URL, {
    method: 'GET'
});
```

### 1.6. Utiliser `POST`

Pour créer une catégorie :

```javascript id="te8z3d"
fetch(API_URL, {
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

L'URL reste la même.

La méthode indique l'action.

### 1.7. Utiliser `PUT`

Pour modifier une catégorie :

```javascript id="w7x6ln"
fetch(API_URL, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 2,
        nom: 'JavaScript',
        couleur: 'Violet',
        icone: 'Code'
    })
});
```

L'identifiant est envoyé dans le JSON.

### 1.8. Utiliser `DELETE`

Pour supprimer une catégorie :

```javascript id="q9d2pk"
fetch(API_URL, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 2
    })
});
```

La requête utilise le même endpoint.

Seule la méthode change.

### 1.9. Le JSON d'entrée

Lorsqu'une donnée est envoyée à l'API, elle est placée dans `body`.

Exemple :

```javascript id="6x2zn7"
const data = {
    nom: 'JavaScript',
    couleur: 'Emeraude',
    icone: 'Code'
};
```

Puis :

```javascript id="rj0u4j"
body: JSON.stringify(data)
```

Le JSON envoyé correspond aux données nécessaires à l'opération.

### 1.10. Le JSON de sortie

L'API retourne également un JSON.

Exemple :

```json id="y0n3rc"
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

Le JavaScript peut lire :

```javascript id="j05m0v"
result.status
```

et :

```javascript id="2p3hpr"
result.data
```

### 1.11. Le statut de réponse de l'application

Notre API utilise le champ :

```text
status
```

Exemple de succès :

```json id="0c5ts9"
{
    "status": "success",
    "data": []
}
```

Exemple d'erreur :

```json id="7n0pb3"
{
    "status": "error",
    "message": "Catégorie introuvable."
}
```

Le JavaScript doit vérifier ce champ avant de traiter les données.

### 1.12. Communication Frontend / Backend

Dans ce tutoriel, le JavaScript joue le rôle de client.

Le schéma est :

```text id="y3j4r6"
Frontend
   ↓
fetch()
   ↓
Endpoint API
   ↓
Backend
   ↓
JSON
   ↓
Frontend
   ↓
DOM
```

Le tutoriel utilise l'API.

Il ne traite pas l'organisation interne du backend.

### 1.13. À retenir

* Un endpoint identifie une ressource de l'API.
* `route=categories` identifie la ressource **categories**.
* Une même URL peut utiliser plusieurs méthodes HTTP.
* Le JSON d'entrée est envoyé dans `body`.
* Le JSON de sortie est lu avec `response.json()`.
* `status` indique le résultat de l'opération dans notre API.
* Le frontend consomme l'API.
* L'organisation interne du backend n'est pas traitée ici.

## Partie 2 — Pratique

### 2.1. Remplacer l'ancien endpoint

Dans `assets/js/app.js`, repérez :

```javascript id="8c4hnu"
const API_URL = 'backend/api.php';
```

Remplacez-le par :

```javascript id="8p5kk3"
const API_URL = 'api/router.php?route=categories';
```

Le JavaScript utilise maintenant l'API structurée.

### 2.2. Tester `GET`

Conservez la fonction :

```javascript id="hbj08u"
function chargerCategories() {
    loadingMessage.hidden = false;

    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            console.log(result);

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

Rechargez la page.

Vérifiez dans la console la réponse de l'API.

La liste des catégories doit être chargée depuis :

```text
api/router.php?route=categories
```

### 2.3. Vérifier la structure de la réponse

Dans la console, observez la réponse.

Vous devez retrouver une structure utilisant :

```text
status
data
```

Votre JavaScript doit utiliser :

```javascript id="vyox7y"
if (result.status === 'success') {
    afficherCategories(result.data);
}
```

Le tableau utilise donc directement les données de la réponse JSON.

### 2.4. Vérifier `POST`

Dans le `submit`, préparez les données :

```javascript id="4j3dqi"
const data = {
    nom: inputNom.value,
    couleur: selectCouleur.value,
    icone: selectIcone.value
};
```

Puis envoyez-les :

```javascript id="v2zq4m"
fetch(API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
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
    .catch(() => {
        showToast('Erreur de communication avec le serveur.', 'error');
    });
```

Vous utilisez maintenant l'endpoint structuré pour la création.

### 2.5. Vérifier `PUT`

Récupérez l'ID :

```javascript id="l8itk4"
const id = inputId.value;
```

Déterminez la méthode :

```javascript id="g2j3b5"
const method = id === '' ? 'POST' : 'PUT';
```

Préparez les données :

```javascript id="w58bjf"
const data = {
    nom: inputNom.value,
    couleur: selectCouleur.value,
    icone: selectIcone.value
};

if (id !== '') {
    data.id = id;
}
```

Envoyez la requête :

```javascript id="zzx4vl"
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

            formCategorie.reset();
            inputId.value = '';
            sectionForm.hidden = true;

            chargerCategories();
        } else {
            showToast(result.message, 'error');
        }
    })
    .catch(() => {
        showToast('Erreur de communication avec le serveur.', 'error');
    });
```

Le même endpoint reçoit maintenant `POST` ou `PUT`.

### 2.6. Vérifier `DELETE`

Dans l'action de suppression :

```javascript id="y6xd74"
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
    .catch(() => {
        showToast('Erreur de communication avec le serveur.', 'error');
    });
```

La suppression utilise donc également :

```text
api/router.php?route=categories
```

### 2.7. Vérifier les quatre opérations

Votre interface doit maintenant utiliser :

```text
GET
api/router.php?route=categories

POST
api/router.php?route=categories

PUT
api/router.php?route=categories

DELETE
api/router.php?route=categories
```

La différence entre les opérations vient de la méthode HTTP.

### 2.8. Vérifier les données envoyées

Pour `POST` et `PUT`, ouvrez les outils du navigateur.

Dans l'onglet réseau, vérifiez le contenu envoyé.

Pour une création, vous devez retrouver des données comme :

```json id="3yc8kq"
{
    "nom": "JavaScript",
    "couleur": "Emeraude",
    "icone": "Code"
}
```

Pour une modification :

```json id="o7nyx8"
{
    "id": 2,
    "nom": "JavaScript",
    "couleur": "Violet",
    "icone": "Code"
}
```

### 2.9. Vérifier les données reçues

Pour `GET`, vérifiez que le JSON contient les catégories.

Pour une réponse réussie, le JavaScript doit utiliser :

```javascript id="s0d33h"
result.data
```

Pour une erreur :

```javascript id="r4l7pr"
result.message
```

Le frontend doit donc connaître la structure du JSON retourné par l'API.

### 2.10. Vérifier les paramètres de requête

L'URL contient :

```text id="m0bdk6"
?route=categories
```

Identifiez dans votre code :

```javascript id="ooficb"
const API_URL = 'api/router.php?route=categories';
```

Ne créez pas une nouvelle URL pour chaque opération.

Le même endpoint est utilisé pour les catégories.

### 2.11. Vérifier la communication Frontend / Backend

Observez maintenant le parcours complet :

```text id="klw6pv"
Utilisateur
     ↓
Interface JavaScript
     ↓
fetch()
     ↓
api/router.php?route=categories
     ↓
Backend
     ↓
JSON
     ↓
JavaScript
     ↓
DOM
```

L'interface ne connaît pas le fonctionnement interne du backend.

Elle connaît :

* l'endpoint ;
* la méthode HTTP ;
* le JSON envoyé ;
* le JSON reçu.

### 2.12. Comparer l'ancien et le nouvel endpoint

Ancienne version :

```text id="wy7c87"
backend/api.php
```

Nouvelle version :

```text id="7nmt9m"
api/router.php?route=categories
```

Le fonctionnement de l'interface reste identique.

La principale modification du frontend concerne l'endpoint consommé.

### 2.13. Tester l'interface complète

Testez :

1. charger les catégories ;
2. vérifier la réponse `GET` ;
3. ajouter une catégorie ;
4. vérifier la requête `POST` ;
5. modifier une catégorie ;
6. vérifier la requête `PUT` ;
7. supprimer une catégorie ;
8. vérifier la requête `DELETE` ;
9. vérifier le JSON retourné ;
10. vérifier que la liste est actualisée après chaque opération.

**Résultat attendu :**

```html id="4n8g7v"
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-5-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Adaptez l'interface de gestion des catégories pour utiliser l'API structurée du backend.

L'interface doit utiliser :

```text
api/router.php?route=categories
```

Elle doit :

* récupérer les catégories avec `GET` ;
* créer une catégorie avec `POST` ;
* modifier une catégorie avec `PUT` ;
* supprimer une catégorie avec `DELETE` ;
* envoyer les données au format JSON ;
* lire les réponses JSON ;
* vérifier `status` ;
* utiliser `data` en cas de succès ;
* utiliser `message` en cas d'erreur ;
* actualiser la liste après une opération réussie.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

L'interface consomme correctement l'endpoint `api/router.php?route=categories` pour les quatre opérations CRUD et traite la structure JSON retournée par l'API.

## Bilan

**Vous avez appris :**

* à identifier un endpoint ;
* à utiliser une URL d'API structurée ;
* à utiliser un paramètre de requête ;
* à utiliser plusieurs méthodes HTTP avec un même endpoint ;
* à envoyer un JSON à une API ;
* à lire un JSON retourné par l'API ;
* à interpréter `status`, `data` et `message` ;
* à adapter une interface existante à une API structurée.

**Vous avez réalisé :**

Une interface CRUD qui consomme l'endpoint :

```text
api/router.php?route=categories
```

La communication suit maintenant une structure claire :

```text
Frontend
   ↓
Endpoint
   ↓
API
   ↓
JSON
   ↓
Frontend
```

Le tutoriel suivant pourra se concentrer sur l'organisation du code JavaScript de cette interface dynamique.

## Glossaire

* **API structurée** : API dont les ressources sont accessibles avec des endpoints organisés.
* **Endpoint** : adresse utilisée pour accéder à une ressource d'une API.
* **Route** : information utilisée pour identifier une ressource ou une action de l'API.
* **Paramètre de requête** : information placée dans l'URL après `?`.
* **JSON d'entrée** : données JSON envoyées par le frontend à l'API.
* **JSON de sortie** : données JSON retournées par l'API.
* **`status`** : champ indiquant le résultat de l'opération.
* **`data`** : champ contenant les données retournées.
* **`message`** : champ contenant un message d'information ou d'erreur.
* **Frontend** : partie de l'application exécutée dans le navigateur.
* **Backend** : partie de l'application qui traite les requêtes côté serveur.
* **Consommer une API** : utiliser une API depuis une application cliente.
