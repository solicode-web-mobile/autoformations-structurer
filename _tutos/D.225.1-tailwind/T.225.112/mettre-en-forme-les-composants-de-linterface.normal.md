---
title: "Mettre en forme les composants de l’interface"
layout: tuto
slug: "mettre-forme-composants-interface-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.112"
type: "classique"
version: "normal"
ua: "UA.225.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Mettre en forme les composants de l’interface"
layout: tuto
slug: "mettre-en-forme-composants-interface-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.112"
type: "classique"
version: "normal"
ua: "UA.225.11"
nav_order: 2
data_html: |

  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Administration - Blog</title>
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 text-gray-800 min-h-screen">

```
  <div class="flex min-h-screen">

      <aside class="w-64">
          <div>
              <h2>Admin Blog</h2>
              <p>Sprint 1</p>
          </div>

          <nav class="flex flex-col gap-2">
              <a href="#">Tableau de bord</a>
              <a href="#">Articles</a>
              <a href="#">Catégories</a>
          </nav>
      </aside>

      <div class="flex-1 flex flex-col">

          <header class="flex items-center justify-between">
              <div>Gestion des catégories</div>

              <div>
                  <span>Admin</span>
              </div>
          </header>

          <main class="flex-1 p-6">

              <div class="max-w-5xl mx-auto space-y-8">

                  <section>
                      <div>
                          <h1>Catégories</h1>
                          <p>Organisez les rubriques de votre blog.</p>
                      </div>

                      <button type="button">
                          + Nouvelle Catégorie
                      </button>
                  </section>

                  <section>
                      <h2>Ajouter / Modifier une catégorie</h2>

                      <form>
                          <input type="hidden" value="">

                          <div>
                              <label for="cat-nom">Nom de la catégorie</label>
                              <input
                                  type="text"
                                  id="cat-nom"
                                  placeholder="Ex: Développement Web">
                          </div>

                          <div>
                              <label for="cat-couleur">Couleur</label>
                              <select id="cat-couleur">
                                  <option value="">Choisir une couleur</option>
                                  <option value="Bleu">Bleu</option>
                                  <option value="Rose">Rose</option>
                                  <option value="Emeraude">Émeraude</option>
                                  <option value="Violet">Violet</option>
                              </select>
                          </div>

                          <div>
                              <label for="cat-icone">Icône</label>
                              <select id="cat-icone">
                                  <option value="">Choisir une icône</option>
                                  <option value="Code">Code</option>
                                  <option value="Pinceau">Pinceau / Crayon</option>
                                  <option value="Eclair">Éclair</option>
                                  <option value="Livre">Livre</option>
                              </select>
                          </div>

                          <div>
                              <button type="button">Annuler</button>
                              <button type="submit">Enregistrer</button>
                          </div>
                      </form>
                  </section>

                  <section>
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

                          <tbody>
                              <tr>
                                  <td>#1</td>
                                  <td>Développement Web</td>
                                  <td>Bleu</td>
                                  <td>
                                      <button type="button">Éditer</button>
                                      <button type="button">Supprimer</button>
                                  </td>
                              </tr>

                              <tr>
                                  <td>#2</td>
                                  <td>Design</td>
                                  <td>Rose</td>
                                  <td>
                                      <button type="button">Éditer</button>
                                      <button type="button">Supprimer</button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </section>

              </div>

          </main>
      </div>

  </div>
```

  </body>
  </html>
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à mettre en forme les composants d'une interface avec Tailwind CSS.

Vous allez utiliser :

* les couleurs ;
* la typographie ;
* les arrière-plans ;
* les bordures ;
* les rayons ;
* les ombres ;
* les boutons ;
* les champs de formulaire ;
* les tableaux ;
* les sections ;
* les cartes.

Vous allez appliquer ces classes à l'interface structurée dans T.225.111.

L'objectif est d'obtenir une première interface CRUD visuellement claire.

Les états `hover`, `focus`, `disabled`, les transitions et le responsive seront étudiés plus tard.

## 2. Prérequis

Vous devez avoir réalisé :

> T.225.111 — Structurer une interface avec les utilitaires Tailwind.

Vous devez connaître :

* les bases du HTML ;
* les classes utilitaires Tailwind ;
* `flex` ;
* `flex-col` ;
* `flex-1` ;
* `gap-*` ;
* `w-*` ;
* `h-*` ;
* `p-*` ;
* `max-w-*` ;
* `mx-auto`.

## Données de départ

### HTML

Le HTML reprend la structure réalisée dans T.225.111 :

```text
Sidebar
   ↓
Header
   ↓
Contenu
   ├── En-tête
   ├── Formulaire
   └── Tableau
```

Les composants sont volontairement peu stylisés.

Votre travail consiste à leur appliquer une présentation cohérente avec Tailwind.

### CSS

Aucun CSS personnalisé n'est nécessaire.

### JavaScript

Aucun JavaScript n'est nécessaire.

L'objectif est uniquement la présentation visuelle.

## Partie 1 — Théorie

### 1.1. Les couleurs de texte avec `text-*`

Tailwind fournit des classes pour modifier la couleur du texte.

Exemple :

```html
<p class="text-gray-500">
    Description
</p>
```

Vous pouvez utiliser différentes intensités :

```text
text-gray-500
text-gray-600
text-gray-700
text-gray-900
```

Une couleur plus claire convient souvent à une information secondaire.

Une couleur plus foncée convient au contenu principal.

### 1.2. Les couleurs d'arrière-plan avec `bg-*`

`bg-*` définit la couleur de fond.

Exemple :

```html
<div class="bg-white">
    Contenu
</div>
```

Autres exemples :

```text
bg-gray-50
bg-gray-100
bg-gray-900
bg-white
```

Pour une interface d'administration, une combinaison fréquente est :

```text
page       → gris clair
conteneur  → blanc
sidebar    → gris foncé
```

### 1.3. La typographie avec `text-*`

Les classes `text-*` peuvent aussi définir la taille du texte.

Exemple :

```html
<h1 class="text-2xl">
    Catégories
</h1>
```

Quelques tailles :

```text
text-sm
text-base
text-lg
text-xl
text-2xl
```

### 1.4. Le poids avec `font-*`

`font-*` modifie le poids du texte.

Exemple :

```html
<h1 class="font-bold">
    Catégories
</h1>
```

Autres exemples :

```text
font-medium
font-semibold
font-bold
```

On peut combiner la taille et le poids :

```html
<h1 class="text-2xl font-bold">
    Catégories
</h1>
```

### 1.5. Les bordures

La classe `border` ajoute une bordure.

```html
<div class="border">
    Contenu
</div>
```

On peut choisir sa couleur :

```html
<div class="border border-gray-200">
    Contenu
</div>
```

La bordure permet de séparer visuellement les zones.

### 1.6. Les coins arrondis avec `rounded-*`

`rounded-*` arrondit les coins.

Exemple :

```html
<div class="rounded-lg">
    Contenu
</div>
```

Quelques niveaux :

```text
rounded
rounded-md
rounded-lg
rounded-xl
```

Les coins arrondis sont souvent utilisés pour les cartes, les formulaires et les boutons.

### 1.7. Les ombres avec `shadow-*`

Une ombre permet de détacher visuellement un élément de son arrière-plan.

Exemple :

```html
<div class="shadow">
    Contenu
</div>
```

Autres niveaux :

```text
shadow-sm
shadow
shadow-lg
```

Une carte peut utiliser :

```html
<div class="bg-white rounded-lg shadow-sm">
    ...
</div>
```

### 1.8. Mettre en forme un bouton

Un bouton peut combiner plusieurs utilitaires :

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded">
    Enregistrer
</button>
```

Ici :

* `px-4` crée un espace horizontal ;
* `py-2` crée un espace vertical ;
* `bg-blue-600` définit le fond ;
* `text-white` définit le texte ;
* `rounded` arrondit les coins.

### 1.9. Mettre en forme un champ

Un champ peut utiliser :

```html
<input
    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
```

On obtient :

* une largeur complète ;
* un espace intérieur ;
* une bordure ;
* des coins arrondis.

### 1.10. Mettre en forme une section

Une section peut devenir une carte :

```html
<section class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    ...
</section>
```

Cette combinaison crée une zone visuellement séparée.

### 1.11. Mettre en forme un tableau

Un tableau peut utiliser :

```html
<table class="w-full text-left">
```

L'en-tête peut utiliser :

```html
<thead class="bg-gray-50 border-b border-gray-200">
```

Les cellules peuvent utiliser :

```html
<th class="p-4 text-sm font-semibold text-gray-500">
```

La mise en forme donne une hiérarchie visuelle au tableau.

### 1.12. `space-y-*` pour les sections

Dans T.225.111, `space-y-8` séparait déjà les sections.

On peut également ajouter des espacements internes dans chaque section avec `p-*`.

Exemple :

```html
<div class="space-y-8">
    <section class="p-6">
        ...
    </section>

    <section class="p-6">
        ...
    </section>
</div>
```

### 1.13. À retenir

* `bg-*` définit le fond.
* `text-*` définit la couleur ou la taille du texte selon la classe.
* `font-*` définit le poids.
* `border` ajoute une bordure.
* `rounded-*` arrondit les coins.
* `shadow-*` ajoute une ombre.
* `px-*` ajoute un espace horizontal.
* `py-*` ajoute un espace vertical.
* Les composants peuvent combiner plusieurs classes utilitaires.

## Partie 2 — Pratique

### 2.1. Mettre en forme la page

Commencez par le `<body>` :

```html
<body class="bg-gray-100 text-gray-800 min-h-screen">
```

La page possède maintenant :

* un fond gris clair ;
* une couleur de texte générale ;
* une hauteur minimale.

### 2.2. Mettre en forme la sidebar

Modifiez la `aside` :

```html
<aside class="w-64 bg-gray-900 text-white p-6">
```

La sidebar possède maintenant :

* un fond foncé ;
* du texte blanc ;
* un espace intérieur.

### 2.3. Hiérarchiser le titre de la sidebar

Modifiez le titre :

```html
<h2 class="text-xl font-bold">
    Admin Blog
</h2>
```

Ajoutez une information secondaire :

```html
<p class="text-sm text-gray-400">
    Sprint 1
</p>
```

Le titre est maintenant plus important visuellement que l'information secondaire.

### 2.4. Mettre en forme la navigation

Conservez la structure de T.225.111 :

```html
<nav class="flex flex-col gap-2">
    <a href="#">Tableau de bord</a>
    <a href="#">Articles</a>
    <a href="#">Catégories</a>
</nav>
```

Ajoutez maintenant un espace interne aux liens :

```html
<a href="#" class="px-4 py-2">
    Tableau de bord
</a>
```

Appliquez le même principe aux autres liens.

### 2.5. Mettre en forme le header

Utilisez :

```html
<header class="bg-white p-6 border-b border-gray-200">
```

Le header est maintenant séparé visuellement du reste de la page.

Ajoutez une typographie simple :

```html
<div class="text-sm font-medium text-gray-600">
    Gestion des catégories
</div>
```

Puis :

```html
<span class="text-sm font-semibold">
    Admin
</span>
```

### 2.6. Mettre en forme l'en-tête de la page

Transformez la première section en zone structurée :

```html
<section class="flex items-center justify-between">
    <div>
        <h1 class="text-2xl font-bold text-gray-900">
            Catégories
        </h1>

        <p class="text-sm text-gray-500">
            Organisez les rubriques de votre blog.
        </p>
    </div>

    <button class="px-4 py-2 bg-blue-600 text-white rounded">
        + Nouvelle Catégorie
    </button>
</section>
```

Vous obtenez une hiérarchie claire :

```text
Catégories
Organisez les rubriques de votre blog.

                         + Nouvelle Catégorie
```

### 2.7. Transformer le formulaire en carte

Ajoutez des classes à la section :

```html
<section class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
```

Ajoutez un titre :

```html
<h2 class="text-lg font-bold text-gray-900 mb-4">
    Ajouter / Modifier une catégorie
</h2>
```

Le formulaire apparaît maintenant comme une carte.

### 2.8. Mettre en forme les champs

Modifiez le label :

```html
<label
    for="cat-nom"
    class="block text-sm font-semibold text-gray-700 mb-1">
    Nom de la catégorie
</label>
```

Puis le champ :

```html
<input
    type="text"
    id="cat-nom"
    placeholder="Ex: Développement Web"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
```

Le champ occupe toute la largeur disponible.

### 2.9. Mettre en forme les listes déroulantes

Utilisez les mêmes principes pour `select` :

```html
<select
    id="cat-couleur"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
```

Puis :

```html
<select
    id="cat-icone"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
```

Le formulaire utilise maintenant une présentation cohérente.

### 2.10. Espacer les champs

Utilisez :

```html
<form class="space-y-4">
```

Les champs sont automatiquement séparés verticalement.

Pour deux champs placés ensemble, conservez la structure préparée dans T.225.111.

### 2.11. Mettre en forme les boutons du formulaire

Le bouton **Annuler** peut utiliser :

```html
<button
    type="button"
    class="px-4 py-2 text-gray-600 border border-gray-300 rounded">
    Annuler
</button>
```

Le bouton **Enregistrer** peut utiliser :

```html
<button
    type="submit"
    class="px-4 py-2 bg-blue-600 text-white rounded">
    Enregistrer
</button>
```

Les deux boutons sont différenciés par leur présentation.

### 2.12. Mettre en forme la zone des boutons

Utilisez :

```html
<div class="flex justify-end gap-2">
    ...
</div>
```

Les boutons sont placés à droite et séparés.

### 2.13. Transformer la liste en carte

Modifiez la section du tableau :

```html
<section class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
```

La liste apparaît maintenant comme une zone indépendante.

### 2.14. Mettre en forme le tableau

Utilisez :

```html
<table class="w-full text-left border-collapse">
```

Puis :

```html
<thead class="bg-gray-50 border-b border-gray-200">
```

Pour une cellule d'en-tête :

```html
<th class="p-4 text-sm font-semibold text-gray-500 uppercase">
    Nom
</th>
```

Le tableau possède maintenant une hiérarchie claire.

### 2.15. Mettre en forme les cellules

Utilisez :

```html
<td class="p-4 text-sm text-gray-600">
    Développement Web
</td>
```

Pour une information importante :

```html
<td class="p-4 text-sm font-bold text-gray-900">
    Développement Web
</td>
```

La typographie permet de distinguer les informations importantes des informations secondaires.

### 2.16. Mettre en forme les actions

Les boutons d'action peuvent être simples :

```html
<button
    type="button"
    class="text-blue-600 text-sm font-medium">
    Éditer
</button>

<button
    type="button"
    class="text-red-600 text-sm font-medium">
    Supprimer
</button>
```

À ce stade, ne rajoutez pas `hover:*`.

Les états interactifs seront étudiés dans T.225.122.

### 2.17. Mettre en forme les lignes

Ajoutez une séparation entre les lignes :

```html
<tbody class="divide-y divide-gray-100">
```

Chaque ligne est ainsi visuellement séparée.

### 2.18. Construire le résultat complet

Votre interface peut maintenant utiliser cette structure :

```html
<body class="bg-gray-100 text-gray-800 min-h-screen">

    <div class="flex min-h-screen">

        <aside class="w-64 bg-gray-900 text-white p-6">

            <h2 class="text-xl font-bold">
                Admin Blog
            </h2>

            <p class="text-sm text-gray-400">
                Sprint 1
            </p>

            <nav class="flex flex-col gap-2 mt-6">
                <a href="#" class="px-4 py-2">
                    Tableau de bord
                </a>

                <a href="#" class="px-4 py-2">
                    Articles
                </a>

                <a href="#" class="px-4 py-2">
                    Catégories
                </a>
            </nav>

        </aside>

        <div class="flex-1 flex flex-col">

            <header
                class="flex items-center justify-between bg-white p-6 border-b border-gray-200">

                <div class="text-sm font-medium text-gray-600">
                    Gestion des catégories
                </div>

                <span class="text-sm font-semibold">
                    Admin
                </span>

            </header>

            <main class="flex-1 p-6">

                <div class="max-w-5xl mx-auto space-y-8">

                    <section class="flex items-center justify-between">

                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">
                                Catégories
                            </h1>

                            <p class="text-sm text-gray-500">
                                Organisez les rubriques de votre blog.
                            </p>
                        </div>

                        <button
                            type="button"
                            class="px-4 py-2 bg-blue-600 text-white rounded">
                            + Nouvelle Catégorie
                        </button>

                    </section>

                    <section
                        class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                        <h2 class="text-lg font-bold text-gray-900 mb-4">
                            Ajouter / Modifier une catégorie
                        </h2>

                        <form class="space-y-4">

                            <div>
                                <label
                                    for="cat-nom"
                                    class="block text-sm font-semibold text-gray-700 mb-1">
                                    Nom de la catégorie
                                </label>

                                <input
                                    type="text"
                                    id="cat-nom"
                                    placeholder="Ex: Développement Web"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                            </div>

                            <div>
                                <label
                                    for="cat-couleur"
                                    class="block text-sm font-semibold text-gray-700 mb-1">
                                    Couleur
                                </label>

                                <select
                                    id="cat-couleur"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                    <option value="">
                                        Choisir une couleur
                                    </option>
                                    <option value="Bleu">Bleu</option>
                                    <option value="Rose">Rose</option>
                                    <option value="Emeraude">Émeraude</option>
                                    <option value="Violet">Violet</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    for="cat-icone"
                                    class="block text-sm font-semibold text-gray-700 mb-1">
                                    Icône
                                </label>

                                <select
                                    id="cat-icone"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                    <option value="">
                                        Choisir une icône
                                    </option>
                                    <option value="Code">Code</option>
                                    <option value="Pinceau">Pinceau / Crayon</option>
                                    <option value="Eclair">Éclair</option>
                                    <option value="Livre">Livre</option>
                                </select>
                            </div>

                            <div class="flex justify-end gap-2">

                                <button
                                    type="button"
                                    class="px-4 py-2 text-gray-600 border border-gray-300 rounded">
                                    Annuler
                                </button>

                                <button
                                    type="submit"
                                    class="px-4 py-2 bg-blue-600 text-white rounded">
                                    Enregistrer
                                </button>

                            </div>

                        </form>

                    </section>

                    <section
                        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

                        <div class="p-6">
                            <h2 class="text-lg font-bold text-gray-900">
                                Liste des catégories
                            </h2>
                        </div>

                        <table class="w-full text-left border-collapse">

                            <thead
                                class="bg-gray-50 border-b border-gray-200">

                                <tr>

                                    <th
                                        class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                        ID
                                    </th>

                                    <th
                                        class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                        Nom
                                    </th>

                                    <th
                                        class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                        Couleur
                                    </th>

                                    <th
                                        class="p-4 text-sm font-semibold text-gray-500 uppercase text-right">
                                        Actions
                                    </th>

                                </tr>

                            </thead>

                            <tbody class="divide-y divide-gray-100">

                                <tr>

                                    <td class="p-4 text-sm text-gray-500">
                                        #1
                                    </td>

                                    <td class="p-4 text-sm font-bold text-gray-900">
                                        Développement Web
                                    </td>

                                    <td class="p-4 text-sm text-gray-600">
                                        Bleu
                                    </td>

                                    <td class="p-4 text-right">
                                        <button
                                            type="button"
                                            class="text-blue-600 text-sm font-medium mr-2">
                                            Éditer
                                        </button>

                                        <button
                                            type="button"
                                            class="text-red-600 text-sm font-medium">
                                            Supprimer
                                        </button>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </section>

                </div>

            </main>

        </div>

    </div>

</body>
```

### 2.19. Vérifier les composants

Vérifiez les éléments suivants :

```text
Sidebar
→ bg
→ text
→ p
→ typographie

Header
→ bg
→ border
→ typographie

Section
→ bg-white
→ p
→ rounded
→ border
→ shadow

Formulaire
→ label
→ input
→ select
→ boutons

Tableau
→ header
→ cellules
→ séparation
→ actions
```

Ne cherchez pas encore à gérer :

* le responsive ;
* `hover`;
* `focus`;
* `disabled`;
* les transitions ;
* les animations.

Ces notions seront introduites plus tard.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-2-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

À partir de la structure réalisée dans T.225.111, mettez en forme l'interface CRUD avec Tailwind CSS.

Vous devez créer une présentation cohérente pour :

* la sidebar ;
* le header ;
* les sections ;
* les titres ;
* les textes secondaires ;
* les boutons ;
* les champs ;
* les listes déroulantes ;
* le tableau ;
* les actions.

Utilisez les classes Tailwind étudiées dans ce tutoriel.

Ne travaillez pas encore sur les états interactifs ni sur le responsive.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code HTML.

**Critère de réussite :**

L'interface CRUD possède une présentation cohérente avec :

* une hiérarchie typographique claire ;
* des couleurs lisibles ;
* des sections visuellement séparées ;
* des formulaires correctement présentés ;
* des boutons identifiables ;
* un tableau lisible.

## Bilan

**Vous avez appris :**

* à utiliser `bg-*` ;
* à utiliser `text-*` ;
* à utiliser `font-*` ;
* à utiliser `border-*` ;
* à utiliser `rounded-*` ;
* à utiliser `shadow-*` ;
* à utiliser `px-*` et `py-*` ;
* à styliser les boutons ;
* à styliser les champs ;
* à styliser les sections ;
* à styliser un tableau ;
* à créer une hiérarchie visuelle.

**Vous avez réalisé :**

Une interface CRUD structurée et visuellement mise en forme avec Tailwind CSS.

La progression est maintenant :

```text
T.225.111
Structure
    ↓
T.225.112
Mise en forme
```

Dans la suite, l'interface pourra être adaptée aux différentes tailles d'écran et ses états interactifs pourront être représentés.

## Glossaire

* **Couleur** : propriété visuelle utilisée pour différencier les éléments.
* **Typographie** : manière de présenter les textes dans l'interface.
* **Hiérarchie visuelle** : organisation qui permet de distinguer les informations importantes des informations secondaires.
* **Bordure** : ligne visible autour ou entre des éléments.
* **Rayon** : arrondi appliqué aux coins d'un élément.
* **Ombre** : effet visuel qui permet de détacher un élément du fond.
* **Composant** : élément visuel de l'interface, comme un bouton, un formulaire ou un tableau.
* **Carte** : zone visuelle séparée du reste de la page, souvent avec un fond, une bordure et une ombre.
