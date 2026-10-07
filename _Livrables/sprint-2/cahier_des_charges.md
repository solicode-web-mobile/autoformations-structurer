# Cahier des Charges - Sprint 2

## Objectif Principal
Améliorer l'architecture du code existant en séparant les responsabilités entre les objets, et organiser le travail en équipe grâce au suivi de projet.

## Étapes de réalisation

### Étape 1 : Modélisation et Gestion de Projet
* **Tâche :** Traduire le modèle relationnel existant en modèle objet (diagramme de classes).
* **Tâche :** Créer un dépôt sur GitHub (si ce n'est pas fait) et utiliser les "Issues" pour lister et décomposer les tâches de ce sprint.
* **Résultat attendu :** Un diagramme de classes (fichier `.mmd`) et un tableau de bord GitHub reflétant l'avancement du travail.

### Étape 2 : Séparation des Responsabilités (Backend et API)
* **Tâche :** Analyser la classe `Categorie` existante et séparer ses différents rôles.
* **Tâche :** Créer une classe `GestionCategorie` dédiée aux traitements (logique métier, lecture/écriture du fichier JSON) et un `CategorieController` pour gérer la réception des requêtes HTTP.
* **Tâche :** Conserver la classe `Categorie` uniquement pour représenter la donnée (les attributs d'une catégorie).
* **Résultat attendu :** Un code organisé où chaque classe a un rôle unique (Donnée, Traitement métier, ou Contrôleur HTTP).

### Étape 3 : Amélioration de l'Expérience Utilisateur (UX)
* **Tâche :** Enrichir le Javascript développé au Sprint 1 (SPA) en ajoutant une gestion d'état avancée lors des soumissions (ex: désactiver le bouton pendant la requête).
* **Tâche :** Ajouter des indicateurs visuels dynamiques (messages "Toast" de succès ou d'erreur, spinners de chargement) en utilisant Tailwind CSS.
* **Résultat attendu :** Une expérience utilisateur (UX) professionnelle, robuste et fluide pour toutes les actions asynchrones.

## Architecture Attendue (Fin du Sprint 2)
Voici l'arborescence type attendue à la fin de ce sprint :

```text
sprint-2/
├── assets/
│   ├── css/
│   │   └── style.css       (Fichier CSS, incluant Tailwind)
│   └── js/
│       └── app.js          (Script gérant l'interactivité et la gestion d'état)
├── backend/
│   └── classes/
│       ├── Categorie.php          (Classe modèle : Représentation de la donnée)
│       └── GestionCategorie.php   (Classe de traitement : Logique métier)
├── api/
│   ├── router.php                 (Point d'entrée redirigeant vers les contrôleurs)
│   └── controllers/
│       └── CategorieController.php (Contrôleur gérant les requêtes HTTP)
├── conception/
│   ├── use_cases.mmd       (Hérité du Sprint 1)
│   └── classes.mmd         (Nouveau livrable : Diagramme de classes)
└── index.html              (Interface principale HTML)
```
