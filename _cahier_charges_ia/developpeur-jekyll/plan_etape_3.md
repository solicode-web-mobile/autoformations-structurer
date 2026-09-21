# Plan d'Action : Étape 3 - Développement des scripts de synchronisation

L'étape 3 est le cœur de la nouvelle architecture. Elle consiste à développer deux scripts utilitaires (en PowerShell, puisque vous êtes sous Windows) qui automatiseront les échanges de fichiers entre votre site local (`autoformations-structurer`) et le dépôt central (`autoformations-core-theme`), en se basant strictement sur le fichier `theme-sync.json`.

Voici comment nous allons structurer ces deux scripts.

## 1. Le Script `push_theme.ps1`
Ce script servira à envoyer vos modifications locales vers le dépôt central une fois votre travail terminé.

**Logique de fonctionnement :**
1. **Lecture de la configuration :** Le script lit le fichier `theme-sync.json` pour obtenir la liste des dossiers et fichiers autorisés.
2. **Copie des dossiers (`sync_directories`) :** Pour chaque dossier (ex: `assets/css`), le script copie l'intégralité du contenu local vers le dossier correspondant dans `../autoformations-core-theme/`.
3. **Copie des fichiers (`sync_files`) :** Pour chaque fichier (ex: `_layouts/default.html`), le script le copie de manière ciblée vers la destination.
4. **Gestion du versioning (Git) :**
   - Le script acceptera un paramètre optionnel `-Version` (ex: `.\push_theme.ps1 -Version "v1.0.1"`).
   - Il se placera dans le dossier `autoformations-core-theme`.
   - Il exécutera un `git add .` suivi d'un `git commit -m "Mise à jour du socle commun"`.
   - Si une version est fournie, il créera un `git tag`.
   - Enfin, il effectuera un `git push` pour tout synchroniser sur GitHub.

## 2. Le Script `pull_theme.ps1`
Ce script servira à mettre à jour un site (ex: N2, ou N3) avec la dernière version du socle technique.

**Logique de fonctionnement :**
1. **Mise à jour du dépôt distant :** Le script se place d'abord dans `../autoformations-core-theme/` et lance un `git pull` pour récupérer les dernières modifications de GitHub.
   - *Optionnel* : Il pourra accepter un paramètre `-Version` pour se placer sur un tag spécifique (`git checkout v1.0.1`).
2. **Lecture de la configuration :** Le script lit `theme-sync.json` depuis le site actuel.
3. **Importation (`pull`) :** Il fait l'inverse du push. Il copie les dossiers et fichiers listés depuis le dépôt central vers votre site local, écrasant ainsi vos anciens fichiers communs par les nouveaux.
4. **Résultat :** Votre site local est immédiatement à jour sans toucher à vos fichiers de configuration ou à vos layouts de domaines spécifiques.

## Prochaine étape : L'implémentation
Si cette logique vous convient, je vous propose de générer directement le code complet et fonctionnel pour `push_theme.ps1` et `pull_theme.ps1` à la racine de votre projet. 
