---
layout: default
title: Components
permalink: /components/
hide_banner: true
banner:
- collection: qatar
  pid: obj6
  y: center
  x: left
  zoom: 1
  link: '/qatar/obj6/'
- collection: qatar
  pid: obj10
  zoom: 1
  x: right
  link: '/qatar/obj10/'
- collection: book-of-horses
  pid: '00'
  zoom: 0
  y: center
  x: right
  link: '/book-of-horses/'
---

# Components

With Jekyll, site components are called __includes__ and live in the `_includes` directory. You can add them to single pages or to page layouts with the Liquid `{% raw %}{% include %}{% endraw %}` tag.

So far, __Wax__ has the following reusable components: [banner](#banner), [gallery](#gallery), [search](#search), [Leaflet IIIF viewer](#leaflet), and [Mirador IIIF viewer](#mirador).

## Banner

The banner include takes information from the page's front matter, like so:

```yaml
banner:
- collection: qatar
  pid: obj6
  y: center
  x: left
  zoom: 1
- collection: qatar
  pid: obj10
  zoom: 1
  x: right
- collection: book-of-horses
  pid: '00'
  zoom: 0
  y: center
  x: right
  link: '/book-of-horses/'
```

and then called with and `include` tag:

`{% raw %}{% include banner.html %}{% endraw %}`

__Result:__

{% include banner.html %}


In the above example, the banner grabs images from the IIIF directory for `obj6` and `obj10` of the `qatar` collection and the first image (`00`) from the `book-of-horses` manuscript. The fields `collection` and `pid` are required, and `x`, `y`, `zoom`, and `link` are optional overrides.


<table class="table table-striped">
  <tr class="meta">
    <td><b>x</b> :</td>
    <td>positions the image horizontally. The options are <b>left</b>, <b>right</b>, and <b>center</b> with <b>center</b> as default.</td>
  </tr>
  <tr class="meta">
    <td><b>y</b> :</td>
    <td>positions the image vertically. The options are <b>top</b>, <b>bottom</b>, and <b>center</b> with <b>top</b> as the default.</td>
  </tr>
  <tr class="meta">
    <td><b>zoom</b> :</td>
    <td>sets the amount of zoom on the image. The options are <b>0</b>, <b>1</b>, and <b>2</b> with <b>0</b> as the default.</td>
  </tr>
  <tr class="meta">
    <td><b>link</b> :</td>
    <td>sets the target link for clicking on the image. The banner will try to construct it from <b>collection</b> and <b>pid</b> by default if <b>link</b> isn't set.</td>
  </tr>
</table>

If one item image is given, the banner is still. If multiple are given, there will be a fade effect. __Note:__ two images breaks the effect. The banner should have either one image or three or more loaded.

## Gallery

The gallery include shows a set of image thumbnails from the IIIF directory and object titles for each item in a collection. These can optionally be  can be faceted by a metadata key, for example:

`{% raw %}{% include gallery.html collection='qatar' facet_by='artist' %}{% endraw %}`

__Result__:

{% include gallery.html collection='qatar' facet_by='artist' %}

or `{% raw %}{% include gallery.html collection='book-of-horses' %}{% endraw %}`


__Result__:

{% include gallery.html collection='book-of-horses' %}


## Search

Search adds a search box with dynamic, client-side search powered by ElasticLunr.js and jQuery. It loads two files `js/lunr-index.json` and `js/lunr-ui.js`, the first of which can be generated with [wax_tasks](https://github.com/minicomp/wax_tasks/), and the second which needs to be created or modified to meet the needs of the collection.

`{% raw %}{% include search.html %}{% endraw %}`

__Result__:

{% include search.html %}



## Leaflet IIIF Viewer

`{% raw %}{% include iiif/leaflet-viewer.html manifest='/iiif/qatar/obj1/manifest.json' %}{% endraw %}`


## Mirador IIIF Viewer

`{% raw %}{% include iiif/mirador-viewer.html manifest='/iiif/book-of-horses/manifest.json' %}{% endraw %}`
