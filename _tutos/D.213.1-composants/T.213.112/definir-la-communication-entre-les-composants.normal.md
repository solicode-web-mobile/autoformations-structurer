---
title: "Définir la communication (HTTP & API)"
layout: tuto
slug: "definir-communication-composants"
permalink: /tutos/:slug/
tuto_id: "T.213.112"
type: "classique"
version: "normal"
ua: "UA.213.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :
* comprendre comment le Frontend et le Backend discutent via HTTP ;
* découvrir le format de données JSON ;
* transformer un script PHP classique en une petite API (Application Programming Interface).

## 2. Prérequis

Avoir séparé ses dossiers en `frontend/` et `backend/` (T.213.111).

## Cas d'étude

Nous voulons que notre `frontend/index.html` puisse afficher la liste des catégories du blog. Le problème ? Les données se trouvent dans le Backend. Il faut que le serveur PHP transmette ces données au navigateur, non pas sous forme de design HTML, mais sous forme de **données pures**.

## Partie 1 — Théorie

### 1.1. Requête / Réponse (HTTP)

Le Web fonctionne comme un restaurant :
1. Le Client (Frontend) passe une commande : c'est la **Requête HTTP** (Request).
2. Le Serveur (Backend) prépare la commande en cuisine.
3. Le Serveur sert le plat au Client : c'est la **Réponse HTTP** (Response).

### 1.2. Qu'est-ce qu'une API ?

Une API, c'est le **menu du restaurant**. Elle définit la liste des commandes que le Frontend a le droit de passer au Backend.
Historiquement, un fichier PHP renvoyait du texte HTML (avec des balises `<h1>`, `<div>`). 
Aujourd'hui, une API renvoie uniquement les données brutes. C'est le Frontend qui se chargera de dessiner le HTML.

### 1.3. Le format JSON

Pour que le Backend (PHP) et le Frontend (JavaScript) se comprennent, ils utilisent une langue commune : le **JSON** (JavaScript Object Notation). C'est simplement du texte très structuré.

**Exemple de JSON :**
```json
[
  { "id": 1, "nom": "Développement" },
  { "id": 2, "nom": "Design" }
]
```

En PHP, il est très facile de transformer un tableau de données en texte JSON grâce à la fonction `json_encode()`.

## Partie 2 — Pratique

### 2.1. Créer la première route de l'API

Dans votre dossier `backend/`, nous n'allons pas faire de Programmation Orientée Objet (POO). Nous allons écrire du code PHP procédural classique.

**Travail à faire :**
1. Créez un fichier `backend/categories.php`.
2. À l'intérieur, créez un tableau PHP `$categories` contenant quelques catégories (en dur, pas besoin de base de données pour l'instant).
3. Au lieu de faire un `echo` de HTML, utilisez `json_encode()` pour renvoyer le tableau.
4. *(Important)* Précisez au navigateur que vous renvoyez du JSON en utilisant la fonction `header()`.

**Testez votre API :**
Ouvrez votre navigateur et allez sur l'URL de votre fichier (ex: `http://localhost/blog/backend/categories.php`). Vous devriez voir le texte JSON brut s'afficher.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;">
<strong>Code de `backend/categories.php` :</strong>
<pre>
&lt;?php
// 1. Déclarer que la réponse est du JSON
header('Content-Type: application/json');

// 2. Préparer les données (Simulation de BDD)
$categories = [
    ["id" => 1, "nom" => "Développement Web"],
    ["id" => 2, "nom" => "Design UI/UX"]
];

// 3. Convertir le tableau PHP en JSON et l'afficher
echo json_encode($categories);
?&gt;
</pre>
</div>

## Bilan

**Vous avez appris :**
* que le Backend et le Frontend discutent via le protocole HTTP.
* comment faire en sorte qu'un script PHP agisse comme une API en renvoyant du format JSON pur au lieu d'une page HTML.

## Glossaire
* **API** : Interface qui permet à deux programmes (le front et le back) de communiquer.
* **JSON** : Format de texte universel utilisé pour transférer des données.
