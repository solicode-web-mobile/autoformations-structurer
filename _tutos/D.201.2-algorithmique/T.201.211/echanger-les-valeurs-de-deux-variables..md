---
title: "Échanger les valeurs de deux variables"
layout: tuto
slug: "echanger-les-valeurs-de-deux-variables"
permalink: /tutos/:slug/
tuto_id: "T.201.211"
version: "normal"
ua: "UA.201.21"
nav_order: 1
---

 
## 1. Objectif

Écrire un traitement JavaScript permettant d’échanger les valeurs de deux variables.

Exécuter le programme avec **Node.js** et utiliser le **débogueur de VS Code** pour observer son fonctionnement et identifier une éventuelle erreur.

## 2. Prérequis

- Savoir créer un fichier.
- Connaître les variables.
- Connaître l’affectation d’une valeur.
- Savoir utiliser VS Code.
- Savoir afficher une valeur avec `console.log()`.

# Partie 1 — Comprendre le problème

## 1.1. Le problème

On dispose de deux variables :

```javascript
let a = 10;
let b = 20;
````

Avant le traitement :

```text
a = 10
b = 20
```

Après le traitement, on souhaite obtenir :

```text
a = 20
b = 10
```

Il faut donc échanger les deux valeurs.

## 1.2. Pourquoi une solution simple ne fonctionne pas ?

Essayez :

```javascript
a = b;
b = a;
```

Après la première instruction :

```text
a = 20
b = 20
```

L’ancienne valeur de `a` a été perdue.

La deuxième instruction ne permet donc plus de retrouver `10`.

## 1.3. Utiliser une variable temporaire

Pour conserver l’ancienne valeur de `a`, on utilise une variable temporaire.

```javascript
let temporaire = a;
a = b;
b = temporaire;
```

Le traitement se déroule ainsi :

```text
temporaire = 10
a = 20
b = 10
```

Les valeurs ont bien été échangées.

# Partie 2 — Pratique

## 2.1. Préparer le programme

Créez un fichier :

```text
echange.js
```

Ajoutez :

```javascript
let a = 10;
let b = 20;

console.log("Avant l'échange :");
console.log("a =", a);
console.log("b =", b);
```

## 2.2. Écrire le traitement

Écrivez le traitement permettant d’échanger les deux valeurs :

```javascript
let temporaire = a;
a = b;
b = temporaire;
```

Ajoutez ensuite :

```javascript
console.log("Après l'échange :");
console.log("a =", a);
console.log("b =", b);
```

Le programme complet est :

```javascript
let a = 10;
let b = 20;

console.log("Avant l'échange :");
console.log("a =", a);
console.log("b =", b);

let temporaire = a;
a = b;
b = temporaire;

console.log("Après l'échange :");
console.log("a =", a);
console.log("b =", b);
```

## 2.3. Exécuter avec Node.js

Ouvrez le terminal de VS Code.

Vérifiez que Node.js est disponible :

```bash
node --version
```

Puis exécutez :

```bash
node echange.js
```

Vous devez obtenir :

```text
Avant l'échange :
a = 10
b = 20

Après l'échange :
a = 20
b = 10
```

## 2.4. Tester avec d’autres valeurs

Modifiez les valeurs :

```javascript
let a = 35;
let b = 80;
```

Exécutez à nouveau le programme.

Le résultat attendu est :

```text
a = 80
b = 35
```

Testez également avec des valeurs négatives et avec `0`.

# Partie 3 — Déboguer avec VS Code

## 3.1. Placer un point d’arrêt

Dans `echange.js`, placez un point d’arrêt sur :

```javascript
let temporaire = a;
```

## 3.2. Lancer le débogueur

Dans VS Code, ouvrez :

**Exécuter et déboguer**

Lancez le programme avec **Node.js**.

## 3.3. Suivre l’exécution

Utilisez **Step Over** pour avancer instruction par instruction.

Observez les valeurs :

```text
a
b
temporaire
```

Après :

```javascript
let temporaire = a;
```

on doit avoir :

```text
a = 10
b = 20
temporaire = 10
```

Après :

```javascript
a = b;
```

on obtient :

```text
a = 20
b = 20
temporaire = 10
```

Après :

```javascript
b = temporaire;
```

on obtient :

```text
a = 20
b = 10
temporaire = 10
```

## 3.4. Corriger une erreur

Remplacez temporairement le traitement par :

```javascript
a = b;
b = a;
```

Exécutez le programme.

Vous constaterez que le résultat est incorrect :

```text
a = 20
b = 20
```

Utilisez le débogueur pour identifier l’instruction qui provoque la perte de la valeur initiale de `a`.

Corrigez ensuite le programme avec une variable temporaire.

# Partie 4 — Exercice

Créez un programme avec :

```javascript
let a = 100;
let b = 25;
```

Le programme doit :

1. afficher les valeurs avant l’échange ;
2. échanger les deux valeurs ;
3. afficher les valeurs après l’échange ;
4. être exécuté avec Node.js ;
5. être vérifié avec le débogueur de VS Code.

Le résultat attendu est :

```text
Avant :
a = 100
b = 25

Après :
a = 25
b = 100
```

# 5. Bilan

Vous savez maintenant :

* utiliser une variable temporaire ;
* échanger les valeurs de deux variables ;
* exécuter un programme JavaScript avec Node.js ;
* suivre l’exécution d’un programme avec le débogueur de VS Code ;
* identifier et corriger une erreur simple.

# 6. Livrable

Produisez le fichier :

```text
echange.js
```

Il doit contenir :

* deux variables ;
* l’affichage avant l’échange ;
* le traitement d’échange ;
* l’affichage après l’échange ;
* un test permettant de vérifier le résultat.

# 7. Glossaire

**Variable** : espace utilisé pour conserver une valeur.

**Affectation** : opération permettant de donner une valeur à une variable.

**Variable temporaire** : variable utilisée pour conserver provisoirement une valeur pendant un traitement.

**Node.js** : environnement permettant d’exécuter du JavaScript hors du navigateur.

**Débogueur** : outil permettant d’exécuter un programme étape par étape afin d’observer son fonctionnement.

**Point d’arrêt** : emplacement où l’exécution du programme est interrompue pour observer son état.
 