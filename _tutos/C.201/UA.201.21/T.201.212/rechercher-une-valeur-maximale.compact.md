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

Écrire un traitement JavaScript pour rechercher la plus grande valeur d’un tableau.

Exécuter le programme avec **Node.js** et déboguer le traitement ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Connaître les tableaux.
* Savoir accéder à un élément d’un tableau.
* Savoir utiliser une boucle `for`.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le problème

On dispose d’un tableau de nombres.

**Exemple :**

```text
[12, 5, 27, 9, 18]
```

Le traitement doit rechercher la plus grande valeur.

**Résultat attendu :**

```text
27
```

## 1.2. Chercher la plus grande valeur

Pour résoudre ce problème, il faut :

* parcourir les valeurs du tableau ;
* comparer les valeurs ;
* conserver la plus grande valeur trouvée.

Réfléchissez à cette question :

**Quelle valeur devez-vous garder au début de la recherche ?**

Puis :

**Que devez-vous faire lorsqu’une nouvelle valeur est plus grande ?**

## 1.3. À retenir

* Un tableau contient plusieurs valeurs.
* Une boucle permet de parcourir le tableau.
* Une variable peut servir à conserver la plus grande valeur trouvée.
* Chaque nouvelle valeur doit être comparée à cette valeur.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez un fichier :

```text
maximum.js
```

### Étape 2 — Créer le tableau

Dans le fichier, créez un tableau contenant plusieurs nombres.

Ajoutez un affichage du tableau avec `console.log()`.

### Étape 3 — Préparer la recherche

Créez votre traitement pour rechercher la plus grande valeur.

Utilisez une boucle `for`.

Ne consultez pas une solution déjà écrite.

## 2.2. Tester avec Node.js

### Étape 4 — Exécuter le programme

Dans le terminal de VS Code, exécutez :

```bash
node maximum.js
```

### Étape 5 — Vérifier le résultat

Comparez le résultat affiché avec la plus grande valeur réellement présente dans le tableau.

Testez ensuite avec plusieurs tableaux.

**Résultat attendu :**

Le programme affiche correctement la plus grande valeur du tableau.

## 2.3. Déboguer ligne par ligne

### Étape 6 — Placer un point d’arrêt

Placez un point d’arrêt au début de votre traitement.

### Étape 7 — Lancer le débogueur

Lancez le programme avec le débogueur **Node.js** de VS Code.

### Étape 8 — Observer les valeurs

Avancez ligne par ligne.

À chaque passage, observez :

* la valeur actuelle du tableau ;
* l’indice utilisé ;
* la valeur comparée ;
* la valeur conservée comme maximum.

### Étape 9 — Corriger le traitement

Si le résultat est incorrect :

* repérez la ligne où la valeur devient incorrecte ;
* observez les valeurs avant et après cette ligne ;
* corrigez votre code ;
* exécutez de nouveau le programme.

**Résultat attendu :**

Vous pouvez expliquer comment le programme trouve progressivement la plus grande valeur.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui recherche la valeur maximale d’un tableau.

**Vous savez maintenant :** parcourir un tableau, comparer ses valeurs et conserver la plus grande valeur trouvée.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : une valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : action de visiter les éléments d’un tableau.
* **Maximum** : plus grande valeur d’un ensemble de valeurs.
* **Comparaison** : action qui permet de déterminer si une valeur est plus grande, plus petite ou égale à une autre.
