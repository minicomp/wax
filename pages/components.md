---
layout: page
title: Components
permalink: /components/
banner:
  collection: qatar
  pid: obj12
  y: 50%
---

With Jekyll, site components are called __includes__ and live in the `_includes` directory. You can add them to single pages or to page layouts with the Liquid `{% raw %}{% include %}{% endraw %}` tag.

So far, __Wax__ has the following reusable components: __banner__, __gallery__, __search__, __Leaflet IIIF viewer__, and __Mirador IIIF viewer__.

## Gallery

The gallery include shows a set of image thumbnails from the IIIF directory and object titles for each item in a collection. You must specify a `collection` in the `include`, and can optionally specify a `facet_by` key from the metadata.

`{% raw %}{% include gallery.html collection='qatar' facet_by='artist' %}{% endraw %}`

__Result__:

{% include gallery.html collection='qatar' facet_by='artist' %}

In the above example, the `qatar` collection is shown as a series of thumbnails. Users can facet the results shown according the the `artist` key in the collection metadata.


## Search Box

Search adds a search box with dynamic, client-side search powered by ElasticLunr.js and jQuery. It loads two files `js/lunr-index.json` and `js/lunr-ui.js`, the first of which can be generated with [wax_tasks](https://github.com/minicomp/wax_tasks/), and the second of which needs to be created or modified to meet the needs of the collection.

`{% raw %}{% include search.html %}{% endraw %}`

__Result__:

{% include search.html %}


## Leaflet IIIF Viewer


`{% raw %}{% include iiif/leaflet-viewer.html manifest='/img/derivatives/iiif/obj1/manifest.json' %}{% endraw %}`


{% include iiif/leaflet-viewer.html manifest='/img/derivatives/iiif/obj1/manifest.json' %}
