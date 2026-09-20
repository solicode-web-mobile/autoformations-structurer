# Tableau de Bord - Issues GitHub (Sprint 2)

Voici la liste des tâches à créer sous forme d'Issues dans votre dépôt GitHub pour organiser le travail de ce Sprint.

## Étape 1 : Conception
- [x] **Issue #1 :** Créer le Modèle Logique de Données (MLD) à partir des maquettes.
- [x] **Issue #2 :** Créer le diagramme de classes UML (`conception/classes.mmd`) pour préparer l'architecture 3-tiers.

## Étape 2 : Architecture Backend (Séparation des Responsabilités)
- [ ] **Issue #3 :** Refactoriser la classe `Categorie` pour qu'elle ne soit qu'un objet de données (POJO / Entité).
- [ ] **Issue #4 :** Créer la classe `GestionCategorie` pour encapsuler la lecture et l'écriture dans le fichier `categories.json` (Logique Métier).
- [ ] **Issue #5 :** Créer `CategorieController` et `router.php` pour remplacer le script `api.php` monolithique.

## Étape 3 : UX Frontend
- [ ] **Issue #6 :** Ajouter des indicateurs de chargement (Spinners) sur les boutons du formulaire lors d'un `fetch` asynchrone.
- [ ] **Issue #7 :** Intégrer des messages "Toast" (succès/erreur) avec Tailwind pour informer l'utilisateur de l'état de son action.
