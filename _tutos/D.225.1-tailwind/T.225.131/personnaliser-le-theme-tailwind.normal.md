---
title: "Personnaliser le thème Tailwind"
layout: tuto
slug: "personnaliser-theme-tailwind"
permalink: /tutos/:slug/
tuto_id: "T.225.131"
type: "classique"
version: "normal"
ua: "UA.225.13"
nav_order: 1
data_html: |

  <!DOCTYPE html>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Administration - Blog</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <script>
      tailwind.config = {
          theme: {
              extend: {}
          }
      }
  </script>

  </head>

  <body class="bg-gray-100 text-gray-800 min-h-screen">

  <div class="flex min-h-screen">

      <aside class="hidden md:flex w-64 bg-gray-900 text-white p-6 flex-col">

          <div>
              <h2 class="text-xl font-bold">
                  Admin Blog
              </h2>

              <p class="text-sm text-gray-400 mt-1">
                  Sprint 3
              </p>
          </div>

          <nav class="flex flex-col gap-2 mt-6">
              <a href="#" class="px-4 py-2 rounded">
                  Tableau de bord
              </a>

              <a href="#" class="px-4 py-2 rounded">
                  Articles
              </a>

              <a href="#" class="px-4 py-2 rounded">
                  Catégories
              </a>
          </nav>

      </aside>

      <div class="flex-1 flex flex-col">

          <header class="flex items-center justify-between bg-white p-4 md:p-6 border-b border-gray-200">

              <div class="text-sm font-medium text-gray-600">
                  Gestion des catégories
              </div>

              <span class="text-sm font-semibold">
                  Admin
              </span>

          </header>

          <main class="flex-1 p-4 md:p-6">

              <div class="max-w-5xl mx-auto space-y-6 md:space-y-8">

                  <section class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                      <div>
                          <h1 class="text-2xl font-bold text-gray-900">
                              Catégories
                          </h1>

                          <p class="text-sm text-gray-500">
                              Organisez les rubriques de votre blog.
                          </p>
                      </div>

                      <button
                          type="button"
                          class="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg">
                          + Nouvelle Catégorie
                      </button>

                  </section>

                  <section class="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">

                      <h2 class="text-lg font-bold text-gray-900 mb-4">
                          Ajouter / Modifier une catégorie
                      </h2>

                      <form class="space-y-4">

                          <div>
                              <label
                                  for="cat-nom"
                                  class="block text-sm font-semibold text-gray-700 mb-1">
                                  Nom de la catégorie
                              </label>

                              <input
                                  type="text"
                                  id="cat-nom"
                                  placeholder="Ex: Développement Web"
                                  class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-blue-500
                                         focus:border-blue-500">
                          </div>

                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                              <div>
                                  <label
                                      for="cat-couleur"
                                      class="block text-sm font-semibold text-gray-700 mb-1">
                                      Couleur
                                  </label>

                                  <select
                                      id="cat-couleur"
                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                             focus:outline-none focus:ring-2 focus:ring-blue-500
                                             focus:border-blue-500">
                                      <option value="">
                                          Choisir une couleur
                                      </option>

                                      <option value="Bleu">
                                          Bleu
                                      </option>

                                      <option value="Rose">
                                          Rose
                                      </option>

                                      <option value="Emeraude">
                                          Émeraude
                                      </option>

                                      <option value="Violet">
                                          Violet
                                      </option>
                                  </select>
                              </div>

                              <div>
                                  <label
                                      for="cat-icone"
                                      class="block text-sm font-semibold text-gray-700 mb-1">
                                      Icône
                                  </label>

                                  <select
                                      id="cat-icone"
                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                             focus:outline-none focus:ring-2 focus:ring-blue-500
                                             focus:border-blue-500">
                                      <option value="">
                                          Choisir une icône
                                      </option>

                                      <option value="Code">
                                          Code
                                      </option>

                                      <option value="Pinceau">
                                          Pinceau / Crayon
                                      </option>

                                      <option value="Eclair">
                                          Éclair
                                      </option>

                                      <option value="Livre">
                                          Livre
                                      </option>
                                  </select>
                              </div>

                          </div>

                          <div class="flex flex-col gap-2 md:flex-row md:justify-end">

                              <button
                                  type="button"
                                  class="w-full md:w-auto px-4 py-2 text-gray-600
                                         border border-gray-300 rounded-lg
                                         hover:bg-gray-100 transition">
                                  Annuler
                              </button>

                              <button
                                  type="submit"
                                  class="w-full md:w-auto px-4 py-2 bg-blue-600
                                         text-white rounded-lg
                                         hover:bg-blue-700 transition">
                                  Enregistrer
                              </button>

                          </div>

                      </form>

                  </section>

              </div>

          </main>

      </div>

  </div>

data_css: ""
data_js: ""
---

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à personnaliser le thème Tailwind CSS pour utiliser les mêmes valeurs visuelles dans toute l'application.

Vous allez apprendre à :

* modifier la configuration du thème ;
* ajouter une couleur personnalisée ;
* utiliser une couleur avec plusieurs niveaux ;
* créer des valeurs cohérentes pour l'interface ;
* personnaliser une largeur utilisée par la mise en page ;
* personnaliser une valeur d'espacement ;
* remplacer progressivement les couleurs utilisées directement dans les classes ;
* utiliser un même vocabulaire visuel sur plusieurs composants.

Vous allez construire le thème utilisé par l'interface d'administration du projet.

Le projet utilise notamment une couleur principale :

```text
primary-50
primary-500
primary-600
primary-900
```

## 2. Prérequis

Vous devez avoir réalisé :

> T.225.111 — Structurer une interface avec les utilitaires Tailwind.

> T.225.112 — Mettre en forme les composants de l'interface.

> T.225.121 — Rendre l'interface responsive.

> T.225.122 — Gérer les états visuels.

Vous devez connaître :

* les classes utilitaires Tailwind ;
* les couleurs `bg-*` et `text-*` ;
* les espacements ;
* les largeurs ;
* les breakpoints ;
* les états `hover:` et `focus:`.

## Données de départ

### HTML

L'interface contient déjà :

* une sidebar ;
* un header ;
* un formulaire ;
* des boutons ;
* une mise en page responsive.

Les couleurs sont actuellement écrites directement dans les classes.

Exemple :

```html
<button class="bg-blue-600 text-white">
    Enregistrer
</button>
```

Votre travail consiste à remplacer progressivement ces valeurs par les couleurs du thème.

### CSS

Aucun CSS personnalisé n'est utilisé.

### JavaScript

Aucun JavaScript n'est nécessaire.

Le tutoriel porte uniquement sur la configuration et l'utilisation du thème Tailwind.

## Partie 1 — Théorie

### 1.1. Le thème Tailwind

Le thème contient les valeurs visuelles utilisées par l'application.

Il peut définir notamment :

* les couleurs ;
* les espacements ;
* les tailles ;
* les largeurs ;
* d'autres valeurs utilisées par les classes Tailwind.

L'objectif est d'éviter d'utiliser des valeurs différentes sans raison.

### 1.2. La configuration Tailwind

Avec le CDN utilisé dans notre projet, la configuration peut être définie avec :

```javascript
tailwind.config = {
    theme: {
        extend: {}
    }
};
```

Cette configuration permet d'étendre le thème existant.

### 1.3. `extend`

`extend` permet d'ajouter des valeurs au thème sans remplacer toutes les valeurs existantes.

Exemple :

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#2673e8'
                }
            }
        }
    }
};
```

Tailwind conserve ses valeurs existantes et ajoute notre valeur personnalisée.

### 1.4. Créer une couleur `primary`

Au lieu d'utiliser directement :

```text
blue-600
```

le projet peut utiliser :

```text
primary-600
```

La couleur devient ainsi une couleur de l'application.

Exemple :

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f6ff',
                    500: '#2673e8',
                    600: '#1c5bba',
                    900: '#0a2042'
                }
            }
        }
    }
};
```

Vous pouvez ensuite utiliser :

```html
<button class="bg-primary-600">
    Enregistrer
</button>
```

### 1.5. Plusieurs niveaux d'une même couleur

Une couleur principale peut avoir plusieurs niveaux.

Dans notre projet :

```text
primary-50
primary-500
primary-600
primary-900
```

Les niveaux n'ont pas tous le même usage.

Par exemple :

```text
primary-50
→ fond très clair

primary-500
→ couleur principale

primary-600
→ bouton principal

primary-900
→ couleur très foncée
```

Le but est de créer une famille cohérente.

### 1.6. Pourquoi utiliser `primary-*` ?

Comparez :

```html
<button class="bg-blue-600">
```

et :

```html
<button class="bg-primary-600">
```

La deuxième écriture exprime mieux l'intention.

```text
blue-600
→ couleur Tailwind

primary-600
→ couleur principale de notre application
```

Si l'identité visuelle du projet change plus tard, il est plus simple de modifier le thème.

### 1.7. Le système d'espacement

Tailwind possède déjà un système d'espacement.

Exemples :

```text
p-4
p-6
gap-2
gap-4
space-y-6
```

Une interface cohérente réutilise ces valeurs.

On évite par exemple :

```text
p-3
p-5
p-7
p-11
```

partout sans raison.

### 1.8. Ajouter une valeur d'espacement

Le thème peut également être étendu.

Exemple :

```javascript
tailwind.config = {
    theme: {
        extend: {
            spacing: {
                18: '4.5rem'
            }
        }
    }
};
```

Vous pouvez ensuite utiliser :

```html
<div class="p-18">
    ...
</div>
```

Cette valeur devient disponible dans les utilitaires utilisant l'espacement.

### 1.9. Personnaliser une largeur

On peut également définir une largeur spécifique au projet.

Exemple :

```javascript
tailwind.config = {
    theme: {
        extend: {
            width: {
                sidebar: '16rem'
            }
        }
    }
};
```

Vous pouvez ensuite écrire :

```html
<aside class="w-sidebar">
    ...
</aside>
```

La valeur `16rem` n'est plus écrite directement dans le HTML.

### 1.10. Valeurs cohérentes

Un thème ne doit pas contenir beaucoup de valeurs différentes.

L'objectif est de choisir quelques valeurs réutilisables.

Exemple :

```text
Couleur principale
→ primary

Sidebar
→ w-sidebar

Espacement principal
→ valeurs Tailwind communes

Contenu
→ max-w-5xl
```

L'interface devient plus facile à harmoniser.

### 1.11. Le thème ne remplace pas les classes utilitaires

Le thème définit les valeurs.

Les classes utilisent ces valeurs.

Exemple :

```text
Thème
   ↓
primary-600 = #1c5bba
   ↓
Classe HTML
   ↓
bg-primary-600
```

Le thème ne construit pas automatiquement les composants.

### 1.12. À retenir

* Le thème regroupe les valeurs visuelles du projet.
* `extend` permet d'ajouter des valeurs.
* `primary-*` peut représenter la couleur principale de l'application.
* Plusieurs niveaux permettent d'utiliser une même famille de couleurs.
* Le système d'espacement doit rester cohérent.
* Une largeur personnalisée peut être définie dans le thème.
* Le HTML utilise ensuite les classes correspondant au thème.
* Le thème facilite les changements visuels globaux.

## Partie 2 — Pratique

### 2.1. Préparer la configuration

Dans le `<head>`, repérez :

```html
<script>
    tailwind.config = {
        theme: {
            extend: {}
        }
    }
</script>
```

Vous allez compléter cette configuration.

### 2.2. Ajouter la couleur principale

Remplacez la configuration par :

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f6ff',
                        500: '#2673e8',
                        600: '#1c5bba',
                        900: '#0a2042'
                    }
                }
            }
        }
    }
</script>
```

Le thème contient maintenant une famille `primary`.

### 2.3. Tester `primary-600`

Remplacez :

```html
class="bg-blue-600"
```

par :

```html
class="bg-primary-600"
```

Exemple :

```html
<button
    type="button"
    class="px-4 py-2 bg-primary-600 text-white rounded-lg">
    + Nouvelle Catégorie
</button>
```

Le bouton utilise maintenant la couleur du thème.

### 2.4. Utiliser `primary-900`

Modifiez la sidebar :

```html
<aside
    class="hidden md:flex w-64 bg-primary-900 text-white p-6 flex-col">
```

La sidebar utilise maintenant la même famille de couleurs.

Le thème relie visuellement :

```text
Sidebar
   ↓
primary-900

Bouton principal
   ↓
primary-600
```

### 2.5. Utiliser `primary-500`

Ajoutez une information utilisant une valeur intermédiaire :

```html
<p class="text-primary-500 text-sm font-semibold">
    Sprint 3
</p>
```

La couleur provient du même thème.

### 2.6. Utiliser `primary-50`

Pour créer un fond très clair :

```html
<div class="bg-primary-50 p-4 rounded-lg">
    Zone d'information
</div>
```

Vous utilisez maintenant les différents niveaux :

```text
primary-50
primary-500
primary-600
primary-900
```

### 2.7. Remplacer les couleurs principales

Cherchez dans l'interface :

```text
bg-blue-600
text-blue-600
focus:ring-blue-500
focus:border-blue-500
hover:bg-blue-700
```

Remplacez les valeurs principales par les couleurs du thème lorsque cela est prévu.

Par exemple :

```text
bg-blue-600
→ bg-primary-600
```

et :

```text
text-blue-600
→ text-primary-600
```

Pour le `hover`, vous pouvez utiliser le niveau principal disponible :

```text
hover:bg-primary-900
```

ou conserver une variante du thème adaptée à votre projet.

L'objectif est que les éléments principaux utilisent le même vocabulaire.

### 2.8. Personnaliser la largeur de la sidebar

Dans la configuration, ajoutez :

```javascript
width: {
    sidebar: '16rem'
}
```

La configuration devient :

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f6ff',
                        500: '#2673e8',
                        600: '#1c5bba',
                        900: '#0a2042'
                    }
                },

                width: {
                    sidebar: '16rem'
                }
            }
        }
    }
</script>
```

Remplacez :

```html
class="w-64"
```

par :

```html
class="w-sidebar"
```

La sidebar utilise maintenant une valeur définie par le thème.

### 2.9. Ajouter un espacement personnalisé

Ajoutez dans `extend` :

```javascript
spacing: {
    18: '4.5rem'
}
```

La configuration contient maintenant :

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f6ff',
                        500: '#2673e8',
                        600: '#1c5bba',
                        900: '#0a2042'
                    }
                },

                width: {
                    sidebar: '16rem'
                },

                spacing: {
                    18: '4.5rem'
                }
            }
        }
    }
</script>
```

Vous pouvez ensuite utiliser :

```html
<div class="p-18">
    ...
</div>
```

### 2.10. Utiliser une valeur personnalisée avec modération

Une valeur personnalisée doit répondre à un besoin réel.

N'ajoutez pas une nouvelle valeur pour chaque composant.

Par exemple :

```text
sidebar
→ w-sidebar
```

est une valeur utile parce qu'elle représente une partie structurante de l'application.

À l'inverse, il n'est pas nécessaire de créer :

```text
width-button
width-form
width-title
width-card
```

pour chaque élément.

### 2.11. Organiser le thème

Regroupez les valeurs par catégorie :

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f6ff',
                    500: '#2673e8',
                    600: '#1c5bba',
                    900: '#0a2042'
                }
            },

            width: {
                sidebar: '16rem'
            },

            spacing: {
                18: '4.5rem'
            }
        }
    }
};
```

Le thème devient plus facile à lire.

### 2.12. Appliquer le thème à plusieurs composants

Le bouton principal :

```html
<button class="bg-primary-600 text-white">
    Enregistrer
</button>
```

Le lien actif :

```html
<a class="bg-primary-600 text-white">
    Catégories
</a>
```

Le texte important :

```html
<span class="text-primary-500">
    Sprint 3
</span>
```

La sidebar :

```html
<aside class="bg-primary-900 text-white">
```

Ces éléments utilisent maintenant la même famille visuelle.

### 2.13. Vérifier la cohérence

Observez les éléments principaux :

```text
Sidebar
    ↓
primary-900

Bouton principal
    ↓
primary-600

Lien actif
    ↓
primary-600

Texte principal coloré
    ↓
primary-500

Fond léger
    ↓
primary-50
```

Les couleurs appartiennent maintenant au même système.

### 2.14. Tester une modification globale

Modifiez temporairement :

```javascript
600: '#1c5bba'
```

par une autre valeur.

Rechargez la page.

Les éléments qui utilisent :

```text
primary-600
```

doivent changer ensemble.

Vous observez ainsi l'intérêt d'un thème.

### 2.15. Vérifier les autres valeurs

Vérifiez :

```text
w-sidebar
```

et :

```text
p-18
```

La sidebar doit utiliser la largeur définie dans le thème.

L'espace `p-18` doit utiliser la valeur personnalisée.

### 2.16. Construire la configuration finale

Votre configuration peut maintenant être :

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f6ff',
                        500: '#2673e8',
                        600: '#1c5bba',
                        900: '#0a2042'
                    }
                },

                width: {
                    sidebar: '16rem'
                },

                spacing: {
                    18: '4.5rem'
                }
            }
        }
    }
</script>
```

Utilisez ensuite :

```text
bg-primary-50
text-primary-500
bg-primary-600
bg-primary-900
w-sidebar
p-18
```

### 2.17. Vérifier l'interface complète

Testez :

1. la sidebar ;
2. le header ;
3. le bouton principal ;
4. le formulaire ;
5. les champs ;
6. le bouton d'enregistrement ;
7. les liens de navigation ;
8. les éléments utilisant `primary-*` ;
9. la largeur de la sidebar ;
10. l'espacement personnalisé.

Vérifiez également que le responsive et les états de T.225.121 et T.225.122 fonctionnent toujours.

**Résultat attendu :**

```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/tailwind/tuto-5-tailwind.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

**Travail à faire :**

Personnalisez le thème Tailwind de l'interface d'administration.

Vous devez :

* créer une famille de couleurs `primary` ;
* définir les valeurs `50`, `500`, `600` et `900` ;
* utiliser `primary-*` dans les principaux éléments de l'interface ;
* définir une largeur `sidebar` ;
* définir une valeur d'espacement supplémentaire ;
* remplacer les principales couleurs écrites directement dans les classes ;
* conserver le responsive ;
* conserver les états visuels déjà réalisés.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et ajoutez le lien vers votre code HTML.

**Critère de réussite :**

L'interface utilise un thème Tailwind cohérent. Les principaux éléments partagent la même famille de couleurs et les valeurs personnalisées sont définies dans la configuration plutôt que répétées directement dans les composants.

## Bilan

**Vous avez appris :**

* à configurer le thème Tailwind ;
* à utiliser `extend` ;
* à créer une famille de couleurs personnalisée ;
* à utiliser plusieurs niveaux d'une même couleur ;
* à personnaliser une largeur ;
* à personnaliser une valeur d'espacement ;
* à centraliser certaines valeurs visuelles ;
* à utiliser les valeurs du thème dans les classes HTML.

**Vous avez réalisé :**

Un premier thème visuel pour l'application :

```text
primary-50
primary-500
primary-600
primary-900

w-sidebar

spacing personnalisé
```

La progression du domaine devient :

```text
S1 — Construire
Structure → Mise en forme

S2 — Adapter
Responsive → États

S3 — Harmoniser
Thème → Personnalisation
```

## Glossaire

* **Thème** : ensemble de valeurs utilisées pour définir l'identité visuelle d'une application.
* **Configuration** : partie du projet qui définit les valeurs personnalisées de Tailwind.
* **`extend`** : mécanisme permettant d'ajouter des valeurs au thème existant.
* **Couleur personnalisée** : couleur définie par le projet, comme `primary-600`.
* **Famille de couleurs** : ensemble de niveaux d'une même couleur.
* **Système d'espacement** : ensemble de valeurs utilisées pour les marges, paddings et espaces.
* **Valeur personnalisée** : valeur ajoutée au thème pour répondre à un besoin précis du projet.
* **Cohérence visuelle** : utilisation de mêmes couleurs, dimensions et espaces dans les différentes parties de l'application.
