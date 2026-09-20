---
title: "Gérer les états visuels"
layout: tuto
slug: "gerer-etats-visuels-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.122"
type: "classique"
version: "normal"
ua: "UA.225.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


---

title: "Gérer les états visuels"
layout: tuto
slug: "gerer-etats-visuels-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.122"
type: "classique"
version: "normal"
ua: "UA.225.12"
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

      <aside class="hidden md:flex w-64 bg-gray-900 text-white p-6 flex-col">

          <div>
              <h2 class="text-xl font-bold">
                  Admin Blog
              </h2>

              <p class="text-sm text-gray-400 mt-1">
                  Sprint 2
              </p>
          </div>

          <nav class="flex flex-col gap-2 mt-6">
              <a href="#" class="px-4 py-2 rounded">
                  Tableau de bord
              </a>

              <a href="#" class="px-4 py-2 rounded">
                  Articles
              </a>

              <a href="#" class="px-4 py-2 rounded">
                  Catégories
              </a>
          </nav>

      </aside>

      <div class="flex-1 flex flex-col">

          <header class="flex items-center justify-between bg-white p-4 md:p-6 border-b border-gray-200">

              <div class="text-sm font-medium text-gray-600">
                  Gestion des catégories
              </div>

              <span class="text-sm font-semibold">
                  Admin
              </span>

          </header>

          <main class="flex-1 p-4 md:p-6">

              <div class="max-w-5xl mx-auto space-y-6 md:space-y-8">

                  <section class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

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
                          class="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg
                                 hover:bg-blue-700 transition duration-200 ease-in-out">
                          + Nouvelle Catégorie
                      </button>

                  </section>

                  <section class="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">

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
                                  class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-blue-500
                                         focus:border-blue-500">
                          </div>

                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                              <div>
                                  <label
                                      for="cat-couleur"
                                      class="block text-sm font-semibold text-gray-700 mb-1">
                                      Couleur
                                  </label>

                                  <select
                                      id="cat-couleur"
                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                             focus:outline-none focus:ring-2 focus:ring-blue-500
                                             focus:border-blue-500">
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
                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                             focus:outline-none focus:ring-2 focus:ring-blue-500
                                             focus:border-blue-500">
                                      <option value="">
                                          Choisir une icône
                                      </option>
                                      <option value="Code">Code</option>
                                      <option value="Pinceau">Pinceau / Crayon</option>
                                      <option value="Eclair">Éclair</option>
                                      <option value="Livre">Livre</option>
                                  </select>
                              </div>

                          </div>

                          <div class="flex flex-col gap-2 md:flex-row md:justify-end">

                              <button
                                  type="button"
                                  class="w-full md:w-auto px-4 py-2 text-gray-600
                                         border border-gray-300 rounded-lg
                                         hover:bg-gray-100 transition duration-200">
                                  Annuler
                              </button>

                              <button
                                  type="submit"
                                  class="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg
                                         hover:bg-blue-700 transition duration-200">
                                  Enregistrer
                              </button>

                          </div>

                      </form>

                  </section>

                  <section class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

                      <div class="p-4 md:p-6">
                          <h2 class="text-lg font-bold text-gray-900">
                              Liste des catégories
                          </h2>
                      </div>

                      <div class="overflow-x-auto">

                          <table class="w-full text-left border-collapse">

                              <thead class="bg-gray-50 border-b border-gray-200">

                                  <tr>
                                      <th class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                          ID
                                      </th>

                                      <th class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                          Nom
                                      </th>

                                      <th class="p-4 text-sm font-semibold text-gray-500 uppercase">
                                          Couleur
                                      </th>

                                      <th class="p-4 text-sm font-semibold text-gray-500 uppercase text-right">
                                          Actions
                                      </th>
                                  </tr>

                              </thead>

                              <tbody class="divide-y divide-gray-100">

                                  <tr class="hover:bg-gray-50 transition duration-200">

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
                                              class="text-blue-600 text-sm font-medium
                                                     hover:text-blue-800 transition">
                                              Éditer
                                          </button>

                                          <button
                                              type="button"
                                              class="text-red-600 text-sm font-medium ml-2
                                                     hover:text-red-800 transition">
                                              Supprimer
                                          </button>
                                      </td>

                                  </tr>

                              </tbody>

                          </table>

                      </div>

                  </section>

                  <section class="grid grid-cols-1 md:grid-cols-3 gap-4">

                      <div class="p-4 rounded-lg border border-gray-200 bg-white">
                          <p class="text-sm font-semibold text-gray-700">
                              État normal
                          </p>
                          <p class="text-sm text-gray-500 mt-1">
                              Le contrôle est prêt.
                          </p>
                      </div>

                      <div class="p-4 rounded-lg border border-green-200 bg-green-50">
                          <p class="text-sm font-semibold text-green-800">
                              Succès
                          </p>
                          <p class="text-sm text-green-700 mt-1">
                              Catégorie enregistrée.
                          </p>
                      </div>

                      <div class="p-4 rounded-lg border border-red-200 bg-red-50">
                          <p class="text-sm font-semibold text-red-800">
                              Erreur
                          </p>
                          <p class="text-sm text-red-700 mt-1">
                              L'opération n'a pas abouti.
                          </p>
                      </div>

                  </section>

                  <section class="bg-white p-4 md:p-6 rounded-lg border border-gray-200">

                      <h2 class="text-lg font-bold text-gray-900 mb-4">
                          État de chargement
                      </h2>

                      <button
                          type="button"
                          disabled
                          class="px-4 py-2 bg-blue-600 text-white rounded-lg
                                 opacity-75 cursor-not-allowed
                                 flex items-center gap-2">

                          <svg
                              class="w-4 h-4 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              aria-hidden="true">
                              <circle
                                  class="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  stroke-width="4">
                              </circle>

                              <path
                                  class="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
                              </path>
                          </svg>

                          Enregistrement...
                      </button>

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

Dans ce tutoriel, vous allez apprendre à représenter les différents états visuels d'une interface avec Tailwind CSS.

Vous allez apprendre à utiliser :

* `hover:`
* `focus:`
* `disabled:`
* `opacity-*`
* `transition-*`
* `duration-*`
* `ease-*`
* `animate-*`

Vous allez représenter :

* l'état normal ;
* l'état actif ;
* l'état de survol ;
* l'état de saisie ;
* l'état désactivé ;
* l'état de chargement ;
* l'état de succès ;
* l'état d'erreur.

Vous allez améliorer l'interface responsive réalisée dans T.225.121.

Le comportement JavaScript n'est pas étudié ici.

Tailwind permet de préparer les styles qui seront utilisés ensuite par l'application JavaScript.

## 2. Prérequis

Vous devez avoir réalisé :

> T.225.111 — Structurer une interface avec les utilitaires Tailwind.

> T.225.112 — Mettre en forme les composants de l'interface.

> T.225.121 — Rendre l'interface responsive.

Vous devez connaître :

* les classes utilitaires Tailwind ;
* les couleurs ;
* les boutons ;
* les formulaires ;
* `flex` ;
* `grid` ;
* les breakpoints responsive.

## Données de départ

### HTML

La page reprend l'interface responsive de T.225.121.

Elle contient :

* une sidebar ;
* un header ;
* un formulaire ;
* des boutons ;
* un tableau ;
* des zones de message.

Votre travail consiste à ajouter les états visuels aux éléments existants.

### CSS

Aucun CSS personnalisé n'est nécessaire.

### JavaScript

Aucun JavaScript n'est nécessaire.

Les états sont simulés directement dans le HTML pour apprendre les classes Tailwind.

## Partie 1 — Théorie

### 1.1. Un état visuel

Un même élément peut avoir plusieurs apparences.

Exemple pour un bouton :

```text id="cr4rra"
Normal
   ↓
Survol
   ↓
Clique
   ↓
Chargement
   ↓
Désactivé
```

Tailwind permet de définir ces apparences directement avec des variantes.

### 1.2. `hover:`

`hover:` permet de définir l'apparence lorsqu'un utilisateur passe la souris sur un élément.

Exemple :

```html id="58q4fd"
<button class="bg-blue-600 hover:bg-blue-700">
    Enregistrer
</button>
```

État normal :

```text
bg-blue-600
```

État `hover` :

```text
hover:bg-blue-700
```

### 1.3. `focus:`

`focus:` permet de définir l'apparence d'un élément lorsqu'il reçoit le focus.

C'est particulièrement utile pour les champs de formulaire.

Exemple :

```html id="qgd1vw"
<input
    class="border border-gray-300 focus:border-blue-500">
```

Lorsque l'utilisateur place le curseur dans le champ, la bordure change.

On peut également utiliser :

```html id="bxv1k8"
<input
    class="focus:outline-none focus:ring-2 focus:ring-blue-500">
```

Le champ possède alors un indicateur visuel de focus.

### 1.4. Pourquoi le focus est important

L'utilisateur peut naviguer dans une page avec le clavier.

Il doit savoir quel élément est actuellement sélectionné.

Le style `focus:` permet de représenter cet état.

Exemple :

```text id="3p0osz"
Champ normal
     ↓
Champ sélectionné
     ↓
bordure / anneau visible
```

### 1.5. `disabled:`

`disabled:` permet de définir le style lorsque le contrôle est désactivé.

Exemple :

```html id="7m6p0s"
<button
    disabled
    class="bg-blue-600 disabled:opacity-75">
    Enregistrer
</button>
```

Le bouton apparaît plus atténué.

### 1.6. `opacity-*`

`opacity-*` contrôle la transparence d'un élément.

Exemple :

```html id="q0l7tr"
<div class="opacity-75">
    Chargement
</div>
```

Une opacité plus faible peut représenter un état temporaire.

Avec un bouton désactivé :

```html id="oe2w4n"
disabled:opacity-75
```

le bouton est visuellement moins actif.

### 1.7. `cursor-not-allowed`

Cette classe modifie l'apparence du curseur.

Exemple :

```html id="w5ku6a"
<button
    disabled
    class="disabled:cursor-not-allowed">
    Enregistrer
</button>
```

L'utilisateur comprend que le bouton n'est pas disponible.

### 1.8. Les transitions

Une transition permet de rendre un changement visuel plus progressif.

Exemple :

```html id="u7ay6j"
<button class="hover:bg-blue-700 transition">
    Enregistrer
</button>
```

Lorsque la couleur change au survol, le changement devient progressif.

### 1.9. `duration-*`

`duration-*` définit la durée d'une transition.

Exemple :

```html id="c6n7ga"
<button class="transition duration-200">
    Enregistrer
</button>
```

Vous pouvez également utiliser :

```text id="gk7q1x"
duration-150
duration-200
duration-300
duration-500
```

Choisissez une durée courte pour les interactions simples.

### 1.10. `ease-*`

`ease-*` définit la manière dont une transition évolue.

Exemple :

```html id="7u4rbd"
<button class="transition duration-200 ease-in-out">
    Enregistrer
</button>
```

`ease-in-out` rend le changement progressif au début et à la fin.

### 1.11. `animate-*`

Tailwind fournit des animations prêtes à utiliser.

Exemple :

```html id="9mw1lp"
<div class="animate-spin">
    ...
</div>
```

`animate-spin` permet de faire tourner un élément.

C'est utile pour un indicateur de chargement.

### 1.12. Le chargement

Un indicateur peut être créé avec un élément SVG :

```html id="mbv27v"
<svg class="w-4 h-4 animate-spin">
    ...
</svg>
```

Le spinner montre :

```text
Opération en cours...
      ↻
```

L'animation informe l'utilisateur que l'application travaille.

### 1.13. Les couleurs d'état

Les couleurs peuvent aider à comprendre rapidement un résultat.

Exemple de succès :

```html id="v7j3qu"
<div class="bg-green-50 border border-green-200 text-green-800">
    Catégorie enregistrée.
</div>
```

Exemple d'erreur :

```html id="5nqbrv"
<div class="bg-red-50 border border-red-200 text-red-800">
    Une erreur est survenue.
</div>
```

L'objectif est de créer une différence visuelle entre les états.

### 1.14. Un état n'est pas une nouvelle fonctionnalité

Tailwind ne réalise pas l'opération.

Par exemple :

```html id="c0x5aa"
disabled
```

désactive visuellement et fonctionnellement le bouton HTML.

Mais Tailwind ne décide pas quand le bouton doit être désactivé.

Cette décision appartient au JavaScript de l'application.

Dans ce domaine :

```text
Tailwind
→ représente l'état

JavaScript
→ gère l'état
```

### 1.15. À retenir

* `hover:` représente le survol.
* `focus:` représente le focus.
* `disabled:` représente un contrôle désactivé.
* `opacity-*` permet d'atténuer un élément.
* `cursor-not-allowed` signale un contrôle indisponible.
* `transition-*` rend un changement progressif.
* `duration-*` définit la durée.
* `ease-*` définit le mouvement de la transition.
* `animate-spin` peut représenter un chargement.
* Les couleurs peuvent distinguer les états de succès et d'erreur.

## Partie 2 — Pratique

### 2.1. Ajouter un état `hover` au bouton principal

Repérez le bouton :

```html id="q6rjba"
<button
    type="button"
    class="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg">
    + Nouvelle Catégorie
</button>
```

Ajoutez :

```html id="pvkgy8"
hover:bg-blue-700
```

Le bouton devient :

```html id="k3j8d1"
<button
    type="button"
    class="w-full md:w-auto px-4 py-2
           bg-blue-600 text-white rounded-lg
           hover:bg-blue-700">
    + Nouvelle Catégorie
</button>
```

Testez le bouton avec la souris.

La couleur change au survol.

### 2.2. Ajouter une transition

Ajoutez :

```text id="glqj9p"
transition
```

Puis :

```html id="1q2r7q"
<button
    type="button"
    class="w-full md:w-auto px-4 py-2
           bg-blue-600 text-white rounded-lg
           hover:bg-blue-700
           transition">
    + Nouvelle Catégorie
</button>
```

Le changement de couleur est maintenant progressif.

### 2.3. Contrôler la durée

Ajoutez :

```text id="ou0n7c"
duration-200
```

Le bouton devient :

```html id="p8xobd"
<button
    type="button"
    class="w-full md:w-auto px-4 py-2
           bg-blue-600 text-white rounded-lg
           hover:bg-blue-700
           transition duration-200">
    + Nouvelle Catégorie
</button>
```

Testez différentes valeurs :

```text
duration-150
duration-200
duration-300
```

Choisissez une durée courte et adaptée à l'interaction.

### 2.4. Ajouter `ease-in-out`

Ajoutez :

```text id="4p7u0q"
ease-in-out
```

Le résultat :

```html id="hxf3a5"
<button
    type="button"
    class="w-full md:w-auto px-4 py-2
           bg-blue-600 text-white rounded-lg
           hover:bg-blue-700
           transition duration-200 ease-in-out">
    + Nouvelle Catégorie
</button>
```

Vous avez maintenant défini :

```text
interaction
→ hover

animation
→ transition

durée
→ duration-200

mouvement
→ ease-in-out
```

### 2.5. Ajouter un état `focus` au champ

Repérez le champ :

```html id="24ts7r"
<input
    type="text"
    id="cat-nom"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg">
```

Ajoutez :

```text id="2l3tu6"
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
```

Le champ devient :

```html id="a8twc4"
<input
    type="text"
    id="cat-nom"
    class="w-full px-4 py-2
           border border-gray-300 rounded-lg
           focus:outline-none
           focus:ring-2
           focus:ring-blue-500
           focus:border-blue-500">
```

Cliquez dans le champ.

L'état de focus doit être visible.

### 2.6. Appliquer le même focus aux `select`

Utilisez les mêmes classes pour les listes déroulantes :

```html id="5t6k4m"
<select
    class="w-full px-4 py-2
           border border-gray-300 rounded-lg
           focus:outline-none
           focus:ring-2
           focus:ring-blue-500
           focus:border-blue-500">
```

Testez le focus sur les deux listes.

### 2.7. Ajouter un état `hover` aux boutons d'action

Pour **Éditer** :

```html id="h1lnu2"
<button
    type="button"
    class="text-blue-600 text-sm font-medium
           hover:text-blue-800
           transition duration-200">
    Éditer
</button>
```

Pour **Supprimer** :

```html id="ay6zrr"
<button
    type="button"
    class="text-red-600 text-sm font-medium
           hover:text-red-800
           transition duration-200">
    Supprimer
</button>
```

Chaque action possède maintenant un retour visuel au survol.

### 2.8. Ajouter un état `hover` à une ligne

Une ligne de tableau peut aussi changer d'apparence :

```html id="kqs2es"
<tr class="hover:bg-gray-50 transition duration-200">
```

Lorsque la souris passe sur la ligne, son fond change légèrement.

Cela aide l'utilisateur à repérer la ligne active.

### 2.9. Représenter un bouton désactivé

Ajoutez un bouton de démonstration :

```html id="gd9sjk"
<button
    type="button"
    disabled
    class="px-4 py-2 bg-blue-600 text-white rounded-lg
           opacity-75 cursor-not-allowed">
    Enregistrement...
</button>
```

Le bouton est maintenant :

* désactivé ;
* visuellement atténué ;
* associé à un curseur indiquant qu'il n'est pas disponible.

### 2.10. Utiliser `disabled:`

Vous pouvez placer le style directement sur la variante `disabled:`.

```html id="2m8bku"
<button
    type="button"
    disabled
    class="px-4 py-2
           bg-blue-600 text-white rounded-lg
           disabled:opacity-75
           disabled:cursor-not-allowed">
    Enregistrement...
</button>
```

Cette écriture permet de définir le style uniquement lorsque le bouton est désactivé.

### 2.11. Ajouter un spinner

Ajoutez un SVG animé :

```html id="a8m0bj"
<svg
    class="w-4 h-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true">

    <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4">
    </circle>

    <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
    </path>

</svg>
```

Placez-le dans le bouton :

```html id="0jl6xe"
<button
    type="button"
    disabled
    class="px-4 py-2
           bg-blue-600 text-white rounded-lg
           disabled:opacity-75
           disabled:cursor-not-allowed
           flex items-center gap-2">

    <svg
        class="w-4 h-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true">

        <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4">
        </circle>

        <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
        </path>

    </svg>

    Enregistrement...
</button>
```

L'animation représente maintenant un état de chargement.

### 2.12. Créer un état de succès

Ajoutez une notification statique :

```html id="ls82ft"
<div class="bg-green-50 border border-green-200 rounded-lg p-4">
    <p class="text-sm font-semibold text-green-800">
        Catégorie ajoutée avec succès.
    </p>
</div>
```

La combinaison :

```text
bg-green-50
border-green-200
text-green-800
```

indique visuellement un succès.

### 2.13. Créer un état d'erreur

Ajoutez :

```html id="j1qpf7"
<div class="bg-red-50 border border-red-200 rounded-lg p-4">
    <p class="text-sm font-semibold text-red-800">
        Une erreur est survenue.
    </p>
</div>
```

L'utilisateur distingue rapidement l'erreur du succès.

### 2.14. Créer un état neutre

Toutes les informations ne sont pas des succès ou des erreurs.

Un message neutre peut utiliser :

```html id="nc77l8"
<div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
    <p class="text-sm font-semibold text-gray-700">
        Aucune opération en cours.
    </p>
</div>
```

Vous obtenez maintenant :

```text
Neutre  → gris
Succès  → vert
Erreur  → rouge
```

### 2.15. Comprendre le rôle de JavaScript

Dans ce tutoriel, l'état est écrit directement dans le HTML pour observer son apparence.

Dans l'application réelle, JavaScript pourra ajouter ou retirer ces classes.

Par exemple :

```text
JavaScript
     ↓
opération en cours
     ↓
ajoute l'état chargement
     ↓
Tailwind affiche l'état
```

Puis :

```text
JavaScript
     ↓
opération terminée
     ↓
retire l'état chargement
     ↓
Tailwind affiche l'état normal
```

Le domaine Tailwind ne gère donc pas la logique de l'opération.

Il prépare sa représentation visuelle.

### 2.16. Construire un bouton complet

Regroupez maintenant plusieurs états :

```html id="7x2x7k"
<button
    type="button"
    class="px-4 py-2
           bg-blue-600 text-white rounded-lg
           hover:bg-blue-700
           focus:outline-none focus:ring-2 focus:ring-blue-500
           disabled:opacity-75
           disabled:cursor-not-allowed
           transition duration-200 ease-in-out">
    Enregistrer
</button>
```

Ce bouton possède :

```text
Normal
→ bg-blue-600

Hover
→ hover:bg-blue-700

Focus
→ focus:ring-2

Disabled
→ disabled:opacity-75
→ disabled:cursor-not-allowed

Transition
→ transition
→ duration-200
→ ease-in-out
```

### 2.17. Vérifier les états

Testez visuellement :

```text id="s3j7pz"
État normal
→ apparence initiale

Hover
→ couleur modifiée

Focus
→ anneau visible

Disabled
→ bouton atténué

Loading
→ spinner animé

Succès
→ message vert

Erreur
→ message rouge
```

### 2.18. Vérifier la cohérence

Les états doivent rester cohérents avec les actions.

Par exemple :

```text id="c0w8o5"
Enregistrer
→ bleu

Succès
→ vert

Erreur
→ rouge

Indisponible
→ atténué
```

N'utilisez pas plusieurs couleurs différentes pour le même état sans raison.

### 2.19. Tester l'interface complète

Testez :

1. passer la souris sur le bouton principal ;
2. placer le focus dans un champ ;
3. passer la souris sur les actions du tableau ;
4. observer une ligne au survol ;
5. observer le bouton désactivé ;
6. observer le spinner ;
7. observer le message de succès ;
8. observer le message d'erreur.

Vérifiez également que le responsive de T.225.121 fonctionne toujours.

**Résultat attendu :**

```html id="q8u1t2"
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-4-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Améliorez l'interface responsive réalisée dans T.225.121 pour représenter clairement les états visuels.

Ajoutez :

* un état `hover` aux boutons ;
* un état `focus` aux champs ;
* un état `disabled` au bouton d'enregistrement ;
* une opacité pour l'état désactivé ;
* un curseur adapté ;
* une transition ;
* une durée ;
* une fonction d'accélération ;
* un indicateur de chargement animé ;
* un état de succès ;
* un état d'erreur.

Conservez le responsive réalisé dans T.225.121.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code HTML.

**Critère de réussite :**

L'interface représente clairement les états normaux, interactifs, désactivés, de chargement, de succès et d'erreur, sans modifier la logique JavaScript de l'application.

## Bilan

**Vous avez appris :**

* à représenter un état `hover` ;
* à représenter un état `focus` ;
* à représenter un état `disabled` ;
* à utiliser `opacity-*` ;
* à utiliser `cursor-not-allowed` ;
* à utiliser `transition` ;
* à utiliser `duration-*` ;
* à utiliser `ease-*` ;
* à utiliser `animate-spin` ;
* à représenter un succès ;
* à représenter une erreur ;
* à préparer une représentation visuelle pour les états gérés par JavaScript.

**Vous avez réalisé :**

Une interface responsive capable de représenter visuellement les différents états des contrôles et des opérations.

La progression est maintenant :

```text
T.225.111
Structure
    ↓
T.225.112
Mise en forme
    ↓
T.225.121
Responsive
    ↓
T.225.122
États visuels
```

## Glossaire

* **État visuel** : apparence d'un élément selon la situation de l'interface.
* **`hover`** : état d'un élément lorsque le pointeur passe dessus.
* **`focus`** : état d'un élément qui reçoit le focus du clavier ou du navigateur.
* **`disabled`** : état d'un contrôle qui n'est pas disponible.
* **Transition** : changement progressif entre deux apparences.
* **Animation** : mouvement visuel réalisé automatiquement.
* **Feedback visuel** : information donnée à l'utilisateur par l'apparence de l'interface.
* **Spinner** : indicateur animé qui représente une opération en cours.
* **Opacité** : niveau de transparence d'un élément.
* **`duration-*`** : classe qui définit la durée d'une transition.
* **`ease-*`** : classe qui définit la vitesse d'évolution d'une transition.
* **`animate-*`** : classe qui applique une animation prédéfinie.
