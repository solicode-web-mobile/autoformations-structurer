---
title: "Structurer une interface avec les utilitaires Tailwind"
layout: tuto
slug: "structurer-interface-utilitaires-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.111"
type: "classique"
version: "normal"
ua: "UA.225.11"
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
  <body>
      <div>
          <aside>
              <h2>Admin Blog</h2>

          <nav>
              <a href="#">Tableau de bord</a>
              <a href="#">Articles</a>
              <a href="#">Catégories</a>
          </nav>
      </aside>

      <div>
          <header>
              <span>Gestion des catégories</span>
              <span>Admin</span>
          </header>

          <main>
              <div>
                  <section>
                      <h1>Catégories</h1>
                      <p>Organisez les rubriques de votre blog.</p>
                  </section>

                  <section>
                      <h2>Formulaire</h2>
                      <p>Zone réservée au formulaire.</p>
                  </section>

                  <section>
                      <h2>Liste des catégories</h2>
                      <p>Zone réservée au tableau.</p>
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

Dans ce tutoriel, vous allez apprendre à utiliser les utilitaires Tailwind CSS pour structurer une page.

Vous allez apprendre à :

* utiliser des classes utilitaires ;
* créer une mise en page avec `flex` ;
* organiser une page en colonne ;
* aligner les éléments ;
* créer des espaces avec `gap` ;
* définir des largeurs et des hauteurs ;
* définir des marges et des espacements internes ;
* limiter la largeur d'une zone ;
* définir une hauteur minimale.

Vous allez construire la structure d'une interface d'administration :

```text
Sidebar
   +
Header
   +
Contenu
```

Vous ne travaillez pas encore sur le style détaillé des boutons, formulaires ou tableaux.

## 2. Prérequis

Vous devez connaître :

* le HTML ;
* les balises `div`, `header`, `aside`, `main`, `section` ;
* les notions de base du CSS ;
* la structure d'une page web.

Aucune connaissance préalable de Tailwind CSS n'est nécessaire.

## Données de départ

### HTML

Le fichier de départ contient déjà la structure HTML de l'interface.

La page contient :

* une `aside` pour la barre latérale ;
* un `header` ;
* une zone `main` ;
* plusieurs `section`.

Le HTML ne possède presque aucune classe Tailwind.

Votre travail consiste à ajouter progressivement les classes de structure.

### CSS

Aucun fichier CSS personnalisé n'est nécessaire.

Tailwind CSS est chargé avec :

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### JavaScript

Aucun JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Tailwind CSS

Tailwind CSS fournit des classes utilitaires.

Une classe utilitaire réalise une petite action visuelle.

Exemple :

```html
<div class="p-4">
    Contenu
</div>
```

La classe :

```text
p-4
```

ajoute un espace interne.

Avec Tailwind, on construit donc l'interface directement dans les classes HTML.

### 1.2. La classe `block`

`block` définit un élément comme un bloc.

Exemple :

```html
<div class="block">
    Contenu
</div>
```

Dans une interface simple, les éléments sont souvent déjà affichés comme des blocs.

La classe devient surtout utile lorsque vous voulez contrôler explicitement le comportement d'affichage.

### 1.3. La classe `flex`

`flex` active Flexbox.

Exemple :

```html
<div class="flex">
    <aside>Sidebar</aside>
    <main>Contenu</main>
</div>
```

Les éléments enfants sont alors placés sur une même ligne par défaut.

Pour notre interface :

```text
Sidebar | Contenu
```

### 1.4. La classe `flex-col`

`flex-col` change la direction de Flexbox.

Exemple :

```html
<div class="flex flex-col">
    <header>Header</header>
    <main>Contenu</main>
</div>
```

Les éléments sont maintenant placés verticalement :

```text
Header
  ↓
Contenu
```

### 1.5. `flex` + `flex-col`

Ces classes sont souvent utilisées ensemble.

```html
<div class="flex flex-col">
    ...
</div>
```

Cela permet de créer une colonne.

Dans l'interface :

```text
Header
   ↓
Main
```

### 1.6. `flex-1`

`flex-1` permet à un élément flexible d'occuper l'espace disponible.

Exemple :

```html
<div class="flex">
    <aside>Sidebar</aside>

    <main class="flex-1">
        Contenu
    </main>
</div>
```

Le `main` prend l'espace restant après la sidebar.

### 1.7. `items-*`

Les classes `items-*` contrôlent l'alignement des éléments sur l'axe transversal.

Exemple :

```html
<div class="flex items-center">
    <span>Admin</span>
    <span>Compte</span>
</div>
```

`items-center` centre verticalement les éléments dans une ligne Flexbox.

### 1.8. `justify-*`

Les classes `justify-*` contrôlent la position des éléments sur l'axe principal.

Exemple :

```html
<div class="flex justify-between">
    <span>Titre</span>
    <span>Admin</span>
</div>
```

Avec `justify-between`, les éléments sont séparés :

```text
Titre                         Admin
```

### 1.9. `gap-*`

`gap-*` ajoute un espace entre les éléments.

Exemple :

```html
<div class="flex gap-4">
    <span>Accueil</span>
    <span>Articles</span>
    <span>Catégories</span>
</div>
```

`gap-4` ajoute un espace entre les éléments.

`gap` évite de devoir ajouter une marge à chaque élément.

### 1.10. `w-*`

Les classes `w-*` définissent une largeur.

Exemple :

```html
<aside class="w-64">
    Sidebar
</aside>
```

La sidebar possède une largeur définie.

Autre exemple :

```html
<div class="w-full">
    Contenu
</div>
```

`w-full` utilise toute la largeur disponible.

### 1.11. `h-*`

Les classes `h-*` définissent une hauteur.

Exemple :

```html
<div class="h-screen">
    ...
</div>
```

`h-screen` donne à l'élément la hauteur de l'écran.

### 1.12. `min-h-*`

`min-h-*` définit une hauteur minimale.

Exemple :

```html
<main class="min-h-screen">
    ...
</main>
```

La zone possède au minimum la hauteur de l'écran.

### 1.13. `p-*`

Les classes `p-*` ajoutent un espace intérieur.

Exemple :

```html
<div class="p-6">
    Contenu
</div>
```

Cela crée un espace entre le contenu et les bords de l'élément.

### 1.14. `m-*`

Les classes `m-*` ajoutent une marge extérieure.

Exemple :

```html
<div class="m-4">
    Contenu
</div>
```

La marge crée un espace autour de l'élément.

### 1.15. `max-w-*`

`max-w-*` définit une largeur maximale.

Exemple :

```html
<div class="max-w-5xl">
    Contenu
</div>
```

La zone ne devient pas plus large que la limite définie.

Cela est utile pour garder un contenu lisible.

### 1.16. À retenir

* `flex` active Flexbox.
* `flex-col` organise les éléments en colonne.
* `flex-1` occupe l'espace disponible.
* `items-*` contrôle l'alignement.
* `justify-*` contrôle la répartition.
* `gap-*` crée un espace entre les éléments.
* `w-*` définit une largeur.
* `h-*` définit une hauteur.
* `min-h-*` définit une hauteur minimale.
* `p-*` définit un espace intérieur.
* `m-*` définit une marge.
* `max-w-*` limite la largeur.

## Partie 2 — Pratique

### 2.1. Charger Tailwind CSS

Vérifiez que le fichier HTML contient :

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Ouvrez la page dans le navigateur.

Tailwind est maintenant disponible.

### 2.2. Créer la structure principale

Repérez la première `div` qui contient toute la page.

Transformez-la en conteneur Flexbox :

```html
<div class="flex">
    ...
</div>
```

La page peut maintenant organiser ses deux grandes zones :

```text
Sidebar | Contenu
```

### 2.3. Définir la largeur de la sidebar

Ajoutez une largeur à la `aside` :

```html
<aside class="w-64">
    ...
</aside>
```

La sidebar possède maintenant une largeur fixe.

### 2.4. Faire occuper l'espace restant au contenu

Ajoutez `flex-1` au conteneur principal :

```html
<div class="flex-1">
    ...
</div>
```

La structure devient :

```text
+----------------+----------------------------+
|                |                            |
|    Sidebar     |          Contenu           |
|                |                            |
+----------------+----------------------------+
```

La zone principale utilise l'espace disponible.

### 2.5. Organiser le contenu verticalement

Le conteneur principal contient un header et un main.

Ajoutez :

```html
<div class="flex-1 flex flex-col">
    ...
</div>
```

Vous obtenez :

```text
Sidebar | Header
        | Main
```

Le `header` et le `main` sont maintenant empilés verticalement.

### 2.6. Donner une hauteur à l'écran

Ajoutez `h-screen` au conteneur principal :

```html
<div class="flex-1 flex flex-col h-screen">
    ...
</div>
```

Le conteneur principal occupe la hauteur de l'écran.

### 2.7. Organiser le header

Le header contient deux éléments :

```text
Gestion des catégories          Admin
```

Utilisez :

```html
<header class="flex items-center justify-between">
    <span>Gestion des catégories</span>
    <span>Admin</span>
</header>
```

Vous utilisez ici :

* `flex` pour placer les éléments sur une ligne ;
* `items-center` pour les aligner ;
* `justify-between` pour les séparer.

### 2.8. Ajouter un espace dans le header

Ajoutez un espace interne :

```html
<header class="flex items-center justify-between p-4">
    ...
</header>
```

Le contenu ne touche plus les bords du header.

### 2.9. Organiser la navigation

Dans la sidebar, les liens doivent être placés les uns sous les autres.

Utilisez :

```html
<nav class="flex flex-col gap-2">
    <a href="#">Tableau de bord</a>
    <a href="#">Articles</a>
    <a href="#">Catégories</a>
</nav>
```

Vous avez maintenant :

```text
Tableau de bord
      ↓
Articles
      ↓
Catégories
```

### 2.10. Ajouter un espace dans la sidebar

Ajoutez du padding :

```html
<aside class="w-64 p-4">
    ...
</aside>
```

La sidebar possède maintenant un espace intérieur.

### 2.11. Structurer la zone principale

Le `main` doit contenir une zone centrale.

Utilisez :

```html
<main class="flex-1 p-6">
    <div class="max-w-5xl">
        ...
    </div>
</main>
```

Vous avez maintenant :

```text
Main
  ↓
Zone centrale
```

La classe `max-w-5xl` limite la largeur du contenu.

### 2.12. Centrer la zone de contenu

Ajoutez :

```html
<div class="max-w-5xl mx-auto">
    ...
</div>
```

`mx-auto` ajoute automatiquement les marges horizontales nécessaires pour centrer la zone.

La structure devient :

```text
+----------------------------------------+
|              Main                      |
|      +------------------------+        |
|      |     Zone centrale      |        |
|      +------------------------+        |
+----------------------------------------+
```

### 2.13. Espacer les sections

La page contient plusieurs sections.

Utilisez `space-y-*` pour créer un espace vertical entre elles :

```html
<div class="max-w-5xl mx-auto space-y-8">
    <section>
        ...
    </section>

    <section>
        ...
    </section>

    <section>
        ...
    </section>
</div>
```

`space-y-8` ajoute un espace vertical entre les sections.

### 2.14. Construire la structure finale

Regroupez maintenant les classes apprises.

Utilisez :

```html
<body class="min-h-screen">

    <div class="flex min-h-screen">

        <aside class="w-64 p-6">
            <h2>Admin Blog</h2>

            <nav class="flex flex-col gap-2">
                <a href="#">Tableau de bord</a>
                <a href="#">Articles</a>
                <a href="#">Catégories</a>
            </nav>
        </aside>

        <div class="flex-1 flex flex-col">

            <header class="flex items-center justify-between p-6">
                <span>Gestion des catégories</span>
                <span>Admin</span>
            </header>

            <main class="flex-1 p-6">

                <div class="max-w-5xl mx-auto space-y-8">

                    <section>
                        <h1>Catégories</h1>
                        <p>Organisez les rubriques de votre blog.</p>
                    </section>

                    <section>
                        <h2>Formulaire</h2>
                        <p>Zone réservée au formulaire.</p>
                    </section>

                    <section>
                        <h2>Liste des catégories</h2>
                        <p>Zone réservée au tableau.</p>
                    </section>

                </div>

            </main>

        </div>

    </div>

</body>
```

### 2.15. Observer le résultat

Vous devez obtenir une structure proche de :

```text
+----------------+--------------------------------------+
|                | Header                     Admin     |
|                +--------------------------------------+
|    Sidebar     |                                      |
|                |             Contenu                  |
|  Tableau       |                                      |
|  Articles      |  Catégories                           |
|  Catégories    |                                      |
|                |  Formulaire                           |
|                |                                      |
|                |  Liste des catégories                 |
|                |                                      |
+----------------+--------------------------------------+
```

À ce stade, l'interface est structurée.

Elle n'est pas encore complètement stylée.

La couleur, la typographie, les bordures, les ombres et le style détaillé des composants seront étudiés dans le tutoriel suivant.

### 2.16. Vérifier les classes utilisées

Vérifiez que votre réalisation utilise au minimum :

```text
flex
flex-col
flex-1
items-*
justify-*
gap-*
w-*
h-* ou min-h-*
p-*
m-* ou mx-auto
max-w-*
```

Chaque classe doit avoir un rôle dans la structure.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-1-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

À partir du HTML fourni, construisez la structure visuelle d'une interface d'administration avec Tailwind CSS.

Votre page doit contenir :

* une sidebar ;
* un header ;
* une zone principale ;
* une navigation verticale ;
* une zone de contenu centrée ;
* plusieurs sections espacées.

Utilisez les utilitaires Tailwind étudiés dans ce tutoriel.

N'ajoutez pas encore de style détaillé aux boutons, formulaires ou tableaux.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code HTML.

**Critère de réussite :**

La page possède une structure claire :

```text
Sidebar
   +
Header
   +
Contenu
```

La sidebar occupe une largeur définie, le contenu utilise l'espace restant, le header est organisé horizontalement et les sections sont correctement espacées.

## Bilan

**Vous avez appris :**

* le principe des classes utilitaires Tailwind ;
* `flex` ;
* `flex-col` ;
* `flex-1` ;
* `items-*` ;
* `justify-*` ;
* `gap-*` ;
* `w-*` ;
* `h-*` ;
* `min-h-*` ;
* `p-*` ;
* `m-*` ;
* `mx-auto` ;
* `max-w-*`.

**Vous avez réalisé :**

La structure d'une interface d'administration avec :

```text
Sidebar
   +
Header
   +
Contenu
```

La page est maintenant prête à recevoir le style détaillé des composants.

## Glossaire

* **Tailwind CSS** : framework CSS basé sur des classes utilitaires.
* **Classe utilitaire** : classe qui réalise une petite action de style.
* **Flexbox** : système CSS qui permet d'organiser les éléments dans une ligne ou une colonne.
* **Layout** : organisation des différentes zones d'une page.
* **Sidebar** : barre latérale d'une interface.
* **Header** : zone supérieure d'une interface.
* **`flex-1`** : permet à un élément flexible d'occuper l'espace disponible.
* **`gap`** : crée un espace entre les éléments.
* **`padding`** : espace intérieur d'un élément.
* **`margin`** : espace extérieur d'un élément.
* **Breakpoint** : point de changement d'une mise en page selon la taille de l'écran.
