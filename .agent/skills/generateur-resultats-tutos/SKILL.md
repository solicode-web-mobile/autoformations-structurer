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
2. **Nom du fichier** : Le format attendu est `T.<tuto_id>.<ext>` (ex: `T.151.111.html`, `T.112.123.md`).
   - Ce format correspond directement au `tuto_id` du Front Matter du tutoriel.

## Layouts Jekyll par Domaine

Pour chaque domaine de tutoriel, un layout Jekyll spécifique doit être utilisé dans le Front Matter du fichier Markdown de résultat.

**Règle absolue pour le Layout :** Le nom du `layout` DOIT correspondre exactement au nom du dossier thmatique dans lequel le résultat est placé.

| Domaine | Dossier `code/` | Layout à utiliser | Type de contenu |
|---------|----------------|-------------------|-----------------|
| Git | `code/git/` | `layout: git` | Simulation de terminal Git |
| Analyse | `code/analyse/` | `layout: analyse` | Tableau / diagramme UML |
| Conception | `code/conception/` | `layout: conception` | Dictionnaire de données / ERD |
| Console JS | `code/js/` | `layout: console` | Sortie console JavaScript |

> **Si le layout du domaine n'existe pas dans `_layouts/`, créez-le** en suivant le modèle ci-dessous.

### Le layout `git` — Simulation de terminal

Le layout `git` est conçu pour les tutoriels du domaine C.151. Il affiche une fenêtre de terminal stylée (fond sombre, barre de titre avec 3 dots) et fournit des classes utilitaires :

| Classe CSS | Rôle | Couleur |
|---|---|---|
| `.prompt` | Le `$` ou `>` devant la commande | Bleu |
| `.command` | La commande tapée | Vert |
| `.output` | La sortie standard | Blanc |
| `.error` | Un message d'erreur | Rouge |
| `.muted` | Un commentaire | Gris |
| `.badge-ok` | Badge « ✓ OK » | Vert |
| `.badge-err` | Badge « ✗ Erreur » | Rouge |
| `.section-title` | Titre de section dans le terminal | Bleu clair |
| `.cmd-line` | Ligne de commande (marge) | — |
| `.out-line` | Ligne de sortie (marge indentée) | — |

**Exemple d'utilisation :**
```html
---
layout: git
title: "Résultat — Mon tuto Git"
nav_exclude: true
---
<p class="section-title">🖥️ Vérification</p>
<p class="cmd-line"><span class="prompt">$</span> <span class="command">git --version</span></p>
<p class="out-line"><span class="output">git version 2.43.0</span> <span class="badge-ok">✓ installé</span></p>
```

### Modèle de layout type (à stocker dans _layouts/[domaine].html) :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>{{ page.title | default: "Résultat" }}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        pre { border-radius: 5px; overflow-x: auto; } /* Sera stylisé par highlight.js */
    </style>
    
    <!-- Scripts obligatoires si le résultat contient des diagrammes (Mermaid) ou du code (Highlight.js) -->
    <script type="module" src="{{ '/assets/js/mermaid-init.js' | relative_url }}"></script>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/vs2015.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/highlight.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll("pre code").forEach(function (block) {
                hljs.highlightElement(block);
            });
        });
    </script>
</head>
<body><div class="container">{{ content }}</div></body>
</html>
```

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
