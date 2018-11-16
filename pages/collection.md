---
layout: wax/page
title: Browse the Collection
permalink: /collection/
---

This site's sample collection comprises a set of objects, each of which is represented by one or more images.

In the parlance of [IIIF](http://iiif.io/), each collection item is represented by a [manifest](https://iiif.io/api/presentation/2.0/#manifest) (like [this one]({{ '/img/derivatives/iiif/obj1/manifest.json' | absolute_url }})), and each image asset is a [canvas](https://iiif.io/api/presentation/2.0/#canvas) (like [this]( {{ '/img/derivatives/iiif/canvas/obj1.json' | absolute_url }})). These JSON files are interpreted by a IIIF-compliant viewer. Wax includes two viewer options: [LeafletIiif](https://github.com/mejackreed/Leaflet-IIIF) (as seen [here]({{ '/qatar/obj1/' | absolute_url }})) and [Mirador](http://projectmirador.org/), used for _[The Book of Horses]({{ '/qatar/obj12/' | relative_url }})_. You can use either or both however you like, though Mirador is much larger to load and is best suited for documents.

The collection items in this demo are from The Museum of Islamic Art, Qatar, (courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/)) and The Qatar National Library (via [World Digital Library](https://www.wdl.org/en/)).


{% include wax/collection/gallery.html collection='qatar' facet_by='object_type' %}
