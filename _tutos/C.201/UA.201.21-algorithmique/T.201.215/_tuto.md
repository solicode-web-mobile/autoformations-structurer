---

title: "Combiner plusieurs techniques algorithmiques"
layout: tuto
slug: "combiner-plusieurs-techniques-algorithmiques"
permalink: /tutos/:slug/compact
tuto_id: "T.201.215"
version: "compact"
ua: "UA.201.21"
nav_order: 5
------------

## 1. Objectif

Combiner plusieurs techniques algorithmiques dans un même programme JavaScript.

Exécuter le programme avec **Node.js** et déboguer le traitement ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Connaître les tableaux.
* Savoir parcourir un tableau avec `for`.
* Savoir comparer des valeurs.
* Savoir rechercher une valeur dans un tableau.
* Savoir trier un tableau.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Le principe

Un problème peut demander plusieurs traitements.

Un même programme peut donc utiliser plusieurs techniques algorithmiques.

**Exemple :**

À partir d’un tableau de nombres, le programme peut :

1. parcourir le tableau ;
2. rechercher une information ;
3. trier les valeurs ;
4. afficher le résultat.

Les traitements doivent être réalisés dans le bon ordre.

## 1.2. Décomposer le problème

Avant de coder, découpez le problème en petites actions.

Posez-vous ces questions :

* Quelle est la première action ?
* Quelle information faut-il obtenir ?
* Quel traitement vient ensuite ?
* Quel résultat doit être affiché à la fin ?

Ne commencez pas directement par écrire tout le programme.

## 1.3. À retenir

* Un problème peut utiliser plusieurs techniques.
* Chaque traitement réalise une tâche précise.
* Les traitements doivent être placés dans un ordre logique.
* Un problème complexe peut être découpé en plusieurs traitements simples.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez un fichier :

```text id="b8d4sc"
combinaison.js
```

### Étape 2 — Choisir les données

Créez un tableau contenant plusieurs nombres.

Définissez le résultat que votre programme doit produire.

### Étape 3 — Décomposer le problème

Écrivez sur papier les traitements nécessaires.

Utilisez plusieurs techniques déjà étudiées dans les tutoriels précédents.

Ne cherchez pas une solution toute faite.

## 2.2. Construire le traitement

### Étape 4 — Écrire le premier traitement

Écrivez la première partie de votre programme.

Testez-la avant de continuer.

### Étape 5 — Ajouter le traitement suivant

Ajoutez le deuxième traitement.

Vérifiez que le résultat du premier traitement peut être utilisé correctement par le deuxième.

### Étape 6 — Ajouter les autres traitements

Continuez jusqu’à obtenir le résultat demandé.

Respectez l’ordre des traitements.

### Étape 7 — Tester le programme

Exécutez le programme :

```bash id="wo6f4t"
node combinaison.js
```

Testez avec plusieurs valeurs.

**Résultat attendu :**

Le programme réalise plusieurs traitements dans le bon ordre et produit le résultat demandé.

## 2.3. Déboguer ligne par ligne

### Étape 8 — Placer un point d’arrêt

Placez un point d’arrêt au début du premier traitement.

### Étape 9 — Lancer le débogueur

Lancez le programme avec le débogueur **Node.js** de VS Code.

### Étape 10 — Suivre les traitements

Avancez ligne par ligne.

Observez :

* la valeur des variables ;
* les éléments du tableau ;
* le résultat de chaque traitement ;
* l’ordre d’exécution des traitements.

### Étape 11 — Corriger les erreurs

Si le résultat final est incorrect :

* trouvez le premier traitement incorrect ;
* observez les valeurs avant et après ce traitement ;
* vérifiez l’ordre des traitements ;
* corrigez votre code ;
* relancez le programme.

**Résultat attendu :**

Vous pouvez expliquer comment plusieurs techniques simples sont combinées pour résoudre un même problème.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui combine plusieurs traitements algorithmiques.

**Vous savez maintenant :** décomposer un problème en plusieurs traitements, les organiser dans un ordre logique et les tester avec Node.js et VS Code.

# 4. Glossaire

* **Traitement** : action réalisée par le programme.
* **Combinaison** : utilisation de plusieurs traitements dans un même programme.
* **Décomposition** : action qui consiste à découper un problème en plusieurs parties.
* **Ordonnancement** : organisation des traitements dans un ordre logique.
* **Résultat attendu** : résultat que le programme doit produire.
* **Débogage** : action qui consiste à suivre le programme pour trouver et corriger une erreur.
