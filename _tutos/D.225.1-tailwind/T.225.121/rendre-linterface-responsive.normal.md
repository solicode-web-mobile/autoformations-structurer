---
title: "Rendre l’interface responsive"
layout: tuto
slug: "rendre-linterface-responsive"
permalink: /tutos/:slug/
tuto_id: "T.225.121"
type: "classique"
version: "normal"
ua: "UA.225.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Rendre l’interface responsive"
layout: tuto
slug: "rendre-interface-responsive-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.121"
type: "classique"
version: "normal"
ua: "UA.225.12"
nav_order: 1
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

      <aside class="w-64 bg-gray-900 text-white p-6">

          <div class="mb-6">
              <h2 class="text-xl font-bold">
                  Admin Blog
              </h2>

              <p class="text-sm text-gray-400">
                  Sprint 2
              </p>
          </div>

          <nav class="flex flex-col gap-2">
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

          <header class="flex items-center justify-between bg-white p-6 border-b border-gray-200">

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

                  <section class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

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

                          <div class="grid grid-cols-2 gap-4">

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

                  <section class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

                      <div class="p-6">
                          <h2 class="text-lg font-bold text-gray-900">
                              Liste des catégories
                          </h2>
                      </div>

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
```

  </body>
  </html>
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à rendre une interface Tailwind adaptée aux différentes tailles d'écran.

Vous allez apprendre à :

* comprendre l'approche **mobile first** ;
* utiliser les préfixes responsive ;
* utiliser un breakpoint ;
* adapter une disposition avec `md:` ;
* adapter une grille avec `grid-cols-*` ;
* afficher ou masquer un élément selon la taille de l'écran ;
* adapter les espacements et les dimensions ;
* construire une interface utilisable sur mobile et sur ordinateur.

Vous allez améliorer l'interface CRUD réalisée dans T.225.112.

## 2. Prérequis

Vous devez avoir réalisé :

> T.225.111 — Structurer une interface avec les utilitaires Tailwind.

> T.225.112 — Mettre en forme les composants de l'interface.

Vous devez connaître :

* `flex` ;
* `flex-col` ;
* `flex-1` ;
* `grid` ;
* `grid-cols-*` ;
* `gap-*` ;
* `w-*` ;
* `p-*` ;
* `max-w-*`.

## Données de départ

### HTML

La page contient déjà :

* une sidebar ;
* un header ;
* une zone principale ;
* un formulaire ;
* un tableau ;
* des boutons ;
* une grille de deux champs.

La page est actuellement pensée principalement pour un écran large.

Par exemple :

```html
<div class="grid grid-cols-2 gap-4">
```

Sur un petit écran, les deux champs peuvent devenir trop serrés.

La sidebar peut également prendre trop de place.

Votre travail consiste à adapter cette interface.

### CSS

Aucun CSS personnalisé n'est nécessaire.

### JavaScript

Aucun JavaScript n'est nécessaire.

Le responsive est géré avec les classes Tailwind.

## Partie 1 — Théorie

### 1.1. Responsive design

Une interface responsive adapte sa présentation à la taille de l'écran.

Exemple :

```text
Téléphone
↓
contenu en colonne

Ordinateur
↓
contenu sur plusieurs zones
```

Une même page peut donc avoir plusieurs présentations.

### 1.2. Mobile first

Tailwind utilise une approche mobile first.

On commence par définir le comportement de base.

Ce comportement correspond au petit écran.

Puis on ajoute des modifications pour les écrans plus grands.

Exemple :

```html
<div class="grid grid-cols-1 md:grid-cols-2">
```

La règle de base est :

```text
grid-cols-1
```

La règle `md:` s'applique ensuite à partir du breakpoint correspondant :

```text
md:grid-cols-2
```

On obtient :

```text
Mobile
↓
1 colonne

Écran plus large
↓
2 colonnes
```

### 1.3. Les préfixes responsive

Tailwind fournit plusieurs préfixes :

```text
sm:
md:
lg:
xl:
2xl:
```

Ils permettent d'appliquer une classe à partir d'une certaine largeur d'écran.

Exemple :

```html
<div class="md:flex">
```

La classe `flex` s'applique à partir du breakpoint `md`.

### 1.4. Utiliser `md:`

`md:` est utile lorsque l'interface doit changer sur un écran moyen ou plus grand.

Exemple :

```html
<div class="flex-col md:flex-row">
```

La disposition est :

```text
Mobile
↓
colonne

Desktop
↓
ligne
```

### 1.5. Combiner plusieurs classes

Une classe responsive est souvent associée à une classe normale.

Exemple :

```html
<div class="grid grid-cols-1 md:grid-cols-2">
```

La classe normale définit le comportement de base.

La classe `md:` modifie le comportement pour les écrans plus grands.

### 1.6. Adapter les espacements

Les espaces peuvent également changer.

Exemple :

```html
<main class="p-4 md:p-6">
```

On obtient :

```text
Mobile → p-4
Desktop → p-6
```

Cela permet d'utiliser moins d'espace sur un petit écran.

### 1.7. Adapter les dimensions

Les dimensions peuvent également être adaptées.

Exemple :

```html
<div class="w-full md:w-64">
```

Sur mobile :

```text
w-full
```

Sur un écran plus grand :

```text
md:w-64
```

### 1.8. Afficher et masquer

Une interface peut afficher un élément uniquement sur certains écrans.

Exemple :

```html
<aside class="hidden md:flex">
```

La sidebar est :

```text
Mobile
↓
cachée

Desktop
↓
visible
```

Cette technique est utile lorsque la sidebar complète n'est pas adaptée à un petit écran.

### 1.9. Adapter une grille

Une grille peut commencer avec une seule colonne :

```html
<div class="grid grid-cols-1">
```

Puis utiliser deux colonnes sur un écran plus grand :

```html
<div class="grid grid-cols-1 md:grid-cols-2">
```

Ou trois colonnes :

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

La disposition peut donc évoluer progressivement.

### 1.10. Les breakpoints

Les breakpoints permettent de définir des changements selon la taille de l'écran.

Vous pouvez utiliser :

```text
sm:
md:
lg:
xl:
2xl:
```

Il n'est pas nécessaire d'utiliser tous les breakpoints.

Choisissez celui qui répond au besoin de l'interface.

### 1.11. À retenir

* Une interface responsive s'adapte à la taille de l'écran.
* Tailwind utilise une approche mobile first.
* Les classes sans préfixe définissent le comportement de base.
* `sm:`, `md:`, `lg:`, `xl:` et `2xl:` permettent d'adapter le comportement.
* `grid-cols-1 md:grid-cols-2` permet de passer de une à deux colonnes.
* `flex-col md:flex-row` permet de passer d'une colonne à une ligne.
* `hidden md:flex` permet d'afficher un élément seulement à partir de `md`.
* Les espacements et les dimensions peuvent aussi être adaptés.

## Partie 2 — Pratique

### 2.1. Tester la page sur mobile

Ouvrez la page dans le navigateur.

Utilisez les outils de développement du navigateur pour simuler un téléphone.

Observez la page.

Vous pouvez remarquer plusieurs problèmes :

* la sidebar occupe beaucoup d'espace ;
* le titre et le bouton peuvent être trop serrés ;
* les deux champs du formulaire restent sur deux colonnes ;
* le contenu possède des espacements prévus pour un écran large.

Vous allez corriger ces points.

### 2.2. Cacher la sidebar sur petit écran

Commencez par :

```html
<aside class="hidden md:flex w-64 bg-gray-900 text-white p-6">
```

La règle :

```text
hidden
```

cache la sidebar par défaut.

La règle :

```text
md:flex
```

la rend visible à partir de `md`.

Le résultat devient :

```text
Mobile
→ contenu principal

Desktop
→ sidebar + contenu principal
```

### 2.3. Adapter le conteneur principal

Le conteneur principal utilise actuellement :

```html
<div class="flex min-h-screen">
```

Il peut rester ainsi.

Lorsque la sidebar est masquée, le contenu principal peut utiliser toute la largeur disponible.

Le principe est :

```text
Sidebar visible
→ contenu + sidebar

Sidebar cachée
→ contenu seul
```

### 2.4. Adapter les espacements de la page

Le `main` utilise actuellement :

```html
<main class="flex-1 p-6">
```

Modifiez-le :

```html
<main class="flex-1 p-4 md:p-6">
```

Vous obtenez :

```text
Mobile
→ p-4

Desktop
→ p-6
```

L'interface utilise moins d'espace sur un petit écran.

### 2.5. Adapter l'en-tête de la page

L'en-tête utilise actuellement :

```html
<section class="flex items-center justify-between">
```

Sur un petit écran, le titre et le bouton peuvent être trop serrés.

Modifiez :

```html
<section class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
```

Vous obtenez :

```text
Mobile
↓
Titre
↓
Bouton

Desktop
→ Titre                  Bouton
```

### 2.6. Adapter la taille des espacements

Vous pouvez réduire l'espace interne du formulaire sur mobile :

```html
<section class="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
```

Le formulaire utilise :

```text
Mobile
→ p-4

Desktop
→ p-6
```

### 2.7. Adapter la grille du formulaire

Le code de départ utilise :

```html
<div class="grid grid-cols-2 gap-4">
```

Sur un téléphone, deux colonnes peuvent être trop étroites.

Remplacez par :

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
```

Vous obtenez :

```text
Mobile

Couleur
↓

Icône
```

et :

```text
Desktop

Couleur        Icône
```

### 2.8. Adapter les boutons du formulaire

Les boutons peuvent également prendre trop de place sur un petit écran.

La zone actuelle :

```html
<div class="flex justify-end gap-2">
```

peut devenir :

```html
<div class="flex flex-col gap-2 md:flex-row md:justify-end">
```

Sur mobile :

```text
Annuler
Enregistrer
```

Sur desktop :

```text
        Annuler  Enregistrer
```

### 2.9. Adapter les largeurs des boutons

Sur mobile, les boutons peuvent occuper toute la largeur.

Utilisez :

```html
<button class="w-full md:w-auto px-4 py-2 ...">
```

Cela donne :

```text
Mobile
→ largeur complète

Desktop
→ largeur adaptée au contenu
```

Appliquez ce principe aux deux boutons.

### 2.10. Adapter la zone centrale

Le conteneur utilise :

```html
<div class="max-w-5xl mx-auto space-y-8">
```

Il est déjà limité sur les grands écrans.

Vous pouvez réduire l'espace vertical sur mobile :

```html
<div class="max-w-5xl mx-auto space-y-6 md:space-y-8">
```

Le résultat devient :

```text
Mobile
→ espace plus petit

Desktop
→ espace plus grand
```

### 2.11. Adapter le tableau

Un tableau large peut dépasser l'écran.

Placez-le dans un conteneur pouvant défiler horizontalement :

```html
<div class="overflow-x-auto">
    <table class="w-full text-left border-collapse">
        ...
    </table>
</div>
```

Le tableau peut maintenant rester lisible lorsque sa largeur dépasse celle du petit écran.

L'utilisateur peut faire défiler horizontalement la zone du tableau.

### 2.12. Adapter l'en-tête de la liste

La section de la liste peut conserver sa structure :

```html
<div class="p-4 md:p-6">
    <h2 class="text-lg font-bold text-gray-900">
        Liste des catégories
    </h2>
</div>
```

L'espace interne est maintenant adapté aux différentes tailles.

### 2.13. Observer la progression

Comparez maintenant les deux présentations.

#### Petit écran

```text
+------------------------+
| Header                 |
+------------------------+
| Catégories             |
| Description            |
|                        |
| + Nouvelle catégorie   |
|                        |
| Formulaire             |
| Nom                    |
|                        |
| Couleur                |
|                        |
| Icône                  |
|                        |
| Annuler                |
| Enregistrer            |
|                        |
| Liste                  |
| ← tableau défilable →  |
+------------------------+
```

#### Écran large

```text
+-----------+----------------------------------------+
| Sidebar   | Header                                 |
|           +----------------------------------------+
|           | Catégories              + Nouveau      |
|           |                                        |
|           | Formulaire                              |
|           | Couleur                Icône            |
|           |                                        |
|           |                  Annuler Enregistrer    |
|           |                                        |
|           | Liste des catégories                    |
+-----------+----------------------------------------+
```

La même interface s'adapte maintenant aux deux contextes.

### 2.14. Ajouter un breakpoint supplémentaire

Vous pouvez utiliser `lg:` lorsque l'adaptation doit intervenir sur un écran plus large.

Exemple :

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

La grille devient :

```text
Mobile
→ 1 colonne

Écran moyen
→ 2 colonnes

Grand écran
→ 3 colonnes
```

Dans notre interface CRUD, deux colonnes suffisent généralement pour les champs du formulaire.

Il n'est donc pas nécessaire d'ajouter `lg:` partout.

### 2.15. Comprendre `sm:`, `md:`, `lg:`, `xl:` et `2xl:`

Les préfixes suivent le même principe :

```text
sm:   → à partir de sm
md:   → à partir de md
lg:   → à partir de lg
xl:   → à partir de xl
2xl:  → à partir de 2xl
```

Exemple :

```html
<p class="text-sm md:text-base">
    Description
</p>
```

Le texte utilise une taille différente selon l'écran.

Utilisez uniquement les breakpoints nécessaires.

### 2.16. Tester plusieurs tailles

Testez votre interface avec :

```text
Téléphone
Tablette
Ordinateur portable
Grand écran
```

Vérifiez :

* la sidebar ;
* le header ;
* le titre ;
* le bouton ;
* le formulaire ;
* les champs ;
* les boutons d'action ;
* le tableau.

La page ne doit pas demander une adaptation manuelle du HTML pour chaque écran.

### 2.17. Vérifier les classes responsive

Votre réalisation doit utiliser des variantes responsive comme :

```text
hidden md:flex

p-4 md:p-6

flex-col md:flex-row

grid-cols-1 md:grid-cols-2

w-full md:w-auto

space-y-6 md:space-y-8
```

Chaque variante doit répondre à un besoin concret.

Ne pas ajouter des préfixes responsive sans raison.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-3-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Rendez responsive l'interface CRUD réalisée dans T.225.112.

L'interface doit :

* fonctionner sur petit écran ;
* adapter la sidebar ;
* adapter les espacements ;
* adapter la disposition du titre et du bouton principal ;
* transformer les champs du formulaire en une colonne sur petit écran ;
* utiliser plusieurs colonnes sur un écran plus grand ;
* adapter les boutons du formulaire ;
* permettre la consultation du tableau sur un petit écran ;
* conserver une présentation adaptée sur écran large.

Utilisez les préfixes responsive Tailwind nécessaires.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code HTML.

**Critère de réussite :**

La même interface reste utilisable sur petit et grand écran sans modifier sa structure HTML principale.

## Bilan

**Vous avez appris :**

* le principe du responsive design ;
* l'approche mobile first ;
* les breakpoints Tailwind ;
* `sm:` ;
* `md:` ;
* `lg:` ;
* `xl:` ;
* `2xl:` ;
* `grid-cols-*` avec des variantes responsive ;
* `flex-col` et `flex-row` avec des variantes responsive ;
* l'affichage et le masquage responsive ;
* l'adaptation des espacements ;
* l'adaptation des dimensions ;
* la gestion d'un tableau large sur petit écran.

**Vous avez réalisé :**

Une interface CRUD responsive qui s'adapte aux différentes tailles d'écran.

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
```

Dans le tutoriel suivant, l'interface pourra représenter les différents états visuels des contrôles et des opérations.

## Glossaire

* **Responsive design** : conception d'une interface qui s'adapte aux différentes tailles d'écran.
* **Mobile first** : approche qui commence par la présentation destinée aux petits écrans.
* **Breakpoint** : seuil à partir duquel une règle responsive s'applique.
* **Préfixe responsive** : préfixe comme `md:` utilisé pour adapter une classe selon la taille de l'écran.
* **`grid-cols-*`** : classe qui définit le nombre de colonnes d'une grille.
* **`hidden`** : classe qui masque un élément.
* **`overflow-x-auto`** : permet un défilement horizontal lorsque le contenu dépasse la largeur disponible.
* **Adaptation** : modification de la présentation d'une interface pour répondre aux contraintes d'un écran.
