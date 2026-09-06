---
title: "Recevoir des données"
layout: tuto
slug: "recevoir-donnees"
permalink: /tutos/:slug/compact
tuto_id: "T.121.114"
version: "compact"
ua: "UA.121.11"
nav_order: 4
---

## 1. Objectif

Recevoir une valeur saisie par l’utilisateur avec `prompt-sync`, la stocker dans une variable et l’afficher avec `console.log()`.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()`, effectuer des opérations et exécuter un fichier JavaScript avec Node.js.

# Partie 1 — Théorie

## 1.1. Entrée

Une **entrée** est une valeur reçue par le programme.

Avec `prompt-sync`, le programme peut demander une valeur à l’utilisateur.

**Exemple :**

```javascript
const prompt = require('prompt-sync')();

let nom = prompt("Votre nom :");
```

## 1.2. Afficher une entrée

La valeur saisie peut être affichée avec `console.log()`.

```javascript
console.log(nom);
```

## 1.3. Convertir une entrée en nombre

Une valeur saisie avec `prompt-sync` est du texte.

Pour utiliser un nombre, utilisez `Number()`.

```javascript
let age = Number(prompt("Votre âge :"));
```

## 1.4. À retenir

* `prompt-sync` → recevoir une valeur.
* `let` → stocker la valeur.
* `Number()` → convertir un texte en nombre.
* `console.log()` → afficher la valeur.

# Partie 2 — Pratique

## 2.1. Demander le nom

### Étape 1 — Créer le programme

Créez `presentation.js`.

Ajoutez :

```javascript
const prompt = require('prompt-sync')();

let nom = prompt("Quel est votre nom ?");

console.log("Bonjour", nom);
```

### Étape 2 — Installer prompt-sync

Dans le terminal, exécutez :

```bash
npm install prompt-sync
```

### Étape 3 — Exécuter le programme

Exécutez :

```bash
node presentation.js
```

Saisissez votre nom.

**Résultat attendu :**

```text
Quel est votre nom ? Sara
Bonjour Sara
```

## 2.2. Réaliser l’exercice

### Étape 4 — Demander plusieurs informations

Modifiez le programme pour demander :

```text
Nom
Prénom
Formation
```

Stockez chaque réponse dans une variable et affichez les trois informations avec `console.log()`.

**Résultat attendu :**

Le programme demande les informations à l’utilisateur puis les affiche correctement dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme qui reçoit des données avec `prompt-sync` et les affiche.

**Vous savez maintenant :** demander une valeur à l’utilisateur, la stocker dans une variable et l’afficher.

# 4. Glossaire

* **Entrée** : valeur reçue par le programme.
* **prompt-sync** : outil permettant de demander une valeur à l’utilisateur dans Node.js.
* **Conversion** : transformation d’une valeur vers un autre type.
* **Number()** : fonction qui convertit une valeur en nombre.
