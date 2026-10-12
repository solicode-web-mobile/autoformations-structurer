# Suivi des tâches du Sprint 2 (GitHub Issues)

Pour respecter la gestion de projet et valider **UA.251.11**, voici la décomposition en tâches (Issues) du Sprint 2 :

## Feature : Modélisation et Séparation des responsabilités (Catégories)

*   **[Issue #1]** Vérifier le MCD/MLD existant pour le blog et valider les clés étrangères.
*   **[Issue #2]** Traduire le modèle relationnel en diagramme de classes UML.
*   **[Issue #3]** Analyser le couplage de l'ancien CRUD (Sprint 1) et identifier les méthodes de traitement.
*   **[Issue #4]** Créer la classe `GestionCategorie.php` (Service) et isoler la logique métier.
*   **[Issue #5]** Adapter `Categorie.php` pour qu'elle devienne une simple entité représentant la donnée.
*   **[Issue #6]** Mettre à jour `api.php` pour utiliser `GestionCategorie`.

## Feature : Interactivité SPA et Tailwind
*   **[Issue #7]** Intercepter la soumission du formulaire d'ajout avec `Event.preventDefault()` dans `app.js`.
*   **[Issue #8]** Gérer l'état d'envoi du formulaire (désactiver le bouton de soumission).
*   **[Issue #9]** Ajouter des classes Tailwind pour styliser les messages de succès/erreur.
