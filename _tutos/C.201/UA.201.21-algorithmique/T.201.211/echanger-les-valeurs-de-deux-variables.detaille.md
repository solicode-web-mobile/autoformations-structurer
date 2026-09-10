---
title: "Échanger les valeurs de deux variables"
layout: tuto
slug: "echanger-les-valeurs-de-deux-variables"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.211"
version: "detaille"
ua: "UA.201.21"
nav_order: 1
---


## 1. Objectif

Écrire un traitement JavaScript permettant d’échanger les valeurs de deux variables.

Exécuter le programme avec **Node.js** et utiliser le **débogueur de VS Code** pour observer son exécution et identifier les erreurs éventuelles.

## 2. Prérequis

* Savoir créer un fichier.
* Connaître les variables.
* Connaître l’affectation d’une valeur.
* Savoir utiliser VS Code.
* Savoir afficher une valeur avec `console.log()`.

# Partie 1 — Théorie

## 1.1. Le problème

On dispose de deux variables :

```javascript
let a = 10;
let b = 20;
```

Avant le traitement :

```text
a = 10
b = 20
```

Après le traitement :

```text
a = 20
b = 10
```

Le problème consiste donc à **inverser les valeurs** contenues dans les deux variables.

La difficulté vient du fait qu’une affectation remplace la valeur actuellement contenue dans une variable.

Par exemple :

```javascript
a = b;
```

Après cette instruction, la valeur précédente de `a` n’est plus conservée dans `a`.

Réfléchissez donc à la question suivante :

> Comment conserver l’ancienne valeur de `a` avant de modifier `a` ?

## 1.2. Trouver une solution

Essayez d’abord de construire votre solution seul.

Vous disposez de :

```text
a = 10
b = 20
```

Vous devez obtenir :

```text
a = 20
b = 10
```

Vous pouvez utiliser une variable supplémentaire si vous pensez qu’elle peut être utile.

Écrivez les différentes affectations nécessaires dans l’ordre.

### Expérience

Testez également cette proposition :

```javascript
a = b;
b = a;
```

Observez le résultat.

Comparez :

```text
Avant :
a = 10
b = 20
```

avec :

```text
Après :
a = ?
b = ?
```

Expliquez pourquoi cette tentative ne permet pas d’obtenir le résultat attendu.

### Indice

Une valeur qui va être remplacée doit-elle être conservée quelque part avant l’affectation ?

Cherchez le rôle que pourrait jouer une troisième variable.

## 1.3. À retenir

* Une affectation remplace la valeur actuelle d’une variable.
* Une valeur qui doit encore être utilisée doit être conservée avant d’être remplacée.
* L’ordre des affectations influence le résultat.
* Une solution algorithmique doit être testée avant d’être considérée comme correcte.

# Partie 2 — Pratique

## 2.1. Installer Node.js

### Étape 1 — Installer Node.js

Installez **Node.js** sur votre ordinateur.

Conservez les options proposées par défaut pendant l’installation.

### Étape 2 — Vérifier l’installation

Ouvrez un terminal dans VS Code.

Exécutez :

```bash
node --version
```

Vérifiez qu’une version de Node.js s’affiche.

## 2.2. Préparer le programme

### Étape 3 — Créer le fichier

Créez un fichier :

```text
echange.js
```

### Étape 4 — Préparer les valeurs

Déclarez deux variables :

```javascript
let a = 10;
let b = 20;
```

Affichez leurs valeurs avant le traitement avec `console.log()`.

### Étape 5 — Écrire votre traitement

Écrivez vous-même le traitement permettant d’échanger les deux valeurs.

Ne cherchez pas à recopier une solution.

Avant d’exécuter le programme, vérifiez que votre raisonnement permet bien de passer de :

```text
a = 10
b = 20
```

à :

```text
a = 20
b = 10
```

Ajoutez ensuite un affichage des valeurs après le traitement.

**Résultat attendu :**

Les deux valeurs sont inversées.

## 2.3. Exécuter avec Node.js

### Étape 6 — Lancer le programme

Dans le terminal de VS Code, exécutez :

```bash
node echange.js
```

### Étape 7 — Vérifier le résultat

Comparez les valeurs avant et après le traitement.

Si le résultat est incorrect, ne modifiez pas immédiatement le code au hasard.

Reprenez les affectations une par une et recherchez à quel moment une valeur est perdue ou remplacée.

## 2.4. Déboguer avec VS Code

### Étape 8 — Placer un point d’arrêt

Ouvrez `echange.js`.

Placez un **point d’arrêt** sur une instruction de votre traitement.

### Étape 9 — Lancer le débogueur

Ouvrez **Exécuter et déboguer** dans VS Code.

Lancez le programme avec le débogueur **Node.js**.

### Étape 10 — Avancer ligne par ligne

Utilisez **Step Over** pour avancer une instruction à la fois.

À chaque ligne, observez :

* la valeur de `a` ;
* la valeur de `b` ;
* la valeur de votre éventuelle variable supplémentaire.

Notez l’état des variables avant et après chaque affectation.

### Étape 11 — Trouver l’erreur

Si le résultat est incorrect :

* identifiez la première instruction après laquelle une valeur devient incorrecte ;
* observez les valeurs avant cette instruction ;
* observez les valeurs après cette instruction ;
* déterminez quelle valeur a été remplacée ;
* recherchez une autre organisation des affectations ;
* corrigez votre traitement ;
* relancez le programme.

**Résultat attendu :**

Vous êtes capable d’expliquer comment votre traitement échange les deux valeurs sans perdre l’une d’elles.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript permettant d’échanger les valeurs de deux variables.

**Vous savez maintenant :** analyser un problème d’affectation, construire votre propre solution algorithmique, l’exécuter avec **Node.js** et utiliser le **débogueur de VS Code** pour rechercher une erreur.

# 4. Glossaire

* **Variable** : espace utilisé pour conserver une valeur.
* **Affectation** : action qui donne une valeur à une variable ou remplace sa valeur actuelle.
* **Échange** : opération qui consiste à inverser les valeurs de deux variables.
* **Node.js** : environnement permettant d’exécuter du JavaScript hors du navigateur.
* **Débogueur** : outil permettant de suivre l’exécution d’un programme étape par étape.
* **Point d’arrêt** : emplacement où l’exécution du programme est suspendue pour observer son état.

