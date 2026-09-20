---
title: "Suivre l’intégration, les tests et les corrections"
layout: tuto
slug: "suivre-integration-tests-corrections"
permalink: /tutos/:slug/
tuto_id: "T.251.131"
type: "classique"
version: "normal"
ua: "UA.251.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Suivre l’intégration, les tests et les corrections"
layout: tuto
slug: "suivre-integration-tests-corrections"
permalink: /tutos/:slug/
tuto_id: "T.251.131"
type: "classique"
version: "normal"
ua: "UA.251.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
-----------

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à conduire une fonctionnalité depuis ses tâches réalisées jusqu'à son intégration, ses tests et ses corrections.

Vous allez apprendre à :

* suivre l'intégration des différents travaux ;
* vérifier qu'une fonctionnalité complète peut être testée ;
* organiser les tests ;
* enregistrer une anomalie ;
* créer une tâche de correction ;
* suivre une correction ;
* effectuer un retest ;
* mettre à jour l'état des tâches concernées ;
* utiliser les dépendances pour comprendre les blocages.

À la fin du tutoriel, vous devez pouvoir suivre ce cycle :

```text
Tâches réalisées
      ↓
Intégration
      ↓
Test
      ↓
Anomalie
      ↓
Correction
      ↓
Retest
      ↓
Résultat vérifié
```

La validation finale de la fonctionnalité et la clôture des Issues seront traitées dans T.251.132.

## 2. Prérequis

Vous devez avoir réalisé :

> T.251.111 — Décomposer une fonctionnalité en tâches.

> T.251.112 — Organiser le processus de développement.

> T.251.121 — Créer et organiser les Issues.

> T.251.122 — Suivre les états et les blocages.

Vous devez connaître :

* fonctionnalité ;
* tâche ;
* dépendance ;
* Issue ;
* Project ;
* état ;
* blocage ;
* commentaire ;
* milestone ;
* assignee.

Vous devez également connaître les états utilisés dans le parcours :

```text
À faire
En cours
Bloquée
Terminée
Validée
```

## Données de départ

### Fonctionnalité

Vous travaillez sur :

> **Gérer les articles**

La fonctionnalité doit permettre à l'administrateur de :

* consulter les articles ;
* ajouter un article ;
* modifier un article ;
* supprimer un article.

### Issues de départ

Vous disposez déjà des Issues suivantes :

| Issue | Travail                                    | État     |
| ----- | ------------------------------------------ | -------- |
| #201  | Préparer les données des articles          | Validée  |
| #202  | Construire le formulaire article           | Terminée |
| #203  | Construire la liste des articles           | Terminée |
| #204  | Ajouter les actions des articles           | Terminée |
| #205  | Intégrer les éléments de la fonctionnalité | En cours |
| #206  | Tester la création d'un article            | À faire  |
| #207  | Tester la modification d'un article        | À faire  |
| #208  | Tester la suppression d'un article         | À faire  |

Les numéros sont des exemples.

### Situation de départ

Plusieurs tâches de développement sont terminées.

Une tâche d'intégration est en cours.

Les tests peuvent maintenant commencer progressivement lorsque les éléments nécessaires sont disponibles.

Dans GitHub, les Issues et les Projects peuvent être utilisés ensemble pour planifier et suivre le travail, et les métadonnées des Issues sont disponibles dans les vues de Projects.

## Partie 1 — Théorie

### 1.1. L'intégration

L'intégration consiste à réunir plusieurs travaux réalisés séparément pour obtenir une fonctionnalité utilisable dans son ensemble.

Exemple :

```text
Formulaire
    +
Liste
    +
Actions
    ↓
Fonctionnalité intégrée
```

Chaque élément peut fonctionner séparément.

L'intégration permet de vérifier qu'ils fonctionnent correctement ensemble.

### 1.2. Pourquoi intégrer avant de tester la fonctionnalité complète

Une fonctionnalité peut contenir plusieurs travaux :

```text
Formulaire
Liste
Actions
Données
```

Tester chaque élément séparément ne suffit pas toujours.

Il faut également vérifier leur fonctionnement ensemble.

Exemple :

```text
Formulaire
    ↓
Création de l'article
    ↓
Liste
    ↓
Article visible
```

Le test doit donc vérifier le parcours complet.

### 1.3. La tâche d'intégration

Une tâche d'intégration peut être :

> Intégrer le formulaire, la liste et les actions de gestion des articles.

Le résultat attendu est :

> Les différents éléments de la fonctionnalité fonctionnent ensemble.

Cette tâche ne signifie pas encore que la fonctionnalité est validée.

Elle prépare la phase de test.

### 1.4. Le test

Un test vérifie un comportement attendu.

Exemple :

> Ajouter un article avec des données valides.

On compare :

```text
Résultat attendu
        VS
Résultat obtenu
```

Si les deux correspondent :

```text
Test réussi
```

Sinon :

```text
Anomalie détectée
```

### 1.5. Le scénario de test

Un scénario de test décrit une action à réaliser et le résultat attendu.

Exemple :

```text
Test :
Ajouter un article

Action :
Saisir les données puis enregistrer.

Résultat attendu :
L'article apparaît dans la liste.
```

Un scénario doit rester suffisamment précis pour pouvoir être répété.

### 1.6. L'anomalie

Une anomalie est un comportement qui ne correspond pas au résultat attendu.

Exemple :

```text
Résultat attendu :
L'article apparaît dans la liste.

Résultat obtenu :
L'article est enregistré mais n'apparaît pas.
```

Il existe donc une différence entre le résultat attendu et le résultat obtenu.

### 1.7. Documenter une anomalie

Une anomalie doit être décrite clairement.

Une description simple peut contenir :

```text
Titre
Description
Étapes pour reproduire
Résultat attendu
Résultat obtenu
```

Exemple :

```text
Titre :
L'article créé n'apparaît pas dans la liste.

Étapes :
1. ouvrir le formulaire ;
2. saisir un article ;
3. enregistrer.

Résultat attendu :
l'article apparaît dans la liste.

Résultat obtenu :
la liste ne change pas.
```

### 1.8. Créer une tâche de correction

Lorsqu'une anomalie est détectée, il peut être utile de créer une Issue dédiée.

Exemple :

```text
Bug :
L'article créé n'apparaît pas dans la liste.

        ↓

Tâche de correction :
Actualiser la liste après création.
```

La correction devient alors un travail identifiable et suivi.

### 1.9. Relier l'anomalie au travail concerné

L'anomalie doit rester liée à la fonctionnalité ou à la tâche concernée.

GitHub permet de créer des relations entre Issues, notamment pour représenter les dépendances **Blocked by** et **Blocking**.

Cela permet d'obtenir une organisation comme :

```text
Test
 ↓
Anomalie
 ↓
Correction
```

### 1.10. Le retest

Après une correction, il faut vérifier à nouveau le comportement.

Cette nouvelle vérification est un **retest**.

Le cycle devient :

```text
Test
 ↓
Anomalie
 ↓
Correction
 ↓
Retest
```

Le retest doit utiliser le même scénario ou un scénario équivalent.

### 1.11. Pourquoi retester

Une correction peut résoudre un problème sans résoudre complètement la situation.

Exemple :

```text
Première observation :
l'article n'apparaît pas.

Correction :
actualiser la liste.

Retest :
l'article apparaît.
```

Le retest apporte une nouvelle vérification après la correction.

### 1.12. La correction peut révéler un nouveau problème

Une correction peut faire apparaître une autre anomalie.

Exemple :

```text
Test
 ↓
Anomalie A
 ↓
Correction A
 ↓
Retest
 ↓
Anomalie B
```

Dans ce cas, il faut enregistrer la nouvelle anomalie et poursuivre le suivi.

### 1.13. Le suivi des états

Une tâche de test peut évoluer ainsi :

```text
À faire
   ↓
En cours
   ↓
Terminée
```

Une anomalie peut ensuite créer une nouvelle tâche :

```text
Test
 ↓
Anomalie
 ↓
Correction
```

La tâche de correction peut évoluer de son côté :

```text
À faire
   ↓
En cours
   ↓
Terminée
```

Puis le test est rejoué.

### 1.14. Une anomalie n'est pas une validation

Le résultat d'un test peut être :

```text
Test réussi
```

ou :

```text
Anomalie
```

Une anomalie doit donc être traitée avant de considérer le comportement comme conforme.

La validation finale appartient au tutoriel suivant.

### 1.15. Le commentaire de progression

Un commentaire peut expliquer l'état du travail.

Exemple :

```text
Mise à jour :

Le formulaire et la liste sont intégrés.
Le test de création a commencé.
```

Lors d'une correction :

```text
Correction terminée.

Le rafraîchissement de la liste a été ajouté.
Un retest est nécessaire.
```

Les Issues servent précisément à suivre le travail et à conserver les échanges associés au travail réalisé.

### 1.16. Une Issue de test

Une Issue de test peut avoir :

**Titre :**

> Tester la création d'un article

**Description :**

```text
Vérifier qu'un article peut être créé avec des données valides.

Résultat attendu :
l'article est enregistré et apparaît dans la liste.
```

Cette Issue représente alors un travail de test identifiable.

### 1.17. Une Issue de correction

Une Issue de correction peut avoir :

**Titre :**

> Corriger l'actualisation de la liste après création

**Description :**

```text
L'article est créé mais n'apparaît pas immédiatement
dans la liste.

Résultat attendu :
la liste est actualisée après la création.
```

Cette Issue représente le travail nécessaire pour traiter l'anomalie.

### 1.18. Le suivi de l'intégration

L'intégration peut être suivie comme une tâche :

```text
Préparer les éléments
        ↓
Intégrer les éléments
        ↓
Vérifier l'ensemble
        ↓
Tests fonctionnels
```

Le suivi doit montrer ce qui est réellement réalisé.

### 1.19. Ne pas fermer trop tôt

Dans ce tutoriel, une Issue de correction n'est pas simplement fermée parce que le code a été modifié.

Il faut encore :

```text
Correction
   ↓
Retest
   ↓
Résultat vérifié
```

La décision finale de validation et de clôture sera réalisée dans T.251.132.

### 1.20. À retenir

* L'intégration réunit plusieurs travaux pour obtenir une fonctionnalité utilisable.
* Un test compare le résultat obtenu au résultat attendu.
* Une anomalie correspond à une différence entre les deux.
* Une anomalie doit être documentée clairement.
* Une correction doit être suivie comme un travail.
* Après une correction, il faut réaliser un retest.
* Les dépendances peuvent aider à représenter les relations entre les travaux.
* Les commentaires servent à documenter la progression.
* La validation finale et la clôture ne sont pas encore réalisées dans ce tutoriel.

## Partie 2 — Pratique

### 2.1. Vérifier les tâches d'intégration

Ouvrez le Project GitHub de la fonctionnalité.

Repérez :

```text
#201 Préparer les données
#202 Construire le formulaire
#203 Construire la liste
#204 Ajouter les actions
#205 Intégrer les éléments
```

Vérifiez que les travaux nécessaires à l'intégration sont disponibles.

### 2.2. Mettre à jour l'Issue d'intégration

Ouvrez :

> **#205 Intégrer les éléments de la fonctionnalité**

L'état doit être :

```text
En cours
```

Ajoutez un commentaire :

```text
L'intégration de la fonctionnalité est en cours.

Le formulaire, la liste et les actions sont maintenant
réunis dans la même fonctionnalité.
```

### 2.3. Vérifier le résultat intégré

Vérifiez dans l'application :

```text
Formulaire
    +
Liste
    +
Actions
```

Testez rapidement le parcours :

```text
Ouvrir la page
    ↓
Afficher le formulaire
    ↓
Saisir les données
    ↓
Enregistrer
    ↓
Afficher la liste
```

L'objectif est de vérifier que les éléments fonctionnent ensemble avant les tests détaillés.

### 2.4. Terminer l'intégration

Lorsque l'intégration est prête :

```text
#205
En cours
   ↓
Terminée
```

Ajoutez un commentaire :

```text
Intégration terminée.

Le formulaire, la liste et les actions fonctionnent
ensemble sur la même fonctionnalité.
```

Ne passez pas encore à **Validée**.

Les tests doivent maintenant commencer.

### 2.5. Commencer le test de création

Ouvrez :

> **#206 Tester la création d'un article**

Passez l'état :

```text
À faire
   ↓
En cours
```

Utilisez le scénario :

```text
Test :
Créer un article.

Étapes :
1. ouvrir le formulaire ;
2. saisir un titre ;
3. saisir le contenu ;
4. choisir une catégorie ;
5. enregistrer.

Résultat attendu :
l'article est enregistré et apparaît dans la liste.
```

### 2.6. Comparer les résultats

Effectuez le test.

Notez :

```text
Résultat attendu :
_____________________________

Résultat obtenu :
_____________________________
```

Puis choisissez :

```text
Test réussi
```

ou :

```text
Anomalie détectée
```

### 2.7. Cas d'un test réussi

Si le résultat est correct :

```text
#206
En cours
   ↓
Terminée
```

Ajoutez :

```text
Test réussi.

L'article est créé et apparaît correctement
dans la liste.
```

Le test est maintenant terminé.

### 2.8. Cas d'une anomalie

Supposons que le test révèle :

> L'article est créé mais n'apparaît pas dans la liste.

Ne modifiez pas simplement le code sans laisser de trace.

Créez une Issue :

**Titre :**

```text
Corriger l'actualisation de la liste après création
```

**Description :**

```text
Lorsqu'un article est créé, il est enregistré,
mais il n'apparaît pas immédiatement dans la liste.

Résultat attendu :
la liste affiche le nouvel article après la création.

Résultat obtenu :
la liste reste inchangée.
```

Ajoutez un label adapté, par exemple :

```text
bug
```

### 2.9. Relier la correction au test

La correction concerne directement :

```text
#206 Tester la création
```

Vous pouvez ajouter dans l'Issue de correction :

```text
Issue concernée :
#206
```

Ou utiliser une référence GitHub vers l'Issue concernée.

GitHub crée des références entre les Issues lorsqu'une Issue est mentionnée dans une autre Issue.

### 2.10. Indiquer une dépendance

Supposons que la correction soit nécessaire avant de terminer le test.

La relation devient :

```text
#206 Test de création
        ↓
dépend de
        ↓
#209 Correction de l'actualisation
```

Vous pouvez représenter cette relation dans GitHub avec **Blocked by**. GitHub affiche également les Issues bloquées dans les vues où cette information est disponible.

### 2.11. Passer le test en « Bloquée »

L'Issue #206 peut maintenant passer à :

```text
En cours
   ↓
Bloquée
```

Ajoutez un commentaire :

```text
Le test est bloqué par l'anomalie d'actualisation
de la liste.

Correction suivie dans #209.
```

Le blocage est maintenant visible.

### 2.12. Commencer la correction

Ouvrez :

> **#209 Corriger l'actualisation de la liste après création**

Passez :

```text
À faire
   ↓
En cours
```

Ajoutez :

```text
Correction en cours.

Objectif :
actualiser la liste après la création d'un article.
```

### 2.13. Terminer la correction

Lorsque le travail de correction est terminé :

```text
En cours
   ↓
Terminée
```

Ajoutez :

```text
Correction terminée.

La liste est maintenant actualisée après la création.
```

À ce stade, ne considérez pas encore le problème comme définitivement résolu.

Le retest doit être réalisé.

### 2.14. Reprendre le test

Retournez dans :

> **#206 Tester la création d'un article**

Lorsque la correction est disponible :

```text
Bloquée
   ↓
En cours
```

Ajoutez :

```text
La correction #209 est terminée.

Le test de création peut reprendre.
```

### 2.15. Réaliser le retest

Réalisez exactement le même scénario :

```text
1. ouvrir le formulaire ;
2. saisir un titre ;
3. saisir le contenu ;
4. choisir une catégorie ;
5. enregistrer ;
6. vérifier la liste.
```

Comparez :

```text
Résultat attendu
        VS
Résultat obtenu
```

### 2.16. Retest réussi

Si l'article apparaît maintenant dans la liste :

```text
#206
En cours
   ↓
Terminée
```

Ajoutez :

```text
Retest réussi.

Après la correction, l'article apparaît correctement
dans la liste.
```

La correction peut alors être considérée comme vérifiée.

### 2.17. Retest échoué

Si le problème existe toujours :

```text
Retest
   ↓
Problème toujours présent
```

Ne passez pas l'Issue à **Validée**.

Ajoutez un commentaire :

```text
Retest échoué.

Le problème est toujours présent.
Une nouvelle analyse est nécessaire.
```

Une nouvelle correction peut alors être créée ou l'Issue existante peut être reprise selon votre organisation.

### 2.18. Tester la modification

Procédez de la même manière pour :

> **#207 Tester la modification d'un article**

Scénario :

```text
1. ouvrir un article ;
2. modifier son contenu ;
3. enregistrer ;
4. vérifier les données affichées.
```

Résultat attendu :

> Les nouvelles données apparaissent correctement.

### 2.19. Tester la suppression

Procédez également pour :

> **#208 Tester la suppression d'un article**

Scénario :

```text
1. sélectionner un article ;
2. lancer la suppression ;
3. confirmer ;
4. consulter la liste.
```

Résultat attendu :

> L'article supprimé n'apparaît plus dans la liste.

### 2.20. Organiser les anomalies

Si un test échoue, créez une Issue de correction.

Exemple :

```text
#208 Test de suppression
        ↓
Anomalie
        ↓
#210 Corriger la suppression
        ↓
Retest
```

Vous pouvez utiliser le label :

```text
bug
```

et le même milestone que la fonctionnalité.

### 2.21. Suivre plusieurs travaux en même temps

À ce stade, le Project peut ressembler à :

```text
À faire
├── #208 Tester la suppression

En cours
├── #210 Corriger la suppression

Bloquée
aucune

Terminée
├── #205 Intégrer les éléments
├── #206 Tester la création

Validée
#201 Préparer les données
#202 ...
```

La colonne dépend de votre état réel.

Ne déplacez pas une Issue uniquement pour obtenir un tableau propre.

Le tableau doit représenter la situation réelle.

### 2.22. Vérifier les relations

Pour chaque correction, vérifiez :

```text
Issue de test
      ↓
Anomalie
      ↓
Issue de correction
      ↓
Retest
```

Pour chaque blocage, vérifiez :

```text
Issue bloquée
      ↓
Blocked by
      ↓
Issue bloquante
```

GitHub permet de gérer ces relations depuis la section des relations de l'Issue.

### 2.23. Mettre à jour les commentaires

Pour chaque travail important, ajoutez une information utile.

Exemple :

```text
Début :
Le test de suppression commence.
```

Puis :

```text
Anomalie :
L'article disparaît du serveur mais reste visible dans la liste.
```

Puis :

```text
Correction :
La liste est actualisée après suppression.
```

Puis :

```text
Retest :
La suppression est maintenant correctement affichée.
```

L'historique permet de comprendre le parcours du travail.

### 2.24. Ne pas confondre « terminé » et « validé »

À ce stade, une Issue de test peut être :

```text
Terminée
```

après réalisation du test.

Cela ne signifie pas encore que toute la fonctionnalité est :

```text
Validée
```

La validation de la fonctionnalité complète sera traitée dans T.251.132.

### 2.25. Construire le suivi final de l'activité

Complétez :

| Issue | Travail           | État | Résultat |
| ----- | ----------------- | ---- | -------- |
| #205  | Intégration       |      |          |
| #206  | Test création     |      |          |
| #207  | Test modification |      |          |
| #208  | Test suppression  |      |          |
| #209  | Correction        |      |          |

Ajoutez les anomalies ou corrections supplémentaires nécessaires.

### 2.26. Vérifier le cycle complet

Pour une tâche présentant une anomalie, vous devez pouvoir montrer :

```text
Test
 ↓
Anomalie
 ↓
Correction
 ↓
Retest
 ↓
Test réussi
```

Pour une fonctionnalité comportant plusieurs tâches :

```text
Travaux réalisés
      ↓
Intégration
      ↓
Tests
      ↓
Corrections
      ↓
Retests
      ↓
Résultats vérifiés
```

### 2.27. Exercice individuel

Utilisez la fonctionnalité :

> **Gérer les articles**

Réalisez dans GitHub le suivi d'au moins trois tests :

```text
Création
Modification
Suppression
```

Pour au moins un test :

1. créez une anomalie ;
2. créez une Issue de correction ;
3. liez le test à la correction ;
4. indiquez la dépendance si elle existe ;
5. passez la correction à **En cours** ;
6. passez-la à **Terminée** après le travail ;
7. reprenez le test ;
8. réalisez le retest ;
9. documentez le résultat.

### 2.28. Vérifier les Issues

Pour chaque test :

```text
□ Le scénario est clair.
□ Le résultat attendu est défini.
□ Le résultat obtenu est renseigné.
□ L'anomalie est identifiable si nécessaire.
□ La correction est suivie.
□ Le retest est réalisé.
□ Le résultat du retest est documenté.
```

### 2.29. Vérifier les corrections

Pour chaque correction :

```text
□ La cause du travail est connue.
□ L'Issue de test est identifiée.
□ Le travail est attribué.
□ L'état est mis à jour.
□ La correction est décrite.
□ Le retest est demandé après la correction.
```

### 2.30. Vérifier l'intégration

Avant de passer à la validation finale, vérifiez :

```text
□ Les éléments de la fonctionnalité sont intégrés.
□ Les tests ont été exécutés.
□ Les anomalies importantes sont identifiées.
□ Les corrections ont été réalisées ou suivies.
□ Les retests nécessaires sont terminés.
□ Les résultats sont documentés.
```

Ne clôturez pas encore la fonctionnalité.

Cette étape appartient à T.251.132.

**Résultat attendu :**

```text
Fonctionnalité
      ↓
Intégration
      ↓
Tests
      ↓
┌───────────────┐
│               │
Test réussi   Anomalie
                ↓
             Correction
                ↓
              Retest
                ↓
          Test réussi
└───────┬───────┘
        ↓
Résultats vérifiés
```

Les Issues et leurs dépendances permettent de conserver une trace du travail, tandis que GitHub Projects permet de visualiser et filtrer les éléments du suivi.

**Travail à faire :**

À partir de la fonctionnalité **Gérer les articles** :

* suivez l'intégration des travaux ;
* créez les Issues de test ;
* exécutez les scénarios ;
* documentez les anomalies ;
* créez les Issues de correction ;
* reliez les travaux concernés ;
* signalez les blocages ;
* réalisez les retests ;
* documentez les résultats.

Conservez les états réels des Issues.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le lien vers le Project GitHub ;
* les liens vers les Issues de test ;
* les liens vers les Issues d'anomalie ou de correction ;
* le tableau de suivi des tests ;
* les résultats attendus et obtenus ;
* les résultats des retests ;
* les dépendances et blocages rencontrés.

**Critère de réussite :**

La fonctionnalité est intégrée et testée. Les anomalies sont clairement documentées, les corrections sont suivies, les retests sont réalisés et les résultats sont conservés dans GitHub.

## Bilan

**Vous avez appris :**

* à suivre l'intégration d'une fonctionnalité ;
* à organiser des tests ;
* à définir un scénario de test ;
* à comparer un résultat attendu et un résultat obtenu ;
* à identifier une anomalie ;
* à créer une tâche de correction ;
* à relier une correction à un test ;
* à signaler un blocage ;
* à suivre une dépendance ;
* à réaliser un retest ;
* à documenter le résultat d'un retest ;
* à suivre une fonctionnalité jusqu'à des résultats vérifiés.

**Vous avez réalisé :**

Le cycle complet de traitement d'un problème :

```text
Test
 ↓
Anomalie
 ↓
Correction
 ↓
Retest
 ↓
Résultat vérifié
```

Et le cycle de réalisation :

```text
Intégration
 ↓
Tests
 ↓
Corrections
 ↓
Retests
 ↓
Résultats vérifiés
```

La validation finale de la fonctionnalité et la clôture des Issues seront réalisées dans T.251.132.

## Glossaire

* **Intégration** : réunion de plusieurs travaux pour obtenir une fonctionnalité utilisable dans son ensemble.
* **Test** : vérification d'un comportement attendu.
* **Scénario de test** : ensemble d'actions et de résultats attendus utilisés pour vérifier une fonctionnalité.
* **Anomalie** : différence entre le comportement attendu et le comportement obtenu.
* **Correction** : travail réalisé pour traiter une anomalie.
* **Retest** : nouveau test réalisé après une correction.
* **Résultat attendu** : comportement prévu pour une opération.
* **Résultat obtenu** : comportement réellement observé pendant le test.
* **Blocage** : situation qui empêche un travail de continuer.
* **Dépendance** : relation entre deux travaux indiquant qu'un travail dépend d'un autre.
* **Intégration d'une fonctionnalité** : mise en commun de ses différents éléments pour permettre les tests complets.
* **Vérification** : action consistant à contrôler qu'un résultat correspond à ce qui était attendu.
