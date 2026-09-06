---
title: "Afficher son nom avec JavaScript"
layout: tuto
slug: "afficher-son-nom-javascript"
permalink: /tutos/:slug/compact
tuto_id: "T.121.111"
version: "compact"
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

Dans ce tutoriel, nous l’utilisons pour afficher un message.

## 1.3. Node.js

**Node.js** permet d’exécuter JavaScript directement sur l’ordinateur.

Nous l’utilisons pour exécuter un fichier `.js`.

## 1.4. console.log()

`console.log()` permet d’afficher une valeur dans la console.

**Exemple :**

```javascript
console.log("Bonjour !");
```

## 1.5. À retenir

* **JavaScript** → langage de programmation.
* **Node.js** → permet d’exécuter JavaScript sur l’ordinateur.
* **console.log()** → affiche un résultat dans la console.

# Partie 2 — Pratique

## 2.1. Installer Node.js

### Étape 1 — Installer Node.js

Téléchargez et installez **Node.js** :

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

Créez un fichier :

```text
bonjour.js
```

### Étape 4 — Ajouter votre nom

Ajoutez :

```javascript
console.log("Je m'appelle Fouad.");
```

Remplacez **Fouad** par votre prénom.

**Exemple :**

```javascript
console.log("Je m'appelle Sara.");
```

### Étape 5 — Exécuter le programme

Dans le terminal, placez-vous dans le dossier du fichier et exécutez :

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

Affichez avec `console.log()` :

```text
Votre nom
Votre prénom
Votre métier ou votre formation
```

N’utilisez pas de variable.

### Étape 7 — Exécuter votre programme

Exécutez :

```bash
node presentation.js
```

**Résultat attendu :**

Votre nom, votre prénom et votre métier ou votre formation sont affichés dans la console.

# 3. Bilan

**Vous avez réalisé :** un premier programme JavaScript exécuté avec Node.js.

**Vous savez maintenant :** créer un fichier `.js`, utiliser `console.log()` et exécuter un programme JavaScript avec Node.js.

# 4. Glossaire

* **Langage de programmation** : langage utilisé pour écrire des instructions.
* **JavaScript** : langage de programmation.
* **Node.js** : outil permettant d’exécuter JavaScript sur l’ordinateur.
* **console.log()** : instruction qui affiche une valeur dans la console.
* **Console** : espace où le programme affiche ses résultats.
