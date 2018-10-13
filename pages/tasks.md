---
layout: default
title: Tasks
permalink: /tasks/
---

# Tasks

Wax relies on a Ruby gem called __[wax_tasks](https://github.com/minicomp/wax_tasks)__ to prepare and validate collection data for Jekyll to use. This gem exposes Rake tasks for use within a Jekyll site, which can be run as<br>
`$ bundle exec rake <task>`, e.g., `$ bundle exec rake wax:lunr`.



<table class="table table-striped">
  <tr class="meta">
    <td><b>wax:pagemaster</b> :</td>
    <td>Generates pages for collection items from (meta)data files</td>
  </tr>

  <tr class="meta">
    <td><b>wax:iiif</b> :</td>
    <td>Generates IIIF derivatives and JSON for interoperable image content</td>
  </tr>

  <tr class="meta">
    <td><b>wax:lunr</b> :</td>
    <td>Generates a client-side search index</td>
  </tr>
</table>
