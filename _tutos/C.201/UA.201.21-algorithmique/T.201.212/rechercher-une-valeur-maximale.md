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

Exécuter le programme avec **Node.js** et vérifier votre programme avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Savoir utiliser `console.log()`.
* Connaître la boucle `for`.
* Savoir utiliser VS Code.
* Savoir exécuter un fichier avec Node.js.

# Partie 1 — Théorie

## 1.1. Rappel JavaScript — Déclarer un tableau

Un tableau permet de stocker plusieurs valeurs dans une même variable.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Le tableau contient ici cinq nombres.

## 1.2. Lire une valeur dans un tableau

Chaque élément possède un indice.

Le premier indice est `0`.

```javascript
console.log(nombres[0]);
console.log(nombres[2]);
```

Pour lire un élément :

```text
tableau[indice]
```

## 1.3. Écrire une valeur dans un tableau

Vous pouvez modifier un élément avec son indice.

```javascript
nombres[2] = 30;
```

La forme générale est :

```text
tableau[indice] = nouvelleValeur
```

## 1.4. Connaître le nombre d’éléments

La propriété `length` donne le nombre d’éléments.

```javascript
console.log(nombres.length);
```

## 1.5. Parcourir un tableau

Une boucle `for` permet de parcourir les éléments du tableau.

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

La variable `i` représente l’indice utilisé pendant le parcours.

## 1.6. Comprendre le problème

Vous disposez d’un tableau de nombres :

```text
[12, 5, 27, 9, 18]
```

Votre programme doit afficher la plus grande valeur :

```text
27
```

Le programme doit aussi fonctionner avec d’autres tableaux.

Par exemple :

```text
[4, 8, 2, 15, 6]
```

ou :

```text
[20, 7, 13, 5, 9]
```

Votre travail consiste à trouver vous-même le traitement nécessaire.

Aucune solution de l’algorithme n’est donnée dans ce tutoriel.

## 1.7. Préparer votre réflexion

Avant d’écrire le code, réfléchissez au problème.

Vous devez déterminer vous-même :

* comment parcourir le tableau ;
* comment comparer les valeurs ;
* quelle information conserver pendant le traitement ;
* quand modifier cette information ;
* quelle valeur afficher à la fin.

Écrivez votre raisonnement avant de coder.

# Partie 2 — Pratique

## 2.1. Organiser le travail

### Étape 1 — Créer le fichier

Créez un fichier :

```text
maximum.js
```

Utilisez ce fichier pour écrire votre programme.

### Étape 2 — Préparer les données

Dans `maximum.js`, déclarez un tableau de nombres.

Commencez avec :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Ajoutez un affichage du tableau.

### Étape 3 — Construire votre traitement

Écrivez votre propre algorithme pour rechercher la plus grande valeur.

Utilisez les notions vues dans la partie théorique.

Ne copiez pas une solution.

## 2.2. Tester le programme

Exécutez le fichier avec Node.js :

```bash
node maximum.js
```

Vérifiez le résultat.

Testez ensuite votre programme avec plusieurs tableaux.

Par exemple :

```text
[4, 8, 2, 15, 6]
```

```text
[20, 7, 13, 5, 9]
```

Ajoutez vos propres tests.

## 2.3. Vérifier le programme avec VS Code

Utilisez le débogueur de **VS Code** pour observer votre programme pendant son exécution.

Suivez votre traitement ligne par ligne.

Observez notamment :

* l’indice courant ;
* la valeur lue dans le tableau ;
* les variables utilisées par votre traitement ;
* les changements de leurs valeurs.

Comparez ce que fait le programme avec votre raisonnement.

## 2.4. Corriger votre programme

Lorsque le résultat est incorrect, recherchez vous-même l’endroit où le programme ne produit plus le résultat attendu.

Analysez les valeurs des variables et le comportement de votre traitement.

Corrigez votre code, puis exécutez-le de nouveau.

Répétez les tests jusqu’à obtenir un résultat correct.

**Résultat attendu :**

Votre programme affiche correctement la plus grande valeur pour les différents tableaux testés.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui recherche la plus grande valeur d’un tableau.

**Vous savez maintenant :** déclarer, lire et modifier un tableau, parcourir ses éléments et construire un traitement de recherche.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Maximum** : plus grande valeur d’un ensemble.
* **Variable** : espace utilisé pour conserver une valeur.
* **Débogueur** : outil qui permet d’observer un programme pendant son exécution.
