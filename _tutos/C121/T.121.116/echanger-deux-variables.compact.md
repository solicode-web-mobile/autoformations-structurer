---
title: "Échanger deux variables"
layout: tuto
slug: "echanger-deux-variables"
permalink: /tutos/:slug/compact
tuto_id: "T.121.116"
version: "compact"
ua: "UA.121.11"
nav_order: 6
---

## 1. Objectif

Découvrir une première technique algorithmique en JavaScript : échanger les valeurs de deux variables sans les perdre.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()` et effectuer des opérations simples.

# Partie 1 — Théorie

## 1.1. Algorithme

Un **algorithme** est une suite d’étapes qui permet de réaliser une tâche.

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

## 1.2. Échanger deux variables

Échanger deux variables signifie **mettre la valeur de la première dans la deuxième et la valeur de la deuxième dans la première**.

Au départ :

```javascript
let a = 10;
let b = 20;
```

On veut obtenir :

```text
a = 20
b = 10
```

Pour ne pas perdre une valeur, on utilise une troisième variable temporaire.

```text
temp = a
a = b
b = temp
```

## 1.3. À retenir

```text
temp = a
a = b
b = temp
```

La variable `temp` garde temporairement la première valeur.

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

Ajoutez les instructions de l’algorithme :

```text
temp = a
a = b
b = temp
```

Traduisez ces étapes en JavaScript.

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

L’algorithme échange correctement les valeurs de deux variables.

# 3. Bilan

**Vous avez réalisé :** votre premier petit algorithme pour échanger deux variables.

**Vous savez maintenant :** utiliser une variable temporaire pour échanger deux valeurs sans les perdre.

# 4. Glossaire

* **Algorithme** : suite d’étapes pour réaliser une tâche.
* **Échanger** : remplacer la valeur de chaque variable par celle de l’autre.
* **Variable temporaire** : variable utilisée provisoirement pour conserver une valeur.
