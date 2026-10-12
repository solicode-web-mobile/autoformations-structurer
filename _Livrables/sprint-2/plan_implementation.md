# Plan d'implémentation du Sprint 2

Ce plan définit le déroulement du Sprint 2 selon les directives du `cahier_des_charges.md`. 
**Règle absolue :** Tout le code du Sprint 2 doit être écrit dans le dossier `app/sprint-2/`. Le code du `sprint-1` ne doit jamais être modifié.

## Étapes de réalisation proposées

### Étape 1 : Modélisation (MLD et Diagramme de Classes) et Gestion de Projet
*   **Objectif :** Analyser les maquettes pour extraire les données, créer le MLD puis le diagramme de classes, et structurer le travail.
*   **Skills utilisés :** `dev-conception-n2` et `dev-gestion-projet-n2`.
*   **Workflow :**
    1.  Analyse des maquettes et proposition du MLD en format texte.
    2.  Demande de validation du MLD par le concepteur.
    3.  Création du diagramme de classes `conception/classes.mmd` basé sur le MLD validé.
    4.  Création des tâches (Issues) pour GitHub.
    5.  Demande de validation de l'Étape 1.

### Étape 2 : Séparation des Responsabilités (Backend et API)
*   **Objectif :** Refactoriser l'architecture dans le dossier `sprint-2` pour isoler la donnée, la logique métier et le contrôleur HTTP.
*   **Workflow :**
    1.  Création de `sprint-2/backend/classes/Categorie.php` (Attributs uniquement).
    2.  Création de `sprint-2/backend/classes/GestionCategorie.php` (CRUD).
    3.  Création de `sprint-2/api/controllers/CategorieController.php`.
    4.  Création de `sprint-2/api/router.php`.
    5.  Demande de validation.

### Étape 3 : Amélioration de l'Expérience Utilisateur (UX)
*   **Objectif :** Ajouter des indicateurs visuels (Spinners, Toasts) sur la SPA copiée dans `sprint-2`.
*   **Workflow :**
    1.  Amélioration de `sprint-2/assets/js/app.js` et `sprint-2/index.html`.
    2.  Demande de validation finale.
