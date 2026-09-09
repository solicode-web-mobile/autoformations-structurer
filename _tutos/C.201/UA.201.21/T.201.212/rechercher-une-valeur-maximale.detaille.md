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

Vous allez déclarer et parcourir un tableau, comparer ses valeurs et construire vous-même le traitement de recherche du maximum.

Vous allez ensuite exécuter le programme avec **Node.js** et le déboguer ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Savoir utiliser `let`.
* Savoir utiliser `console.log()`.
* Connaître la boucle `for`.
* Savoir utiliser VS Code.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser un point d’arrêt dans VS Code.

# Partie 1 — Théorie

## 1.1. Déclarer un tableau

Un **tableau** permet de stocker plusieurs valeurs dans une même variable.

En JavaScript, les valeurs sont placées entre crochets `[]`.

```javascript id="a6j2pk"
let nombres = [12, 5, 27, 9, 18];
```

Le tableau `nombres` contient plusieurs valeurs.

Chaque valeur possède un **indice**.

Le premier indice est `0`.

```text id="j8l7ap"
Indice :    0   1   2   3   4
Valeur :   12   5  27   9  18
```

## 1.2. Lire un élément

Pour lire un élément, utilisez son indice.

```javascript id="qxk2ry"
console.log(nombres[0]);
console.log(nombres[2]);
```

Le programme lit les valeurs placées aux indices `0` et `2`.

La forme générale est :

```text id="1j6x3u"
tableau[indice]
```

## 1.3. Modifier un élément

Vous pouvez modifier une valeur en utilisant son indice.

```javascript id="z14nqe"
nombres[2] = 30;
```

La valeur située à l’indice `2` est remplacée.

La forme générale est :

```text id="0k5dx2"
tableau[indice] = nouvelleValeur
```

Cette opération est utile lorsque le programme doit modifier les données d’un tableau.

## 1.4. Connaître le nombre d’éléments

La propriété `length` donne le nombre d’éléments du tableau.

```javascript id="r8qjtp"
console.log(nombres.length);
```

Pour le tableau précédent, le résultat est :

```text id="k7wv86"
5
```

Cette propriété est utile pour construire une boucle qui parcourt tout le tableau.

## 1.5. Parcourir un tableau

Une boucle `for` permet de parcourir les éléments un par un.

```javascript id="rjv4hg"
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

La variable `i` représente l’indice courant.

À chaque passage, l’expression :

```text id="3w2h9n"
nombres[i]
```

permet de lire l’élément situé à cet indice.

Avec le tableau :

```text id="93o1kp"
[12, 5, 27, 9, 18]
```

la boucle doit passer par tous les indices valides du tableau.

## 1.6. Comprendre le problème

Le travail demandé est de rechercher la plus grande valeur d’un tableau.

Exemple :

```text id="4f8q6s"
[12, 5, 27, 9, 18]
```

Le résultat attendu est :

```text id="y9h4eg"
27
```

Le programme doit donc parcourir les valeurs et déterminer laquelle est la plus grande.

## 1.7. Construire le raisonnement

Avant d’écrire le code, décomposez le problème.

Vous devez répondre à plusieurs questions :

**Question 1 :**

Quelle valeur utiliser au début pour commencer la recherche ?

**Question 2 :**

Comment parcourir toutes les valeurs du tableau ?

**Question 3 :**

Comment comparer la valeur courante avec la valeur de référence ?

**Question 4 :**

Dans quel cas faut-il remplacer la valeur de référence ?

**Question 5 :**

Quelle valeur faut-il afficher à la fin ?

Écrivez vos réponses avant de commencer le code.

## 1.8. La valeur de référence

Pendant la recherche, le programme doit garder une valeur qui représente le meilleur résultat trouvé jusqu’à présent.

Cette valeur peut changer pendant le parcours.

Votre travail consiste à choisir une bonne initialisation.

Réfléchissez notamment au comportement du programme lorsque :

* la plus grande valeur est au début ;
* la plus grande valeur est au milieu ;
* la plus grande valeur est à la fin ;
* toutes les valeurs sont différentes ;
* plusieurs valeurs sont proches.

## 1.9. La comparaison

Pendant le parcours, le programme rencontre une nouvelle valeur.

Cette valeur doit être comparée à la valeur actuellement conservée.

Posez-vous la question :

> Dans quel cas la nouvelle valeur doit-elle remplacer la valeur actuelle ?

Cette décision est le cœur de l’algorithme.

## 1.10. La trace d’exécution

Une **trace d’exécution** permet de suivre les valeurs pendant l’exécution du programme.

Avant le débogage, préparez une trace avec :

```text id="g1nq5v"
Indice
Valeur courante
Valeur de référence avant
Valeur de référence après
```

Vous remplirez cette trace pendant l’exécution.

Ne cherchez pas à remplir le résultat à l’avance.

Le but est d’observer ce que fait réellement votre programme.

## 1.11. Vérifier le raisonnement

Avant l’exécution, vérifiez votre logique avec plusieurs tableaux.

Utilisez par exemple :

```text id="p4f1dc"
[12, 5, 27, 9, 18]
```

Puis :

```text id="s8x2qm"
[4, 8, 2, 15, 6]
```

Puis :

```text id="m5v9tb"
[20, 7, 13, 5, 9]
```

Pour chaque tableau, écrivez :

* la valeur de départ ;
* les valeurs à parcourir ;
* les comparaisons à effectuer ;
* les moments où la valeur de référence doit changer.

Ne donnez pas encore le code.

## 1.12. À retenir

* Un tableau contient plusieurs valeurs.
* Le premier indice est `0`.
* `tableau[indice]` permet de lire une valeur.
* `tableau[indice] = valeur` permet de modifier une valeur.
* `tableau.length` donne le nombre d’éléments.
* Une boucle `for` permet de parcourir le tableau.
* Une recherche utilise une valeur de référence.
* Cette valeur doit être mise à jour lorsque le raisonnement l’exige.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez le fichier :

```text id="xw8g4c"
maximum.js
```

### Étape 2 — Déclarer le tableau

Ajoutez un tableau de nombres :

```javascript id="mb0n4q"
let nombres = [12, 5, 27, 9, 18];
```

Affichez le tableau avec `console.log()`.

Exécutez le programme pour vérifier les données.

## 2.2. Construire l’algorithme

### Étape 3 — Parcourir le tableau

Ajoutez une boucle `for`.

Utilisez l’indice pour lire les éléments du tableau.

Affichez temporairement la valeur courante.

Exécutez le programme.

Vérifiez que toutes les valeurs sont lues.

### Étape 4 — Ajouter la recherche

Ajoutez une variable pour conserver la valeur de référence.

Construisez ensuite la comparaison entre :

* la valeur courante ;
* la valeur de référence.

Décidez dans quel cas la valeur de référence doit changer.

N’utilisez pas de méthode toute faite pour rechercher le maximum.

Construisez le traitement avec les notions étudiées.

### Étape 5 — Afficher le résultat

Ajoutez l’affichage du résultat final.

Avec :

```text id="c8c4pw"
[12, 5, 27, 9, 18]
```

le résultat attendu est :

```text id="f1k2ua"
27
```

Le code complet de la recherche doit être écrit par vous.

# Partie 3 — Exécuter avec Node.js

## 3.1. Installer Node.js

### Étape 1 — Installer Node.js

Installez **Node.js** sur votre ordinateur.

Utilisez les options proposées par l’installation.

### Étape 2 — Vérifier l’installation

Ouvrez le terminal de VS Code.

Exécutez :

```bash id="qj2t8w"
node --version
```

Une version de Node.js doit s’afficher.

## 3.2. Exécuter le programme

### Étape 3 — Lancer le fichier

Dans le terminal, placez-vous dans le dossier du projet.

Exécutez :

```bash id="t2s0nv"
node maximum.js
```

Vérifiez le résultat.

## 3.3. Tester plusieurs données

### Étape 4 — Modifier le tableau

Testez plusieurs tableaux :

```text id="7g2vcs"
[12, 5, 27, 9, 18]
```

```text id="n4p7hy"
[4, 8, 2, 15, 6]
```

```text id="f2m8kq"
[20, 7, 13, 5, 9]
```

Vérifiez le résultat pour chaque test.

Ajoutez ensuite vos propres tableaux.

# Partie 4 — Déboguer avec VS Code

## 4.1. Placer un point d’arrêt

### Étape 1 — Choisir la ligne

Placez un point d’arrêt au début du traitement de recherche.

### Étape 2 — Démarrer le débogage

Dans VS Code, ouvrez **Exécuter et déboguer**.

Lancez le programme avec **Node.js**.

## 4.2. Suivre le programme

### Étape 3 — Avancer ligne par ligne

Utilisez **Step Over**.

Avancez une ligne à la fois.

Observez dans VS Code :

* la valeur de `i` ;
* la valeur de `nombres[i]` ;
* la valeur de votre variable de référence ;
* le moment où cette valeur change.

### Étape 4 — Comparer avec votre raisonnement

Comparez ce que fait le programme avec la logique que vous avez écrite avant le code.

Posez-vous les questions suivantes :

* La boucle commence-t-elle au bon endroit ?
* Tous les éléments sont-ils parcourus ?
* La bonne valeur est-elle comparée ?
* La valeur de référence change-t-elle au bon moment ?
* Le résultat final est-il correct ?

## 4.3. Trouver et corriger une erreur

### Étape 5 — Repérer la première erreur

Lorsque le résultat est incorrect, ne corrigez pas tout le programme.

Cherchez le **premier moment** où le comportement du programme devient incorrect.

Observez les variables à cet instant.

### Étape 6 — Corriger

Vérifiez :

* l’indice ;
* la valeur courante ;
* la valeur de référence ;
* la condition ;
* l’ordre des instructions.

Corrigez uniquement l’erreur identifiée.

Puis relancez le programme.

### Étape 7 — Recommencer le test

Exécutez de nouveau :

```bash id="6kq9nz"
node maximum.js
```

Puis testez avec plusieurs tableaux.

**Résultat attendu :**

Le programme trouve correctement la plus grande valeur pour différents tableaux.

# Partie 5 — Vérification finale

## 5.1. Vérifier le programme

Votre programme doit :

* déclarer un tableau ;
* lire ses éléments ;
* parcourir le tableau ;
* comparer les valeurs ;
* conserver une valeur de référence ;
* afficher le maximum.

## 5.2. Vérifier le débogage

Vous devez être capable de montrer dans VS Code :

* l’indice courant ;
* la valeur lue ;
* la valeur de référence ;
* le moment où la valeur de référence change.

## 5.3. Vérifier les tests

Testez au minimum :

```text id="4ujc3y"
[12, 5, 27, 9, 18]
[4, 8, 2, 15, 6]
[20, 7, 13, 5, 9]
```

Ajoutez au moins un tableau de votre choix.

**Résultat attendu :**

Le programme donne le maximum correct pour chaque tableau testé.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui déclare un tableau, lit ses éléments, les parcourt et recherche sa plus grande valeur.

**Vous savez maintenant :** utiliser les indices d’un tableau, parcourir ses éléments avec `for`, comparer des valeurs, conserver une valeur de référence et déboguer un traitement ligne par ligne.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **`length`** : propriété qui donne le nombre d’éléments.
* **Parcours** : action de lire successivement les éléments d’un tableau.
* **Valeur courante** : valeur du tableau traitée pendant le passage actuel.
* **Valeur de référence** : valeur conservée pour effectuer les comparaisons.
* **Maximum** : plus grande valeur trouvée dans un ensemble de valeurs.
* **Initialisation** : action qui donne une première valeur à une variable.
* **Mise à jour** : action qui remplace une valeur par une nouvelle valeur.
* **Trace d’exécution** : suivi des valeurs pendant l’exécution du programme.
* **Débogage** : action qui consiste à suivre un programme pour trouver et corriger une erreur.
* **Point d’arrêt** : emplacement où l’exécution du programme s’arrête pour observer son état.
