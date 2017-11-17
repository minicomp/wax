---
layout: default
iiif_image: 1
title: Wax.
---

# hi.

Wax is a [Jekyll](http://jekyllrb.com) theme designed for digital exhibitions based on [minimal computing principles](http://go-dh.github.io/mincomp/), and is focused on impact, durability, ease, and flexibility. Our underlying technology is easy to learn and teach, and can produce beautifully rendered, high-quality collections of image-based data. To start using Wax, please see our [documentation]({{ site.baseurl }}/documentation) for installation instructions and more. To learn more about the ideas behind Wax and a list of current features see our [about]({{ site.baseurl }}/about) section.

All images in this demo are from The Museum of Islamic Art, Qatar, courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/). Zooming images are a product the [IIIF](http://iiif.io/) image API and the [Openseadragon](https://openseadragon.github.io/) viewer.


<hr>

{% include iiif_image.html %}

<hr>


# in the collection

<h3><a href="{{ site.baseurl }}/manuscripts" style="color:black">Manuscripts</a></h3>
{% assign manuscripts = site.data.objects | where: "object_type", "manuscript" %}
<h4>
  {% for object in manuscripts %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3><a href="{{ site.baseurl }}/portraits" style="color:black">Portraits</a></h3>
{% assign portraits = site.data.objects | where: "object_type", "portrait" %}
<h4>
  {% for object in portraits %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3><a href="{{ site.baseurl }}/panels" style="color:black">Panels</a></h3>
{% assign panels = site.data.objects | where: "object_type", "panel" %}
<h4>
  {% for object in panels %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3><a href="{{ site.baseurl }}/objects/4" style="color:black">Maps</a></h3>
{% assign maps = site.data.objects | where: "object_type", "map" %}
<h4>
  {% for object in maps %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>
