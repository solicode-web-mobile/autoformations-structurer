# D.212.1 — Traduire le modèle de données en classes objet

**Mini-code :** `objets`
**Niveau :** N2 — Structurer
**Sprint :** S2

## Capacité finale

**Traduire un MLD en un modèle objet cohérent en identifiant les classes, leurs attributs, leurs identifiants, leurs associations et leurs multiplicités.**

## Entrées

* MLD construit au N1
* Fonctionnalités déjà formalisées
* Relations entre les données

## Livrables

* Diagramme de classes objet
* Classes de données correspondant au modèle

---

# UA.212.11 — Traduire le MLD en modèle objet

**Session :** S2

### Objectif

Passer du modèle relationnel au modèle objet :

**Tables → Classes → Attributs → Identifiants → Associations**

---

## T.212.111 — Transformer les tables en classes

### Notions

* Table → classe
* Colonne → attribut
* Clé primaire → identifiant
* Type SQL → type d'attribut
* Valeur obligatoire / facultative
* Nom de table → nom de classe
* Nom de colonne → nom d'attribut

### Production

Première version du modèle objet :

```text id="v9n2cr"
User
Auteur
Categorie
Article
```

avec leurs attributs et identifiants.

---

## T.212.112 — Transformer les relations en associations

### Notions

* Clé étrangère
* Association entre classes
* Relation 1–1
* Relation 1–N
* Multiplicité
* `1`
* `0..1`
* `*`
* `0..*`
* Rôle d'une association
* Sens d'une relation

### Production

Par exemple :

```text id="x8j4yw"
User       1 ─── 1  Auteur
Categorie  1 ─── *  Article
Auteur     1 ─── *  Article
```

L'apprenant comprend qu'une clé étrangère traduit généralement **une relation entre objets**, et pas simplement une donnée indépendante.

---

## T.212.113 — Vérifier et finaliser le modèle objet

### Notions

* Cohérence MLD / modèle objet
* Cohérence des classes
* Cohérence des attributs
* Cohérence des types
* Cohérence des identifiants
* Cohérence des associations
* Cohérence des multiplicités
* Correspondance modèle objet / fonctionnalités
* Modèle objet statique

### Production

Diagramme de classes final :

```text id="ou8y3r"
User
   │ 1
   │
   │ 1
Auteur
   │
   │ *
   │
Article
   │ *
   │
Categorie
   1
```

---

# Progression de l'UA

```text id="8xk6zq"
MLD
 ↓
Classes + attributs
 ↓
Identifiants
 ↓
Associations + multiplicités
 ↓
Vérification
 ↓
Diagramme de classes final
```

## Limites

D.212.1 ne traite pas encore :

* méthodes ;
* comportements ;
* responsabilités ;
* SRP ;
* services ;
* héritage métier ;
* implémentation PHP ;
* Repository ;
* DAO ;
* architecture en couches.

La question centrale reste :

> **Quelles classes représentent les données de la fonctionnalité et comment sont-elles liées ?**

## Résultat final

L'apprenant obtient le **modèle objet statique** qui servira de base à **D.221.1 — Programmer une fonctionnalité avec des objets**.
