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

Rechercher la plus grande valeur d’un tableau en JavaScript.

Exécuter le programme avec **Node.js** et le déboguer avec **VS Code**.

## 2. Prérequis

* Variables.
* Boucle `for`.
* `console.log()`.
* Exécution d’un fichier avec Node.js.
* Débogage avec VS Code.

# Partie 1 — Théorie

## 1.1. Tableau

Un tableau contient plusieurs valeurs.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Lire une valeur :

```javascript
console.log(nombres[2]);
```

Modifier une valeur :

```javascript
nombres[2] = 30;
```

Parcourir le tableau :

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

## 1.2. Rechercher le maximum

Le programme doit trouver la plus grande valeur du tableau.

```text
[12, 5, 27, 9, 18]
```

Résultat attendu :

```text
27
```

Pour construire votre solution :

* parcourez le tableau ;
* comparez les valeurs ;
* conservez la plus grande valeur trouvée.

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez :

```text
maximum.js
```

Déclarez un tableau de nombres.

Écrivez votre traitement pour rechercher la plus grande valeur.

**Ne cherchez pas une solution toute faite.**

### Étape 2 — Exécuter

Dans le terminal :

```bash
node maximum.js
```

Vérifiez que le résultat est correct.

Testez avec plusieurs tableaux.

### Étape 3 — Déboguer

Placez un point d’arrêt au début de votre traitement.

Lancez le débogueur **Node.js** dans VS Code.

Avancez ligne par ligne et observez :

* `i` ;
* la valeur du tableau ;
* la valeur conservée comme maximum.

Corrigez votre code puis relancez le programme.

**Résultat attendu :**

Le programme trouve correctement la plus grande valeur du tableau.

# 3. Bilan

**Vous avez réalisé :** un programme qui recherche la valeur maximale d’un tableau.

**Vous savez maintenant :** lire, modifier et parcourir un tableau pour rechercher une valeur.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Indice** : position d’une valeur dans le tableau.
* **Maximum** : plus grande valeur.
* **Parcours** : lecture successive des éléments du tableau.
* **Débogueur** : outil qui permet de suivre le programme ligne par ligne.
