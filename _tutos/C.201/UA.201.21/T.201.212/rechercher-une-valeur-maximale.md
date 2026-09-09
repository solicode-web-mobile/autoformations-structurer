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

## 1.2. Rechercher une valeur maximale

Le problème est de trouver la plus grande valeur du tableau.

```text
[12, 5, 27, 9, 18]
```

Le résultat attendu est :

```text
27
```

Pour construire le traitement :

1. choisissez une valeur de départ ;
2. parcourez le tableau ;
3. comparez chaque valeur avec la plus grande valeur trouvée ;
4. mettez à jour cette valeur lorsque nécessaire.

Ne copiez pas une solution complète. Construisez votre propre traitement.

## 1.3. Trace du traitement

Pendant le parcours, observez l’évolution de la valeur maximale.

Pour le tableau :

```text
[12, 5, 27, 9, 18]
```

Posez-vous la question :

```text
Quelle est la plus grande valeur trouvée après chaque passage ?
```

Cette trace vous aidera à vérifier votre algorithme.

## 1.4. À retenir

* Un tableau se déclare avec `[]`.
* Un élément se lit avec son indice.
* Le premier indice est `0`.
* `length` donne le nombre d’éléments.
* Une boucle `for` permet de parcourir le tableau.
* Une variable peut conserver la plus grande valeur trouvée.

# Partie 2 — Pratique

## 2.1. Construire le programme

### Étape 1 — Créer le fichier

Créez le fichier :

```text
maximum.js
```

Ajoutez un tableau de nombres :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Affichez le tableau pour vérifier son contenu.

### Étape 2 — Construire la recherche

Écrivez votre algorithme pour trouver la plus grande valeur.

Utilisez :

* une variable pour conserver le maximum ;
* une boucle `for` ;
* une comparaison.

Affichez le résultat final.

### Étape 3 — Tester

Exécutez :

```bash
node maximum.js
```

Le résultat attendu est :

```text
27
```

Modifiez ensuite le tableau et testez avec plusieurs valeurs.

# Partie 3 — Débogage avec VS Code

## 3.1. Suivre le programme

### Étape 1 — Placer un point d’arrêt

Placez un point d’arrêt sur la première ligne de votre traitement.

### Étape 2 — Lancer le débogueur

Dans VS Code, lancez le programme avec le débogueur **Node.js**.

### Étape 3 — Avancer ligne par ligne

Utilisez **Step Over** pour avancer une ligne à la fois.

Observez :

* la valeur de `i` ;
* la valeur de `nombres[i]` ;
* la valeur du maximum ;
* le moment où le maximum change.

### Étape 4 — Corriger

Si le résultat est incorrect :

* trouvez la première ligne incorrecte ;
* regardez les valeurs des variables ;
* vérifiez la comparaison ;
* corrigez votre code ;
* relancez le programme.

**Résultat attendu :**

Le programme trouve correctement la plus grande valeur, et vous pouvez expliquer son fonctionnement ligne par ligne.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui parcourt un tableau et recherche sa plus grande valeur.

**Vous savez maintenant :** déclarer, lire et modifier un tableau, parcourir ses éléments et conserver une valeur maximale pendant le traitement.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Maximum** : plus grande valeur trouvée.
* **Trace d’exécution** : observation des valeurs pendant l’exécution du programme.
* **Débogueur** : outil qui permet de suivre un programme ligne par ligne.
