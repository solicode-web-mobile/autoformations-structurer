# Construire un modèle de données par les dépendances fonctionnelles

## 1. Notre démarche

Lorsqu'on demande à un débutant de construire un MCD, on lui demande souvent de commencer par identifier :

* les entités ;
* leurs propriétés ;
* les associations ;
* les cardinalités.

Cette démarche peut être difficile pour un débutant, car elle suppose qu'il sache déjà reconnaître les concepts métier à partir d'un besoin.

Notre démarche suit une progression différente.

Nous ne demandons pas immédiatement :

> **« Quelles sont les entités ? »**

Nous commençons par une question plus concrète :

> **« Comment organiser correctement les données ? »**

L'apprenant part d'une relation contenant les données du problème. Il observe les problèmes provoqués par cette organisation, découvre les dépendances fonctionnelles, puis utilise ces dépendances pour décomposer progressivement la relation.

Les relations obtenues sont ensuite interprétées comme des entités.

Enfin, les règles de gestion permettent de construire les associations et les cardinalités du MCD.

La démarche générale est donc :

```text
Données
   ↓
Relation de départ
   ↓
Exemples de données
   ↓
Problèmes
   ↓
Découverte des dépendances fonctionnelles
   ↓
Détermination des DF
   ↓
Identification des groupes de données
   ↓
Décomposition progressive
   ↓
Relations structurées
   ↓
Interprétation en entités
   ↓
Règles de gestion
   ↓
Associations et cardinalités
   ↓
MCD
```

---

# 2. Première étape : partir d'une relation de départ

Pour apprendre cette démarche, nous commençons par un cas suffisamment simple pour que plusieurs informations puissent être représentées dans une même relation.

Prenons l'exemple d'un blog.

Le dictionnaire de données contient notamment :

```text
id_article
titre_article
contenu_article
date_publication
id_auteur
nom_auteur
email_auteur
id_categorie
nom_categorie
description_categorie
```

Pour la première activité, nous construisons volontairement une relation unique :

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    nom_auteur,
    email_auteur,
    id_categorie,
    nom_categorie,
    description_categorie
)
```

Cette relation est volontairement **naïve**.

Elle n'est pas encore notre modèle final.

Son rôle est de fournir à l'apprenant une organisation de données qu'il va pouvoir observer, tester et critiquer.

---

# 3. Mettre des exemples dans la relation

On ajoute plusieurs occurrences :

```text
id_article | titre        | id_auteur | nom_auteur | email_auteur     | id_categorie | nom_categorie | description
-----------|--------------|-----------|------------|------------------|--------------|---------------|------------
1          | Laravel      | A01       | Fouad      | fouad@mail.com   | C01          | PHP           | ...
2          | Eloquent     | A01       | Fouad      | fouad@mail.com   | C01          | PHP           | ...
3          | Kotlin       | A02       | Sara       | sara@mail.com    | C02          | Mobile        | ...
```

L'objectif n'est pas encore d'expliquer la normalisation.

On demande simplement à l'apprenant d'observer les données.

---

# 4. Découvrir les problèmes

On pose des questions :

> Pourquoi `Fouad` apparaît-il plusieurs fois ?

> Pourquoi son adresse email apparaît-elle plusieurs fois ?

> Que se passe-t-il si Fouad change d'adresse email ?

> Devons-nous modifier toutes les lignes ?

> Que se passe-t-il si une ligne contient `fouad@mail.com` et une autre `fouad@gmail.com` ?

L'apprenant découvre deux problèmes fondamentaux.

## 4.1. La redondance

La même information est enregistrée plusieurs fois.

```text
A01 → Fouad → fouad@mail.com
A01 → Fouad → fouad@mail.com
```

Les données de l'auteur sont répétées dans plusieurs articles.

## 4.2. La cohérence

Si une information est répétée, plusieurs valeurs peuvent apparaître pour une même réalité.

Par exemple :

```text
A01 | Fouad | fouad@mail.com
A01 | Fouad | fouad@gmail.com
```

Quelle valeur est correcte ?

La relation permet donc de constater que certaines informations ne devraient pas être répétées de cette manière.

---

# 5. Chercher la cause du problème

On ne donne pas encore la définition de la dépendance fonctionnelle.

On pose une question :

> **Existe-t-il une colonne qui permet de déterminer les informations répétées ?**

Pour l'auteur :

```text
id_auteur
```

Si on connaît :

```text
id_auteur = A01
```

peut-on déterminer :

```text
nom_auteur ?
email_auteur ?
```

Oui.

On observe :

```text
A01 → Fouad
A01 → fouad@mail.com
```

On peut donc formaliser :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Nous venons de découvrir une **dépendance fonctionnelle**.

---

# 6. Comprendre intuitivement une dépendance fonctionnelle

Une dépendance fonctionnelle signifie :

> **Pour une valeur donnée de A, une seule valeur de B est possible.**

On écrit :

```text
A → B
```

et on lit :

> **A détermine B.**

Par exemple :

```text
id_auteur → nom_auteur
```

signifie :

> Pour un `id_auteur` donné, il existe un seul `nom_auteur`.

Et :

```text
id_auteur → email_auteur
```

signifie :

> Pour un `id_auteur` donné, il existe un seul `email_auteur`.

On peut regrouper :

```text
id_auteur → {nom_auteur, email_auteur}
```

---

# 7. Première découverte : créer une nouvelle relation

Nous avons maintenant une information importante :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

On peut donc isoler le groupe :

```text
id_auteur
nom_auteur
email_auteur
```

et créer :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Dans la relation initiale, les colonnes `nom_auteur` et `email_auteur` ne sont plus nécessaires.

La relation restante devient :

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    id_categorie,
    nom_categorie,
    description_categorie
)
```

La relation `ARTICLE` conserve `id_auteur`.

Cette colonne permettra de retrouver l'auteur correspondant.

---

# 8. Recommencer avec la relation restante

Nous ne nous arrêtons pas après la première séparation.

Nous reprenons la relation restante.

On observe :

```text
id_categorie
nom_categorie
description_categorie
```

On pose la même question :

> **Que détermine `id_categorie` ?**

On constate :

```text
id_categorie → nom_categorie
id_categorie → description_categorie
```

Nous pouvons donc créer :

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

La relation restante devient :

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    id_categorie
)
```

---

# 9. Continuer jusqu'à stabilisation

Nous obtenons finalement :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    id_categorie
)
```

La décomposition s'est faite progressivement :

```text
Relation initiale
       ↓
Groupe Auteur
       ↓
Nouvelle relation AUTEUR
       ↓
Relation restante
       ↓
Groupe Catégorie
       ↓
Nouvelle relation CATEGORIE
       ↓
Relation restante ARTICLE
```

L'apprenant n'a donc pas reçu les trois tables.

Il les a **construites progressivement à partir des dépendances fonctionnelles**.

---

# 10. Une règle importante : identifier les groupes

Dans une relation, plusieurs groupes de colonnes peuvent apparaître.

Par exemple :

```text
id_article
titre_article
contenu_article
date_publication

id_auteur
nom_auteur
email_auteur

id_categorie
nom_categorie
description_categorie
```

On peut représenter les dépendances :

```text
id_article
   ├── titre_article
   ├── contenu_article
   ├── date_publication
   ├── id_auteur
   └── id_categorie

id_auteur
   ├── nom_auteur
   └── email_auteur

id_categorie
   ├── nom_categorie
   └── description_categorie
```

Ces dépendances permettent d'identifier progressivement les groupes de données.

---

# 11. Que faire lorsqu'il n'existe pas d'identifiant ?

Une difficulté importante peut apparaître.

Le dictionnaire peut contenir :

```text
nom_auteur
email_auteur
```

mais aucun :

```text
id_auteur
```

Il faut alors rechercher une colonne existante capable d'identifier l'auteur de manière fiable.

Par exemple, si `email_auteur` est garanti unique et stable, il pourrait servir de déterminant.

On pourrait avoir :

```text
email_auteur → nom_auteur
```

Mais si aucune donnée existante ne constitue un identifiant fiable, on peut introduire un nouvel identifiant :

```text
id_auteur
```

On obtient alors :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

L'identifiant n'est donc pas nécessairement fourni directement par le dictionnaire initial.

Il peut être **introduit pour permettre une identification fiable des occurrences**.

---

# 12. Deux niveaux à ne pas confondre

À ce stade, nous devons distinguer deux choses.

## La détermination par les données

Nous cherchons :

```text
A → B
```

Nous raisonnons sur les données et leurs dépendances.

## L'interprétation métier

Plus tard seulement, nous demanderons :

> **Que représente cette structure ?**

Par exemple :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

représente des auteurs.

Nous pouvons alors parler d'une **entité AUTEUR**.

La notion d'entité arrive donc **après la structuration des données**.

---

# 13. Déterminer les entités à partir des relations obtenues

Nous avons maintenant :

```text
AUTEUR
CATEGORIE
ARTICLE
```

Nous pouvons donner une signification à chacune des relations.

```text
AUTEUR → les auteurs du système
ARTICLE → les articles du système
CATEGORIE → les catégories du système
```

Nous pouvons alors passer du vocabulaire relationnel au vocabulaire conceptuel :

```text
Relation
   ↓
Structure de données
   ↓
Ce que cette structure représente
   ↓
Entité
```

Ainsi :

```text
AUTEUR    → Entité AUTEUR
ARTICLE   → Entité ARTICLE
CATEGORIE → Entité CATEGORIE
```

L'entité n'a donc pas été « devinée » au début.

Elle a été **identifiée après la structuration des données**.

---

# 14. Les DF permettent-elles à elles seules de construire le MCD ?

Non.

Les dépendances fonctionnelles permettent principalement de déterminer **comment organiser les données et quelles structures relationnelles sont nécessaires**.

Elles ne suffisent pas à déterminer complètement les associations et les cardinalités du MCD.

Pour cela, nous avons besoin des **règles de gestion**.

C'est une nouvelle étape du raisonnement.

---

# 15. Passer des entités aux règles de gestion

Nous avons :

```text
AUTEUR
ARTICLE
CATEGORIE
```

Nous recherchons maintenant les règles de gestion.

Par exemple :

> Un auteur peut rédiger plusieurs articles.

> Un article est rédigé par un seul auteur.

Ces règles permettent de construire l'association :

```text
AUTEUR ───── RÉDIGER ───── ARTICLE
```

Puis les cardinalités.

Autre règle :

> Un article appartient à une catégorie.

> Une catégorie peut contenir plusieurs articles.

Nous pouvons alors construire :

```text
ARTICLE ───── APPARTENIR ───── CATEGORIE
```

Les cardinalités sont déterminées à partir des règles de gestion, et non simplement à partir du nom des colonnes.

---

# 16. Pourquoi séparer DF et règles de gestion ?

Il est important de ne pas mélanger les deux raisonnements.

Les **dépendances fonctionnelles** répondent principalement à :

> **Comment les données doivent-elles être organisées ?**

Elles nous permettent de passer de :

```text
Colonnes
   ↓
Dépendances
   ↓
Groupes
   ↓
Relations
```

Les **règles de gestion** répondent à :

> **Comment les éléments du domaine sont-ils liés ?**

Elles nous permettent de passer de :

```text
Entités
   ↓
Règles de gestion
   ↓
Associations
   ↓
Cardinalités
   ↓
MCD
```

---

# 17. La méthode complète

La méthode d'apprentissage peut maintenant être formulée en une séquence unique.

## Étape 1 — Construire une relation de départ

À partir d'un ensemble de données cohérent, construire une relation pédagogique contenant les colonnes étudiées.

## Étape 2 — Insérer des exemples

Utiliser plusieurs occurrences afin de rendre visibles les répétitions et les contradictions possibles.

## Étape 3 — Observer les problèmes

Identifier :

* les répétitions ;
* les redondances ;
* les risques d'incohérence ;
* les difficultés de modification.

## Étape 4 — Rechercher les dépendances

Pour les colonnes concernées, rechercher :

> **« Si je connais A, puis-je déterminer une seule valeur de B ? »**

Formaliser :

```text
A → B
```

## Étape 5 — Identifier les groupes

Regrouper les colonnes qui dépendent d'un même déterminant.

```text
A → B
A → C
A → D
```

donne :

```text
A
B
C
D
```

## Étape 6 — Créer une nouvelle relation

Créer une relation avec le déterminant et les colonnes qui en dépendent.

```text
R1(A, B, C, D)
```

## Étape 7 — Continuer sur la relation restante

Retirer le groupe déjà traité et poursuivre l'analyse.

```text
Relation restante
        ↓
Nouveau groupe
        ↓
Nouvelles DF
        ↓
Nouvelle relation
```

## Étape 8 — Stabiliser les relations

Continuer jusqu'à obtenir des relations correctement structurées.

## Étape 9 — Interpréter les relations

Demander :

> **Que représente chaque relation dans le domaine ?**

C'est ici que nous introduisons les entités.

## Étape 10 — Analyser les règles de gestion

Identifier les relations métier entre les entités.

## Étape 11 — Construire les associations

Transformer les règles de gestion en associations conceptuelles.

## Étape 12 — Déterminer les cardinalités

Déterminer les cardinalités à partir des règles de gestion.

## Étape 13 — Construire le MCD

Assembler :

* entités ;
* identifiants ;
* propriétés ;
* associations ;
* cardinalités.

---

# 18. La logique fondamentale de la démarche

Notre démarche peut être résumée par deux chaînes complémentaires.

### Construction de la structure des données

```text
Problèmes
   ↓
Dépendances fonctionnelles
   ↓
Déterminants
   ↓
Groupes de colonnes
   ↓
Décomposition
   ↓
Relations
   ↓
Entités
```

### Construction du modèle conceptuel

```text
Entités
   ↓
Règles de gestion
   ↓
Associations
   ↓
Cardinalités
   ↓
MCD
```

La chaîne complète est donc :

```text
Données
   ↓
Relation de départ
   ↓
Problèmes
   ↓
DF
   ↓
Décomposition
   ↓
Relations
   ↓
Entités
   ↓
Règles de gestion
   ↓
Associations
   ↓
Cardinalités
   ↓
MCD
```

---

# 19. La règle mentale à retenir

Face à une relation, l'apprenant ne doit pas commencer par chercher :

> **« Quelle est mon entité ? »**

Il commence par demander :

> **« Quelles données sont répétées ou posent un problème ? »**

Puis :

> **« Quelle donnée permet de déterminer ces informations ? »**

Puis :

> **« Quelles colonnes dépendent de ce déterminant ? »**

Puis :

> **« Est-ce que ce groupe doit être séparé dans une nouvelle relation ? »**

Puis il recommence avec ce qui reste.

Enfin, seulement après avoir obtenu les relations :

> **« Que représentent ces relations dans le domaine ? »**

Et lorsqu'il connaît les entités :

> **« Quelles règles de gestion définissent leurs relations ? »**

---

# 20. Principe pédagogique central

La démarche repose sur un principe simple :

> **Ne pas enseigner un concept avant que l'apprenant ait rencontré le problème qui rend ce concept nécessaire.**

La dépendance fonctionnelle n'est donc pas présentée d'abord comme une définition mathématique.

Elle apparaît parce que l'apprenant cherche à résoudre un problème de redondance et de cohérence.

L'entité n'est pas présentée au début comme une boîte à remplir.

Elle apparaît après la structuration des relations comme une interprétation conceptuelle de ces structures.

Le MCD n'est pas construit directement à partir des colonnes.

Il est construit après deux étapes distinctes :

```text
Colonnes → DF → Relations → Entités
```

puis :

```text
Entités → Règles de gestion → Associations → Cardinalités → MCD
```

Ainsi, l'apprenant ne mémorise pas seulement une procédure.

Il comprend **pourquoi chaque concept apparaît et à quel problème il répond**.

La démarche devient alors :

> **Problème → observation → question → découverte → règle → application → nouveau problème → nouvelle découverte.**

C'est cette progression qui permet de passer progressivement d'une simple collection de données à un modèle conceptuel cohérent.
