---
title: "Comprendre les entités"
layout: tuto
slug: "comprendre-entites"
permalink: /tutos/:slug/compact
tuto_id: "T.201.123"
version: "compact"
------------------

## 1. Objectif

À partir des dépendances fonctionnelles identifiées dans le tutoriel précédent, regrouper les informations et comprendre ce qu’elles représentent dans le **domaine** de l’application.

À la fin de ce tutoriel, vous saurez :

* ce qu’est le domaine d’une application ;
* ce qu’est une entité ;
* pourquoi un groupe de données peut représenter une entité ;
* identifier les entités à partir des groupes obtenus.

---

## 2. Reprendre le résultat précédent

Dans le tutoriel précédent, nous avons identifié :

```text
id_article → titre_article
id_article → contenu_article
id_article → date_publication
id_article → id_auteur
id_article → id_categorie

id_auteur → nom_auteur
id_auteur → email_auteur

id_categorie → nom_categorie
id_categorie → description_categorie
```

Ces dépendances nous permettent de regrouper les informations :

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

Nous avons maintenant plusieurs **groupes de données**.

Mais une nouvelle question apparaît :

> **Que représentent réellement ces groupes ?**

---

## 3. Qu’est-ce que le domaine ?

Avant de répondre, il faut comprendre ce que l’on appelle le **domaine**.

Le domaine correspond à la **réalité que l’application doit gérer**.

Dans notre exemple, nous développons un blog.

Le domaine est donc tout ce qui concerne la gestion du blog :

```text
Articles
Auteurs
Catégories
Publication
...
```

Le domaine ne correspond pas aux tables de la base de données.

C’est **le contexte réel que le logiciel doit représenter et gérer**.

### Exemple

Pour une application de gestion d’un blog :

```text
Domaine
   ↓
Blog
   ↓
Articles
Auteurs
Catégories
```

Pour une application de gestion d’une bibliothèque :

```text
Domaine
   ↓
Bibliothèque
   ↓
Livres
Auteurs
Adhérents
Emprunts
```

Le domaine dépend donc de **ce que l’application doit gérer**.

---

## 4. Rechercher ce que représente un groupe

Reprenons :

```text
id_auteur
nom_auteur
email_auteur
```

Posons une question simple :

> **Ces informations représentent quoi dans le domaine du blog ?**

Elles représentent :

```text
Un auteur
```

Nous pouvons alors donner un nom au groupe :

```text
AUTEUR
```

---

## 5. Qu’est-ce qu’une entité ?

Une **entité** représente un type d’objet du domaine sur lequel l’application doit conserver des informations.

Dans notre exemple :

```text
AUTEUR
```

est une entité parce qu’un auteur :

* existe dans le domaine du blog ;
* représente un objet que l’application doit gérer ;
* possède des informations que l’application doit mémoriser.

Ces informations sont :

```text
id_auteur
nom_auteur
email_auteur
```

On obtient donc :

```text
AUTEUR
- id_auteur
- nom_auteur
- email_auteur
```

---

## 6. Pourquoi ce groupe est-il une entité ?

Il faut retenir le raisonnement, pas seulement le résultat.

Nous avions :

```text
id_auteur
 ├── nom_auteur
 └── email_auteur
```

Puis nous avons posé trois questions :

```text
1. Ces informations décrivent-elles la même chose ?
2. Cette chose existe-t-elle dans le domaine ?
3. L’application doit-elle conserver des informations sur cette chose ?
```

Les réponses sont :

```text
Oui
Oui
Oui
```

Nous pouvons donc interpréter le groupe comme une **entité**.

Le nom de l’entité vient de ce que le groupe **représente dans le domaine**.

---

## 7. Identifier l’entité Catégorie

Même raisonnement :

```text
id_categorie
 ├── nom_categorie
 └── description_categorie
```

Que représente ce groupe dans le domaine du blog ?

```text
Une catégorie
```

Nous obtenons :

```text
CATEGORIE
- id_categorie
- nom_categorie
- description_categorie
```

---

## 8. Identifier l’entité Article

Considérons :

```text
id_article
 ├── titre_article
 ├── contenu_article
 ├── date_publication
 ├── id_auteur
 └── id_categorie
```

Que représente ce groupe dans le domaine ?

```text
Un article
```

Nous obtenons :

```text
ARTICLE
- id_article
- titre_article
- contenu_article
- date_publication
- id_auteur
- id_categorie
```

---

## 9. Les entités obtenues

Nous avons maintenant identifié :

```text
ARTICLE

AUTEUR

CATEGORIE
```

À partir des groupes de données :

```text
id_article → informations de l'article
id_auteur → informations de l'auteur
id_categorie → informations de la catégorie
```

Le raisonnement complet est :

```text
Données
   ↓
Dépendances fonctionnelles
   ↓
Groupes de données
   ↓
Que représente chaque groupe dans le domaine ?
   ↓
Entités
```

---

## 10. Attention : un groupe n’est pas automatiquement une entité

Une dépendance fonctionnelle permet de **structurer les données**.

Mais elle ne suffit pas, à elle seule, à décider du nom métier du groupe.

Par exemple :

```text
id_auteur
nom_auteur
email_auteur
```

ne devient pas automatiquement `AUTEUR` uniquement parce qu’il existe une dépendance :

```text
id_auteur → nom_auteur, email_auteur
```

Nous devons aussi comprendre **ce que ces informations représentent dans le domaine**.

C’est l’interprétation métier qui permet de dire :

```text
Ce groupe représente un auteur.
```

Donc :

```text
DF
→ structure des données

Domaine
→ signification des données

DF + interprétation du domaine
→ entités candidates
```

---

## 11. Résultat

Nous pouvons maintenant représenter les entités identifiées :

```text
ARTICLE
- id_article
- titre_article
- contenu_article
- date_publication
- id_auteur
- id_categorie
```

```text
AUTEUR
- id_auteur
- nom_auteur
- email_auteur
```

```text
CATEGORIE
- id_categorie
- nom_categorie
- description_categorie
```

Nous savons maintenant :

> **Une entité représente un type d’objet du domaine sur lequel l’application doit conserver des informations.**

Et nous savons pourquoi les groupes précédemment identifiés peuvent être interprétés comme des entités.

---

## 12. À retenir

Le **domaine** est la réalité que l’application doit gérer.

Une **entité** représente un type d’objet de cette réalité.

Dans notre exemple :

```text
Domaine : Blog

Entités :
- Article
- Auteur
- Catégorie
```

La démarche suivie est :

```text
Dépendances fonctionnelles
        ↓
Groupes de données
        ↓
Interprétation dans le domaine
        ↓
Entités
```

Nous pouvons maintenant nous demander :

> **Comment ces entités sont-elles liées entre elles ?**

C’est cette question qui permettra d’introduire ensuite les **règles de gestion, les associations et les cardinalités**.
