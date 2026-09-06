---
title: "Manipuler les variables"
layout: tuto
slug: "manipuler-variables"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.112"
version: "detaille"
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

Une valeur peut être un texte, un nombre ou une autre donnée utilisée par le programme.

En JavaScript, on peut créer une variable avec le mot-clé `let`.

**Exemple :**

```javascript
let nom = "Sara";
```

Dans cet exemple :

* `let` permet de créer la variable ;
* `nom` est le nom de la variable ;
* `"Sara"` est la valeur stockée.

On peut représenter cette variable ainsi :

```text
nom
 ↓
"Sara"
```

La variable `nom` permet donc de conserver la valeur `"Sara"` pour pouvoir l’utiliser dans le programme.

## 1.2. Utiliser une variable

Une variable peut être utilisée dans une instruction.

**Exemple :**

```javascript
console.log(nom);
```

Le programme utilise la variable `nom` et affiche sa valeur dans la console.

**Résultat :**

```text
Sara
```

La variable peut aussi être utilisée plusieurs fois dans le programme.

```javascript
console.log(nom);
console.log(nom);
```

**Résultat :**

```text
Sara
Sara
```

La variable conserve sa valeur tant qu’elle n’est pas modifiée.

## 1.3. Modifier la valeur d’une variable

Une variable créée avec `let` peut recevoir une nouvelle valeur.

**Exemple :**

```javascript
let nom = "Sara";

nom = "Ali";

console.log(nom);
```

**Résultat :**

```text
Ali
```

La valeur `"Sara"` a été remplacée par `"Ali"`.

Dans ce tutoriel, nous utilisons surtout les variables pour **stocker puis afficher des valeurs**.

## 1.4. À retenir

* **Variable** → permet de stocker une valeur.
* `let` → permet de créer une variable.
* La variable possède un **nom** et une **valeur**.
* Une variable peut être utilisée dans le programme.
* `console.log()` → affiche la valeur d’une variable.

On peut retenir :

```text
Créer → Stocker → Utiliser → Afficher
```

# Partie 2 — Pratique

## 2.1. Créer des variables

### Étape 1 — Créer le programme

Créez un fichier `presentation.js`.

Dans ce fichier, créez trois variables :

```javascript
let nom = "Madani";
let prenom = "Ali";
let formation = "Développement Web";
```

Chaque variable contient une information différente :

```text
nom        → Madani
prenom     → Ali
formation  → Développement Web
```

### Étape 2 — Afficher les variables

Ajoutez :

```javascript
console.log(nom);
console.log(prenom);
console.log(formation);
```

Chaque instruction affiche la valeur d’une variable.

**Résultat attendu :**

```text
Madani
Ali
Développement Web
```

### Étape 3 — Exécuter le programme

Dans le terminal, exécutez :

```bash
node presentation.js
```

Node.js exécute le fichier JavaScript et les résultats apparaissent dans la console.

**Résultat attendu :**

```text
Madani
Ali
Développement Web
```

## 2.2. Réaliser l’exercice

### Étape 4 — Créer votre présentation

Modifiez les valeurs des variables avec vos propres informations :

```javascript
let nom = "Votre nom";
let prenom = "Votre prénom";
let formation = "Votre formation";
```

Gardez les trois variables.

Affichez-les avec `console.log()` :

```javascript
console.log(nom);
console.log(prenom);
console.log(formation);
```

Exécutez ensuite :

```bash
node presentation.js
```

**Résultat attendu :**

Vos informations sont stockées dans des variables puis affichées dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript utilisant des variables pour stocker et afficher des informations.

**Vous savez maintenant :** créer une variable avec `let`, lui affecter une valeur, utiliser cette variable et afficher sa valeur avec `console.log()`.

# 4. Glossaire

* **Variable** : espace qui stocke une valeur.
* **Valeur** : information contenue dans une variable.
* **let** : mot-clé utilisé pour créer une variable.
* **Affecter** : donner une valeur à une variable.
* **console.log()** : instruction qui affiche une valeur dans la console.
