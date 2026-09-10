---
title: "Parcourir et traiter un tableau"
layout: tuto
slug: "parcourir-et-traiter-un-tableau"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.213"
version: "detaille"
ua: "UA.201.21"
nav_order: 3
---

## 1. Objectif

Écrire un programme JavaScript qui construit un nouveau tableau contenant les valeurs qui se répètent dans un tableau.

Exécuter, tester et déboguer le programme avec **Node.js** et **VS Code**.

## 2. Prérequis

* Avoir réalisé les tutoriels précédents de l’UA.
* Savoir parcourir un tableau.
* Savoir comparer des valeurs.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.

# Partie 1 — Théorie

## 1.1. Le problème

Vous disposez d’un tableau de nombres :

```text
[4, 7, 2, 7, 9, 4, 5]
```

Votre programme doit construire un **nouveau tableau** contenant les valeurs qui apparaissent plusieurs fois dans le tableau de départ.

Le résultat attendu est :

```text
[4, 7]
```

Dans cet exemple :

* `4` apparaît plusieurs fois ;
* `7` apparaît plusieurs fois ;
* `2`, `9` et `5` apparaissent une seule fois.

Le nouveau tableau doit contenir une seule fois chaque valeur répétée.

Le programme doit aussi fonctionner avec d’autres données.

Par exemple :

```text
[4, 7, 4, 2, 7, 7]
```

donne :

```text
[4, 7]
```

L’ordre des valeurs dans le nouveau tableau doit suivre leur apparition dans le tableau de départ.

Votre travail consiste à construire vous-même l’algorithme.

## 1.2. Observer les répétitions

Observez attentivement le tableau :

```text
[4, 7, 2, 7, 9, 4, 5]
```

Toutes les valeurs ne jouent pas le même rôle.

Certaines valeurs apparaissent une seule fois.

D’autres apparaissent plusieurs fois.

Le programme doit donc faire la différence entre ces deux situations.

Il doit ensuite construire un deuxième tableau avec les valeurs qui se répètent.

Le nouveau tableau ne doit pas reprendre plusieurs fois la même valeur.

Par exemple :

```text
Tableau de départ :
[4, 7, 4, 2, 7, 7]
```

Le résultat attendu reste :

```text
[4, 7]
```

et non :

```text
[4, 4, 7, 7, 7]
```

Avant de coder, cherchez comment votre programme peut reconnaître une valeur répétée et comment il peut construire le nouveau tableau.

**La solution de l’algorithme n’est pas donnée dans ce tutoriel.**

## 1.3. À retenir

* Le tableau de départ contient les données.
* Le nouveau tableau contient le résultat.
* Une valeur répétée apparaît plusieurs fois dans le tableau de départ.
* Une valeur répétée apparaît une seule fois dans le nouveau tableau.
* Le programme doit examiner les valeurs du tableau.
* L’algorithme doit être construit par l’apprenant.

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez le fichier :

```text
repetitions.js
```

Dans ce fichier, utilisez le tableau :

```javascript
let nombres = [4, 7, 2, 7, 9, 4, 5];
```

Construisez votre propre traitement pour rechercher les valeurs qui se répètent et créer le nouveau tableau.

Affichez le résultat avec `console.log()`.

Ne copiez pas une solution déjà écrite.

Prenez le temps d’organiser votre traitement avant de le coder.

### Étape 2 — Exécuter

Dans le terminal de VS Code, exécutez :

```bash
node repetitions.js
```

Avec le tableau :

```text
[4, 7, 2, 7, 9, 4, 5]
```

le résultat attendu est :

```text
[4, 7]
```

Modifiez ensuite les données et testez plusieurs situations.

Testez par exemple :

```text
[4, 7, 4, 2, 7, 7]
```

Le résultat attendu est :

```text
[4, 7]
```

Testez aussi un tableau sans répétition :

```text
[2, 5, 8, 11]
```

Vérifiez le résultat obtenu.

Ajoutez ensuite vos propres cas de test.

### Étape 3 — Déboguer

Utilisez le débogueur **Node.js** de VS Code pour suivre votre programme ligne par ligne.

Observez les valeurs utilisées par votre traitement pendant son exécution.

Portez une attention particulière :

* aux valeurs du tableau de départ ;
* aux valeurs comparées ;
* aux variables utilisées ;
* au contenu du nouveau tableau ;
* aux valeurs ajoutées dans le nouveau tableau.

Comparez le comportement du programme avec votre raisonnement.

Si le résultat est incorrect, recherchez l’endroit où votre traitement ne produit plus le résultat attendu.

Corrigez votre code puis relancez les tests.

Vérifiez de nouveau avec plusieurs tableaux.

**Résultat attendu :**

Le programme construit correctement un nouveau tableau contenant une seule fois chaque valeur qui se répète.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui recherche les valeurs répétées d’un tableau et construit un nouveau tableau avec ces valeurs.

**Vous savez maintenant :** parcourir des données, comparer des valeurs et construire un nouveau tableau à partir d’un traitement.

# 4. Glossaire

* **Valeur répétée** : valeur présente plusieurs fois dans un tableau.
* **Nouveau tableau** : tableau utilisé pour conserver le résultat.
* **Comparaison** : action qui permet de comparer des valeurs.
* **Résultat** : valeur ou ensemble de valeurs produit par le programme.
