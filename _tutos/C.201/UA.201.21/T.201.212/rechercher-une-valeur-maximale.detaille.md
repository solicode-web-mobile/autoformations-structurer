---
title: "Rechercher une valeur maximale dans un tableau"
layout: tuto
slug: "rechercher-une-valeur-maximale"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.212"
version: "detaille"
ua: "UA.201.21"
nav_order: 2
---


## 1. Objectif

Écrire un programme JavaScript qui recherche la plus grande valeur d’un tableau.

Vous allez préparer le tableau, construire votre propre algorithme, puis tester et déboguer votre programme avec **Node.js** et **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Savoir déclarer un tableau.
* Savoir lire un élément avec son indice.
* Savoir modifier un élément.
* Savoir utiliser une boucle `for`.
* Savoir utiliser `console.log()`.
* Savoir utiliser VS Code.
* Savoir exécuter un fichier avec Node.js.

# Partie 1 — Théorie

## 1.1. Rappel JavaScript — Déclarer un tableau

Un tableau permet de stocker plusieurs valeurs dans une même variable.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Chaque valeur possède un indice.

Le premier indice est `0`.

```text
Indice :  0   1   2   3   4
Valeur : 12   5  27   9  18
```

## 1.2. Lire un élément

Pour lire une valeur, utilisez son indice.

```javascript
console.log(nombres[0]);
console.log(nombres[2]);
```

La forme générale est :

```text
tableau[indice]
```

## 1.3. Écrire une valeur

Vous pouvez modifier une valeur avec son indice.

```javascript
nombres[2] = 30;
```

La forme générale est :

```text
tableau[indice] = nouvelleValeur
```

## 1.4. Connaître le nombre d’éléments

La propriété `length` donne le nombre d’éléments du tableau.

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

La variable `i` représente l’indice courant.

L’expression `nombres[i]` permet de lire la valeur correspondante.

## 1.6. Le problème

Vous disposez d’un tableau de nombres :

```text
[12, 5, 27, 9, 18]
```

Votre programme doit afficher la plus grande valeur :

```text
27
```

Le même programme doit fonctionner avec d’autres tableaux.

Exemples :

```text
[4, 8, 2, 15, 6]
```

```text
[20, 7, 13, 5, 9]
```

Vous devez trouver vous-même le traitement qui permet d’obtenir le résultat.

**La solution de l’algorithme n’est pas donnée dans ce tutoriel.**

## 1.7. Réfléchir avant de coder

Avant d’écrire le programme, analysez le problème.

Posez-vous ces questions :

* Quelles valeurs faut-il examiner ?
* Comment accéder à chaque valeur ?
* Comment comparer deux valeurs ?
* Quelle information faut-il conserver pendant le traitement ?
* Comment déterminer le résultat final ?

Écrivez votre raisonnement avant de commencer le code.

## 1.8. Vérifier votre raisonnement

Prenez ce tableau :

```text
[12, 5, 27, 9, 18]
```

Observez les valeurs une par une.

Essayez de déterminer manuellement comment vous trouveriez la plus grande valeur.

Faites ensuite le même travail avec :

```text
[4, 8, 2, 15, 6]
```

Puis :

```text
[20, 7, 13, 5, 9]
```

Le but est de transformer votre raisonnement en programme.

## 1.9. Préparer les tests

Votre programme doit fonctionner avec plusieurs tableaux.

Testez notamment :

* une plus grande valeur au début ;
* une plus grande valeur au milieu ;
* une plus grande valeur à la fin ;
* plusieurs valeurs différentes.

Vous pouvez aussi créer vos propres cas de test.

## 1.10. À retenir

* Un tableau contient plusieurs valeurs.
* Le premier indice est `0`.
* `tableau[indice]` permet de lire une valeur.
* `tableau[indice] = valeur` permet de modifier une valeur.
* `length` donne le nombre d’éléments.
* Une boucle `for` permet de parcourir un tableau.
* Le traitement doit être construit à partir du problème.

# Partie 2 — Pratique

## 2.1. Organiser le travail

### Étape 1 — Créer le fichier

Créez le fichier :

```text
maximum.js
```

Ce fichier contient votre programme.

### Étape 2 — Préparer les données

Déclarez un tableau de nombres dans `maximum.js`.

Commencez avec :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Ajoutez un affichage pour vérifier le contenu du tableau.

### Étape 3 — Construire votre solution

Écrivez votre propre algorithme pour rechercher la plus grande valeur.

Utilisez les notions étudiées dans la partie théorique.

Ne copiez pas une solution existante.

## 2.2. Exécuter avec Node.js

### Étape 4 — Vérifier Node.js

Dans le terminal de VS Code, exécutez :

```bash
node --version
```

Une version de Node.js doit s’afficher.

### Étape 5 — Exécuter le programme

Lancez :

```bash
node maximum.js
```

Avec le tableau :

```text
[12, 5, 27, 9, 18]
```

le résultat attendu est :

```text
27
```

### Étape 6 — Tester plusieurs tableaux

Modifiez le tableau et testez plusieurs situations.

Vérifiez à chaque fois que le résultat correspond à la plus grande valeur présente dans le tableau.

# Partie 3 — Test et débogage avec VS Code

## 3.1. Déboguer le programme

Utilisez le débogueur **Node.js** de VS Code pour suivre votre programme **ligne par ligne**.

Observez les valeurs des variables pendant l’exécution.

Portez une attention particulière :

* à l’indice utilisé ;
* à la valeur actuellement lue ;
* aux variables utilisées par votre traitement ;
* aux changements de leurs valeurs.

## 3.2. Vérifier votre raisonnement

Comparez le comportement du programme avec le raisonnement que vous avez préparé avant le codage.

Vérifiez que :

* les éléments sont bien parcourus ;
* les valeurs sont correctement comparées ;
* les variables contiennent les bonnes valeurs ;
* le résultat final est correct.

## 3.3. Corriger les erreurs

Lorsque le résultat est incorrect, utilisez le débogage pour trouver l’origine du problème.

Observez le programme ligne par ligne.

Identifiez le premier moment où le résultat devient incorrect.

Corrigez votre code, puis relancez le programme.

Réalisez de nouveaux tests après chaque correction.

**Résultat attendu :**

Le programme recherche correctement la plus grande valeur dans différents tableaux.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui déclare un tableau, parcourt ses éléments et recherche sa plus grande valeur.

**Vous savez maintenant :** utiliser un tableau, lire ses éléments avec leurs indices, le parcourir avec une boucle `for`, construire un traitement de recherche et vérifier votre programme avec Node.js et VS Code.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **`length`** : propriété qui donne le nombre d’éléments.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Maximum** : plus grande valeur d’un ensemble.
* **Test** : exécution du programme avec des données pour vérifier le résultat.
* **Débogage** : recherche et correction d’une erreur dans un programme.
* **Débogueur** : outil qui permet d’observer un programme pendant son exécution.
