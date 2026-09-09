---
title: "Rechercher une valeur maximale dans un tableau"
layout: tuto
slug: "rechercher-une-valeur-maximale"
permalink: /tutos/:slug/compact
tuto_id: "T.201.212"
version: "compact"
ua: "UA.201.21"
nav_order: 2
---
 
## 1. Objectif

Écrire un programme JavaScript qui recherche la plus grande valeur d’un tableau.

Exécuter et tester le programme avec **Node.js**.

## 2. Prérequis

* Variables.
* Tableaux.
* Boucle `for`.
* `console.log()`.
* Node.js.
* VS Code.

# Partie 1 — Théorie

## 1.1. Rappel JavaScript — Tableau

Déclarer un tableau :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Lire un élément :

```javascript
console.log(nombres[2]);
```

Écrire une valeur :

```javascript
nombres[2] = 30;
```

Connaître le nombre d’éléments :

```javascript
nombres.length
```

Parcourir le tableau :

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

## 1.2. Le problème

Avec le tableau :

```text
[12, 5, 27, 9, 18]
```

le programme doit trouver la plus grande valeur.

Résultat attendu :

```text
27
```

Trouvez vous-même l’algorithme.

Réfléchissez à la manière de parcourir et de comparer les valeurs.

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez :

```text
maximum.js
```

Déclarez un tableau de nombres et écrivez votre propre traitement pour rechercher le maximum.

### Étape 2 — Exécuter

Dans le terminal de VS Code :

```bash
node maximum.js
```

Vérifiez le résultat, puis testez avec plusieurs tableaux.

### Étape 3 — Déboguer

Utilisez le débogueur **Node.js** de VS Code.

Déboguez votre programme **ligne par ligne** et observez les valeurs des variables pendant l’exécution.

Corrigez les erreurs trouvées et relancez les tests.

**Résultat attendu :**

Le programme affiche correctement la plus grande valeur du tableau.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui recherche la plus grande valeur d’un tableau.

**Vous savez maintenant :** déclarer, lire et parcourir un tableau pour construire un traitement de recherche.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Indice** : position d’un élément dans un tableau.
* **Maximum** : plus grande valeur d’un ensemble.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Débogage** : recherche et correction des erreurs d’un programme.
