---
title: "Valider et clôturer une fonctionnalité"
layout: tuto
slug: "valider-cloturer-fonctionnalite"
permalink: /tutos/:slug/
tuto_id: "T.251.132"
type: "classique"
version: "normal"
ua: "UA.251.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Une fonctionnalité est prête à être clôturée lorsque le travail prévu est terminé et que le résultat attendu est vérifié.

Dans ce tutoriel, vous allez apprendre à :

* vérifier les tâches de la fonctionnalité ;
* vérifier les critères de validation ;
* vérifier que les tests sont terminés ;
* vérifier que les corrections sont terminées ;
* mettre l’état final de la fonctionnalité à **Validée** ;
* clôturer les Issues concernées.

La démarche est :

**Terminer les tâches → Vérifier les critères → Vérifier les tests → Valider → Clôturer**

La validation ne consiste pas seulement à constater que le développement est terminé. Elle consiste à vérifier que la fonctionnalité répond réellement à ce qui était prévu.

---

## 2. Prérequis

Vous devez avoir réalisé :

* **T.251.111** — Décomposer une fonctionnalité en tâches ;
* **T.251.112** — Organiser le processus de développement ;
* **T.251.121** — Créer et organiser les Issues ;
* **T.251.122** — Suivre les états et les blocages ;
* **T.251.131** — Suivre l’intégration, les tests et les corrections.

Vous devez savoir :

* lire une Issue ;
* suivre son état ;
* identifier une tâche terminée ;
* identifier une tâche bloquée ;
* suivre une anomalie ;
* vérifier un résultat attendu ;
* utiliser un tableau GitHub Projects pour suivre le travail.

---

## 3. Données de départ

Vous travaillez sur la fonctionnalité :

**Gérer les articles**

Les tâches suivantes ont été suivies pendant le projet :

| Issue | Tâche                  | État     |
| ----- | ---------------------- | -------- |
| #201  | Préparer les données   | Terminée |
| #202  | Créer le formulaire    | Terminée |
| #203  | Afficher les articles  | Terminée |
| #204  | Ajouter les actions    | Terminée |
| #205  | Intégrer les éléments  | Terminée |
| #206  | Tester la création     | Terminée |
| #207  | Tester la modification | Terminée |
| #208  | Tester la suppression  | Terminée |
| #209  | Corriger une anomalie  | Terminée |

La fonctionnalité a donc été développée, testée et corrigée.

Il reste maintenant à vérifier qu’elle peut être **validée et clôturée**.

---

## Partie 1 — Comprendre la validation d’une fonctionnalité

### 1.1. Qu’est-ce que valider ?

Valider une fonctionnalité signifie vérifier que le résultat obtenu correspond au résultat attendu.

Exemple :

La fonctionnalité prévue est :

**Gérer les articles**

Elle doit permettre de :

* créer un article ;
* afficher les articles ;
* modifier un article ;
* supprimer un article.

La validation consiste à vérifier que ces actions fonctionnent correctement et respectent les critères prévus.

### 1.2. Validation et fin du développement

Une tâche peut être terminée sans que toute la fonctionnalité soit validée.

Exemple :

**Développer le formulaire** peut être terminé.

Mais la fonctionnalité **Gérer les articles** ne peut pas encore être validée si :

* la création n'a pas été testée ;
* la modification présente une anomalie ;
* la suppression ne fonctionne pas ;
* un critère attendu n'est pas respecté.

Il faut donc distinguer :

**Tâche terminée**

et

**Fonctionnalité validée**

---

### 1.3. Qu’est-ce qu’un critère de validation ?

Un critère de validation permet de vérifier précisément le résultat attendu.

Exemple pour **Gérer les articles** :

| Critère            | Résultat attendu                        |
| ------------------ | --------------------------------------- |
| Création           | Un nouvel article est enregistré        |
| Affichage          | Les articles apparaissent dans la liste |
| Modification       | Les données modifiées sont enregistrées |
| Suppression        | L'article sélectionné est supprimé      |
| Retour utilisateur | L'utilisateur reçoit un message adapté  |

Chaque critère doit pouvoir être vérifié.

Un critère ne doit pas rester vague.

Évitez :

> La fonctionnalité fonctionne bien.

Préférez :

> Un article peut être créé et apparaît dans la liste après l'enregistrement.

---

### 1.4. Vérifier les tâches

Avant de valider une fonctionnalité, vérifiez les tâches qui la composent.

Une tâche importante peut être :

* Terminée ;
* Bloquée ;
* encore En cours.

Une fonctionnalité ne doit pas être considérée comme terminée alors qu'une tâche nécessaire reste inachevée.

Les dépendances GitHub permettent également de repérer les travaux bloqués. GitHub peut afficher qu'une Issue est bloquée par une autre Issue.

---

### 1.5. Vérifier les tests

Les tests permettent de comparer :

**Résultat attendu**

avec

**Résultat obtenu**

Exemple :

| Test                 | Résultat attendu   | Résultat obtenu    | Validation |
| -------------------- | ------------------ | ------------------ | ---------- |
| Créer un article     | Article enregistré | Article enregistré | Oui        |
| Modifier un article  | Article modifié    | Article modifié    | Oui        |
| Supprimer un article | Article supprimé   | Article supprimé   | Oui        |

Tous les tests nécessaires doivent être terminés avant la validation.

---

## Partie 2 — Vérifier la fonctionnalité

### 2.1. Vérifier les tâches

Ouvrez le projet GitHub et recherchez les Issues liées à la fonctionnalité.

Pour chaque tâche, vérifiez :

* le titre ;
* la description ;
* l'état ;
* les éventuelles dépendances ;
* les commentaires ;
* les éventuelles corrections.

L'objectif est de répondre à la question :

> Est-ce que toutes les tâches nécessaires sont terminées ?

---

### 2.2. Vérifier les anomalies

Une tâche peut être marquée terminée alors qu'une anomalie a été trouvée pendant un test.

Dans ce cas, il faut vérifier que :

1. l'anomalie a été corrigée ;
2. le résultat a été testé de nouveau ;
3. le test est maintenant satisfaisant.

Une correction non retestée ne permet pas de confirmer que le problème est réellement résolu.

---

### 2.3. Vérifier les critères

Reprenez les critères de validation définis pour la fonctionnalité.

Exemple :

| Critère               | Vérification |
| --------------------- | ------------ |
| Créer un article      | Test réalisé |
| Afficher les articles | Test réalisé |
| Modifier un article   | Test réalisé |
| Supprimer un article  | Test réalisé |
| Retour utilisateur    | Test réalisé |

Chaque critère doit avoir un résultat vérifié.

---

### 2.4. Vérifier les blocages

Une fonctionnalité ne doit pas rester dans un état validé alors qu'une tâche nécessaire est encore bloquée.

Vérifiez donc :

* les Issues ouvertes ;
* les Issues bloquées ;
* les dépendances ;
* les tâches encore en cours.

GitHub permet d'associer une Issue à une autre avec les relations **Blocked by** et **Blocking**, ce qui permet d'identifier les travaux qui empêchent encore la progression.

---

## Partie 3 — Valider la fonctionnalité

### 3.1. Passer à l'état Validée

Lorsque toutes les vérifications sont satisfaisantes, vous pouvez mettre la fonctionnalité à l'état :

**Validée**

Exemple de suivi :

| Fonctionnalité     | État    |
| ------------------ | ------- |
| Gérer les articles | Validée |

L'état **Validée** signifie ici :

* les tâches nécessaires sont terminées ;
* les tests sont terminés ;
* les corrections nécessaires sont terminées ;
* les critères sont respectés ;
* aucun blocage nécessaire ne reste.

---

### 3.2. Écrire une confirmation

Ajoutez un commentaire clair dans l'Issue principale.

Exemple :

> La fonctionnalité « Gérer les articles » a été testée.
> Les critères prévus sont respectés.
> Les anomalies identifiées ont été corrigées et retestées.
> La fonctionnalité est validée.

Le commentaire permet de garder une trace de la décision de validation.

---

### 3.3. Distinguer « Validée » et « Fermée »

Ces deux notions ne représentent pas exactement la même chose.

**Validée** indique que le résultat respecte les critères.

**Fermée** indique que l'Issue n'est plus active.

GitHub permet de fermer une Issue lorsque le travail est terminé ou lorsqu'un problème est résolu.

Dans notre suivi pédagogique, on utilise donc :

**Validée → puis Fermée**

---

## Partie 4 — Clôturer les Issues

### 4.1. Fermer les Issues terminées

Une fois la fonctionnalité validée, vérifiez les Issues correspondantes.

Exemple :

* #201 → terminée ;
* #202 → terminée ;
* #203 → terminée ;
* #204 → terminée ;
* #205 → terminée ;
* #206 → terminée ;
* #207 → terminée ;
* #208 → terminée ;
* #209 → terminée.

Les Issues qui ne nécessitent plus de travail peuvent alors être fermées. GitHub permet de fermer directement une Issue depuis sa page.

---

### 4.2. Vérifier l'état final

Le suivi final peut être présenté ainsi :

| Élément                | État final |
| ---------------------- | ---------- |
| Préparer les données   | Terminée   |
| Créer le formulaire    | Terminée   |
| Afficher les articles  | Terminée   |
| Ajouter les actions    | Terminée   |
| Intégrer les éléments  | Terminée   |
| Tester la création     | Terminée   |
| Tester la modification | Terminée   |
| Tester la suppression  | Terminée   |
| Corriger l'anomalie    | Terminée   |
| Fonctionnalité         | Validée    |

Le projet donne ainsi une vision claire de la fin du travail.

---

### 4.3. Vérifier avant de fermer

Avant de fermer une Issue principale, posez-vous quatre questions :

> Toutes les tâches sont-elles terminées ?

> Tous les tests nécessaires sont-ils terminés ?

> Toutes les anomalies nécessaires sont-elles corrigées et retestées ?

> Tous les critères de validation sont-ils respectés ?

Si une réponse est **Non**, la fonctionnalité ne doit pas encore être considérée comme validée.

---

## Partie 5 — Mise en pratique

### Activité 1 — Vérifier une fonctionnalité

Vous devez vérifier la fonctionnalité :

**Gérer les articles**

Complétez le tableau.

| Vérification                       | Oui / Non | Justification |
| ---------------------------------- | --------- | ------------- |
| Toutes les tâches sont terminées   |           |               |
| Les tests sont terminés            |           |               |
| Les anomalies sont corrigées       |           |               |
| Les corrections sont retestées     |           |               |
| Les critères sont respectés        |           |               |
| Une tâche nécessaire reste bloquée |           |               |

---

### Activité 2 — Identifier l'état final

Pour chaque situation, indiquez l'état adapté.

| Situation                                                       | État |
| --------------------------------------------------------------- | ---- |
| Une tâche importante est encore en cours                        |      |
| Une anomalie doit encore être corrigée                          |      |
| Tous les tests sont terminés mais un critère n'est pas respecté |      |
| Tous les critères sont respectés                                |      |
| La fonctionnalité est validée et le suivi est terminé           |      |

---

### Activité 3 — Valider une fonctionnalité

Prenez la fonctionnalité :

**Gérer les catégories**

Vous disposez des critères suivants :

* créer une catégorie ;
* afficher les catégories ;
* modifier une catégorie ;
* supprimer une catégorie ;
* afficher un retour après une opération.

Complétez :

| Critère            | Résultat attendu | Résultat obtenu | Validé |
| ------------------ | ---------------- | --------------- | ------ |
| Créer              |                  |                 |        |
| Afficher           |                  |                 |        |
| Modifier           |                  |                 |        |
| Supprimer          |                  |                 |        |
| Retour utilisateur |                  |                 |        |

Puis déterminez si la fonctionnalité peut être mise à l'état **Validée**.

Justifiez votre réponse.

---

### Activité 4 — Préparer la clôture

À partir de votre tableau GitHub, préparez la clôture de la fonctionnalité.

Vous devez :

1. vérifier les Issues ;
2. vérifier les états ;
3. vérifier les tests ;
4. vérifier les corrections ;
5. vérifier les critères ;
6. mettre la fonctionnalité à l'état **Validée** si toutes les conditions sont satisfaites ;
7. fermer les Issues qui ne nécessitent plus de travail ;
8. ajouter un commentaire de validation.

---

## Livrable

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

Le document doit contenir :

1. le nom de la fonctionnalité ;
2. le tableau des tâches et leur état ;
3. le tableau des critères de validation ;
4. les résultats des tests ;
5. les éventuelles corrections réalisées ;
6. la justification de la validation ;
7. le commentaire final utilisé pour confirmer la validation.

---

## Résultat attendu

À la fin du tutoriel, vous devez obtenir un suivi dans lequel :

**toutes les tâches nécessaires sont terminées → les tests sont terminés → les corrections sont vérifiées → les critères sont respectés → la fonctionnalité est Validée → les Issues terminées sont clôturées.**

Le résultat attendu pour **Gérer les articles** est donc :

| Élément          | Résultat attendu         |
| ---------------- | ------------------------ |
| Tâches           | Toutes terminées         |
| Tests            | Tous réalisés            |
| Anomalies        | Corrigées et retestées   |
| Blocages         | Aucun blocage nécessaire |
| Critères         | Tous respectés           |
| Fonctionnalité   | Validée                  |
| Issues terminées | Clôturées                |

---

## Critères de réussite

Le tutoriel est réussi si vous êtes capable de :

* vérifier qu'une fonctionnalité est réellement terminée ;
* contrôler les tâches liées à une fonctionnalité ;
* vérifier les résultats des tests ;
* vérifier les corrections ;
* vérifier les critères de validation ;
* distinguer **Terminée**, **Validée** et **Fermée** ;
* mettre une fonctionnalité à l'état **Validée** ;
* clôturer les Issues terminées ;
* laisser une trace claire de la validation.

---

## Bilan

Une fonctionnalité ne doit pas être validée uniquement parce que le développement est terminé.

La validation suit une vérification simple :

**Tâches → Tests → Corrections → Critères → Validation → Clôture**

Le suivi permet de savoir exactement où en est la fonctionnalité.

Une fois la validation réalisée, les Issues qui ne nécessitent plus de travail peuvent être fermées.

Vous disposez ainsi d'un suivi clair de la fonctionnalité jusqu'à sa fin.

---

## Glossaire

### Validation

Vérification qu'une fonctionnalité respecte les critères prévus.

### Critère de validation

Condition utilisée pour vérifier qu'un résultat est correct.

### Test

Vérification d'un comportement attendu.

### Anomalie

Problème constaté pendant un test ou une utilisation.

### Correction

Action réalisée pour résoudre une anomalie.

### Retest

Nouveau test réalisé après une correction.

### Validée

État indiquant que les critères de validation sont respectés.

### Clôturer

Fermer une Issue lorsque le travail associé ne nécessite plus d'action.

---

## Réutilisation

La même démarche peut être utilisée pour toute fonctionnalité :

**Décomposer → Organiser → Suivre → Tester → Corriger → Valider → Clôturer**
