---
title: "Échanger deux variables"
layout: tuto
slug: "echanger-deux-variables"
permalink: /tutos/:slug
tuto_id: "T.121.116"
version: "normal"
ua: "UA.121.11"
nav_order: 6
---


## 1. Objectif

Découvrir une première technique algorithmique en JavaScript : échanger les valeurs de deux variables sans les perdre.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()` et effectuer des opérations simples.

# Partie 1 — Théorie

## 1.1. Algorithme

Un **algorithme** est une suite d’étapes qui permet de réaliser une tâche et d’obtenir un résultat.

**Exemple :**

```text
Départ
  ↓
Faire une action
  ↓
Faire une autre action
  ↓
Obtenir un résultat
```

Dans ce tutoriel, l’algorithme permet d’échanger les valeurs de deux variables.

## 1.2. Échanger deux variables

Échanger deux variables signifie mettre la valeur de la première variable dans la deuxième et la valeur de la deuxième dans la première.

Au départ :

```javascript
let a = 10;
let b = 20;
```

Nous voulons obtenir :

```text
a = 20
b = 10
```

Il faut conserver la valeur de `a` avant de la remplacer.

## 1.3. Utiliser une variable temporaire

On utilise une troisième variable appelée `temp`.

L’algorithme est :

```text
temp = a
a = b
b = temp
```

La variable `temp` conserve temporairement la première valeur.

Avec :

```text
a = 10
b = 20
```

les étapes donnent :

```text
temp = 10
a = 20
b = 10
```

Les valeurs sont bien échangées.

## 1.4. À retenir

```text
temp = a
a = b
b = temp
```

La logique est :

```text
Conserver → Remplacer → Restaurer
```

L’ordre des instructions est important.

# Partie 2 — Pratique

## 2.1. Échanger deux variables

### Étape 1 — Créer le programme

Créez un fichier `echange.js`.

Ajoutez :

```javascript
let a = 10;
let b = 20;
```

### Étape 2 — Afficher les valeurs initiales

Ajoutez :

```javascript
console.log("Avant :", a, b);
```

### Étape 3 — Échanger les valeurs

Ajoutez :

```javascript
let temp = a;
a = b;
b = temp;
```

### Étape 4 — Afficher les nouvelles valeurs

Ajoutez :

```javascript
console.log("Après :", a, b);
```

### Étape 5 — Exécuter le programme

Exécutez :

```bash
node echange.js
```

**Résultat attendu :**

```text
Avant : 10 20
Après : 20 10
```

## 2.2. Réaliser l’exercice

### Étape 6 — Tester avec d’autres valeurs

Modifiez les valeurs de `a` et `b`.

Testez plusieurs cas.

Vérifiez que les deux valeurs sont toujours échangées correctement.

**Résultat attendu :**

L’algorithme échange correctement les valeurs de deux variables sans perdre leur valeur initiale.

# 3. Bilan

**Vous avez réalisé :** votre premier petit algorithme en JavaScript pour échanger deux variables.

**Vous savez maintenant :** utiliser une variable temporaire pour conserver une valeur et échanger deux variables dans le bon ordre.

# 4. Glossaire

* **Algorithme** : suite d’étapes pour réaliser une tâche.
* **Échanger** : remplacer la valeur de chaque variable par celle de l’autre.
* **Variable temporaire** : variable utilisée provisoirement pour conserver une valeur.
