---
name: generateur-resultats-tutos
description: >-
  Génère les fichiers de résultats de tutoriels. Utilisez ce skill après la création d'un tutoriel par le rédacteur-tutos pour créer le fichier de résultat attendu dans le dossier code/.
---

# Générateur de Résultats de Tutoriels

Vous êtes responsable de la création des fichiers de résultats pour chaque tutoriel rédigé. 
Ces fichiers servent à afficher le rendu final attendu ou l'état de la console à la fin d'un tutoriel, souvent intégrés via des `iframe` dans le tutoriel principal.

## Emplacement et Nommage

1. **Dossier cible** : Les fichiers doivent être enregistrés dans le répertoire `code/<domaine>/` à la racine du projet (ex: `code/git/`).
2. **Nom du fichier** : Le format attendu est `tuto-<id>-<domaine>.<ext>`.
   - Exemple pour Git : `tuto-11-git.md`
   - Exemple pour CSS : `tuto-1-css.html`

## Layouts Jekyll par Domaine

Pour chaque domaine de tutoriel, un layout Jekyll spécifique doit être utilisé dans le Front Matter du fichier Markdown de résultat.

**Règle absolue pour le Layout :** Le nom du `layout` DOIT correspondre exactement au nom du "mini-code-domaine" (c'est-à-dire le nom du dossier thématique dans lequel le résultat est placé).
* Par exemple, si le résultat est placé dans le dossier `code/conception/...`, le front matter doit contenir `layout: conception`.
* Si le résultat est placé dans `code/html/...`, utiliser `layout: html`.
* **Si le layout du domaine n'existe pas encore**, vous devez le créer dans le dossier `_layouts/` du projet (ex: `_layouts/conception.html`).

**Règle absolue pour la navigation :** Tous les fichiers de résultat au format Markdown DOIVENT obligatoirement inclure `nav_exclude: true` dans leur Front Matter pour éviter qu'ils n'apparaissent dans le menu de navigation latéral de Just the Docs.

## Structure du Fichier Résultat (Exemple Markdown)

Si le résultat est un fichier Markdown utilisant un layout :

```markdown
---
layout: conception
title: "Résultat Tuto 11 Git"
nav_exclude: true
---

<span class="prompt">$</span> <span class="command">git status</span><br>
<span class="output" style="color:#d16969;">modified: mon_fichier.php</span><br><br>
```

## Étapes d'exécution

1. **Identifier le tutoriel** : Récupérer le domaine (ex: `git`), l'ID du tuto (ex: `11`) et le code final/rendu attendu depuis le tutoriel fraîchement rédigé.
2. **Déterminer le format et le layout** : Choisir si le résultat doit être un `.md` (avec Front Matter et layout Jekyll) ou un `.html` brut. 
3. **Créer le fichier** : Générer le fichier dans `code/<domaine>/tuto-<id>-<domaine>.<ext>`.
4. **Rédiger le contenu** : Insérer le code, la simulation de terminal ou le rendu HTML/CSS représentant exactement la fin du tutoriel.
5. **Intégrer le résultat dans le tutoriel** : Après la création du fichier dans `code/`, vous DEVEZ modifier le fichier Markdown du tutoriel d'origine pour y insérer ce bloc HTML (sous la section `Résultat attendu`) :

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/<chemin-du-resultat>/' | relative_url }}"
    height="320"
    title="Résultat attendu">
</iframe>
```
*(Adaptez le chemin `src`, la hauteur `height` et le `title` en fonction du résultat généré).*
