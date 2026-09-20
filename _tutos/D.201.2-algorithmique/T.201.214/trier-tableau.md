---
title: "Trier les éléments d’un tableau"
layout: tuto
slug: "trier-tableau"
permalink: /tutos/:slug/
tuto_id: "T.201.214"
version: "normal"
ua: "UA.201.21"
nav_order: 4
---
 
## 1. Objectif

Construire un traitement JavaScript qui trie les éléments d’un tableau dans l’ordre croissant.

Exécuter le programme avec **Node.js**, puis utiliser le débogueur de **VS Code** pour observer et corriger le traitement.

## 2. Prérequis

* Connaître les tableaux.
* Savoir utiliser une boucle `for`.
* Savoir comparer des valeurs.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le problème

Un tableau peut contenir des nombres dans un ordre quelconque.

Par exemple :

```text
[8, 3, 6, 1, 5]
```

Le travail demandé est de construire un traitement qui place les nombres dans **l’ordre croissant**.

Pour le tableau précédent, le résultat attendu est :

```text
[1, 3, 5, 6, 8]
```

Le tutoriel ne donne pas la méthode pour réaliser ce tri.

L’apprenant doit chercher lui-même comment comparer les valeurs et comment modifier leur position dans le tableau.

Le traitement doit fonctionner avec plusieurs tableaux, et pas seulement avec l’exemple donné.

## 1.2. À retenir

* Le tri permet de changer l’ordre des éléments d’un tableau.
* Ici, l’ordre demandé est l’ordre croissant.
* Le traitement doit comparer les valeurs du tableau.
* Le programme doit produire un tableau correctement trié.
* La méthode de tri doit être construite par l’apprenant.

# Partie 2 — Pratique

## 2.1. Réaliser le traitement

### Étape 1 — Créer le programme

Créez un fichier nommé :

```text
tri.js
```

Dans ce fichier :

* créez un tableau contenant plusieurs nombres désordonnés ;
* affichez le tableau avant le traitement ;
* construisez vous-même le traitement de tri ;
* affichez le tableau après le traitement.

Utilisez les notions JavaScript déjà étudiées dans les tutoriels précédents.

Ne copiez pas une solution trouvée sur Internet.

**Résultat attendu :**

Le programme affiche d’abord le tableau non trié, puis le même tableau dans l’ordre croissant.

### Étape 2 — Tester le programme

Dans le terminal de VS Code, exécutez :

```bash
node tri.js
```

Vérifiez le résultat avec plusieurs tableaux.

Utilisez par exemple des tableaux :

```text
[8, 3, 6, 1, 5]
```

```text
[10, 2, 7, 4, 1]
```

```text
[5, 2, 9, 3, 6]
```

Vérifiez que le programme donne un résultat correct pour chaque tableau.

**Résultat attendu :**

Chaque tableau est affiché dans l’ordre croissant après le traitement.

## 2.2. Déboguer

### Étape 3 — Déboguer et corriger

Utilisez le débogueur de **VS Code** pour observer l’exécution de votre programme.

Observez notamment :

* les valeurs du tableau ;
* les positions des éléments ;
* les changements réalisés pendant l’exécution.

Lorsque le résultat est incorrect, recherchez l’erreur dans votre traitement, corrigez votre code et testez à nouveau.

**Résultat attendu :**

Le programme fonctionne correctement avec plusieurs tableaux.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript capable de trier les éléments d’un tableau de nombres dans l’ordre croissant.

**Vous savez maintenant :** construire un traitement de tri, tester son résultat et corriger les erreurs dans le programme.

# 4. Glossaire

* **Tri** : traitement qui place les éléments dans un ordre choisi.
* **Ordre croissant** : ordre du plus petit au plus grand.
* **Débogueur** : outil qui permet d’observer l’exécution d’un programme et de rechercher des erreurs.
* **Position** : emplacement d’un élément dans un tableau.
