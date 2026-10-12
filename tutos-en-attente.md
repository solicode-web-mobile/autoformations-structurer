---
title: Tutoriels en attente
layout: default
nav_order: 99
---

# Tutoriels en attente de rédaction

Cette page liste l'ensemble des tutoriels qui sont actuellement en attente de rédaction (marqués avec `en_construction: true`).

<ul>
{% assign tutos_en_attente = site.tutos | where: "en_construction", true %}
{% for tuto in tutos_en_attente %}
  <li><a href="{{ tuto.url | relative_url }}">{{ tuto.title | default: tuto.path }}</a></li>
{% else %}
  <li>Aucun tutoriel en attente de rédaction pour le moment.</li>
{% endfor %}
</ul>
