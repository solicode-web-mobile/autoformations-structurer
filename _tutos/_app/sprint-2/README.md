# Application Blog - Sprint 2 (Architecture MVC & UX)

Ce dossier contient la version 2 de notre application d'imitation. L'objectif de ce sprint était de restructurer le code du Sprint 1 (sans le modifier) pour adopter une architecture **MVC (Modèle-Vue-Contrôleur)** avec séparation des responsabilités. L'expérience utilisateur (UX) a également été améliorée via Javascript (Toasts et Spinners).

## Architecture
- **Données (`backend/classes/Categorie.php`) :** Entités pures (POJO) n'ayant aucune logique technique.
- **Logique (`backend/classes/GestionCategorie.php`) :** Couche de Traitement métier, gérant exclusivement la lecture et l'écriture dans le fichier JSON.
- **API (`api/router.php` et `api/controllers/`) :** Les contrôleurs HTTP qui interceptent les appels frontend, sollicitent la couche de gestion, puis retournent le bon format JSON au client.

---

## 🚀 Comment exécuter le projet localement ?

Pour que les appels `fetch()` entre le fichier HTML et le Backend PHP fonctionnent, vous ne pouvez pas simplement ouvrir le fichier `.html` avec un double-clic. Vous devez utiliser un serveur web.

Voici comment utiliser le serveur web intégré de PHP :

### Étape 1 : Ouvrir votre terminal
Ouvrez PowerShell, l'Invite de commandes (CMD) ou le terminal intégré de votre éditeur (ex: VS Code).

### Étape 2 : Naviguer vers le dossier `app`
Positionnez-vous dans le répertoire parent contenant tous les sprints :
```bash
cd d:\spartelskills\05_contenu\contenu.n2.blog\app
```

### Étape 3 : Démarrer le serveur PHP ciblant le sprint 2
Tapez la commande suivante. L'option `-t sprint-2` est primordiale : elle indique au serveur que la racine publique du site est spécifiquement ce sous-dossier.
```bash
php -S localhost:8000 -t sprint-2
```

> **En cas d'erreur `CommandNotFoundException` :** 
> Cela signifie que Windows ne connaît pas la commande `php`. Vous devez installer PHP pour Windows et ajouter son dossier d'installation à la variable d'environnement `PATH` de votre système.

### Étape 4 : Utiliser l'application
Tant que le terminal reste ouvert et que le serveur tourne, ouvrez votre navigateur web et allez à l'adresse :
👉 **http://localhost:8000/**

Vous pouvez maintenant tester l'ajout et l'édition de catégories, et apprécier les nouvelles notifications (Toasts) et les Spinners !
