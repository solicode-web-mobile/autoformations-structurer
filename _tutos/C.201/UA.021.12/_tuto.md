Avec le **Domaine D.201.1** fourni, on peut maintenant confirmer la logique générale de l’UA **UA.021.12**.

La progression du domaine est clairement :

**Maquette → Informations → Dictionnaire de données → Dépendances fonctionnelles → Entités → Propriétés → Associations → Cardinalités → MCD**

Pour l’UA **UA.021.12 — Analyser les données et identifier les entités**, je recommande donc **3 tutoriels**, et non 2, car les dépendances fonctionnelles et l’identification des entités sont deux apprentissages distincts.

| Ordre | Code        | Titre                                                              | Production      |
| ----- | ----------- | ------------------------------------------------------------------ | --------------- |
| 1     | `T.021.121` | **Comprendre les dépendances fonctionnelles**                      | Présentation    |
| 2     | `T.021.122` | **Identifier les dépendances fonctionnelles**                      | Analyse du Blog |
| 3     | `T.021.123` | **Identifier les entités à partir des dépendances fonctionnelles** | Analyse du Blog |

### Tuto 1 — Comprendre les dépendances fonctionnelles

L’apprenant découvre :

* dépendance fonctionnelle ;
* donnée déterminante ;
* donnée dépendante ;
* relation entre les données ;
* identifiant ;
* unicité.

**Livrable :** présentation expliquant la dépendance fonctionnelle avec des exemples simples.

### Tuto 2 — Identifier les dépendances fonctionnelles

L’apprenant utilise le **dictionnaire de données du Blog personnel**.

Il analyse les données de :

* Article ;
* Auteur ;
* Catégorie.

Il cherche quelles données permettent de déterminer les autres.

**Livrable :** tableau des dépendances fonctionnelles identifiées.

### Tuto 3 — Identifier les entités à partir des dépendances fonctionnelles

L’apprenant reprend son analyse du Tuto 2.

Il regroupe les données qui décrivent le même **objet métier** et identifie :

* les entités ;
* leurs propriétés ;
* leurs attributs ;
* leurs identifiants.

Exemple de résultat :

```text
Article
- id_article
- titre_article
- contenu_article
- date_publication

Auteur
- id_auteur
- nom_auteur
- email_auteur

Catégorie
- id_categorie
- libelle_categorie
```

**Livrable :** liste des entités avec leurs propriétés et leurs identifiants.

### Cohérence avec le domaine

Cette organisation prépare directement la suite du domaine :

**UA.021.12**
→ identifier les dépendances et les entités

**UA suivante**
→ identifier les associations et les cardinalités

**UA suivante**
→ construire et vérifier le MCD

Ainsi, on évite de faire découvrir les **associations et cardinalités** trop tôt dans cette UA.
