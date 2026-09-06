---
title: "Effectuer des opérations"
layout: tuto
slug: "effectuer-operations"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.113"
version: "detaille"
ua: "UA.121.11"
nav_order: 3
---

## 1. Objectif

Utiliser les opérations arithmétiques en JavaScript pour calculer un résultat avec des variables.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()` et exécuter un fichier JavaScript avec Node.js.

# Partie 1 — Théorie

## 1.1. Opération

Une **opération** permet de calculer une nouvelle valeur à partir d’une ou plusieurs valeurs.

En JavaScript, une opération peut utiliser des nombres directement ou des variables qui contiennent des nombres.

**Exemple :**

```javascript
let total = 80 * 2;
```

Ici, JavaScript multiplie `80` par `2` et stocke le résultat `160` dans la variable `total`.

On peut aussi utiliser des variables :

```javascript
let prix = 80;
let quantite = 2;

let total = prix * quantite;
```

Le résultat est le même :

```text
total = 160
```

## 1.2. Opérations arithmétiques

JavaScript permet d’effectuer les principales opérations mathématiques :

```text
+  addition
-  soustraction
*  multiplication
/  division
```

**Exemples :**

```javascript
let somme = 10 + 5;
let difference = 10 - 5;
let produit = 10 * 5;
let quotient = 10 / 5;
```

Les résultats sont :

```text
somme       → 15
difference  → 5
produit     → 50
quotient    → 2
```

Une opération produit donc une **valeur** que le programme peut afficher ou stocker dans une variable.

## 1.3. Utiliser une opération avec des variables

Les opérations sont souvent utilisées avec des variables.

**Exemple :**

```javascript
let prix = 80;
let quantite = 2;

let total = prix * quantite;
```

Dans cet exemple :

* `prix` contient `80` ;
* `quantite` contient `2` ;
* `prix * quantite` réalise le calcul ;
* `total` contient le résultat `160`.

Le programme suit donc cette logique :

```text
Valeurs
   ↓
Opération
   ↓
Résultat
```

## 1.4. À retenir

* `+` → additionner.
* `-` → soustraire.
* `*` → multiplier.
* `/` → diviser.
* Une opération produit une nouvelle valeur.
* Le résultat d’une opération peut être stocké dans une variable.

# Partie 2 — Pratique

## 2.1. Calculer le prix total

### Étape 1 — Créer le programme

Créez un fichier `article.js`.

Ajoutez deux variables :

```javascript
let prix = 80;
let quantite = 2;
```

La variable `prix` contient le prix d’un article.

La variable `quantite` contient le nombre d’articles.

### Étape 2 — Calculer le total

Ajoutez :

```javascript
let total = prix * quantite;
```

Le programme multiplie le prix par la quantité.

Avec les valeurs utilisées :

```text
80 × 2 = 160
```

La variable `total` contient donc `160`.

### Étape 3 — Afficher le résultat

Ajoutez :

```javascript
console.log("Total :", total);
```

Puis exécutez :

```bash
node article.js
```

**Résultat attendu :**

```text
Total : 160
```

## 2.2. Réaliser l’exercice

### Étape 4 — Calculer plusieurs résultats

Créez un programme avec deux nombres.

Utilisez les quatre opérations :

```text
addition
soustraction
multiplication
division
```

Stockez chaque résultat dans une variable.

Par exemple, votre programme doit réaliser des calculs de ce type :

```text
résultatAddition
résultatSoustraction
résultatMultiplication
résultatDivision
```

Affichez ensuite chaque résultat avec `console.log()`.

**Résultat attendu :**

Les quatre résultats sont correctement calculés et affichés dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui utilise des variables et effectue plusieurs opérations arithmétiques.

**Vous savez maintenant :** utiliser `+`, `-`, `*` et `/` pour calculer des valeurs et stocker les résultats dans des variables.

# 4. Glossaire

* **Opération** : calcul réalisé par le programme.
* **Addition** : calcul avec `+`.
* **Soustraction** : calcul avec `-`.
* **Multiplication** : calcul avec `*`.
* **Division** : calcul avec `/`.
* **Résultat** : valeur obtenue après une opération.
