---
title: "Mettre en forme les composants de l'interface"
layout: tuto
slug: "mettre-en-forme-composants-interface-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.112"
type: "classique"
version: "normal"
ua: "UA.225.11"
nav_order: 2
data_html: "/code/tailwind/T.225.112/depart.html"
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

Dans ce tutoriel, vous allez apprendre à :
* appliquer des couleurs, typographie et fonds à votre interface ;
* styliser les composants clés : sidebar, header, boutons, formulaire, tableau.

## 2. Prérequis

* Avoir réalisé T.225.111 (le layout structurel est déjà en place).

## Cas d'étude

La structure est là, mais l'interface est encore grise et sans style. Nous allons lui donner sa **personnalité visuelle** avec les classes de couleur, de typographie, de bordure et d'ombre de Tailwind.

---

## Partie 1 — Théorie

### 1.1. Les classes de style essentielles (Référence rapide)

Tailwind utilise une **échelle de 1 à 900** pour les nuances de couleur. On préfixe la propriété : `bg-` (fond), `text-` (texte), `border-` (bordure).

| Catégorie | Exemples de classes | Effet |
|---|---|---|
| **Fond** | `bg-gray-800`, `bg-white`, `bg-blue-600` | Couleur de fond |
| **Texte** | `text-white`, `text-gray-700`, `text-sm`, `font-bold` | Couleur et style du texte |
| **Bordure** | `border`, `border-gray-200`, `rounded`, `rounded-lg` | Contours et coins arrondis |
| **Ombre** | `shadow`, `shadow-md` | Ombre portée |
| **Hover** | `hover:bg-blue-700`, `hover:text-white` | Style au survol |
| **Focus** | `focus:outline-none`, `focus:ring-2` | Style lors de la saisie |

**Exemple exécutable — Un bouton stylisé :**
```html
<!DOCTYPE html>
<html>
<head><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8 bg-gray-100">

<!-- Bouton primaire -->
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    Enregistrer
</button>

<!-- Bouton secondaire -->
<button class="ml-2 bg-white text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
    Annuler
</button>

</body>
</html>
```

### 1.2. Styliser la Sidebar et le Header

Pour une interface admin professionnelle, la sidebar est généralement sombre, et le header clair avec une ombre discrète.

**Exemple exécutable :**
```html
<!DOCTYPE html>
<html>
<head><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-100 min-h-screen">
<div class="flex min-h-screen">

    <!-- Sidebar sombre -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col p-6 gap-4">
        <h2 class="text-xl font-bold border-b border-gray-600 pb-4">Admin Blog</h2>
        <nav class="flex flex-col gap-1">
            <a href="#" class="px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
                Tableau de bord
            </a>
            <a href="#" class="px-3 py-2 rounded-lg bg-blue-600 text-white font-medium">
                Catégories
            </a>
        </nav>
    </aside>

    <!-- Header clair -->
    <div class="flex-1 flex flex-col">
        <header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
            <h1 class="text-lg font-semibold text-gray-800">Gestion des catégories</h1>
            <span class="text-sm text-gray-500">Admin</span>
        </header>

        <main class="flex-1 p-6">
            <p class="text-gray-500">Contenu ici...</p>
        </main>
    </div>
</div>
</body>
</html>
```

---

## Partie 2 — Pratique

### 2.1. Styliser l'interface complète

**Travail à faire :**
En partant du fichier HTML de départ (qui reprend la structure de T.225.111 avec le formulaire et le tableau), appliquez les classes Tailwind pour obtenir une interface d'administration visuellement propre :

1. **Sidebar** : fond `bg-gray-800`, texte `text-white`, padding `p-6`.
2. **Liens de navigation** : style inactif `text-gray-300 hover:bg-gray-700`, style actif `bg-blue-600 text-white rounded-lg`.
3. **Header** : fond `bg-white`, `shadow-sm`, `border-b`.
4. **Bouton "Nouvelle catégorie"** : `bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700`.
5. **Champs du formulaire** : `border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`.
6. **Tableau** : `w-full`, en-têtes `bg-gray-50 text-left text-xs text-gray-500 uppercase`, lignes avec `border-b hover:bg-gray-50`.

<button class="btn btn-primary btn-toggle-resultat">Afficher la solution</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;" markdown="1">

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800 min-h-screen">
<div class="flex min-h-screen">

    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col p-6 gap-6">
        <div class="border-b border-gray-600 pb-4">
            <h2 class="text-xl font-bold">Admin Blog</h2>
            <p class="text-xs text-gray-400 mt-1">Sprint 1</p>
        </div>
        <nav class="flex flex-col gap-1">
            <a href="#" class="px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-sm">Tableau de bord</a>
            <a href="#" class="px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-sm">Articles</a>
            <a href="#" class="px-3 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm">Catégories</a>
        </nav>
    </aside>

    <!-- Contenu principal -->
    <div class="flex-1 flex flex-col">

        <!-- Header -->
        <header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
            <h1 class="text-lg font-semibold text-gray-800">Gestion des catégories</h1>
            <span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Admin</span>
        </header>

        <!-- Main -->
        <main class="flex-1 p-6">
            <div class="max-w-5xl mx-auto space-y-6">

                <!-- En-tête de section -->
                <section class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">Catégories</h2>
                        <p class="text-gray-500 text-sm mt-1">Organisez les rubriques de votre blog.</p>
                    </div>
                    <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        + Nouvelle Catégorie
                    </button>
                </section>

                <!-- Formulaire -->
                <section class="bg-white rounded-xl shadow-sm p-6 space-y-4">
                    <h3 class="text-lg font-semibold text-gray-700 border-b pb-3">Ajouter / Modifier</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Développement Web">
                        </div>
                        <div class="flex gap-3">
                            <button type="button" class="flex-1 bg-gray-100 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">Annuler</button>
                            <button type="submit" class="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Enregistrer</button>
                        </div>
                    </form>
                </section>

                <!-- Tableau -->
                <section class="bg-white rounded-xl shadow-sm overflow-hidden">
                    <h3 class="text-lg font-semibold text-gray-700 p-6 border-b">Liste des catégories</h3>
                    <table class="w-full text-sm">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="text-left text-xs text-gray-500 uppercase px-6 py-3">ID</th>
                                <th class="text-left text-xs text-gray-500 uppercase px-6 py-3">Nom</th>
                                <th class="text-left text-xs text-gray-500 uppercase px-6 py-3">Couleur</th>
                                <th class="text-left text-xs text-gray-500 uppercase px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-gray-500">#1</td>
                                <td class="px-6 py-4 font-medium text-gray-800">Développement Web</td>
                                <td class="px-6 py-4"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Bleu</span></td>
                                <td class="px-6 py-4 flex gap-2">
                                    <button class="text-blue-600 hover:underline text-xs">Éditer</button>
                                    <button class="text-red-500 hover:underline text-xs">Supprimer</button>
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
</html>
```
</div>

---

## Bilan

**Vous avez appris :**
* à utiliser les classes de couleur Tailwind (`bg-*`, `text-*`, `border-*`).
* à styliser les composants récurrents : sidebar, header, boutons, inputs, tableau.
* à utiliser `hover:` pour ajouter des effets au survol.
* à construire un tableau professionnel avec `divide-y` et `text-xs uppercase`.

## Glossaire

* **`bg-{color}-{shade}`** : Couleur de fond (ex: `bg-blue-600`).
* **`text-{color}-{shade}`** : Couleur du texte.
* **`rounded-lg`** : Coins arrondis (grand rayon).
* **`shadow-sm`** : Ombre légère.
* **`hover:{classe}`** : Applique une classe uniquement au survol de la souris.
* **`divide-y`** : Ajoute une bordure horizontale entre chaque enfant direct.
