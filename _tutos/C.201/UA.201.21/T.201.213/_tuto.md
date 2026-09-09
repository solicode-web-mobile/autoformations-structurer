---

title: "Parcourir et traiter un tableau"
layout: tuto
slug: "parcourir-et-traiter-un-tableau"
permalink: /tutos/:slug/compact
tuto_id: "T.201.213"
version: "compact"
ua: "UA.201.21"
nav_order: 3
------------

## 1. Objectif

Écrire un traitement JavaScript pour parcourir les éléments d’un tableau et effectuer un traitement sur chaque valeur.

Exécuter le programme avec **Node.js** et déboguer le traitement ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Connaître les tableaux.
* Connaître les indices.
* Savoir utiliser une boucle `for`.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le parcours d’un tableau

Un tableau contient plusieurs valeurs.

**Exemple :**

```text
[4, 7, 2, 9, 5]
```

Pour traiter toutes les valeurs, il faut les parcourir une par une.

Un parcours utilise généralement :

* un indice ;
* une boucle ;
* l’élément du tableau correspondant à l’indice.

## 1.2. Traiter chaque valeur

Parcourir un tableau ne suffit pas.

À chaque passage, le programme doit réaliser une action sur l’élément.

**Exemple :**

Pour chaque nombre du tableau :

```text
[4, 7, 2, 9, 5]
```

on peut demander au programme d’afficher la valeur.

Réfléchissez ensuite à d’autres traitements simples :

* ajouter une valeur ;
* modifier une valeur ;
* compter certaines valeurs ;
* calculer un résultat.

## 1.3. À retenir

* Une boucle permet de parcourir les éléments d’un tableau.
* L’indice permet d’accéder à chaque élément.
* Le traitement est exécuté pour chaque élément parcouru.
* Il faut vérifier le résultat obtenu après le parcours.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez un fichier :

```text
parcours.js
```

### Étape 2 — Créer le tableau

Créez un tableau contenant plusieurs nombres.

Ajoutez un affichage du tableau.

### Étape 3 — Construire le parcours

Écrivez une boucle `for` pour parcourir tous les éléments du tableau.

Ne copiez pas une solution toute faite.

### Étape 4 — Ajouter le traitement

Choisissez un traitement simple à réaliser sur chaque élément.

Le traitement doit être exécuté à chaque passage de la boucle.

## 2.2. Exécuter avec Node.js

### Étape 5 — Lancer le programme

Dans le terminal de VS Code, exécutez :

```bash
node parcours.js
```

### Étape 6 — Vérifier le résultat

Vérifiez que :

* tous les éléments sont parcourus ;
* le traitement est exécuté pour chaque élément ;
* le résultat correspond à votre objectif.

Testez avec un autre tableau.

**Résultat attendu :**

Le programme parcourt tous les éléments du tableau et applique correctement le traitement demandé.

## 2.3. Déboguer ligne par ligne

### Étape 7 — Placer un point d’arrêt

Placez un point d’arrêt au début de la boucle.

### Étape 8 — Lancer le débogueur

Lancez le programme avec le débogueur **Node.js** de VS Code.

### Étape 9 — Observer chaque passage

Avancez ligne par ligne.

À chaque passage, observez :

* la valeur de l’indice ;
* l’élément du tableau ;
* le traitement effectué ;
* le résultat obtenu.

### Étape 10 — Corriger les erreurs

Si un élément n’est pas traité correctement :

* repérez le passage incorrect ;
* observez l’indice ;
* vérifiez l’élément utilisé ;
* vérifiez le traitement ;
* corrigez votre code ;
* relancez le programme.

**Résultat attendu :**

Vous pouvez expliquer comment la boucle parcourt le tableau et comment le traitement est appliqué à chaque élément.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui parcourt un tableau et traite ses éléments.

**Vous savez maintenant :** parcourir un tableau avec une boucle et appliquer un traitement à chaque valeur.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **Parcours** : action de visiter les éléments d’un tableau.
* **Boucle** : structure qui permet de répéter une action.
* **Traitement** : action réalisée par le programme sur une ou plusieurs valeurs.
