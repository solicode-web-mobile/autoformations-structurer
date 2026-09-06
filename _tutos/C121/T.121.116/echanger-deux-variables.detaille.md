---
title: "Échanger deux variables"
layout: tuto
slug: "echanger-deux-variables"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.116"
version: "detaille"
ua: "UA.121.11"
nav_order: 6
---


## 1. Objectif

Découvrir une première technique algorithmique en JavaScript : échanger les valeurs de deux variables sans les perdre.

## 2. Prérequis

Savoir créer des variables, utiliser `console.log()` et effectuer des opérations simples.

# Partie 1 — Théorie

## 1.1. Algorithme

Un **algorithme** est une suite d’étapes organisées pour réaliser une tâche et obtenir un résultat.

Avant d’écrire le code, on peut décrire les actions à effectuer avec des mots simples.

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

Un algorithme permet donc de définir **quoi faire et dans quel ordre**.

Dans ce tutoriel, l’algorithme consiste à échanger les valeurs de deux variables.

## 1.2. Échanger deux variables

Échanger deux variables signifie **mettre la valeur de la première variable dans la deuxième et la valeur de la deuxième dans la première**.

Au départ, nous avons :

```javascript
let a = 10;
let b = 20;
```

Les valeurs sont donc :

```text
a = 10
b = 20
```

Nous voulons obtenir :

```text
a = 20
b = 10
```

Le problème est simple : si nous écrivons directement :

```text
a = b
b = a
```

après `a = b`, la valeur `10` de `a` est perdue.

Pour éviter cette perte, nous devons conserver temporairement la première valeur.

## 1.3. Utiliser une variable temporaire

Nous créons une troisième variable appelée `temp`.

Elle sert uniquement à conserver temporairement une valeur.

L’algorithme devient :

```text
temp = a
a = b
b = temp
```

Regardons les valeurs étape par étape.

Au départ :

```text
a = 10
b = 20
```

Après :

```text
temp = a
```

nous avons :

```text
temp = 10
a = 10
b = 20
```

La valeur `10` est maintenant conservée dans `temp`.

Ensuite :

```text
a = b
```

donne :

```text
temp = 10
a = 20
b = 20
```

Enfin :

```text
b = temp
```

donne :

```text
temp = 10
a = 20
b = 10
```

Les valeurs sont bien échangées.

## 1.4. Traduire l’algorithme en JavaScript

L’algorithme :

```text
temp = a
a = b
b = temp
```

devient en JavaScript :

```javascript
let temp = a;
a = b;
b = temp;
```

L’ordre des instructions est important.

Il ne faut pas modifier cet ordre, car chaque instruction utilise les valeurs obtenues à l’étape précédente.

## 1.5. À retenir

```text
temp = a
a = b
b = temp
```

La variable `temp` garde temporairement la première valeur.

La logique est :

```text
Conserver
   ↓
Remplacer
   ↓
Restaurer
```

# Partie 2 — Pratique

## 2.1. Échanger deux variables

### Étape 1 — Créer le programme

Créez un fichier `echange.js`.

Ajoutez :

```javascript
let a = 10;
let b = 20;
```

Au départ :

```text
a = 10
b = 20
```

### Étape 2 — Afficher les valeurs initiales

Ajoutez :

```javascript
console.log("Avant :", a, b);
```

Cette instruction permet de vérifier les valeurs avant l’échange.

### Étape 3 — Échanger les valeurs

Ajoutez la variable temporaire :

```javascript
let temp = a;
```

Puis échangez les valeurs :

```javascript
a = b;
b = temp;
```

Le programme complet de l’échange est donc :

```javascript
let temp = a;
a = b;
b = temp;
```

Après ces trois instructions :

```text
a = 20
b = 10
```

### Étape 4 — Afficher les nouvelles valeurs

Ajoutez :

```javascript
console.log("Après :", a, b);
```

Vous pouvez maintenant comparer les valeurs avant et après l’échange.

### Étape 5 — Exécuter le programme

Dans le terminal, exécutez :

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

Par exemple :

```javascript
let a = 5;
let b = 15;
```

Exécutez de nouveau le programme.

Testez plusieurs valeurs.

Vérifiez que :

* la valeur de `a` devient celle de `b` ;
* la valeur de `b` devient celle de `a` ;
* aucune valeur n’est perdue.

**Résultat attendu :**

L’algorithme échange correctement les valeurs de deux variables, quelles que soient leurs valeurs initiales.

# 3. Bilan

**Vous avez réalisé :** votre premier petit algorithme en JavaScript pour échanger deux variables.

**Vous savez maintenant :** décrire un échange en étapes, utiliser une variable temporaire et traduire cet algorithme en JavaScript.

# 4. Glossaire

* **Algorithme** : suite d’étapes organisées pour réaliser une tâche.
* **Échanger** : remplacer la valeur de chaque variable par celle de l’autre.
* **Variable temporaire** : variable utilisée provisoirement pour conserver une valeur.
