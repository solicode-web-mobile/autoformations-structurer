---
title: "Effectuer des opérations"
layout: tuto
slug: "effectuer-operations"
permalink: /tutos/:slug/compact
tuto_id: "T.121.113"
version: "compact"
ua: "UA.121.11"
nav_order: 3
---

## 1. Objectif

Utiliser les opérations arithmétiques en JavaScript pour calculer un résultat avec des variables.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()` et exécuter un fichier JavaScript avec Node.js.

# Partie 1 — Théorie

## 1.1. Opération

Une **opération** permet de calculer une valeur à partir d’une ou plusieurs valeurs.

**Exemple :**

```javascript
let total = 80 * 2;
```

## 1.2. Opérations arithmétiques

JavaScript utilise notamment :

```text
+  addition
-  soustraction
*  multiplication
/  division
```

**Exemple :**

```javascript
let somme = 10 + 5;
let difference = 10 - 5;
let produit = 10 * 5;
let quotient = 10 / 5;
```

## 1.3. À retenir

* `+` → additionner.
* `-` → soustraire.
* `*` → multiplier.
* `/` → diviser.
* Une opération peut produire une nouvelle valeur.

# Partie 2 — Pratique

## 2.1. Calculer le prix total

### Étape 1 — Créer le programme

Créez un fichier `article.js`.

Ajoutez :

```javascript
let prix = 80;
let quantite = 2;
```

### Étape 2 — Calculer le total

Ajoutez :

```javascript
let total = prix * quantite;
```

### Étape 3 — Afficher le résultat

Ajoutez :

```javascript
console.log("Total :", total);
```

Exécutez :

```bash
node article.js
```

**Résultat attendu :**

```text
Total : 160
```

## 2.2. Réaliser l’exercice

### Étape 4 — Calculer plusieurs résultats

Créez un programme avec deux nombres et calculez :

```text
addition
soustraction
multiplication
division
```

Affichez chaque résultat avec `console.log()`.

**Résultat attendu :**

Les quatre résultats sont correctement calculés et affichés dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui effectue plusieurs opérations.

**Vous savez maintenant :** additionner, soustraire, multiplier et diviser des valeurs avec JavaScript.

# 4. Glossaire

* **Opération** : calcul réalisé par le programme.
* **Addition** : calcul avec `+`.
* **Soustraction** : calcul avec `-`.
* **Multiplication** : calcul avec `*`.
* **Division** : calcul avec `/`.
