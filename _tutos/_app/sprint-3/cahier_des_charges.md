# Cahier des Charges - Sprint 3

## Objectif Principal
Ajouter la gestion des articles tout en franchissant un nouveau cap architectural : l'isolation totale de la couche d'accès aux données (Data).

## Étapes de réalisation

### Étape 1 : Développement des Nouveaux Objets (Backend et API)
* **Tâche :** Mettre à jour la conception (diagramme de classes) pour y intégrer l'Article.
* **Tâche :** Créer le CRUD pour les Articles en appliquant la séparation vue au sprint précédent (classes `Article`, `GestionArticle` et `ArticleController`).
* **Résultat attendu :** Un système backend complet (Modèle, Traitement, Contrôleur) capable de gérer les articles.

### Étape 2 : Isolation de l'Accès aux Données (Data) et Introduction de SQL
* **Tâche :** Remplacer le stockage JSON par une véritable base de données relationnelle MySQL (Création du script SQL).
* **Tâche :** Créer une nouvelle couche spécifique pour interagir avec cette base de données via PDO (couche DAO / Data).
* **Tâche :** Modifier les classes de Traitement (`GestionCategorie`, `GestionArticle`) pour qu'elles ne manipulent plus directement les fichiers JSON. Elles doivent faire appel à la couche Data.
* **Tâche :** S'assurer que la couche Data retourne des objets (ou listes d'objets) à la couche Traitement.
* **Résultat attendu :** Le traitement est complètement découplé de la base de données.

### Étape 3 : API Structurée en Contrôleurs (JSON)
* **Tâche :** Déplacer la logique du fichier `api.php` basique (créé au Sprint 1) vers des vrais contrôleurs orientés objet (`CategorieController`, `ArticleController`).
* **Tâche :** S'assurer que ces nouveaux contrôleurs continuent de renvoyer exclusivement du JSON, et adapter le Javascript pour gérer également les articles.
* **Résultat attendu :** Une API propre et scalable, prête à gérer plusieurs entités, tout en conservant le fonctionnement SPA.

### Étape 4 : Présentation Avancée (Frontend)
* **Tâche :** Utiliser les grilles Tailwind CSS (Grid) pour afficher la liste des articles de manière moderne et esthétique.
* **Résultat attendu :** Une page d'accueil d'articles bien présentée.

## Architecture Attendue (Fin du Sprint 3)
Voici l'arborescence type attendue à la fin de ce sprint :

```text
sprint-3/
├── assets/
│   ├── css/
│   │   └── style.css       (Fichier CSS, incluant Tailwind)
│   └── js/
│       └── app.js          (Script gérant l'interactivité et la consommation JSON)
├── backend/
│   ├── classes/
│   │   ├── Categorie.php   (Modèle de données)
│   │   ├── Article.php     (Modèle de données)
│   │   ├── GestionCategorie.php (Traitement métier)
│   │   └── GestionArticle.php   (Traitement métier)
│   └── data/
│       ├── Database.php    (Gestion de la connexion PDO)
│       ├── CategorieDAO.php (Accès aux données SQL pour Catégorie)
│       └── ArticleDAO.php   (Accès aux données SQL pour Article)
├── api/
│   ├── router.php                 (Point d'entrée)
│   └── controllers/
│       ├── CategorieController.php (Contrôleur HTTP pour les catégories)
│       └── ArticleController.php   (Contrôleur HTTP pour les articles)
├── conception/
│   ├── use_cases.mmd       (Hérité)
│   └── classes.mmd         (Mis à jour avec l'entité Article)
└── index.html              (Interface principale, affichage en grille)
```
