---
layout: default
title: Tasks
permalink: /tasks/
---

{% include parallax.html collection='qatar' pid='obj1' %}

# Tasks

Behind Wax is a Ruby gem called [wax_tasks](https://github.com/minicomp/wax_tasks) that helps prepare collection data for Jekyll and Wax to use. It includes several core tasks for handling images, item pages, and search indexes, as well as few helpful tasks for additional features.
Each task is run with Rake, using the syntax `$ bundle exec rake wax:TASK_NAME`.

## Image Manipulation Tasks

To use Wax image components (like the banner and gallery), the site expects standardized full screen width and thumbnail width versions of collection images. **To create these image derivatives, you should use one of two wax tasks: `wax:derivatves:simple` or `wax:derivatives:iiif`**. The former will create just these files and add their paths to your metadata file for the site to use. The latter will create many image derivatives (resized versions, tiles, and more) in compliance with IIIF, and will allow you to use a IIIF viewer component from Wax.

#### wax:derivatives:simple

Generate simple image derivatives (thumbnail and full screen widths)<br>**run with:** `$ bundle exec rake wax:derivatives:simple COLLECTION`

#### wax:derivatives:iiif

Generate IIIF image derivatives and JSON for interoperable image content<br>**run with:** `$ bundle exec wax:derivatives:iiif COLLECTION`


## Page Generation Task

#### wax:pagemaster

Generate plaintext collection item pages from metadata records<br>**run with:** `$ bundle exec wax:pagemaster COLLECTION`


## Search Indexing Task

#### wax:lunr

Generate a client-side JSON search index<br>**run with:** `$ bundle exec wax:lunr`


## Bonus Tasks

#### wax:jspackage

Generate a package.json file to monitor JavaScript dependencies<br>**run with:** `$ bundle exec wax:jspackage`

#### wax:test

Run site tests to check for broken links, search functionality<br>**run with:** `$ bundle exec wax:test`

#### wax:push

Push a copy of the compiled site to a GitHub branch<br>**run with:** `$ bundle exec wax:push BRANCH`
