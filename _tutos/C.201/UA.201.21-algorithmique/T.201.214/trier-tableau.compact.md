---
title: "Trier les éléments d’un tableau"
layout: tuto
slug: "trier-tableau"
permalink: /tutos/:slug/compact
tuto_id: "T.201.214"
version: "compact"
ua: "UA.201.21"
nav_order: 4
---

## 1. Objectif

Construire un traitement JavaScript pour trier les éléments d’un tableau.

Exécuter et déboguer le programme avec **Node.js** et **VS Code**.

## 2. Prérequis

* Connaître les tableaux.
* Savoir utiliser une boucle `for`.
* Savoir comparer des valeurs.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le problème

On dispose d’un tableau de nombres :

```text
[8, 3, 6, 1, 5]
```

Le travail consiste à placer les éléments dans **l’ordre croissant**.

**Résultat attendu :**

```text
[1, 3, 5, 6, 8]
```

L’apprenant doit construire lui-même le traitement qui permet d’obtenir ce résultat.

## 1.2. À retenir

* Un tri permet de placer les éléments dans un ordre choisi.
* Pour trier un tableau, il faut comparer ses valeurs.
* Le traitement doit modifier l’ordre des éléments.

# Partie 2 — Pratique

## 2.1. Réaliser le traitement

### Étape 1 — Créer le programme

Créez le fichier `tri.js`.

Préparez un tableau de nombres désordonné.

Écrivez vous-même le traitement qui trie le tableau dans l’ordre croissant.

Affichez le tableau avant et après le traitement.

### Étape 2 — Tester le programme

Exécutez le programme avec Node.js :

```bash
node tri.js
```

Testez avec plusieurs tableaux.

**Résultat attendu :**

Le tableau affiché après le traitement est dans l’ordre croissant.

## 2.2. Déboguer

### Étape 3 — Déboguer et corriger

Utilisez le débogueur de VS Code pour observer l’exécution du programme.

Vérifiez les valeurs et les positions des éléments.

Corrigez les erreurs trouvées, puis testez à nouveau.

**Résultat attendu :**

Le programme trie correctement les différents tableaux testés.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui trie un tableau de nombres.

**Vous savez maintenant :** construire, tester et corriger un traitement de tri sur un tableau.

# 4. Glossaire

* **Tri** : traitement qui place des valeurs dans un ordre choisi.
* **Ordre croissant** : ordre du plus petit au plus grand.
* **Débogueur** : outil qui permet d’observer l’exécution d’un programme.
