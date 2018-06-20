---
layout: default
title: Wax.
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
- collection: qatar
  pid: obj7
  zoom: 1
  y: center
  x: left
- collection: qatar
  pid: obj1
  zoom: 1
---

{% include banner.html caption=true %}

__Wax__ is a [minimal computing](http://go-dh.github.io/mincomp/) project for producing digital exhibitions focused on impact, durability, ease, and flexibility. Our underlying technology is made to learn and to teach, and can produce beautifully rendered, high-quality image collections and scholarly exhibits. To start using Wax, please see our [documentation](https://minicomp.github.io/wiki/#/wax/) for installation instructions and more.

All images in this demo are from The Museum of Islamic Art, Qatar, courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/).

### Browse the Collection
<br>

{% include gallery.html facet_by='object_type' collection='qatar' %}

<br><br>

### Search the Collection

{% include search.html %}
