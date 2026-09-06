---
title: "Manipuler les variables"
layout: tuto
slug: "manipuler-variables"
permalink: /tutos/:slug/compact
tuto_id: "T.121.112"
version: "compact"
ua: "UA.121.11"
nav_order: 2
---

## 1. Objectif

Comprendre ce qu’est une variable et l’utiliser pour stocker et afficher des valeurs en JavaScript.

## 2. Prérequis

Savoir créer et exécuter un fichier JavaScript avec Node.js et utiliser `console.log()`.

# Partie 1 — Théorie

## 1.1. Variable

Une **variable** permet de stocker une valeur dans un programme.

**Exemple :**

```javascript
let nom = "Sara";
```

La variable `nom` contient la valeur `"Sara"`.

## 1.2. Utiliser une variable

Une variable peut être utilisée dans une instruction.

**Exemple :**

```javascript
console.log(nom);
```

Le programme affiche la valeur contenue dans `nom`.

## 1.3. À retenir

* **Variable** → stocker une valeur.
* `let` → créer une variable.
* Une variable peut être utilisée dans le programme.
* `console.log()` → afficher la valeur d’une variable.

# Partie 2 — Pratique

## 2.1. Créer des variables

### Étape 1 — Créer le programme

Créez un fichier `presentation.js`.

Ajoutez :

```javascript
let nom = "Madani";
let prenom = "Ali";
let formation = "Développement Web";
```

### Étape 2 — Afficher les variables

Ajoutez :

```javascript
console.log(nom);
console.log(prenom);
console.log(formation);
```

### Étape 3 — Exécuter le programme

Exécutez :

```bash
node presentation.js
```

**Résultat attendu :**

```text
Madani
Ali
Développement Web
```

## 2.2. Réaliser l’exercice

### Étape 4 — Créer votre présentation

Modifiez les variables avec vos propres informations :

```javascript
let nom = "Votre nom";
let prenom = "Votre prénom";
let formation = "Votre formation";
```

Affichez les trois variables avec `console.log()`.

**Résultat attendu :**

Vos informations sont stockées dans des variables puis affichées dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript utilisant des variables.

**Vous savez maintenant :** créer une variable, lui donner une valeur et afficher cette valeur.

# 4. Glossaire

* **Variable** : espace qui stocke une valeur.
* **Valeur** : information contenue dans une variable.
* **let** : mot-clé utilisé pour créer une variable.
* **console.log()** : instruction qui affiche une valeur dans la console.
