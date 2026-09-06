---
title: "Afficher son nom avec JavaScript"
layout: tuto
slug: "afficher-son-nom-javascript"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.111"
version: "detaille"
ua: "UA.121.11"
nav_order: 1
---


## 1. Objectif

Découvrir JavaScript et Node.js, puis créer et exécuter un programme qui affiche votre nom dans la console.

À la fin du tutoriel, vous devez pouvoir créer un fichier JavaScript, écrire une instruction `console.log()` et exécuter le fichier avec Node.js.

## 2. Prérequis

Aucun prérequis technique.

# Partie 1 — Théorie

## 1.1. Langage de programmation

Un **langage de programmation** permet d’écrire des instructions pour un ordinateur.

Une instruction indique à l’ordinateur une action à réaliser.

**Exemple :**

```
Afficher un message.
Calculer une valeur.
```

Pour programmer, on écrit ces instructions avec un langage que l’ordinateur peut interpréter ou exécuter.

## 1.2. JavaScript

**JavaScript** est un langage de programmation.

Il permet d’écrire des programmes et des traitements.

Dans ce tutoriel, nous utilisons JavaScript pour réaliser une action très simple :

> afficher notre nom.

Pour le moment, nous n’utilisons ni variable ni entrée utilisateur.

## 1.3. Node.js

**Node.js** est un environnement qui permet d’exécuter du JavaScript directement sur l’ordinateur, sans utiliser une page Web.

Nous utiliserons Node.js pour lancer notre fichier `.js`.

Par exemple :

```
bonjour.js
     ↓
   Node.js
     ↓
programme exécuté
     ↓
console
```

## 1.4. console.log()

`console.log()` est une instruction JavaScript qui permet d’afficher une valeur ou un message dans la console.

**Exemple :**

```javascript
console.log("Bonjour !");
```

Lorsque le programme est exécuté, la console affiche :

```text 
Bonjour !
```

Dans cet exemple, `"Bonjour !"` est le message à afficher.

## 1.5. Afficher un texte sans variable

Nous pouvons écrire directement le texte dans `console.log()`.

**Exemple :**

```javascript 
console.log("Je m'appelle Sara.");
```

Nous n'avons pas besoin de créer une variable.

Le programme affiche directement le texte fourni à `console.log()`.

## 1.6. À retenir

* **Langage de programmation** → permet d’écrire des instructions.
* **JavaScript** → langage de programmation.
* **Node.js** → permet d’exécuter JavaScript sur l’ordinateur.
* **console.log()** → affiche un message dans la console.
* **Variable** → non utilisée dans ce tutoriel.

# Partie 2 — Pratique

## 2.1. Installer Node.js

### Étape 1 — Installer Node.js

Téléchargez et installez **Node.js** depuis le site officiel :

<a href="https://nodejs.org/" target="_blank">Node.js</a>

Lancez l’installation.

Gardez les options proposées par défaut.

À la fin de l’installation, Node.js est disponible sur votre ordinateur.

### Étape 2 — Vérifier Node.js

Ouvrez un terminal.

Exécutez :

```bash
node -v
```

La commande `node -v` demande à Node.js d’afficher sa version.

**Résultat attendu :**

Une version de Node.js s’affiche, par exemple :

```text 
v22.x.x
```

Le numéro exact peut être différent.

## 2.2. Créer le premier programme

### Étape 3 — Créer le fichier

Créez un fichier nommé :

```text 
bonjour.js
```

L’extension `.js` indique que le fichier contient du code JavaScript.

### Étape 4 — Ajouter votre nom

Ouvrez `bonjour.js`.

Ajoutez :

```javascript
console.log("Je m'appelle Fouad.");
```

Remplacez **Fouad** par votre prénom.

**Exemple :**

```javascript
console.log("Je m'appelle Sara.");
```

Pour le moment, le nom est écrit directement dans `console.log()`.

Aucune variable n’est utilisée.

### Étape 5 — Exécuter le programme

Ouvrez le terminal dans le dossier qui contient `bonjour.js`.

Exécutez :

```bash
node bonjour.js
```

Node.js lit le fichier et exécute son code JavaScript.

**Résultat attendu :**

```text
Je m'appelle Sara.
```

Si votre prénom est Fouad, le résultat sera :

```text
Je m'appelle Fouad.
```

## 2.3. Réaliser l’exercice

### Étape 6 — Créer votre message

Créez un fichier :

```text
presentation.js
```

Utilisez `console.log()` pour afficher :

```text
Votre nom
Votre prénom
Votre métier ou votre formation
```

Exemple :

```javascript
console.log("Nom : Madani");
console.log("Prénom : Ali");
console.log("Formation : Développement Web");
```

N’utilisez pas de variable.

### Étape 7 — Exécuter votre programme

Dans le terminal, exécutez :

```bash
node presentation.js
```

**Résultat attendu :**

Les trois informations sont affichées dans la console.

Exemple :

```text
Nom : Madani
Prénom : Ali
Formation : Développement Web
```

Vérifiez que :

* le fichier s’exécute sans erreur ;
* les trois informations apparaissent ;
* les informations affichées correspondent à votre choix.

# 3. Bilan

**Vous avez réalisé :** un premier programme JavaScript exécuté avec Node.js.

**Vous savez maintenant :** créer un fichier `.js`, écrire une instruction `console.log()` sans utiliser de variable, vérifier l’installation de Node.js et exécuter un programme JavaScript dans le terminal.

# 4. Glossaire

* **Langage de programmation** : langage utilisé pour écrire des instructions pour un ordinateur.
* **JavaScript** : langage de programmation.
* **Node.js** : environnement permettant d’exécuter JavaScript sur l’ordinateur.
* **Fichier `.js`** : fichier contenant du code JavaScript.
* **Instruction** : commande exécutée par le programme.
* **console.log()** : instruction JavaScript qui affiche un message dans la console.
* **Console** : espace où le programme affiche ses résultats.
