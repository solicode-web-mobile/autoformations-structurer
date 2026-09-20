# Application Blog - Sprint 3 (Base de données, DAO Factory & Back-office complet)

Ce dossier contient la version 3 de notre application. L'objectif de ce sprint a été d'introduire la **persistance via MySQL** tout en gardant une architecture extrêmement découplée grâce au **Design Pattern DAO Factory**. 
Le Back-office a également été entièrement restructuré pour offrir un véritable Tableau de Bord et des pages distinctes pour gérer les Catégories et les Articles.

## Architecture 3-Tiers Avancée
Le code source est organisé selon des responsabilités strictes :
- **`backend/models/`** : Les classes de données (Entités POJO).
- **`backend/services/`** : Les logiques métiers (Traitements).
- **`backend/dao/`** : La couche d'accès aux données. Divisée en interfaces, implémentations MySQL, implémentations JSON, et orchestrée par `DAOFactory.php`.
- **`backend/storage/`** : Les fichiers plats et scripts SQL.
- **`api/controllers/`** : Les points d'entrée HTTP.

---

## 🚀 Installation & Configuration (Très Important)

Puisque nous utilisons une base de données MySQL et des variables d'environnement, vous devez configurer le projet avant de pouvoir l'utiliser.

### Étape 0 : Pré-requis (Configuration PHP Windows)
Si vous utilisez PHP sous Windows, assurez-vous que votre fichier `php.ini` (ex: `C:\php\php.ini`) est correctement configuré pour se connecter à MySQL :
1. Décommentez le dossier d'extensions avec le chemin absolu : `extension_dir = "C:\php\ext"`
2. Activez l'extension PDO MySQL en décommentant : `extension=pdo_mysql`
*(N'oubliez pas de redémarrer votre serveur PHP après toute modification de ce fichier).*

### Étape 1 : Fichier d'environnement (Mots de passe)
Par sécurité, les mots de passe de la base de données ne sont pas versionnés sur GitHub.
1. Allez dans le dossier `backend/`.
2. Dupliquez le fichier `env.example.php` et renommez-le en **`env.php`**.
3. Ouvrez `env.php` et modifiez les identifiants pour qu'ils correspondent à votre installation MySQL locale (ex: mettez le mot de passe vide `''` si vous êtes sur XAMPP).

### Étape 2 : Lancer le projet
Ouvrez un terminal dans le dossier **`sprint-3`** et lancez le serveur PHP natif avec l'affichage des erreurs activé (très utile pour le débogage) :
```bash
php -S localhost:8000 -d display_errors=1 -d error_reporting=E_ALL
```
*(Astuce : Vous pouvez aussi simplement exécuter le script `serve.ps1` fourni dans le dossier).*

### Étape 3 : Installation Automatique
Au lieu d'importer la base de données manuellement, vous pouvez utiliser la page d'installation :
1. Lancez votre serveur MySQL (WAMP, XAMPP, Laragon, etc.).
2. Accédez à [http://localhost:8000/install.php](http://localhost:8000/install.php).
3. Cliquez sur le bouton "Lancer l'installation MySQL". Le script créera la base de données et les tables pour vous !

- **Site Public :** Allez sur [http://localhost:8000/public-index.php](http://localhost:8000/public-index.php)
- **Tableau de Bord Admin :** Allez sur [http://localhost:8000/index.php](http://localhost:8000/index.php)

---

## Basculer entre MySQL et JSON
Ce sprint démontre la puissance du découplage de l'architecture. Vous pouvez décider à tout moment si l'application doit sauvegarder ses données dans des fichiers JSON ou dans la base de données MySQL !
1. Ouvrez `backend/env.php`.
2. Modifiez la valeur de `storage_type` pour y mettre `'json'` ou `'mysql'`.
3. Rechargez votre page : l'application fonctionnera parfaitement dans les deux cas sans aucune erreur, et sans modifier une seule ligne de code métier !
