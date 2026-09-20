---
title: "Échanger les valeurs de deux variables"
layout: tuto
slug: "echanger-les-valeurs-de-deux-variables"
permalink: /tutos/:slug/compact
tuto_id: "T.201.211"
version: "compact"
ua: "UA.201.21"
nav_order: 1
---

## 1. Objectif

Écrire un traitement JavaScript pour échanger les valeurs de deux variables.

Exécuter le programme avec **Node.js** et trouver les erreurs avec le **débogueur de VS Code**.

## 2. Prérequis

* Savoir créer un fichier.
* Connaître les variables.
* Connaître l’affectation d’une valeur.
* Savoir utiliser VS Code.
* Savoir afficher une valeur avec `console.log()`.

# Partie 1 — Théorie

## 1.1. Le problème

On dispose de deux variables :

* `a` contient une première valeur.
* `b` contient une deuxième valeur.

Après le traitement :

* `a` doit contenir l’ancienne valeur de `b`.
* `b` doit contenir l’ancienne valeur de `a`.

**Exemple :**

Avant :

```text
a = 10
b = 20
```

Après :

```text
a = 20
b = 10
```

## 1.2. Trouver une solution

Réfléchissez à cette question :

**Comment conserver une valeur avant de la remplacer ?**

Écrivez votre propre solution.

Ne cherchez pas à copier une solution toute faite.

## 1.3. À retenir

* Une valeur peut être remplacée par une autre.
* Il faut conserver une valeur avant de la remplacer lorsqu’elle sera encore nécessaire.
* Le programme doit être testé avant d’être validé.

# Partie 2 — Pratique

## 2.1. Installer Node.js

### Étape 1 — Installer Node.js

Installez **Node.js** sur votre ordinateur.

Pendant l’installation, gardez les options proposées par défaut.

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

Dans le fichier, créez deux variables avec des valeurs simples.

Ajoutez un affichage avant le traitement avec `console.log()`.

### Étape 5 — Écrire votre traitement

Écrivez vous-même le traitement qui permet d’échanger les deux valeurs.

Ne consultez pas une solution déjà écrite.

Ajoutez ensuite un affichage après le traitement.

**Résultat attendu :**

La valeur de `a` et la valeur de `b` sont inversées.

## 2.3. Exécuter avec Node.js

### Étape 6 — Lancer le programme

Dans le terminal de VS Code, exécutez :

```bash
node echange.js
```

### Étape 7 — Vérifier le résultat

Comparez :

* les valeurs avant le traitement ;
* les valeurs après le traitement.

Corrigez votre code si le résultat est incorrect.

## 2.4. Déboguer avec VS Code

### Étape 8 — Placer un point d’arrêt

Ouvrez `echange.js`.

Cliquez dans la marge à gauche d’une ligne de votre traitement pour placer un **point d’arrêt**.

### Étape 9 — Lancer le débogueur

Ouvrez le panneau **Exécuter et déboguer** de VS Code.

Lancez le programme avec le débogueur **Node.js**.

### Étape 10 — Avancer ligne par ligne

Utilisez **Step Over** pour avancer une ligne à la fois.

À chaque ligne :

* observez la valeur de `a` ;
* observez la valeur de `b` ;
* vérifiez ce qui change.

### Étape 11 — Trouver l’erreur

Si le résultat est incorrect :

* repérez la ligne qui produit le mauvais résultat ;
* observez les valeurs avant cette ligne ;
* observez les valeurs après cette ligne ;
* corrigez votre code ;
* relancez le débogage.

**Résultat attendu :**

Vous pouvez expliquer, ligne par ligne, comment les valeurs changent.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui échange les valeurs de deux variables.

**Vous savez maintenant :** écrire, exécuter et déboguer un traitement simple avec **Node.js** et **VS Code**.

# 4. Glossaire

* **Variable** : espace utilisé pour conserver une valeur.
* **Affectation** : action qui donne une valeur à une variable.
* **Node.js** : environnement qui permet d’exécuter du JavaScript hors du navigateur.
* **Débogueur** : outil qui permet d’exécuter un programme étape par étape pour trouver une erreur.
* **Point d’arrêt** : point où l’exécution du programme s’arrête pour observer son état.
