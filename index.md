---
layout: default
title: Wax.
---
{% include iiif_image.html collection='objects' pid='1' %}
{% include search.html %}
<hr>

# hi.

Wax is a [Jekyll](http://jekyllrb.com) theme designed for digital exhibitions based on [minimal computing principles](http://go-dh.github.io/mincomp/), and is focused on impact, durability, ease, and flexibility. Our underlying technology is easy to learn and teach, and can produce beautifully rendered, high-quality collections of image-based data. To start using Wax, please see our [documentation]({{ site.baseurl }}/documentation) for installation instructions and more. To learn more about the ideas behind Wax and a list of current features see our [about]({{ site.baseurl }}/about) section.

All images in this demo are from The Museum of Islamic Art, Qatar, courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/).

<hr>

# in the collection

<h3>Manuscripts</h3>
{% assign manuscripts = site.data.objects | where: "object_type", "manuscript" %}
<h4>
  {% for item in manuscripts %}
  <a href="{{ site.baseurl }}/objects/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3>Portraits</h3>
{% assign portraits = site.data.objects | where: "object_type", "portrait" %}
<h4>
  {% for item in portraits %}
<a href="{{ site.baseurl }}/objects/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3>Panels</h3>
{% assign panels = site.data.objects | where: "object_type", "panel" %}
<h4>
  {% for item in panels %}
  <a href="{{ site.baseurl }}/objects/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

<h3>Maps</h3>
{% assign maps = site.data.objects | where: "object_type", "map" %}
<h4>
  {% for item in maps %}
  <a href="{{ site.baseurl }}/objects/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>
