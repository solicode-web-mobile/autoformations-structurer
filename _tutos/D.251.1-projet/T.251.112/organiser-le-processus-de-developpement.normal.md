---
title: "Organiser le processus de développement"
layout: tuto
slug: "organiser-processus-developpement"
permalink: /tutos/:slug/
tuto_id: "T.251.112"
type: "classique"
version: "normal"
ua: "UA.251.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Organiser le processus de développement"
layout: tuto
slug: "organiser-processus-developpement"
permalink: /tutos/:slug/
tuto_id: "T.251.112"
type: "classique"
version: "normal"
ua: "UA.251.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
-----------

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à organiser les tâches d'une fonctionnalité selon un processus de développement.

Vous allez utiliser les étapes :

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Vous allez apprendre à :

* comprendre le rôle de chaque étape ;
* affecter une tâche à une étape ;
* ordonner les tâches ;
* identifier le livrable attendu à chaque étape ;
* repérer les dépendances entre les étapes ;
* construire un plan de réalisation cohérent ;
* vérifier qu'une fonctionnalité peut être conduite jusqu'à sa validation.

## 2. Prérequis

Vous devez avoir réalisé :

> T.251.111 — Décomposer une fonctionnalité en tâches.

Vous devez connaître :

* projet ;
* fonctionnalité ;
* livrable ;
* tâche ;
* sous-tâche ;
* prérequis ;
* dépendance ;
* tâche bloquante ;
* ordre de réalisation.

## Données de départ

### Fonctionnalité

Vous travaillez sur la fonctionnalité :

> **Gérer les catégories**

La fonctionnalité doit permettre à l'administrateur de :

* consulter les catégories ;
* ajouter une catégorie ;
* modifier une catégorie ;
* supprimer une catégorie.

### Travail préparé

Les tâches ont déjà été identifiées dans T.251.111.

Exemples :

```text
Préparer les données des catégories
Préparer le fonctionnement
Construire le formulaire
Construire la liste
Créer les actions
Tester les opérations
Corriger les anomalies
Vérifier la fonctionnalité
```

Votre travail consiste maintenant à organiser ces tâches dans un processus.

### Livrable attendu

> Une fonctionnalité de gestion des catégories réalisée, testée et prête à être validée.

## Partie 1 — Théorie

### 1.1. Un processus de développement

Un processus de développement organise le travail dans un ordre logique.

Dans ce domaine, nous utilisons :

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Chaque étape possède un objectif différent.

### 1.2. Le cadrage

Le cadrage permet de comprendre ce qui doit être réalisé.

On précise notamment :

* la fonctionnalité ;
* l'objectif ;
* le résultat attendu ;
* le livrable.

Exemple :

```text
Fonctionnalité :
Gérer les catégories

Résultat :
Une gestion des catégories disponible dans l'application.
```

Le cadrage répond à la question :

> **Qu'est-ce que nous devons réaliser ?**

### 1.3. La conception

La conception prépare la manière de réaliser la fonctionnalité.

On peut définir :

* les données nécessaires ;
* les éléments de l'interface ;
* le fonctionnement attendu ;
* les relations entre les éléments.

Exemple :

```text
Catégorie
    ↓
id
nom
couleur
icone
```

La conception répond à la question :

> **Comment allons-nous organiser la réalisation ?**

### 1.4. Le développement

Le développement consiste à réaliser ce qui a été préparé.

Exemples :

* créer les éléments nécessaires ;
* programmer les traitements ;
* construire l'interface ;
* connecter les différents éléments.

Le développement répond à la question :

> **Comment construire la solution ?**

### 1.5. Le test

Le test vérifie que la fonctionnalité fonctionne comme prévu.

Exemple :

```text
Ajouter une catégorie
→ résultat correct ?

Modifier une catégorie
→ résultat correct ?

Supprimer une catégorie
→ résultat correct ?
```

Le test répond à la question :

> **Est-ce que la solution fonctionne ?**

### 1.6. La correction

Un test peut révéler une anomalie.

Exemple :

```text
Test
 ↓
Anomalie
 ↓
Correction
```

La correction consiste à modifier la solution pour supprimer le problème identifié.

Exemple :

> Le formulaire accepte une catégorie sans nom.

La correction doit traiter ce problème.

### 1.7. La validation

La validation consiste à vérifier que la fonctionnalité répond aux attentes.

On vérifie notamment :

* que les tâches prévues sont réalisées ;
* que les tests sont satisfaisants ;
* que les corrections nécessaires sont terminées ;
* que le livrable attendu est disponible.

La validation répond à la question :

> **Pouvons-nous considérer la fonctionnalité comme terminée ?**

### 1.8. Différence entre test et validation

Le test vérifie le fonctionnement.

La validation vérifie que le résultat final répond aux attentes.

Exemple :

```text
Test
→ Le bouton fonctionne.

Validation
→ La fonctionnalité demandée est complète et conforme.
```

Les deux étapes ne sont donc pas identiques.

### 1.9. Organiser les tâches par étape

Une tâche doit être associée à l'étape qui correspond à son rôle.

Exemple :

```text
Tâche :
Identifier les données nécessaires
→ Conception

Tâche :
Créer le formulaire
→ Développement

Tâche :
Vérifier l'ajout d'une catégorie
→ Test
```

Cette organisation permet de mieux comprendre le travail.

### 1.10. Les dépendances entre les étapes

Les étapes ont également des dépendances.

Exemple :

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Une étape utilise généralement le résultat de l'étape précédente.

### 1.11. Les livrables intermédiaires

Une étape peut produire un résultat utile pour la suite.

Exemple :

```text
Cadrage
→ objectif défini

Conception
→ solution préparée

Développement
→ fonctionnalité réalisée

Test
→ résultats des tests

Correction
→ anomalies corrigées

Validation
→ fonctionnalité validée
```

Ces résultats permettent de suivre la progression.

### 1.12. L'ordre des tâches

L'ordre des tâches doit respecter :

* les dépendances ;
* les prérequis ;
* les étapes du processus.

Exemple :

```text
Définir les données
       ↓
Préparer la solution
       ↓
Développer
       ↓
Tester
```

Il n'est pas logique de tester une fonctionnalité qui n'est pas encore développée.

### 1.13. Une tâche peut appartenir à une seule étape principale

Pour faciliter le suivi, une tâche doit avoir une étape principale.

Exemple :

```text
Créer le formulaire
→ Développer
```

et non :

```text
Créer le formulaire
→ Cadrer + Concevoir + Développer
```

Une tâche peut utiliser des informations préparées dans d'autres étapes, mais son rôle principal doit rester identifiable.

### 1.14. Le passage d'une étape à l'autre

Une étape peut être considérée comme prête lorsqu'elle a produit ce qui est nécessaire pour commencer la suivante.

Exemple :

```text
Conception terminée
        ↓
éléments nécessaires définis
        ↓
Développement possible
```

Cela permet de limiter les blocages.

### 1.15. À retenir

* Le cadrage définit ce qui doit être réalisé.
* La conception prépare la solution.
* Le développement réalise la solution.
* Le test vérifie le fonctionnement.
* La correction traite les anomalies.
* La validation confirme que la fonctionnalité est terminée.
* Les tâches doivent être associées à une étape principale.
* L'ordre doit respecter les dépendances.
* Chaque étape peut produire un résultat utile pour la suivante.

## Partie 2 — Pratique

### 2.1. Reprendre les tâches

Reprenez les tâches produites dans T.251.111.

Exemple :

| N° | Tâche                               |
| -- | ----------------------------------- |
| 1  | Définir les données de la catégorie |
| 2  | Définir les éléments de l'interface |
| 3  | Préparer la structure nécessaire    |
| 4  | Construire le formulaire            |
| 5  | Construire la liste                 |
| 6  | Ajouter les actions                 |
| 7  | Tester l'ajout                      |
| 8  | Tester la modification              |
| 9  | Tester la suppression               |
| 10 | Corriger les anomalies              |
| 11 | Vérifier la fonctionnalité          |

Les tâches peuvent être différentes selon votre décomposition.

L'important est de partir de votre travail précédent.

### 2.2. Classer les tâches par étape

Ajoutez une colonne **Étape**.

| N° | Tâche | Étape |
| -- | ----- | ----- |
| 1  |       |       |
| 2  |       |       |
| 3  |       |       |
| 4  |       |       |
| 5  |       |       |
| 6  |       |       |
| 7  |       |       |
| 8  |       |       |
| 9  |       |       |
| 10 |       |       |
| 11 |       |       |

Utilisez uniquement :

```text
Cadrer
Concevoir
Développer
Tester
Corriger
Valider
```

### 2.3. Identifier les tâches de cadrage

Posez la question :

> **Qu'est-ce devons-nous définir avant de commencer la réalisation ?**

Exemples possibles :

```text
Définir la fonctionnalité
Définir le résultat attendu
Définir le livrable
```

Classez ces tâches dans :

```text
Cadrer
```

### 2.4. Identifier les tâches de conception

Posez la question :

> **Qu'est-ce devons-nous préparer avant de développer ?**

Exemples :

```text
Définir les données
Définir les éléments de l'interface
Définir le fonctionnement attendu
```

Classez-les dans :

```text
Concevoir
```

### 2.5. Identifier les tâches de développement

Posez la question :

> **Quelles tâches produisent réellement la fonctionnalité ?**

Exemples :

```text
Créer la structure nécessaire
Construire le formulaire
Construire la liste
Ajouter les actions
```

Classez-les dans :

```text
Développer
```

### 2.6. Identifier les tâches de test

Posez la question :

> **Quelles tâches servent à vérifier le fonctionnement ?**

Exemples :

```text
Tester l'ajout
Tester la modification
Tester la suppression
```

Classez-les dans :

```text
Tester
```

### 2.7. Identifier les tâches de correction

Posez la question :

> **Que devons-nous faire lorsqu'un test révèle une anomalie ?**

Exemple :

> Corriger les anomalies détectées pendant les tests.

Classez cette tâche dans :

```text
Corriger
```

### 2.8. Identifier les tâches de validation

Posez la question :

> **Que devons-nous vérifier avant de considérer la fonctionnalité comme terminée ?**

Exemple :

> Vérifier que la fonctionnalité respecte les besoins et que les tâches prévues sont terminées.

Classez cette tâche dans :

```text
Valider
```

### 2.9. Construire le processus

Organisez maintenant les tâches par étape.

Utilisez :

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Puis ajoutez les tâches :

```text
Cadrer
→ ...

Concevoir
→ ...

Développer
→ ...

Tester
→ ...

Corriger
→ ...

Valider
→ ...
```

### 2.10. Définir le livrable de chaque étape

Complétez :

| Étape      | Livrable attendu |
| ---------- | ---------------- |
| Cadrer     |                  |
| Concevoir  |                  |
| Développer |                  |
| Tester     |                  |
| Corriger   |                  |
| Valider    |                  |

Le livrable doit représenter un résultat observable.

Exemple :

```text
Développer
→ fonctionnalité réalisée

Tester
→ résultats des tests

Valider
→ fonctionnalité validée
```

### 2.11. Vérifier les dépendances

Pour chaque étape, posez la question :

> **Puis-je commencer cette étape sans le résultat de l'étape précédente ?**

Complétez :

| Étape      | Dépend de |
| ---------- | --------- |
| Cadrer     | —         |
| Concevoir  |           |
| Développer |           |
| Tester     |           |
| Corriger   |           |
| Valider    |           |

Vous devez obtenir une chaîne logique.

### 2.12. Vérifier les tâches bloquantes

Identifiez maintenant les tâches qui empêchent la suite.

Exemple :

```text
Concevoir la solution
        ↓
bloque
        ↓
Développer la solution
```

Puis :

```text
Développer la solution
        ↓
bloque
        ↓
Tester la solution
```

Complétez :

| Tâche | Bloque |
| ----- | ------ |
|       |        |
|       |        |
|       |        |

### 2.13. Construire le tableau final

Organisez votre fonctionnalité dans un tableau complet :

| Ordre | Étape | Tâche | Dépend de | Livrable |
| ----: | ----- | ----- | --------- | -------- |
|     1 |       |       |           |          |
|     2 |       |       |           |          |
|     3 |       |       |           |          |
|     4 |       |       |           |          |
|     5 |       |       |           |          |
|     6 |       |       |           |          |
|     7 |       |       |           |          |
|     8 |       |       |           |          |

Ajoutez autant de lignes que nécessaire.

L'ordre doit respecter les dépendances.

### 2.14. Construire le schéma de la fonctionnalité

Représentez ensuite votre organisation :

```text
Fonctionnalité
      ↓
Cadrer
      ↓
Concevoir
      ↓
Développer
      ↓
Tester
      ↓
Corriger
      ↓
Valider
      ↓
Livrable final
```

Ajoutez les tâches principales sous chaque étape.

### 2.15. Vérifier le passage entre les étapes

Pour chaque étape, vérifiez :

```text
□ L'objectif de l'étape est clair.
□ Les tâches sont identifiées.
□ Le livrable est identifié.
□ Les dépendances sont connues.
□ L'étape suivante peut utiliser le résultat produit.
```

### 2.16. Exercice individuel

Choisissez la fonctionnalité :

> **Gérer les articles**

À partir de votre décomposition de T.251.111, construisez son processus de développement.

Produisez :

#### Tableau des tâches

| Tâche | Étape |
| ----- | ----- |
|       |       |
|       |       |
|       |       |
|       |       |
|       |       |
|       |       |

#### Tableau des livrables

| Étape      | Livrable |
| ---------- | -------- |
| Cadrer     |          |
| Concevoir  |          |
| Développer |          |
| Tester     |          |
| Corriger   |          |
| Valider    |          |

#### Dépendances

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Ajoutez les tâches sur chaque étape.

#### Ordre final

```text
1. ...
2. ...
3. ...
4. ...
5. ...
6. ...
```

Ne créez pas une nouvelle méthode de gestion de projet.

Utilisez uniquement le processus étudié dans ce tutoriel.

### 2.17. Vérification finale

Votre organisation doit permettre de répondre aux questions :

```text
Qu'allons-nous réaliser ?
→ Cadrer

Comment allons-nous le préparer ?
→ Concevoir

Que devons-nous construire ?
→ Développer

Comment vérifier que cela fonctionne ?
→ Tester

Que faire lorsqu'une anomalie est trouvée ?
→ Corriger

Quand considérer la fonctionnalité comme terminée ?
→ Valider
```

**Résultat attendu :**

```text
Fonctionnalité
      ↓
Cadrer
      ↓
Concevoir
      ↓
Développer
      ↓
Tester
      ↓
Corriger
      ↓
Valider
      ↓
Livrable
```

Les tâches sont placées dans leur étape principale et suivent un ordre cohérent.

**Travail à faire :**

À partir de la fonctionnalité **Gérer les articles** et de sa décomposition réalisée dans T.251.111, organisez les tâches selon le processus :

```text
Cadrer
→ Concevoir
→ Développer
→ Tester
→ Corriger
→ Valider
```

Pour chaque étape, indiquez :

* les tâches ;
* les dépendances ;
* le livrable attendu.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le tableau complet des tâches ;
* leur étape ;
* leurs dépendances ;
* les livrables des étapes ;
* l'ordre de réalisation ;
* le schéma final du processus.

**Critère de réussite :**

Les tâches sont correctement réparties entre les six étapes, leur ordre respecte les dépendances et chaque étape produit un résultat identifiable pour la suite du travail.

## Bilan

**Vous avez appris :**

* à organiser une fonctionnalité selon un processus de développement ;
* à distinguer cadrage, conception, développement, test, correction et validation ;
* à affecter une tâche à une étape ;
* à identifier les livrables intermédiaires ;
* à organiser les dépendances entre les étapes ;
* à construire un ordre de réalisation cohérent ;
* à conduire une fonctionnalité jusqu'à sa validation.

**Vous avez réalisé :**

Un processus de développement structuré :

```text
Cadrer
   ↓
Concevoir
   ↓
Développer
   ↓
Tester
   ↓
Corriger
   ↓
Valider
```

Vous pouvez maintenant passer d'une simple liste de tâches à un **plan de réalisation ordonné**.

## Glossaire

* **Processus de développement** : ensemble d'étapes organisant la réalisation d'une fonctionnalité.
* **Cadrage** : définition de ce qui doit être réalisé.
* **Conception** : préparation de la solution à réaliser.
* **Développement** : réalisation de la solution.
* **Test** : vérification du fonctionnement.
* **Correction** : traitement d'une anomalie détectée pendant un test.
* **Validation** : vérification finale de la conformité de la fonctionnalité.
* **Livrable intermédiaire** : résultat produit à une étape et utilisé pour la suite.
* **Ordre des étapes** : succession logique des étapes du processus.
* **Anomalie** : comportement qui ne correspond pas au résultat attendu.
