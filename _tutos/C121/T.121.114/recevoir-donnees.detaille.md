---
title: "Recevoir des données"
layout: tuto
slug: "recevoir-donnees"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.114"
version: "detaille"
ua: "UA.121.11"
nav_order: 4
---

## 1. Objectif

Recevoir une valeur saisie par l’utilisateur avec `prompt-sync`, la stocker dans une variable et l’afficher avec `console.log()`.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()`, effectuer des opérations et exécuter un fichier JavaScript avec Node.js.

# Partie 1 — Théorie

## 1.1. Entrée

Une **entrée** est une valeur fournie au programme par l’utilisateur.

Jusqu’à présent, les valeurs étaient directement écrites dans le programme :

```javascript
let nom = "Sara";
```

Avec une entrée, le programme demande la valeur à l’utilisateur pendant son exécution.

Pour cela, nous utilisons `prompt-sync`.

**Exemple :**

```javascript
const prompt = require("prompt-sync")();

let nom = prompt("Votre nom :");
```

La première instruction permet d’utiliser `prompt-sync`.

La deuxième instruction demande une valeur et la stocke dans la variable `nom`.

Le fonctionnement est :

```text
Utilisateur
    ↓
saisit une valeur
    ↓
prompt()
    ↓
variable
```

## 1.2. Afficher une entrée

La valeur saisie peut être affichée avec `console.log()`.

```javascript
console.log(nom);
```

Si l’utilisateur saisit :

```text
Sara
```

le programme affiche :

```text
Sara
```

La valeur saisie est donc stockée dans la variable `nom`, puis utilisée par `console.log()`.

## 1.3. Convertir une entrée en nombre

Une valeur saisie avec `prompt-sync` est reçue comme du **texte**.

Par exemple :

```javascript
let age = prompt("Votre âge :");
```

Même si l’utilisateur saisit `20`, le programme reçoit cette valeur comme du texte.

Pour utiliser cette valeur dans un calcul, il faut la convertir en nombre avec `Number()`.

```javascript
let age = Number(prompt("Votre âge :"));
```

On peut retenir :

```text
Texte saisi
    ↓
Number()
    ↓
Nombre
```

**Exemple :**

```javascript
let prix = Number(prompt("Prix :"));
```

La valeur saisie peut maintenant être utilisée dans une opération.

## 1.4. À retenir

* `prompt-sync` → permet de recevoir une valeur.
* `prompt()` → demande une valeur à l’utilisateur.
* `let` → stocke la valeur dans une variable.
* `Number()` → convertit un texte en nombre.
* `console.log()` → affiche une valeur.

Le fonctionnement est :

```text
Recevoir → Stocker → Afficher
```

Pour un nombre :

```text
Recevoir → Convertir → Stocker → Utiliser
```

# Partie 2 — Pratique

## 2.1. Demander le nom

### Étape 1 — Créer le programme

Créez un fichier `presentation.js`.

Ajoutez :

```javascript
const prompt = require("prompt-sync")();

let nom = prompt("Quel est votre nom ?");

console.log("Bonjour", nom);
```

Dans ce programme :

* `prompt-sync` permet de demander une valeur ;
* `prompt()` affiche la question ;
* `let nom` stocke la réponse ;
* `console.log()` affiche le résultat.

### Étape 2 — Installer prompt-sync

Dans le terminal, placez-vous dans le dossier de votre projet.

Exécutez :

```bash
npm install prompt-sync
```

Cette commande installe le module `prompt-sync` dans votre projet.

### Étape 3 — Exécuter le programme

Exécutez :

```bash
node presentation.js
```

Le programme demande votre nom.

Saisissez par exemple :

```text
Quel est votre nom ? Sara
```

**Résultat attendu :**

```text
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

Stockez chaque réponse dans une variable.

Utilisez `console.log()` pour afficher les trois informations.

Exemple de structure :

```javascript
const prompt = require("prompt-sync")();

let nom = prompt("Nom :");
let prenom = prompt("Prénom :");
let formation = prompt("Formation :");
```

Ajoutez ensuite les instructions nécessaires pour afficher les trois valeurs.

Exécutez :

```bash
node presentation.js
```

**Résultat attendu :**

Le programme demande les informations à l’utilisateur puis affiche correctement les trois valeurs saisies dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme qui reçoit des données avec `prompt-sync` et les affiche.

**Vous savez maintenant :** installer `prompt-sync`, demander une valeur à l’utilisateur, stocker la réponse dans une variable, convertir une entrée en nombre avec `Number()` et afficher une valeur avec `console.log()`.

# 4. Glossaire

* **Entrée** : valeur reçue par le programme.
* **prompt-sync** : module permettant de demander une valeur à l’utilisateur dans Node.js.
* **prompt()** : fonction utilisée pour demander une valeur à l’utilisateur.
* **Conversion** : transformation d’une valeur vers un autre type.
* **Number()** : fonction qui convertit une valeur en nombre.
