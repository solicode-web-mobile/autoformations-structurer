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

Exécuter, tester et déboguer le programme avec **Node.js** et **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Connaître les tableaux.
* Savoir utiliser une boucle `for`.
* Savoir utiliser `console.log()`.
* Savoir utiliser VS Code.
* Savoir exécuter un fichier avec Node.js.

# Partie 1 — Théorie

## 1.1. Rappel JavaScript — Tableau

Un tableau permet de stocker plusieurs valeurs dans une même variable.

Pour déclarer un tableau, utilisez les crochets `[]`.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Ici, `nombres` contient cinq valeurs.

Chaque valeur possède un **indice**. Le premier indice est `0`.

```text
Indice :  0   1   2   3   4
Valeur : 12   5  27   9  18
```

Pour lire une valeur, utilisez son indice :

```javascript
console.log(nombres[0]);
console.log(nombres[2]);
```

La forme générale est :

```text
tableau[indice]
```

Pour écrire ou modifier une valeur :

```javascript
nombres[2] = 30;
```

La forme générale est :

```text
tableau[indice] = nouvelleValeur
```

La propriété `length` permet de connaître le nombre d’éléments :

```javascript
console.log(nombres.length);
```

Une boucle `for` permet de parcourir les éléments :

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

La variable `i` représente l’indice courant.

## 1.2. Le problème

Vous disposez d’un tableau de nombres :

```text
[12, 5, 27, 9, 18]
```

Votre programme doit afficher la plus grande valeur :

```text
27
```

Le programme doit aussi fonctionner avec d’autres tableaux, par exemple :

```text
[4, 8, 2, 15, 6]
```

ou :

```text
[20, 7, 13, 5, 9]
```

Votre travail consiste à construire vous-même l’algorithme.

Vous devez déterminer comment utiliser le parcours du tableau et les comparaisons pour obtenir le résultat.

**Aucune solution de l’algorithme n’est donnée dans ce tutoriel.**

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez un fichier :

```text
maximum.js
```

Dans ce fichier, déclarez un tableau de nombres :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Affichez le tableau avec `console.log()` pour vérifier les données.

Construisez ensuite votre propre traitement pour rechercher la plus grande valeur.

Utilisez les notions étudiées dans la partie théorique :

* tableau ;
* indice ;
* boucle `for` ;
* comparaison ;
* variable.

Ne copiez pas une solution déjà écrite.

### Étape 2 — Exécuter

Dans le terminal de VS Code, exécutez :

```bash
node maximum.js
```

Vérifiez le résultat obtenu.

Pour le tableau :

```text
[12, 5, 27, 9, 18]
```

le résultat attendu est :

```text
27
```

Changez ensuite les valeurs du tableau.

Testez par exemple :

```text
[4, 8, 2, 15, 6]
```

Puis :

```text
[20, 7, 13, 5, 9]
```

Vérifiez que votre programme donne le bon résultat dans chaque cas.

### Étape 3 — Déboguer

Utilisez le débogueur **Node.js** de VS Code pour suivre votre programme ligne par ligne.

Observez les valeurs pendant l’exécution, notamment :

* l’indice utilisé ;
* la valeur actuellement lue dans le tableau ;
* les variables utilisées par votre traitement ;
* les changements de leurs valeurs.

Comparez ce que vous observez avec votre raisonnement.

Si le résultat est incorrect, cherchez vous-même à quel moment le comportement du programme devient incorrect.

Analysez les valeurs des variables, corrigez votre code et exécutez de nouveau le programme.

Répétez les tests avec plusieurs tableaux.

**Résultat attendu :**

Le programme trouve correctement la plus grande valeur du tableau.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui parcourt un tableau et recherche sa plus grande valeur.

**Vous savez maintenant :** déclarer, lire et modifier un tableau, parcourir ses éléments et construire un traitement de recherche.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Maximum** : plus grande valeur d’un ensemble.
* **Comparaison** : action qui permet de comparer des valeurs.
* **Débogage** : recherche et correction des erreurs d’un programme.
