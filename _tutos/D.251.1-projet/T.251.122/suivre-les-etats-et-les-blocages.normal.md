---
title: "Suivre les états et les blocages"
layout: tuto
slug: "suivre-etats-blocages"
permalink: /tutos/:slug/
tuto_id: "T.251.122"
type: "classique"
version: "normal"
ua: "UA.251.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

---

title: "Suivre les états et les blocages"
layout: tuto
slug: "suivre-etats-blocages-github"
permalink: /tutos/:slug/
tuto_id: "T.251.122"
type: "classique"
version: "normal"
ua: "UA.251.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
-----------

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à suivre l'avancement réel des tâches dans GitHub.

Vous allez apprendre à :

* identifier l'état réel d'une tâche ;
* utiliser les états **À faire**, **En cours**, **Bloquée**, **Terminée** et **Validée** ;
* mettre à jour une tâche pendant sa réalisation ;
* signaler un blocage ;
* indiquer une dépendance entre deux Issues ;
* utiliser les commentaires pour communiquer une information utile ;
* mettre à jour régulièrement une Issue ;
* fermer une Issue uniquement lorsque le travail est réellement terminé.

Vous allez transformer :

```text id="q2j4ak"
Issue
   ↓
État
   ↓
Avancement
   ↓
Blocage éventuel
   ↓
Validation
```

## 2. Prérequis

Vous devez avoir réalisé :

> T.251.111 — Décomposer une fonctionnalité en tâches.

> T.251.112 — Organiser le processus de développement.

> T.251.121 — Créer et organiser les Issues.

Vous devez connaître :

* fonctionnalité ;
* tâche ;
* dépendance ;
* livrable ;
* Issue ;
* label ;
* assignee ;
* milestone ;
* checklist.

## Données de départ

### Fonctionnalité

Vous travaillez sur :

> **Gérer les catégories**

La fonctionnalité possède plusieurs Issues :

```text id="gu3s8q"
#101 Définir les données des catégories
#102 Construire le formulaire de catégorie
#103 Construire la liste des catégories
#104 Ajouter les actions des catégories
#105 Tester les opérations
```

Les numéros sont des exemples.

### Organisation GitHub

Les Issues sont déjà :

* créées ;
* classées ;
* associées au milestone ;
* attribuées à un apprenant.

Le travail consiste maintenant à suivre leur état réel.

## Partie 1 — Théorie

### 1.1. Pourquoi suivre l'avancement

Une Issue créée n'indique pas automatiquement où en est le travail.

Deux Issues peuvent être ouvertes alors que leurs situations sont différentes :

```text id="6xw1f0"
Issue A
→ personne n'a commencé

Issue B
→ travail en cours
```

Il faut donc représenter l'état réel.

### 1.2. Les cinq états du parcours

Dans ce parcours, nous utilisons :

```text id="b7q3af"
À faire
En cours
Bloquée
Terminée
Validée
```

Ils décrivent les étapes réelles du travail.

### 1.3. État « À faire »

**À faire** signifie :

> La tâche est prévue, mais le travail n'a pas encore commencé.

Exemple :

```text id="8gkcy5"
Construire le formulaire

État :
À faire
```

L'Issue est prête à être prise en charge.

### 1.4. État « En cours »

**En cours** signifie :

> La personne travaille actuellement sur la tâche.

Exemple :

```text id="bh9rbi"
Construire le formulaire

État :
En cours
```

L'état doit être mis à jour lorsque le travail commence.

### 1.5. État « Bloquée »

**Bloquée** signifie :

> La personne ne peut pas continuer parce qu'un élément nécessaire manque ou qu'une autre tâche doit être terminée.

Exemple :

```text id="7bbrj4"
Construire le formulaire
       ↓
Bloquée par
Définir les données
```

GitHub permet aujourd'hui de créer une relation de dépendance entre Issues avec **Blocked by** ou **Blocking**. Les Issues bloquées peuvent être signalées visuellement dans les vues concernées.

### 1.6. État « Terminée »

**Terminée** signifie :

> La personne a terminé son travail et considère la tâche réalisée.

Exemple :

```text id="slg10k"
Construire le formulaire

État :
Terminée
```

Cela ne signifie pas encore que la tâche est validée.

### 1.7. État « Validée »

**Validée** signifie :

> Une vérification a confirmé que le résultat attendu est conforme.

Dans notre parcours :

```text id="6wshfk"
Terminée
   ↓
Vérification
   ↓
Validée
```

Cette distinction permet de séparer :

```text id="z3r1i8"
J'ai terminé mon travail
```

de :

```text id="rvz7v6"
Le travail a été vérifié et accepté
```

### 1.8. État GitHub de l'Issue et état du travail

Une Issue GitHub possède aussi un état propre au système : elle peut être ouverte ou fermée.

La fermeture d'une Issue sert à indiquer que le travail associé est terminé, ou qu'il n'est plus prévu.

Dans notre parcours, il est donc préférable de ne pas confondre :

```text id="xuoh5h"
État du travail
→ À faire
→ En cours
→ Bloquée
→ Terminée
→ Validée
```

et :

```text id="l9m8z1"
État GitHub de l'Issue
→ Ouverte
→ Fermée
```

Une Issue peut donc être :

```text id="5p7y5f"
Validée
+
ouverte momentanément
```

puis être fermée après vérification finale.

### 1.9. Le champ de statut dans GitHub Projects

GitHub Projects permet d'utiliser des champs de type **single select** avec plusieurs valeurs. Ces champs peuvent servir à suivre un statut ou une phase de travail.

Dans ce parcours, vous pouvez donc créer un champ :

```text id="i0ue3v"
État
```

avec les valeurs :

```text id="j7kdc8"
À faire
En cours
Bloquée
Terminée
Validée
```

La vue tableau d'un projet peut utiliser un champ de sélection comme colonnes, ce qui permet de visualiser les Issues par état.

### 1.10. Le tableau de suivi

Vous pouvez obtenir :

```text id="1e9p8f"
À faire
   ↓
En cours
   ↓
Bloquée
   ↓
Terminée
   ↓
Validée
```

Les Issues sont déplacées d'une colonne à l'autre selon leur état.

GitHub Projects permet aussi de filtrer une vue par des valeurs comme le statut, l'assignee ou le label.

### 1.11. Le blocage

Un blocage doit être visible et expliqué.

Exemple :

```text id="4k7j9n"
#104 Ajouter les actions

État :
Bloquée

Bloquée par :
#103 Construire la liste
```

Le but n'est pas seulement d'écrire :

> Je suis bloqué.

Il faut identifier ce qui bloque le travail.

### 1.12. Dépendance entre Issues

Supposons :

```text id="8x4d29"
#103 Construire la liste
        ↓
#104 Ajouter les actions
```

Si #104 dépend de #103, vous pouvez représenter cette relation directement dans GitHub.

GitHub permet de définir qu'une Issue est **blocked by** une autre ou qu'elle est **blocking** une autre via les relations d'Issue.

### 1.13. Blocage technique et dépendance

Une dépendance décrit une relation.

Un blocage décrit une situation actuelle.

Exemple :

```text id="m4nnrj"
Dépendance :
#104 dépend de #103
```

Cela ne signifie pas automatiquement que #104 est actuellement bloquée.

Elle devient bloquée si #103 n'est pas disponible au moment où #104 doit avancer.

### 1.14. Le commentaire

Les commentaires permettent de communiquer pendant le suivi.

Exemple :

```text id="z76h2r"
Blocage :
Le modèle Category n'est pas encore disponible.
```

Ou :

```text id="ye2s5f"
Mise à jour :
Le formulaire est terminé.
Il reste le test de validation.
```

GitHub permet de commenter les Issues et de suivre les mises à jour associées à une Issue.

### 1.15. Une mise à jour utile

Une bonne mise à jour indique une information concrète.

Exemple :

```text id="2crgmi"
État :
En cours

Mise à jour :
Le formulaire et les champs sont terminés.
Il reste le bouton Enregistrer.
```

Évitez :

> J'avance.

Cette phrase ne donne pas d'information exploitable.

### 1.16. Mettre à jour régulièrement

Le suivi ne doit pas être fait uniquement à la fin.

Lorsqu'une situation change :

```text id="67qpwc"
À faire
   ↓
En cours
```

Lorsqu'un problème apparaît :

```text id="f5x1pe"
En cours
   ↓
Bloquée
```

Lorsque le travail est terminé :

```text id="l2d4yz"
En cours
   ↓
Terminée
```

Après vérification :

```text id="0xq3wu"
Terminée
   ↓
Validée
```

### 1.17. Fermer une Issue

La fermeture doit correspondre à une vraie fin de suivi.

Dans ce parcours :

```text id="hxq6p7"
Terminée
   ↓
Vérification
   ↓
Validée
   ↓
Fermeture de l'Issue
```

GitHub permet ensuite de fermer l'Issue depuis son interface.

### 1.18. À retenir

* Une Issue doit avoir un état visible.
* **À faire** = travail non commencé.
* **En cours** = travail en réalisation.
* **Bloquée** = travail empêché par une condition non résolue.
* **Terminée** = travail réalisé.
* **Validée** = travail vérifié.
* Une dépendance indique qu'une Issue dépend d'une autre.
* Un blocage doit être expliqué.
* Un commentaire peut documenter une mise à jour.
* L'état doit être mis à jour lorsque la situation change.
* La fermeture de l'Issue vient après le processus de réalisation et de validation.

## Partie 2 — Pratique

### 2.1. Créer le projet GitHub

Dans GitHub, créez ou ouvrez un **Project** associé au travail du dépôt.

GitHub Projects permet de visualiser les Issues dans plusieurs formats, notamment sous forme de tableau ou de board.

Ajoutez les Issues de la fonctionnalité :

```text id="h8v8pk"
#101 Définir les données
#102 Construire le formulaire
#103 Construire la liste
#104 Ajouter les actions
#105 Tester les opérations
```

### 2.2. Préparer le champ d'état

Dans le Project, utilisez un champ de type sélection unique pour représenter l'état du travail.

Nom :

```text id="0k4x4r"
État
```

Valeurs :

```text id="9k0jdr"
À faire
En cours
Bloquée
Terminée
Validée
```

GitHub Projects permet de créer des champs single-select avec plusieurs options et de choisir leur valeur pour les éléments du projet.

### 2.3. Organiser la vue en colonnes

Configurez une vue de type board.

Utilisez **État** comme champ des colonnes.

Vous devez obtenir :

```text id="9l8a8v"
À faire | En cours | Bloquée | Terminée | Validée
```

Une vue board peut utiliser un champ `Status` ou un autre champ single-select comme champ de colonne.

### 2.4. Mettre toutes les Issues dans « À faire »

Placez les Issues suivantes dans **À faire** :

```text id="gkkm1q"
#101 Définir les données
#102 Construire le formulaire
#103 Construire la liste
#104 Ajouter les actions
#105 Tester les opérations
```

À ce moment :

```text id="xw7t7u"
À faire
├── #101
├── #102
├── #103
├── #104
└── #105
```

### 2.5. Commencer une tâche

Prenez :

```text id="hsm1rq"
#101 Définir les données
```

Lorsque vous commencez réellement le travail, changez son état :

```text id="ezqk87"
À faire
→ En cours
```

Ajoutez un commentaire :

```text id="y9x0on"
Je commence la définition des données nécessaires
à la gestion des catégories.
```

Le suivi indique maintenant clairement que le travail a commencé.

### 2.6. Mettre à jour régulièrement

Pendant le travail, ajoutez une mise à jour concrète.

Exemple :

```text id="me0jza"
Mise à jour :
Les champs id, nom, couleur et icône sont définis.
```

Une mise à jour peut aussi expliquer ce qui reste :

```text id="sh1c10"
Il reste à vérifier les relations avec les autres données.
```

L'objectif est que l'Issue reflète la situation réelle.

### 2.7. Passer une tâche à « Terminée »

Lorsque le travail prévu est réalisé :

```text id="f47j1q"
En cours
→ Terminée
```

Ajoutez un commentaire :

```text id="40t8eu"
Travail terminé.
Les données nécessaires à la fonctionnalité sont définies.
```

Ne fermez pas encore l'Issue si elle doit être vérifiée.

### 2.8. Passer une tâche à « Validée »

Après vérification :

```text id="vi7jbf"
Terminée
→ Validée
```

Ajoutez une mise à jour :

```text id="rqupjd"
Vérification effectuée.
Le résultat attendu est conforme.
```

Vous avez maintenant :

```text id="p2f9j3"
Travail terminé
+
Travail vérifié
```

### 2.9. Fermer l'Issue

Lorsque la tâche est validée, vous pouvez fermer l'Issue.

Dans GitHub, la fermeture d'une Issue peut être réalisée depuis la page de l'Issue.

Le principe du parcours devient :

```text id="ep0h59"
À faire
   ↓
En cours
   ↓
Terminée
   ↓
Validée
   ↓
Issue fermée
```

### 2.10. Simuler un blocage

Prenez :

```text id="wld5zz"
#104 Ajouter les actions
```

Supposez que la liste des catégories n'est pas encore disponible.

Passez l'état à :

```text id="c41v6x"
Bloquée
```

Ajoutez un commentaire :

```text id="fa0js6"
Blocage :
La liste des catégories doit être disponible avant
de poursuivre cette tâche.
```

### 2.11. Déclarer la dépendance

Si #104 dépend réellement de #103, créez la relation entre les deux Issues.

Dans #104, indiquez :

```text id="6c32vy"
#104 est bloquée par #103.
```

GitHub permet de créer cette relation depuis la section **Relationships** d'une Issue.

Vous obtenez :

```text id="5yi8oe"
#103 Construire la liste
        ↓
     bloque
        ↓
#104 Ajouter les actions
```

### 2.12. Résoudre le blocage

Lorsque #103 est terminée et que #104 peut continuer :

```text id="u2l3ng"
Bloquée
   ↓
En cours
```

Ajoutez :

```text id="g3pyoj"
Blocage résolu :
la liste des catégories est maintenant disponible.
```

Le commentaire explique pourquoi l'état a changé.

### 2.13. Différence entre commentaire et état

Le commentaire explique la situation.

L'état représente la situation dans le suivi.

Exemple :

```text id="gibkg8"
État :
Bloquée

Commentaire :
La tâche dépend de #103, qui n'est pas encore terminée.
```

Il faut donc utiliser les deux.

### 2.14. Suivre une dépendance

Pour chaque Issue, vérifiez :

```text id="13p5c9"
De quoi cette tâche dépend-elle ?

Quelle tâche bloque cette tâche ?

Quelles tâches sont bloquées par cette tâche ?
```

GitHub permet de consulter les relations **Blocked by** et **Blocking**.

### 2.15. Mettre à jour l'ensemble de la fonctionnalité

Faites évoluer progressivement les Issues :

```text id="zc7n2h"
#101 Définir les données
→ Validée

#102 Construire le formulaire
→ En cours

#103 Construire la liste
→ Terminée

#104 Ajouter les actions
→ Bloquée

#105 Tester les opérations
→ À faire
```

Le tableau montre immédiatement l'état réel du travail.

### 2.16. Observer l'avancement

Le projet peut maintenant être lu comme ceci :

```text id="8x3dpl"
À faire
#105

En cours
#102

Bloquée
#104

Terminée
aucune

Validée
#101
#103
```

Vous pouvez aussi utiliser les filtres du Project pour voir, par exemple, les tâches d'un assignee ou les tâches dans un état donné. GitHub Projects prend en charge les filtres par champs comme `status`, `assignee`, `label` ou `milestone`.

### 2.17. Vérifier les mises à jour

Pour chaque Issue en cours, vérifiez :

```text id="x0j36b"
□ L'état est correct.
□ L'assignee est correct.
□ Le blocage est indiqué s'il existe.
□ Les dépendances sont indiquées.
□ Les commentaires utiles sont présents.
□ Le travail récent est décrit.
```

### 2.18. Exercice individuel

Utilisez les Issues de la fonctionnalité :

> **Gérer les articles**

Simulez une progression réelle.

Départ :

```text id="pl3f4d"
Toutes les tâches
→ À faire
```

Puis réalisez cette situation :

```text id="o8d7xu"
Tâche 1
→ Validée

Tâche 2
→ En cours

Tâche 3
→ Terminée

Tâche 4
→ Bloquée

Tâche 5
→ À faire
```

Pour la tâche bloquée :

* indiquez l'Issue qui la bloque ;
* créez la dépendance ;
* ajoutez un commentaire expliquant le problème.

Pour la tâche en cours :

* ajoutez un commentaire de progression.

Pour la tâche terminée :

* ajoutez un commentaire indiquant ce qui a été réalisé.

### 2.19. Construire le tableau de suivi

Produisez le tableau :

| Issue | État | Assignee | Bloquée par | Dernière mise à jour |
| ----- | ---- | -------- | ----------- | -------------------- |
|       |      |          |             |                      |
|       |      |          |             |                      |
|       |      |          |             |                      |
|       |      |          |             |                      |
|       |      |          |             |                      |

Vous devez pouvoir lire la situation sans ouvrir toutes les Issues.

### 2.20. Vérifier le blocage

Pour chaque tâche bloquée :

```text id="mrxzxq"
□ L'état est « Bloquée ».
□ La cause est expliquée.
□ La dépendance est identifiée.
□ L'Issue bloquante est connue.
□ Un commentaire décrit le blocage.
```

### 2.21. Vérifier la transition des états

Une tâche doit suivre un parcours logique :

```text id="hpqdgm"
À faire
   ↓
En cours
   ↓
Terminée
   ↓
Validée
```

Avec une possibilité de blocage :

```text id="cwuf2s"
          ┌── Bloquée
          │
À faire → En cours → Terminée → Validée
          │
          └── retour à En cours après résolution
```

Ne passez pas directement à **Validée** sans vérification.

### 2.22. Vérifier la clôture

Une Issue peut être fermée lorsque :

```text id="0q9aw7"
Travail terminé
+
Validation effectuée
```

La fermeture ne doit pas être utilisée pour masquer un travail encore en cours.

### 2.23. Vérification finale

Votre Project doit maintenant permettre de répondre rapidement :

```text id="69b0me"
Quelles tâches sont à faire ?
→ colonne À faire

Qui travaille actuellement ?
→ colonne En cours + assignee

Quelles tâches sont bloquées ?
→ colonne Bloquée + dépendance

Quelles tâches sont terminées ?
→ colonne Terminée

Quelles tâches sont validées ?
→ colonne Validée
```

**Résultat attendu :**

```text id="v6cm9n"
                 Gérer les articles

┌──────────┬────────────┬──────────┬───────────┬───────────┐
│ À faire  │ En cours   │ Bloquée  │ Terminée  │ Validée   │
├──────────┼────────────┼──────────┼───────────┼───────────┤
│ T5       │ T2         │ T4       │ T3        │ T1        │
└──────────┴────────────┴──────────┴───────────┴───────────┘
```

Chaque tâche possède un état actualisé, un responsable lorsque nécessaire et une information claire sur les blocages.

**Travail à faire :**

Utilisez les Issues de la fonctionnalité **Gérer les articles**.

Configurez le suivi avec les états :

```text
À faire
En cours
Bloquée
Terminée
Validée
```

Faites évoluer les Issues pour représenter une situation réelle.

Pour au moins une tâche bloquée :

* créez une dépendance ;
* indiquez l'Issue bloquante ;
* ajoutez un commentaire expliquant le blocage.

Pour une tâche en cours :

* ajoutez une mise à jour de progression.

Pour une tâche terminée :

* ajoutez une mise à jour indiquant le travail réalisé.

Pour une tâche validée :

* ajoutez une mise à jour de vérification.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le lien vers le Project GitHub ;
* le tableau de suivi des Issues ;
* les liens vers les Issues modifiées ;
* l'exemple de blocage ;
* les dépendances créées ;
* les commentaires de mise à jour.

**Critère de réussite :**

Le Project permet de voir l'état réel de chaque tâche. Les blocages et dépendances sont visibles, les commentaires expliquent les changements importants et les Issues évoluent de manière cohérente jusqu'à la validation.

## Bilan

**Vous avez appris :**

* à suivre l'état réel d'une tâche ;
* à distinguer **À faire**, **En cours**, **Bloquée**, **Terminée** et **Validée** ;
* à utiliser un champ d'état dans GitHub Projects ;
* à représenter les tâches sur un tableau ;
* à signaler un blocage ;
* à créer une dépendance entre deux Issues ;
* à utiliser les relations **Blocked by** et **Blocking** ;
* à ajouter des commentaires de suivi ;
* à documenter une progression ;
* à distinguer travail terminé et travail validé ;
* à fermer une Issue après la fin réelle du travail.

GitHub Projects permet de filtrer les éléments par statut, assignee, label ou milestone, ce qui facilite le suivi d'un ensemble de tâches.

**Vous avez réalisé :**

Un suivi visible de la fonctionnalité :

```text id="p4tg3d"
Issues
   ↓
États
   ↓
Avancement
   ↓
Blocages
   ↓
Dépendances
   ↓
Validation
```

Dans le tutoriel suivant, ce suivi pourra être utilisé pour conduire la fonctionnalité vers son intégration, ses tests, ses corrections et sa validation finale.

## Glossaire

* **Avancement** : progression réelle du travail.
* **État** : situation actuelle d'une tâche.
* **À faire** : tâche qui n'a pas encore commencé.
* **En cours** : tâche actuellement réalisée.
* **Bloquée** : tâche qui ne peut pas continuer.
* **Terminée** : tâche réalisée par la personne responsable.
* **Validée** : tâche vérifiée et conforme au résultat attendu.
* **Blocage** : situation qui empêche une tâche de continuer.
* **Dépendance** : relation indiquant qu'une tâche dépend d'une autre.
* **Commentaire** : information ajoutée dans une Issue pour communiquer ou documenter une situation.
* **Mise à jour** : information récente décrivant l'évolution du travail.
* **Issue fermée** : Issue dont le suivi est officiellement terminé.
* **Project** : espace GitHub permettant d'organiser et de suivre des Issues, Pull Requests et autres éléments du travail.
