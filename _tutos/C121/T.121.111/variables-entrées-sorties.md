---
title: "Afficher son nom avec JavaScript"
layout: tuto
slug: "variables-entrées-sorties"
permalink: /tutos/:slug/
tuto_id: "T.121.111"
version: "normal"
ua: "UA.121.11"
nav_order: 1
---


## 1. Objectif

Découvrir JavaScript et Node.js, puis créer et exécuter un programme qui affiche votre nom dans la console.

## 2. Prérequis

Aucun prérequis technique.

# Partie 1 — Théorie

## 1.1. Langage de programmation

Un **langage de programmation** permet d’écrire des instructions pour un ordinateur.

**Exemple :**

```text
Afficher un message.
Calculer une valeur.
```

## 1.2. JavaScript

**JavaScript** est un langage de programmation.

Dans ce tutoriel, nous l’utilisons pour afficher un message dans la console.

## 1.3. Node.js

**Node.js** permet d’exécuter JavaScript directement sur l’ordinateur, sans navigateur.

Nous l’utiliserons pour exécuter nos fichiers `.js`.

## 1.4. console.log()

`console.log()` permet d’afficher une valeur ou un message dans la console.

**Exemple :**

```javascript
console.log("Bonjour !");
```

**Résultat :**

```text
Bonjour !
```

## 1.5. À retenir

* **Langage de programmation** → permet d’écrire des instructions.
* **JavaScript** → langage de programmation.
* **Node.js** → permet d’exécuter JavaScript sur l’ordinateur.
* **console.log()** → affiche un message dans la console.

# Partie 2 — Pratique

## 2.1. Installer Node.js

### Étape 1 — Installer Node.js

Téléchargez et installez **Node.js** depuis le site officiel :

<a href="https://nodejs.org/" target="_blank">Node.js</a>

Gardez les options proposées par défaut.

### Étape 2 — Vérifier Node.js

Ouvrez un terminal et exécutez :

```bash
node -v
```

**Résultat attendu :**

Une version de Node.js s’affiche.

## 2.2. Afficher votre nom

### Étape 3 — Créer le fichier

Créez un fichier nommé :

```text
bonjour.js
```

### Étape 4 — Ajouter votre nom

Ouvrez `bonjour.js` et ajoutez :

```javascript
console.log("Je m'appelle Ali.");
```

Remplacez **Ali** par votre prénom.

**Exemple :**

```javascript
console.log("Je m'appelle Sara.");
```

### Étape 5 — Exécuter le programme

Dans le terminal, placez-vous dans le dossier contenant `bonjour.js`.

Exécutez :

```bash
node bonjour.js
```

**Résultat attendu :**

```text
Je m'appelle Sara.
```

## 2.3. Réaliser l’exercice

### Étape 6 — Créer votre message

Créez un fichier :

```text
presentation.js
```

Utilisez `console.log()` pour afficher :

```javascript
console.log("Nom : Madani");
console.log("Prénom : Ali");
console.log("Formation : Développement Web");
```

Remplacez les informations par les vôtres.

N’utilisez pas de variable.

### Étape 7 — Exécuter votre programme

Exécutez :

```bash
node presentation.js
```

**Résultat attendu :**

Les trois informations sont affichées dans la console.

# 3. Bilan

**Vous avez réalisé :** un premier programme JavaScript exécuté avec Node.js.

**Vous savez maintenant :** créer un fichier `.js`, utiliser `console.log()` et exécuter un programme JavaScript avec Node.js.

# 4. Glossaire

* **Langage de programmation** : langage utilisé pour écrire des instructions pour un ordinateur.
* **JavaScript** : langage de programmation.
* **Node.js** : environnement permettant d’exécuter JavaScript sur l’ordinateur.
* **Fichier `.js`** : fichier contenant du code JavaScript.
* **console.log()** : instruction qui affiche un message dans la console.
* **Console** : espace où le programme affiche ses résultats.
