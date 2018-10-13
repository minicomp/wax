---
layout: default
title: Collection
permalink: /collection/
---

# Browse the Collection

This sites' sample collection represents two [Jekyll 'collections'](https://jekyllrb.com/docs/collections/): the first represents a set of objects, each of which is represented by an image, and the second represents a manuscript, i.e., a set of images that comprise a single object.

In [IIIF](http://iiif.io/), each collection item is represented by a [manifest](https://iiif.io/api/presentation/2.0/#manifest) (like [this one]({{ '/iiif/qatar/obj1/manifest.json' | absolute_url }})), and each image asset is a [canvas](https://iiif.io/api/presentation/2.0/#canvas) (like [this]( {{ '/iiif/qatar/canvas/obj1.json' | absolute_url }})). These JSON files are interpreted by a IIIF-compliant viewer. Wax includes options for [LeafletIiif](https://github.com/mejackreed/Leaflet-IIIF) (as seen [here]({{ '/qatar/obj1/' | absolute_url }})) and [Mirador](http://projectmirador.org/), used for _The Book of Horses_ below. You can use either or both however you like.

### The Museum of Islamic Art, Qatar

{% include gallery.html facet_by='object_type' collection='qatar' %}

<br>

### Qatar National Library

{% include gallery.html collection='book-of-horses' %}
