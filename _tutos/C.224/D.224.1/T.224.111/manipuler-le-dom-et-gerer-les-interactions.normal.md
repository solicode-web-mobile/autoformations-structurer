---
title: "Manipuler le DOM et gérer les interactions"
layout: tuto
slug: "manipuler-dom-interactions"
permalink: /tutos/:slug/
tuto_id: "T.224.111"
type: "classique"
version: "normal"
ua: "UA.224.11"
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
      <h2>Ajouter une catégorie</h2>
      <form id="form-categorie">
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
                  <option value="Émeraude">Émeraude</option>
                  <option value="Violet">Violet</option>
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
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à utiliser JavaScript pour :

* sélectionner des éléments HTML ;
* réagir à un clic ;
* réagir à l'envoi d'un formulaire ;
* lire la valeur d'un champ ;
* modifier le contenu du DOM ;
* afficher ou masquer une partie de la page ;
* créer un élément HTML ;
* ajouter un élément dans la page ;
* réinitialiser un formulaire.

Vous allez réaliser une première interface de gestion des catégories sans recharger la page.

## 2. Prérequis

Vous devez connaître :

* les bases du HTML ;
* les formulaires HTML ;
* les boutons ;
* les tableaux HTML ;
* les bases de JavaScript.

Vous devez déjà savoir écrire une variable, une fonction et une condition simple.

## Données de départ

### HTML

Le fichier de départ contient :

* un bouton **Nouvelle catégorie** ;
* un formulaire caché ;
* les champs **Nom** et **Couleur** ;
* les boutons **Enregistrer** et **Annuler** ;
* un tableau vide pour afficher les catégories.

Le code de départ est disponible dans `data_html`.

### CSS

Aucun CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Le fichier JavaScript est vide au départ.

Créez :

```text
assets/js/app.js
```

## Partie 1 — Théorie

### 1.1. Attendre le chargement de la page

Le navigateur charge d'abord le HTML.

Pour exécuter notre JavaScript après le chargement du HTML, utilisez `DOMContentLoaded`.

**Exemple :**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('La page est chargée.');
});
```

Le code situé dans cette fonction est exécuté lorsque le HTML est disponible.

**À retenir :**

* `DOMContentLoaded` attend le chargement du HTML ;
* le code JavaScript peut ensuite manipuler les éléments de la page.

### 1.2. Sélectionner un élément

JavaScript peut récupérer un élément HTML avec son identifiant.

**Exemple :**

```javascript
const btnShowForm = document.getElementById('btn-show-form');
```

La variable `btnShowForm` contient maintenant le bouton.

Vous pouvez faire la même chose avec le formulaire :

```javascript
const formCategorie = document.getElementById('form-categorie');
```

**À retenir :**

`document.getElementById()` permet de récupérer un élément HTML.

### 1.3. Réagir à un clic

Pour exécuter une action lorsqu'un utilisateur clique sur un bouton, utilisez `addEventListener()` avec l'événement `click`.

**Exemple :**

```javascript
btnShowForm.addEventListener('click', () => {
    console.log('Le bouton a été cliqué.');
});
```

L'action est exécutée à chaque clic.

### 1.4. Lire la valeur d'un champ

Pour récupérer ce que l'utilisateur a saisi dans un champ, utilisez `value`.

**Exemple :**

```javascript
const nom = document.getElementById('cat-nom').value;
```

Pour un champ `select`, `value` permet aussi de récupérer l'option choisie.

```javascript
const couleur = document.getElementById('cat-couleur').value;
```

**À retenir :**

`value` permet de lire ou de modifier la valeur d'un champ de formulaire.

### 1.5. Modifier le contenu d'un élément

`innerHTML` permet de modifier le contenu HTML d'un élément.

**Exemple :**

```javascript
const tbody = document.getElementById('table-categories-body');

tbody.innerHTML = '<tr><td>Web</td><td>Bleu</td><td></td></tr>';
```

Le contenu du tableau est remplacé par le nouveau HTML.

### 1.6. Afficher et masquer un élément

Pour modifier les classes CSS d'un élément, JavaScript peut utiliser `classList`.

Dans notre exemple, le formulaire possède l'attribut `hidden`.

Vous pouvez utiliser `hidden` directement :

```javascript
sectionForm.hidden = false;
```

et :

```javascript
sectionForm.hidden = true;
```

Dans l'application finale, vous pourrez aussi utiliser `classList` avec une classe comme `hidden`.

**Exemple :**

```javascript
sectionForm.classList.remove('hidden');
```

Puis :

```javascript
sectionForm.classList.add('hidden');
```

**À retenir :**

* `classList.add()` ajoute une classe ;
* `classList.remove()` retire une classe.

### 1.7. Créer et insérer un élément

JavaScript peut créer un nouvel élément HTML.

**Exemple :**

```javascript
const tr = document.createElement('tr');
```

Vous pouvez ensuite définir son contenu :

```javascript
tr.innerHTML = `
    <td>Web</td>
    <td>Bleu</td>
    <td></td>
`;
```

Enfin, vous pouvez l'ajouter au tableau :

```javascript
tbody.appendChild(tr);
```

### 1.8. Réagir à l'envoi d'un formulaire

Un formulaire déclenche l'événement `submit`.

**Exemple :**

```javascript
formCategorie.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('Formulaire envoyé.');
});
```

`preventDefault()` empêche le comportement classique du navigateur.

La page ne se recharge donc pas.

### 1.9. Réinitialiser un formulaire

La méthode `reset()` remet les champs du formulaire dans leur état initial.

**Exemple :**

```javascript
formCategorie.reset();
```

Cette action est utile après un enregistrement ou lorsque l'utilisateur clique sur **Annuler**.

### 1.10. À retenir

* `DOMContentLoaded` attend le chargement du HTML.
* `getElementById()` sélectionne un élément.
* `addEventListener()` écoute une action.
* `click` permet de gérer un clic.
* `submit` permet de gérer un formulaire.
* `value` récupère la valeur d'un champ.
* `innerHTML` modifie le contenu HTML.
* `classList` permet d'ajouter ou de retirer une classe.
* `createElement()` crée un élément.
* `appendChild()` ajoute l'élément dans le DOM.
* `reset()` réinitialise le formulaire.
* `preventDefault()` empêche le rechargement classique du formulaire.

## Partie 2 — Pratique

### 2.1. Préparer le fichier JavaScript

Ouvrez :

```text
assets/js/app.js
```

Ajoutez :

```javascript
document.addEventListener('DOMContentLoaded', () => {

});
```

Tout le code du tutoriel sera placé dans cette fonction.

### 2.2. Sélectionner les éléments nécessaires

Ajoutez les références vers les éléments utilisés par l'interface.

```javascript
const tbody = document.getElementById('table-categories-body');
const btnShowForm = document.getElementById('btn-show-form');
const btnCancelForm = document.getElementById('btn-cancel-form');
const sectionForm = document.getElementById('section-form');
const formCategorie = document.getElementById('form-categorie');
const inputNom = document.getElementById('cat-nom');
const selectCouleur = document.getElementById('cat-couleur');
```

Vous avez maintenant les éléments nécessaires pour construire l'interaction.

### 2.3. Afficher le formulaire

Ajoutez un événement `click` sur le bouton **Nouvelle catégorie**.

```javascript
btnShowForm.addEventListener('click', () => {
    sectionForm.hidden = false;
});
```

Testez la page.

Cliquez sur **Nouvelle catégorie**.

Le formulaire doit apparaître.

### 2.4. Masquer le formulaire

Ajoutez maintenant le comportement du bouton **Annuler**.

```javascript
btnCancelForm.addEventListener('click', () => {
    sectionForm.hidden = true;
    formCategorie.reset();
});
```

Testez :

1. affichez le formulaire ;
2. saisissez une valeur ;
3. cliquez sur **Annuler**.

Le formulaire doit disparaître.

Les champs doivent aussi être réinitialisés.

### 2.5. Gérer l'envoi du formulaire

Ajoutez l'écouteur `submit`.

```javascript
formCategorie.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = inputNom.value;
    const couleur = selectCouleur.value;

    console.log(nom);
    console.log(couleur);
});
```

Ouvrez la console du navigateur.

Saisissez une catégorie puis cliquez sur **Enregistrer**.

Vérifiez que les deux valeurs apparaissent dans la console.

### 2.6. Ajouter une catégorie dans le tableau

Vous allez maintenant utiliser les valeurs du formulaire pour créer une ligne.

Remplacez le contenu du gestionnaire `submit` par :

```javascript
formCategorie.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = inputNom.value;
    const couleur = selectCouleur.value;

    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${nom}</td>
        <td>${couleur}</td>
        <td>
            <button type="button">Éditer</button>
            <button type="button">Supprimer</button>
        </td>
    `;

    tbody.appendChild(tr);

    formCategorie.reset();
    sectionForm.hidden = true;
});
```

Testez plusieurs catégories.

Exemple :

```text
Développement Web     Bleu
Design                 Rose
JavaScript             Émeraude
```

Chaque nouvelle catégorie doit apparaître dans le tableau.

### 2.7. Ajouter l'action Supprimer

Lors de la création de la ligne, récupérez le bouton **Supprimer**.

```javascript
const btnDelete = tr.querySelector('.btn-delete');
```

Pour cela, modifiez le HTML créé :

```javascript
tr.innerHTML = `
    <td>${nom}</td>
    <td>${couleur}</td>
    <td>
        <button type="button" class="btn-edit">Éditer</button>
        <button type="button" class="btn-delete">Supprimer</button>
    </td>
`;
```

Puis ajoutez :

```javascript
const btnDelete = tr.querySelector('.btn-delete');

btnDelete.addEventListener('click', () => {
    tr.remove();
});
```

La méthode `remove()` supprime l'élément du DOM.

Testez :

1. ajoutez une catégorie ;
2. cliquez sur **Supprimer** ;
3. vérifiez que la ligne disparaît.

### 2.8. Préparer la modification

Une modification commence par la récupération des valeurs de la ligne.

Ajoutez l'écouteur du bouton **Éditer** :

```javascript
const btnEdit = tr.querySelector('.btn-edit');

btnEdit.addEventListener('click', () => {
    inputNom.value = tr.children[0].textContent;
    selectCouleur.value = tr.children[1].textContent;
    sectionForm.hidden = false;
});
```

Testez une catégorie existante.

Lorsque vous cliquez sur **Éditer**, les valeurs doivent apparaître dans le formulaire.

### 2.9. Finaliser la modification

Pour modifier la ligne sélectionnée, créez une variable qui mémorise la ligne en cours de modification.

Ajoutez cette variable au début du script :

```javascript
let ligneEnEdition = null;
```

Dans l'action **Éditer**, mémorisez la ligne :

```javascript
btnEdit.addEventListener('click', () => {
    ligneEnEdition = tr;

    inputNom.value = tr.children[0].textContent;
    selectCouleur.value = tr.children[1].textContent;

    sectionForm.hidden = false;
});
```

Dans l'envoi du formulaire, distinguez les deux situations :

```javascript
formCategorie.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = inputNom.value;
    const couleur = selectCouleur.value;

    if (ligneEnEdition) {
        ligneEnEdition.children[0].textContent = nom;
        ligneEnEdition.children[1].textContent = couleur;
        ligneEnEdition = null;
    } else {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${nom}</td>
            <td>${couleur}</td>
            <td>
                <button type="button" class="btn-edit">Éditer</button>
                <button type="button" class="btn-delete">Supprimer</button>
            </td>
        `;

        tbody.appendChild(tr);
    }

    formCategorie.reset();
    sectionForm.hidden = true;
});
```

Vous avez maintenant deux comportements :

* aucune ligne en édition → ajout ;
* une ligne en édition → modification.

### 2.10. Réinitialiser correctement l'état

Lorsque l'utilisateur clique sur **Annuler**, vous devez aussi annuler le mode édition.

Modifiez le gestionnaire :

```javascript
btnCancelForm.addEventListener('click', () => {
    sectionForm.hidden = true;
    formCategorie.reset();
    ligneEnEdition = null;
});
```

L'état du formulaire est maintenant réinitialisé.

### 2.11. Relier les boutons créés dynamiquement

Pour que **Éditer** et **Supprimer** fonctionnent sur chaque nouvelle ligne, placez leur gestion juste après la création de la ligne.

Utilisez :

```javascript
const btnEdit = tr.querySelector('.btn-edit');
const btnDelete = tr.querySelector('.btn-delete');

btnEdit.addEventListener('click', () => {
    ligneEnEdition = tr;

    inputNom.value = tr.children[0].textContent;
    selectCouleur.value = tr.children[1].textContent;

    sectionForm.hidden = false;
});

btnDelete.addEventListener('click', () => {
    tr.remove();
});
```

Chaque ligne créée possède alors ses propres actions.

### 2.12. Tester l'interface complète

Testez les actions suivantes :

1. cliquer sur **Nouvelle catégorie** ;
2. saisir une catégorie ;
3. enregistrer ;
4. vérifier que la ligne apparaît ;
5. cliquer sur **Éditer** ;
6. modifier le nom ;
7. enregistrer ;
8. cliquer sur **Supprimer** ;
9. vérifier que la ligne disparaît ;
10. cliquer sur **Annuler** ;
11. vérifier que le formulaire est réinitialisé.

L'ensemble doit fonctionner sans rechargement de la page.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/spa/tuto-1-spa.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Reproduisez l'interface de gestion des catégories en utilisant uniquement le DOM et les événements JavaScript étudiés dans ce tutoriel.

L'interface doit permettre :

* d'afficher le formulaire ;
* d'annuler le formulaire ;
* d'ajouter une catégorie ;
* de modifier une catégorie ;
* de supprimer une catégorie ;
* de réinitialiser le formulaire ;
* de réaliser toutes les actions sans recharger la page.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code JavaScript.

**Critère de réussite :**

L'interface permet d'ajouter, modifier et supprimer une catégorie sans rechargement de la page.

## Bilan

**Vous avez appris :**

* à sélectionner des éléments du DOM ;
* à gérer les événements `click` et `submit` ;
* à lire les valeurs d'un formulaire ;
* à afficher et masquer une partie de la page ;
* à créer des éléments HTML avec JavaScript ;
* à modifier le contenu du DOM ;
* à ajouter et supprimer des éléments ;
* à réinitialiser un formulaire.

**Vous avez réalisé :**

Une première interface CRUD locale pour les catégories, entièrement manipulée avec JavaScript et le DOM.

Dans le prochain tutoriel, vous pourrez remplacer les données locales par une communication avec une API avec `fetch`.

## Glossaire

* **DOM** : représentation de la page HTML manipulable avec JavaScript.
* **Événement** : action détectée par JavaScript, comme un clic.
* **`DOMContentLoaded`** : événement déclenché lorsque le HTML est chargé.
* **`addEventListener()`** : méthode qui permet d'écouter un événement.
* **`value`** : valeur d'un champ de formulaire.
* **`innerHTML`** : contenu HTML d'un élément.
* **`classList`** : objet permettant de modifier les classes CSS d'un élément.
* **`createElement()`** : méthode qui crée un nouvel élément HTML.
* **`appendChild()`** : méthode qui ajoute un élément dans le DOM.
* **`reset()`** : méthode qui réinitialise un formulaire.
* **`preventDefault()`** : méthode qui empêche le comportement par défaut d'un événement.
