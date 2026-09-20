---
title: "Parcourir et traiter un tableau"
layout: tuto
slug: "parcourir-et-traiter-un-tableau"
permalink: /tutos/:slug/
tuto_id: "T.201.213"
version: "normal"
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

Résultat attendu :

```text
[4, 7]
```

La valeur `4` apparaît plusieurs fois.

La valeur `7` apparaît plusieurs fois.

Les autres valeurs apparaissent une seule fois.

Chaque valeur répétée doit apparaître **une seule fois** dans le nouveau tableau.

## 1.2. Observer les répétitions

Observez le tableau :

```text
[4, 7, 2, 7, 9, 4, 5]
```

Certaines valeurs sont présentes plusieurs fois.

D’autres sont présentes une seule fois.

Le nouveau tableau doit contenir uniquement les valeurs répétées.

Par exemple :

```text
Tableau de départ :
[4, 7, 2, 7, 9, 4, 5]

Nouveau tableau :
[4, 7]
```

Le traitement doit aussi fonctionner avec d’autres tableaux.

Exemple :

```text
[4, 7, 4, 2, 7, 7]
```

Résultat attendu :

```text
[4, 7]
```

Construisez vous-même l’algorithme permettant d’obtenir ce résultat.

Ne copiez pas une solution toute faite.

## 1.3. À retenir

* Le tableau de départ contient les données.
* Le nouveau tableau contient le résultat.
* Une valeur répétée apparaît plusieurs fois dans le tableau de départ.
* Une valeur répétée apparaît une seule fois dans le nouveau tableau.
* L’algorithme doit être construit par l’apprenant.

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez :

```text
repetitions.js
```

Dans ce fichier, utilisez le tableau :

```javascript
let nombres = [4, 7, 2, 7, 9, 4, 5];
```

Construisez votre propre traitement pour rechercher les valeurs répétées et créer le nouveau tableau.

Affichez le résultat avec `console.log()`.

Ne copiez pas une solution déjà écrite.

### Étape 2 — Exécuter

Dans le terminal de VS Code, exécutez :

```bash
node repetitions.js
```

Le résultat attendu est :

```text
[4, 7]
```

Testez ensuite plusieurs tableaux.

Par exemple :

```text
[4, 7, 4, 2, 7, 7]
```

Le résultat attendu est :

```text
[4, 7]
```

Testez également un tableau sans valeur répétée.

Vérifiez que le programme produit le résultat attendu dans chaque cas.

### Étape 3 — Déboguer

Utilisez le débogueur **Node.js** de VS Code pour suivre votre programme ligne par ligne.

Observez les données et les variables utilisées par votre traitement.

Vérifiez notamment les valeurs comparées et le contenu du nouveau tableau.

Si le résultat est incorrect, recherchez l’endroit où votre traitement ne produit plus le résultat attendu.

Corrigez votre code puis relancez les tests.

**Résultat attendu :**

Le programme construit correctement un nouveau tableau contenant une seule fois chaque valeur qui se répète.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui recherche les valeurs répétées d’un tableau et construit un nouveau tableau avec ces valeurs.

**Vous savez maintenant :** parcourir un tableau, comparer ses valeurs et construire un nouveau résultat à partir des données.

# 4. Glossaire

* **Valeur répétée** : valeur présente plusieurs fois dans un tableau.
* **Nouveau tableau** : tableau utilisé pour conserver le résultat.
* **Comparaison** : action qui permet de comparer des valeurs.
