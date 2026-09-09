---
title: "Rechercher une valeur maximale dans un tableau"
layout: tuto
slug: "rechercher-une-valeur-maximale"
permalink: /tutos/:slug/
tuto_id: "T.201.212"
version: "normal"
ua: "UA.201.21"
nav_order: 2
---

## 1. Objectif

Écrire un programme JavaScript qui recherche la plus grande valeur d’un tableau.

Exécuter le programme avec **Node.js**, puis le déboguer ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Savoir déclarer un tableau.
* Savoir lire un élément avec son indice.
* Savoir modifier un élément.
* Savoir utiliser une boucle `for`.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Déclarer et utiliser un tableau

Un tableau permet de stocker plusieurs valeurs.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Pour lire un élément, utilisez son indice :

```javascript
console.log(nombres[0]);
console.log(nombres[2]);
```

Le premier élément est à l’indice `0`.

Pour modifier un élément :

```javascript
nombres[2] = 30;
```

Pour connaître le nombre d’éléments :

```javascript
nombres.length
```

Pour parcourir le tableau :

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

## 1.2. Le problème

Vous disposez d’un tableau de nombres :

```text
[12, 5, 27, 9, 18]
```

Votre programme doit trouver la plus grande valeur.

Résultat attendu :

```text
27
```

Le programme doit fonctionner avec différents tableaux.

## 1.3. Préparer votre raisonnement

Avant de coder, observez le problème.

Répondez à ces questions :

* Comment parcourir toutes les valeurs du tableau ?
* Comment savoir quelle valeur est la plus grande ?
* Quelle information devez-vous conserver pendant le traitement ?
* Quand cette information doit-elle changer ?
* Quelle valeur devez-vous afficher à la fin ?

Écrivez votre raisonnement sur papier avant de commencer.

## 1.4. Observer le parcours

Le parcours permet de lire les éléments du tableau un par un.

Avec :

```text
[12, 5, 27, 9, 18]
```

vous pouvez observer les valeurs dans l’ordre :

```text
12
5
27
9
18
```

Votre travail consiste maintenant à utiliser ce parcours pour résoudre le problème.

## 1.5. Utiliser une variable de référence

Le programme aura besoin d’une variable permettant de conserver une information pendant le parcours.

Vous devez déterminer vous-même :

* quelle valeur utiliser au départ ;
* comment comparer cette valeur avec la valeur courante ;
* dans quel cas la remplacer.

## 1.6. Préparer une trace

Avant le débogage, préparez une trace simple :

```text
Indice | Valeur courante | Valeur conservée
```

Pendant l’exécution, complétez cette trace avec les valeurs observées dans VS Code.

Cette trace vous aidera à comprendre votre propre algorithme.

## 1.7. À retenir

* Un tableau contient plusieurs valeurs.
* Le premier indice est `0`.
* `tableau[indice]` permet de lire une valeur.
* `tableau[indice] = valeur` permet de modifier une valeur.
* `length` donne le nombre d’éléments.
* Une boucle `for` permet de parcourir un tableau.
* Une variable peut conserver une information pendant le parcours.

# Partie 2 — Pratique

## 2.1. Construire le programme

### Étape 1 — Créer le fichier

Créez le fichier :

```text
maximum.js
```

Déclarez le tableau :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Affichez le tableau.

### Étape 2 — Construire votre algorithme

Écrivez votre propre traitement pour trouver la plus grande valeur.

Utilisez les notions étudiées :

* tableau ;
* indice ;
* boucle `for` ;
* comparaison ;
* variable.

Ne copiez pas une solution trouvée sur Internet.

### Étape 3 — Tester

Exécutez :

```bash
node maximum.js
```

Le programme doit afficher :

```text
27
```

Modifiez ensuite le tableau et vérifiez votre algorithme avec d’autres valeurs.

# Partie 3 — Débogage avec VS Code

## 3.1. Suivre votre algorithme

### Étape 1 — Placer un point d’arrêt

Placez un point d’arrêt au début de votre traitement.

### Étape 2 — Lancer le débogueur

Dans VS Code, lancez le programme avec le débogueur **Node.js**.

### Étape 3 — Avancer ligne par ligne

Utilisez **Step Over**.

Observez :

* la valeur de `i` ;
* la valeur de `nombres[i]` ;
* la variable utilisée pour conserver votre résultat ;
* les changements de cette variable.

Comparez les valeurs observées avec votre raisonnement.

### Étape 4 — Trouver et corriger une erreur

Si le résultat est incorrect :

* repérez le premier passage incorrect ;
* observez les variables ;
* vérifiez l’indice ;
* vérifiez la comparaison ;
* trouvez la cause de l’erreur ;
* corrigez votre code ;
* relancez le programme.

**Résultat attendu :**

Le programme trouve correctement la plus grande valeur du tableau.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui parcourt un tableau pour rechercher sa plus grande valeur.

**Vous savez maintenant :** déclarer, lire et modifier un tableau, le parcourir avec une boucle `for`, construire un algorithme de recherche et déboguer votre traitement avec Node.js et VS Code.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Maximum** : plus grande valeur d’un ensemble de valeurs.
* **Valeur courante** : valeur actuellement traitée.
* **Variable de référence** : variable qui conserve une information pendant le traitement.
* **Trace d’exécution** : observation des valeurs pendant l’exécution du programme.
* **Débogueur** : outil qui permet de suivre un programme ligne par ligne.
