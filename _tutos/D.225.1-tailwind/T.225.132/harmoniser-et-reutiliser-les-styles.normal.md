---
title: "Harmoniser et réutiliser les styles"
layout: tuto
slug: "harmoniser-reutiliser-styles-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.132"
type: "classique"
version: "normal"
ua: "UA.225.13"
nav_order: 2
data_html: |
  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Administration - Blog</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <script>
      tailwind.config = {
          theme: {
              extend: {
                  colors: {
                      primary: {
                          50: '#f0f6ff',
                          500: '#2673e8',
                          600: '#1c5bba',
                          900: '#0a2042'
                      }
                  }
              }
          }
      }
  </script>

  </head>

  <body class="bg-gray-100 text-gray-800 min-h-screen">

  <div class="flex min-h-screen">

      <aside class="hidden md:flex w-64 bg-primary-900 text-white p-6 flex-col">

          <div>
              <h2 class="text-xl font-bold">
                  Admin Blog
              </h2>

              <p class="text-sm text-gray-400 mt-1">
                  Sprint 3
              </p>
          </div>

          <nav class="flex flex-col gap-2 mt-6">

              <a
                  href="#"
                  class="px-4 py-2 rounded text-gray-300">
                  Tableau de bord
              </a>

              <a
                  href="#"
                  class="px-4 py-2 rounded text-gray-300">
                  Articles
              </a>

              <a
                  href="#"
                  class="px-4 py-2 rounded bg-primary-600 text-white font-medium">
                  Catégories
              </a>

          </nav>

      </aside>

      <div class="flex-1 flex flex-col">

          <header
              class="flex items-center justify-between
                     bg-white p-4 md:p-6
                     border-b border-gray-200">

              <div class="text-sm font-medium text-gray-600">
                  Gestion des catégories
              </div>

              <span class="text-sm font-semibold">
                  Admin
              </span>

          </header>

          <main class="flex-1 p-4 md:p-6">

              <div class="max-w-5xl mx-auto space-y-6 md:space-y-8">

                  <section
                      class="flex flex-col gap-4
                             md:flex-row md:items-center md:justify-between">

                      <div>
                          <h1 class="text-2xl font-bold text-gray-900">
                              Catégories
                          </h1>

                          <p class="text-sm text-gray-500 mt-1">
                              Organisez les rubriques de votre blog.
                          </p>
                      </div>

                      <button
                          type="button"
                          class="w-full md:w-auto
                                 px-4 py-2
                                 bg-primary-600 text-white
                                 rounded-lg
                                 hover:bg-primary-900
                                 transition duration-200">
                          + Nouvelle Catégorie
                      </button>

                  </section>

                  <section
                      class="bg-white
                             p-4 md:p-6
                             rounded-lg
                             shadow-sm
                             border border-gray-200">

                      <h2
                          class="text-lg font-bold text-gray-900 mb-4">
                          Ajouter / Modifier une catégorie
                      </h2>

                      <form class="space-y-4">

                          <div>
                              <label
                                  for="cat-nom"
                                  class="block
                                         text-sm font-semibold
                                         text-gray-700
                                         mb-1">
                                  Nom de la catégorie
                              </label>

                              <input
                                  type="text"
                                  id="cat-nom"
                                  placeholder="Ex: Développement Web"
                                  class="w-full
                                         px-4 py-2
                                         border border-gray-300
                                         rounded-lg
                                         focus:outline-none
                                         focus:ring-2
                                         focus:ring-primary-500
                                         focus:border-primary-500">
                          </div>

                          <div
                              class="grid grid-cols-1 md:grid-cols-2 gap-4">

                              <div>
                                  <label
                                      for="cat-couleur"
                                      class="block
                                             text-sm font-semibold
                                             text-gray-700
                                             mb-1">
                                      Couleur
                                  </label>

                                  <select
                                      id="cat-couleur"
                                      class="w-full
                                             px-4 py-2
                                             border border-gray-300
                                             rounded-lg
                                             focus:outline-none
                                             focus:ring-2
                                             focus:ring-primary-500
                                             focus:border-primary-500">

                                      <option value="">
                                          Choisir une couleur
                                      </option>

                                      <option value="Bleu">
                                          Bleu
                                      </option>

                                      <option value="Rose">
                                          Rose
                                      </option>

                                      <option value="Emeraude">
                                          Émeraude
                                      </option>

                                      <option value="Violet">
                                          Violet
                                      </option>

                                  </select>
                              </div>

                              <div>
                                  <label
                                      for="cat-icone"
                                      class="block
                                             text-sm font-semibold
                                             text-gray-700
                                             mb-1">
                                      Icône
                                  </label>

                                  <select
                                      id="cat-icone"
                                      class="w-full
                                             px-4 py-2
                                             border border-gray-300
                                             rounded-lg
                                             focus:outline-none
                                             focus:ring-2
                                             focus:ring-primary-500
                                             focus:border-primary-500">

                                      <option value="">
                                          Choisir une icône
                                      </option>

                                      <option value="Code">
                                          Code
                                      </option>

                                      <option value="Pinceau">
                                          Pinceau / Crayon
                                      </option>

                                      <option value="Eclair">
                                          Éclair
                                      </option>

                                      <option value="Livre">
                                          Livre
                                      </option>

                                  </select>
                              </div>

                          </div>

                          <div
                              class="flex flex-col gap-2
                                     md:flex-row md:justify-end">

                              <button
                                  type="button"
                                  class="w-full md:w-auto
                                         px-4 py-2
                                         text-gray-600
                                         border border-gray-300
                                         rounded-lg
                                         hover:bg-gray-100
                                         transition duration-200">
                                  Annuler
                              </button>

                              <button
                                  type="submit"
                                  class="w-full md:w-auto
                                         px-4 py-2
                                         bg-primary-600
                                         text-white
                                         rounded-lg
                                         hover:bg-primary-900
                                         transition duration-200">
                                  Enregistrer
                              </button>

                          </div>

                      </form>

                  </section>

                  <section
                      class="bg-white
                             rounded-lg
                             shadow-sm
                             border border-gray-200
                             overflow-hidden">

                      <div class="p-4 md:p-6">

                          <h2
                              class="text-lg font-bold text-gray-900">
                              Liste des catégories
                          </h2>

                      </div>

                      <div class="overflow-x-auto">

                          <table class="w-full text-left border-collapse">

                              <thead
                                  class="bg-gray-50
                                         border-b border-gray-200">

                                  <tr>

                                      <th
                                          class="p-4
                                                 text-sm font-semibold
                                                 text-gray-500 uppercase">
                                          ID
                                      </th>

                                      <th
                                          class="p-4
                                                 text-sm font-semibold
                                                 text-gray-500 uppercase">
                                          Nom
                                      </th>

                                      <th
                                          class="p-4
                                                 text-sm font-semibold
                                                 text-gray-500 uppercase">
                                          Couleur
                                      </th>

                                      <th
                                          class="p-4
                                                 text-sm font-semibold
                                                 text-gray-500 uppercase
                                                 text-right">
                                          Actions
                                      </th>

                                  </tr>

                              </thead>

                              <tbody class="divide-y divide-gray-100">

                                  <tr
                                      class="hover:bg-gray-50
                                             transition duration-200">

                                      <td
                                          class="p-4
                                                 text-sm text-gray-500">
                                          #1
                                      </td>

                                      <td
                                          class="p-4
                                                 text-sm font-bold
                                                 text-gray-900">
                                          Développement Web
                                      </td>

                                      <td
                                          class="p-4
                                                 text-sm text-gray-600">
                                          Bleu
                                      </td>

                                      <td class="p-4 text-right">

                                          <button
                                              type="button"
                                              class="text-primary-600
                                                     text-sm font-medium
                                                     hover:text-primary-900
                                                     transition duration-200">
                                              Éditer
                                          </button>

                                          <button
                                              type="button"
                                              class="ml-2
                                                     text-red-600
                                                     text-sm font-medium
                                                     hover:text-red-800
                                                     transition duration-200">
                                              Supprimer
                                          </button>

                                      </td>

                                  </tr>

                                  <tr
                                      class="hover:bg-gray-50
                                             transition duration-200">

                                      <td
                                          class="p-4
                                                 text-sm text-gray-500">
                                          #2
                                      </td>

                                      <td
                                          class="p-4
                                                 text-sm font-bold
                                                 text-gray-900">
                                          Design
                                      </td>

                                      <td
                                          class="p-4
                                                 text-sm text-gray-600">
                                          Rose
                                      </td>

                                      <td class="p-4 text-right">

                                          <button
                                              type="button"
                                              class="text-primary-600
                                                     text-sm font-medium
                                                     hover:text-primary-900
                                                     transition duration-200">
                                              Éditer
                                          </button>

                                          <button
                                              type="button"
                                              class="ml-2
                                                     text-red-600
                                                     text-sm font-medium
                                                     hover:text-red-800
                                                     transition duration-200">
                                              Supprimer
                                          </button>

                                      </td>

                                  </tr>

                              </tbody>

                          </table>

                      </div>

                  </section>

              </div>

          </main>

      </div>

  </div>

  </body>
  </html>
data_css: ""
data_js: ""
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

Dans ce tutoriel, vous allez apprendre à garder une présentation cohérente dans plusieurs parties d'une application.

Vous allez apprendre à :

* identifier les styles communs ;
* réutiliser les mêmes classes pour les mêmes éléments ;
* définir des conventions simples ;
* garder les mêmes espacements ;
* garder les mêmes formes ;
* garder les mêmes couleurs ;
* garder les mêmes états visuels ;
* vérifier la cohérence entre plusieurs pages.

Vous allez appliquer ces règles à l'interface d'administration.

L'objectif est d'obtenir plusieurs éléments visuellement cohérents sans créer une nouvelle architecture de composants.

## 2. Prérequis

Vous devez avoir réalisé :

> T.225.111 — Structurer une interface avec les utilitaires Tailwind.

> T.225.112 — Mettre en forme les composants de l'interface.

> T.225.121 — Rendre l'interface responsive.

> T.225.122 — Gérer les états visuels.

> T.225.131 — Personnaliser le thème Tailwind.

Vous devez connaître :

* `bg-*` ;
* `text-*` ;
* `font-*` ;
* `p-*` ;
* `px-*` ;
* `py-*` ;
* `border-*` ;
* `rounded-*` ;
* `shadow-*` ;
* `hover:*` ;
* `focus:*` ;
* `transition-*` ;
* les couleurs `primary-*`.

## Données de départ

### HTML

La page reprend l'interface de l'administration des catégories.

Plusieurs éléments utilisent déjà des styles proches :

* les boutons ;
* les champs ;
* les cartes ;
* les titres ;
* les actions du tableau ;
* la navigation.

Votre travail consiste à identifier ces répétitions et à utiliser les mêmes règles de style.

### CSS

Aucun CSS personnalisé n'est nécessaire.

### JavaScript

Aucun JavaScript n'est nécessaire.

Le tutoriel porte sur l'organisation des styles dans le HTML.

## Partie 1 — Théorie

### 1.1. Pourquoi harmoniser les styles

Une application contient souvent plusieurs éléments du même type.

Exemple :

```text
Bouton Enregistrer
Bouton Nouvelle catégorie
Bouton Ajouter un article
```

Ces boutons doivent avoir une apparence cohérente.

Si chaque bouton possède des couleurs et des espacements différents, l'interface devient difficile à lire.

### 1.2. Réutiliser une même règle visuelle

Supposons qu'un bouton principal utilise :

```html id="av4zq7"
class="px-4 py-2 bg-primary-600 text-white rounded-lg"
```

Les autres boutons principaux doivent reprendre la même logique.

Exemple :

```text
Nouvelle catégorie
→ bouton principal

Enregistrer
→ bouton principal
```

On conserve les mêmes propriétés :

```text
px-4 py-2
bg-primary-600
text-white
rounded-lg
```

### 1.3. Une convention de style

Une convention est une règle utilisée de manière régulière.

Exemple :

```text
Bouton principal
→ primary

Bouton secondaire
→ gris

Action modifier
→ primary

Action supprimer
→ rouge

Carte
→ blanc + bordure + ombre + coins arrondis
```

Les conventions permettent de reconnaître rapidement les éléments.

### 1.4. Réutiliser les styles d'un bouton principal

Dans notre interface :

```html id="t3o6lr"
<button
    class="px-4 py-2
           bg-primary-600
           text-white
           rounded-lg
           hover:bg-primary-900
           transition duration-200">
    Enregistrer
</button>
```

Le bouton **Nouvelle Catégorie** peut utiliser le même ensemble de classes.

Le style est donc réutilisé.

### 1.5. Réutiliser les styles d'un bouton secondaire

Le bouton **Annuler** utilise :

```html id="1qiu8k"
<button
    class="px-4 py-2
           text-gray-600
           border border-gray-300
           rounded-lg
           hover:bg-gray-100
           transition duration-200">
    Annuler
</button>
```

Le même style peut être utilisé pour une autre action secondaire.

### 1.6. Réutiliser les styles des champs

Tous les champs du formulaire doivent avoir une présentation commune.

Exemple :

```html id="gu0q3n"
class="w-full
       px-4 py-2
       border border-gray-300
       rounded-lg
       focus:outline-none
       focus:ring-2
       focus:ring-primary-500
       focus:border-primary-500"
```

Le même style est appliqué à :

* `input` ;
* `select` ;
* `textarea` si nécessaire.

### 1.7. Réutiliser le style des cartes

Une carte peut suivre une convention :

```text id="b0ihjq"
bg-white
p-6
rounded-lg
shadow-sm
border border-gray-200
```

Les différentes zones de l'application peuvent donc utiliser la même présentation :

```text
Formulaire
→ carte

Liste
→ carte

Bloc d'information
→ carte
```

### 1.8. Réutiliser la hiérarchie des titres

Dans l'interface :

```text
H1 → text-2xl font-bold
H2 → text-lg font-bold
Description → text-sm text-gray-500
```

Cette convention doit rester stable.

Exemple :

```html id="c4drqz"
<h1 class="text-2xl font-bold text-gray-900">
    Catégories
</h1>
```

Puis :

```html id="q51qzo"
<h2 class="text-lg font-bold text-gray-900">
    Liste des catégories
</h2>
```

### 1.9. Réutiliser les espacements

Il est préférable d'utiliser régulièrement les mêmes valeurs :

```text id="flj0oh"
p-4
p-6
gap-2
gap-4
space-y-6
space-y-8
```

Plutôt que d'utiliser de nombreuses valeurs différentes.

L'interface devient plus régulière.

### 1.10. Réutiliser les états

Un même type de bouton doit également avoir les mêmes états.

Exemple :

```text id="v4v3q6"
Bouton principal
→ hover:bg-primary-900
→ transition
→ duration-200
```

On évite qu'un bouton principal utilise une transition et qu'un autre n'en utilise pas sans raison.

### 1.11. Les styles communs ne sont pas une architecture de composants

Dans ce tutoriel, vous apprenez à réutiliser des **règles de style**.

Vous ne créez pas encore :

* des composants Blade ;
* des composants JavaScript ;
* une architecture frontend ;
* une classe CSS personnalisée ;
* une architecture 3-tiers.

Le travail consiste simplement à appliquer les mêmes classes aux éléments qui ont le même rôle visuel.

### 1.12. Vérifier la cohérence

Pour chaque élément, posez la question :

> Cet élément possède-t-il le même rôle qu'un autre élément ?

Si oui, utilisez la même convention de style.

Exemple :

```text
Enregistrer
+
Nouvelle catégorie
+
Ajouter un article
```

Même rôle :

```text
→ bouton principal
```

Donc :

```text
→ même style
```

### 1.13. À retenir

* Un même rôle visuel doit utiliser une même convention.
* Les boutons principaux doivent être cohérents.
* Les boutons secondaires doivent être cohérents.
* Les champs doivent avoir une présentation commune.
* Les cartes doivent utiliser les mêmes espacements et formes.
* Les titres doivent respecter une hiérarchie stable.
* Les états interactifs doivent rester cohérents.
* La réutilisation des classes améliore la cohérence visuelle.

## Partie 2 — Pratique

### 2.1. Identifier les styles répétitifs

Observez l'interface.

Vous pouvez identifier :

```text
Boutons principaux
→ Nouvelle Catégorie
→ Enregistrer

Boutons secondaires
→ Annuler

Champs
→ input
→ select

Cartes
→ formulaire
→ liste

Actions
→ Éditer
→ Supprimer
```

Chaque groupe doit suivre une convention.

### 2.2. Définir la convention des boutons principaux

Utilisez :

```html id="ag7r7m"
px-4 py-2
bg-primary-600
text-white
rounded-lg
hover:bg-primary-900
transition
duration-200
```

Pour **Nouvelle Catégorie** :

```html id="b7vt1n"
<button
    type="button"
    class="w-full md:w-auto
           px-4 py-2
           bg-primary-600
           text-white
           rounded-lg
           hover:bg-primary-900
           transition duration-200">
    + Nouvelle Catégorie
</button>
```

Pour **Enregistrer** :

```html id="q6cgq0"
<button
    type="submit"
    class="w-full md:w-auto
           px-4 py-2
           bg-primary-600
           text-white
           rounded-lg
           hover:bg-primary-900
           transition duration-200">
    Enregistrer
</button>
```

Les deux boutons ont maintenant la même identité.

### 2.3. Définir la convention du bouton secondaire

Utilisez :

```html id="5y7arw"
<button
    type="button"
    class="w-full md:w-auto
           px-4 py-2
           text-gray-600
           border border-gray-300
           rounded-lg
           hover:bg-gray-100
           transition duration-200">
    Annuler
</button>
```

Utilisez la même convention pour les autres actions secondaires de l'application.

### 2.4. Définir la convention des champs

Pour les `input` :

```html id="ntwnzu"
<input
    class="w-full
           px-4 py-2
           border border-gray-300
           rounded-lg
           focus:outline-none
           focus:ring-2
           focus:ring-primary-500
           focus:border-primary-500">
```

Pour les `select` :

```html id="t7qjv5"
<select
    class="w-full
           px-4 py-2
           border border-gray-300
           rounded-lg
           focus:outline-none
           focus:ring-2
           focus:ring-primary-500
           focus:border-primary-500">
```

Les deux contrôles possèdent maintenant le même style.

### 2.5. Définir la convention des labels

Utilisez :

```html id="nkjf3a"
<label
    class="block
           text-sm
           font-semibold
           text-gray-700
           mb-1">
    Nom de la catégorie
</label>
```

Utilisez la même convention pour :

```text
Nom
Couleur
Icône
```

Les labels deviennent cohérents.

### 2.6. Définir la convention des cartes

Le formulaire utilise :

```html id="k0ns7c"
<section
    class="bg-white
           p-4 md:p-6
           rounded-lg
           shadow-sm
           border border-gray-200">
```

La liste utilise :

```html id="3kq3bj"
<section
    class="bg-white
           rounded-lg
           shadow-sm
           border border-gray-200
           overflow-hidden">
```

Les deux zones partagent le même principe :

```text
bg-white
rounded-lg
shadow-sm
border border-gray-200
```

La différence de `padding` est liée à leur contenu.

### 2.7. Définir la convention des titres

Le titre principal utilise :

```html id="xk8y10"
<h1 class="text-2xl font-bold text-gray-900">
    Catégories
</h1>
```

Les titres secondaires utilisent :

```html id="o7rgf4"
<h2 class="text-lg font-bold text-gray-900">
    Liste des catégories
</h2>
```

La description utilise :

```html id="zwv4px"
<p class="text-sm text-gray-500">
    Organisez les rubriques de votre blog.
</p>
```

Gardez cette hiérarchie sur les autres pages.

### 2.8. Définir la convention des actions

Pour **Éditer** :

```html id="b6k4ar"
<button
    class="text-primary-600
           text-sm
           font-medium
           hover:text-primary-900
           transition duration-200">
    Éditer
</button>
```

Pour **Supprimer** :

```html id="mjwjzv"
<button
    class="text-red-600
           text-sm
           font-medium
           hover:text-red-800
           transition duration-200">
    Supprimer
</button>
```

Les deux actions gardent une logique visuelle :

```text
Éditer
→ action principale

Supprimer
→ action destructive
```

### 2.9. Réutiliser les mêmes styles dans plusieurs lignes

Dans le tableau, deux lignes utilisent les mêmes actions.

La première ligne :

```html id="gsbrmi"
<button class="text-primary-600 text-sm font-medium ...">
    Éditer
</button>
```

La deuxième ligne utilise exactement la même convention.

Il ne faut pas changer arbitrairement la couleur ou les espacements pour une seule ligne.

### 2.10. Réutiliser les conventions sur une autre page

Dans le projet S3, la page des articles utilise également :

```text
Bouton Nouvel Article
Formulaire
Champs
Tableau
Actions
```

Appliquez les mêmes conventions :

```text
Bouton principal
→ primary

Bouton secondaire
→ gris

Champ
→ même style

Carte
→ même style

Éditer
→ primary

Supprimer
→ rouge
```

L'objectif est que l'utilisateur reconnaisse la même application lorsqu'il passe de **Catégories** à **Articles**.

### 2.11. Comparer Catégories et Articles

Pour la page des catégories :

```text id="5wa7y6"
Nouvelle Catégorie
```

Pour la page des articles :

```text id="k2o8bx"
Nouvel Article
```

Les deux doivent utiliser la même convention de bouton principal.

Même principe pour :

```text
Enregistrer une catégorie
Enregistrer un article
```

Les deux doivent utiliser la même convention.

### 2.12. Réutiliser les espacements

Choisissez quelques valeurs principales :

```text id="w8gct5"
p-4
p-6
gap-2
gap-4
space-y-6
space-y-8
```

Réutilisez-les dans les différentes pages.

Évitez de changer les espacements sans raison.

### 2.13. Vérifier les couleurs

Les couleurs principales doivent venir du thème :

```text id="rtzjwf"
primary-50
primary-500
primary-600
primary-900
```

Utilisez-les pour :

```text
boutons principaux
liens actifs
actions principales
focus
textes accentués
```

Les actions destructives peuvent conserver une famille rouge.

Les informations secondaires peuvent conserver une famille grise.

### 2.14. Créer une grille de conventions

Construisez un petit tableau de référence dans votre document :

| Élément           | Convention                                             |
| ----------------- | ------------------------------------------------------ |
| Bouton principal  | `bg-primary-600 text-white rounded-lg`                 |
| Bouton secondaire | `text-gray-600 border border-gray-300 rounded-lg`      |
| Champ             | `border border-gray-300 rounded-lg`                    |
| Carte             | `bg-white rounded-lg shadow-sm border border-gray-200` |
| Titre principal   | `text-2xl font-bold text-gray-900`                     |
| Titre secondaire  | `text-lg font-bold text-gray-900`                      |
| Texte secondaire  | `text-sm text-gray-500`                                |
| Éditer            | `text-primary-600`                                     |
| Supprimer         | `text-red-600`                                         |

Cette grille devient une référence pour les prochaines pages.

### 2.15. Vérifier les incohérences

Cherchez maintenant les différences inutiles.

Exemple incorrect :

```text
Bouton A
→ rounded

Bouton B
→ rounded-lg
```

Si les deux boutons ont le même rôle, choisissez une convention commune.

Autre exemple :

```text
Champ A
→ px-4 py-2

Champ B
→ px-3 py-1
```

S'ils ont le même rôle, harmonisez-les.

### 2.16. Vérifier le responsive

Les conventions doivent conserver les adaptations responsive.

Exemple :

```html id="7o6x2i"
class="w-full md:w-auto px-4 py-2 ..."
```

Le style du bouton reste commun.

Seule la largeur varie selon l'écran.

Même principe pour les cartes et les grilles.

### 2.17. Vérifier les états

Les conventions doivent aussi conserver les états :

```text id="1pbzll"
Bouton principal
→ hover:bg-primary-900
→ transition duration-200

Champ
→ focus:ring-2
→ focus:ring-primary-500

Bouton désactivé
→ disabled:opacity-75
```

L'état fait partie de la cohérence visuelle.

### 2.18. Appliquer les conventions à la page Articles

Ouvrez la page `admin-articles.php`.

Identifiez :

```text
Nouvel Article
Formulaire
Titre
Contenu
Image
Catégorie
Statut
Annuler
Enregistrer
Tableau
Éditer
Supprimer
```

Appliquez les mêmes conventions définies pour la page Catégories.

Ne créez pas de nouveaux styles sans besoin.

### 2.19. Vérifier l'ensemble de l'application

Comparez :

```text
Catégories
       ↕
Articles
```

Vérifiez :

* les couleurs ;
* les boutons ;
* les champs ;
* les titres ;
* les cartes ;
* les tableaux ;
* les actions ;
* les états ;
* les espacements ;
* le responsive.

L'utilisateur doit reconnaître immédiatement la même interface.

### 2.20. Vérifier la maintenabilité visuelle

Une modification du thème doit pouvoir se retrouver dans plusieurs parties de l'application.

Par exemple :

```text
primary-600
```

est utilisé pour plusieurs boutons.

Si la couleur principale change dans le thème, les boutons qui utilisent `primary-600` suivent cette nouvelle identité.

C'est l'intérêt de combiner :

```text
Thème
+
Conventions
+
Réutilisation des classes
```

### 2.21. Tester l'interface finale

Testez :

1. la page Catégories ;
2. la page Articles ;
3. les boutons principaux ;
4. les boutons secondaires ;
5. les champs ;
6. les titres ;
7. les cartes ;
8. les tableaux ;
9. les actions ;
10. les états `hover` et `focus` ;
11. le responsive ;
12. les couleurs du thème.

Vérifiez qu'un même rôle visuel utilise une même convention.

**Résultat attendu :**

```html id="g3f8v9"
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-6-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Harmonisez les styles de l'interface Catégories et de l'interface Articles.

Définissez et appliquez des conventions pour :

* les boutons principaux ;
* les boutons secondaires ;
* les champs ;
* les labels ;
* les cartes ;
* les titres ;
* les textes secondaires ;
* les actions ;
* les états interactifs ;
* les espacements ;
* les couleurs.

Utilisez les couleurs du thème `primary-*`.

Réutilisez les mêmes classes pour les éléments qui possèdent le même rôle visuel.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la grille de conventions de styles ;
* le lien vers la page Catégories ;
* le lien vers la page Articles.

**Critère de réussite :**

Les deux interfaces utilisent un vocabulaire visuel commun. Les éléments ayant le même rôle possèdent des styles cohérents, les couleurs viennent du thème et les conventions restent compatibles avec le responsive et les états visuels étudiés précédemment.

## Bilan

**Vous avez appris :**

* à identifier les styles répétitifs ;
* à définir des conventions visuelles ;
* à réutiliser les mêmes classes ;
* à harmoniser les boutons ;
* à harmoniser les champs ;
* à harmoniser les cartes ;
* à harmoniser les titres ;
* à harmoniser les actions ;
* à conserver les mêmes espacements ;
* à utiliser le thème dans plusieurs pages ;
* à vérifier la cohérence d'une interface.

**Vous avez réalisé :**

Une interface d'administration homogène sur plusieurs pages.

La progression du domaine est maintenant complète :

```text id="o9bw6d"
S1 — Construire
Structure
    ↓
Mise en forme

S2 — Adapter
Responsive
    ↓
États visuels

S3 — Harmoniser
Thème
    ↓
Réutilisation
    ↓
Interface cohérente
```

Vous disposez maintenant d'un vocabulaire visuel commun pour les différentes pages du projet.

## Glossaire

* **Harmonisation** : action qui consiste à rendre les différents éléments visuellement cohérents.
* **Convention visuelle** : règle utilisée de manière régulière pour un type d'élément.
* **Réutilisation** : utilisation des mêmes styles pour des éléments ayant le même rôle.
* **Vocabulaire visuel** : ensemble des couleurs, espacements, formes, tailles et états utilisés par l'interface.
* **Cohérence visuelle** : impression d'unité entre les différentes parties d'une application.
* **Style principal** : style utilisé pour les actions principales.
* **Style secondaire** : style utilisé pour les actions moins importantes.
* **Action destructive** : action qui supprime ou détruit une donnée.
* **Maintenabilité visuelle** : capacité à modifier et conserver facilement une apparence cohérente dans l'application.
