---

title: "Trier les éléments d’un tableau"
layout: tuto
slug: "trier-les-elements-d-un-tableau"
permalink: /tutos/:slug/compact
tuto_id: "T.201.214"
version: "compact"
ua: "UA.201.21"
nav_order: 4
------------

## 1. Objectif

Écrire un traitement JavaScript pour trier les éléments d’un tableau.

Exécuter le programme avec **Node.js** et déboguer le traitement ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Connaître les tableaux.
* Connaître les indices.
* Savoir utiliser une boucle `for`.
* Savoir comparer deux valeurs.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le problème

On dispose d’un tableau contenant plusieurs nombres.

**Exemple :**

```text
[8, 3, 6, 1, 5]
```

Le traitement doit placer les valeurs dans un ordre demandé.

**Exemple en ordre croissant :**

```text
[1, 3, 5, 6, 8]
```

## 1.2. Comparer les valeurs

Pour trier un tableau, il faut comparer certaines valeurs entre elles.

Lorsqu’une valeur est mal placée, il faut trouver comment la placer à la bonne position.

Réfléchissez à ces questions :

* Quelles valeurs devez-vous comparer ?
* Que faire lorsqu’elles sont dans le mauvais ordre ?
* Comment déplacer une valeur sans la perdre ?

## 1.3. À retenir

* Le tri permet de mettre les éléments dans un ordre choisi.
* Un tri peut être croissant ou décroissant.
* Il faut comparer les valeurs.
* Une permutation peut être nécessaire pour changer deux valeurs de place.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez un fichier :

```text
tri.js
```

### Étape 2 — Créer le tableau

Créez un tableau contenant plusieurs nombres dans un ordre désordonné.

Affichez le tableau avant le traitement.

### Étape 3 — Construire le tri

Écrivez vous-même le traitement pour trier le tableau dans l’ordre croissant.

Utilisez les comparaisons et les boucles nécessaires.

Ne copiez pas une solution toute faite.

### Étape 4 — Afficher le résultat

Ajoutez un affichage du tableau après le traitement.

**Résultat attendu :**

Les éléments du tableau sont placés dans l’ordre croissant.

## 2.2. Exécuter avec Node.js

### Étape 5 — Lancer le programme

Dans le terminal de VS Code, exécutez :

```bash
node tri.js
```

### Étape 6 — Vérifier le résultat

Comparez :

* le tableau avant le tri ;
* le tableau après le tri.

Testez avec plusieurs tableaux.

## 2.3. Déboguer ligne par ligne

### Étape 7 — Placer un point d’arrêt

Placez un point d’arrêt au début du traitement de tri.

### Étape 8 — Lancer le débogueur

Lancez le programme avec le débogueur **Node.js** de VS Code.

### Étape 9 — Observer les comparaisons

Avancez ligne par ligne.

Observez :

* les indices utilisés ;
* les valeurs comparées ;
* l’ordre des valeurs ;
* les changements dans le tableau.

### Étape 10 — Trouver et corriger l’erreur

Si le tableau final est incorrect :

* repérez la première comparaison incorrecte ;
* observez les valeurs ;
* vérifiez le changement de position ;
* corrigez votre code ;
* relancez le programme.

**Résultat attendu :**

Vous pouvez expliquer, ligne par ligne, comment le tableau est progressivement trié.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui trie les éléments d’un tableau dans l’ordre croissant.

**Vous savez maintenant :** comparer des éléments d’un tableau et utiliser des changements de position pour construire un tri.

# 4. Glossaire

* **Tri** : traitement qui met des valeurs dans un ordre choisi.
* **Ordre croissant** : ordre du plus petit au plus grand.
* **Ordre décroissant** : ordre du plus grand au plus petit.
* **Comparaison** : action qui permet de comparer deux valeurs.
* **Permutation** : action qui échange les positions de deux valeurs.
* **Boucle** : structure qui permet de répéter une action.
