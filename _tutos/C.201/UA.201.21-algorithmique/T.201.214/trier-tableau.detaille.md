---
title: "Trier les éléments d’un tableau"
layout: tuto
slug: "trier-tableau"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.214"
version: "detaille"
ua: "UA.201.21"
nav_order: 4
---


## 1. Objectif

Construire un traitement JavaScript qui trie les éléments d’un tableau dans l’ordre croissant.

Exécuter le programme avec **Node.js**, puis utiliser le débogueur de **VS Code** pour observer le fonctionnement du traitement et corriger les erreurs.

## 2. Prérequis

* Connaître les tableaux.
* Savoir utiliser une boucle `for`.
* Savoir comparer des valeurs.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le problème

Un tableau peut contenir plusieurs nombres dans un ordre quelconque.

Par exemple :

```text
[8, 3, 6, 1, 5]
```

Dans cet exemple, les nombres ne sont pas placés du plus petit au plus grand.

Le travail demandé est de construire un traitement qui modifie l’ordre des éléments pour obtenir un tableau trié.

Ici, le tri demandé est **l’ordre croissant**.

Pour le tableau précédent, le résultat attendu est :

```text
[1, 3, 5, 6, 8]
```

Votre travail consiste à construire vous-même le traitement qui permet d’obtenir ce résultat.

Le tutoriel ne donne pas la méthode de tri.

Vous devez utiliser les notions JavaScript déjà étudiées pour construire votre propre solution.

Le programme ne doit pas fonctionner uniquement avec un seul exemple. Il doit aussi être testé avec d’autres tableaux.

Par exemple :

```text
[10, 2, 7, 4, 1]
```

Le résultat doit également être dans l’ordre croissant.

## 1.2. À retenir

* Un **tri** permet de modifier l’ordre des éléments d’un tableau.
* Un tableau peut commencer avec des valeurs dans un ordre quelconque.
* Dans ce tutoriel, le résultat demandé est un ordre croissant.
* Le traitement doit travailler directement sur les éléments du tableau.
* Les valeurs doivent être correctement placées dans le résultat final.
* La méthode utilisée pour construire le tri doit être trouvée par l’apprenant.
* Une solution correcte doit fonctionner avec plusieurs jeux de données.

# Partie 2 — Pratique

## 2.1. Réaliser le traitement

### Étape 1 — Créer le programme

Créez un fichier nommé :

```text
tri.js
```

Dans ce fichier, préparez un premier tableau contenant plusieurs nombres dans un ordre désordonné.

Exemple :

```text
[8, 3, 6, 1, 5]
```

Affichez d’abord le tableau avant le traitement.

Construisez ensuite vous-même le traitement qui permet de placer les nombres dans l’ordre croissant.

Utilisez uniquement les notions déjà étudiées dans les tutoriels précédents.

Le tutoriel ne fournit pas le code du tri.

Votre travail consiste à rechercher une solution qui répond au problème.

Enfin, affichez le tableau après le traitement.

**Résultat attendu :**

Le programme affiche :

* le tableau avant le tri ;
* le tableau après le tri.

Le tableau final doit être dans l’ordre croissant.

### Étape 2 — Tester le programme

Exécutez le programme dans le terminal de VS Code avec :

```bash
node tri.js
```

Commencez avec votre premier tableau.

Vérifiez que chaque élément est correctement placé dans le résultat.

Testez ensuite avec plusieurs tableaux.

Exemple :

```text
[8, 3, 6, 1, 5]
```

```text
[10, 2, 7, 4, 1]
```

```text
[5, 2, 9, 3, 6]
```

Vous pouvez aussi tester avec un tableau déjà trié.

Vérifiez également le comportement du programme avec un tableau contenant des valeurs différentes.

**Résultat attendu :**

Pour chaque tableau testé, le résultat final est dans l’ordre croissant.

## 2.2. Déboguer

### Étape 3 — Déboguer et corriger

Utilisez le débogueur de **VS Code** pour observer l’exécution de votre programme.

Observez les valeurs du tableau pendant l’exécution.

Observez également les positions des éléments et les modifications réalisées par votre traitement.

Comparez l’état du tableau pendant l’exécution avec le résultat attendu.

Lorsque le résultat est incorrect, recherchez vous-même l’erreur dans votre code.

Corrigez votre traitement, puis exécutez à nouveau le programme.

Répétez les tests avec plusieurs tableaux.

**Résultat attendu :**

Le programme trie correctement les différents tableaux testés.

Vous devez pouvoir expliquer simplement ce qui se passe dans votre traitement lorsque les éléments changent de position.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui trie les éléments d’un tableau de nombres dans l’ordre croissant.

**Vous savez maintenant :** construire un traitement de tri à partir d’un problème, tester le résultat avec plusieurs données et utiliser le débogueur de VS Code pour rechercher et corriger les erreurs.

# 4. Glossaire

* **Tri** : traitement qui place les éléments dans un ordre choisi.
* **Ordre croissant** : ordre du plus petit au plus grand.
* **Tableau** : structure qui contient plusieurs valeurs.
* **Position** : emplacement d’un élément dans un tableau.
* **Débogueur** : outil qui permet d’observer l’exécution d’un programme et de rechercher une erreur.
