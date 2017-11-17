---
layout: page
iiif_image: 1
---


{% include iiif_image.html %}

<br><br>
Sample images for Wax demo from The Museum of Islamic Art, Qatar, courtesy of [WikiMedia](https://commons.wikimedia.org/wiki/Category:Google_Art_Project_works_in_The_Museum_of_Islamic_Art,_Qatar) and [Google Art Project](https://www.google.com/culturalinstitute/about/artproject/).

# In the Collection

#### Manuscripts
{% assign manuscripts = site.data.objects | where: "object_type", "manuscript" %}
<h4>
  {% for object in manuscripts %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

#### Portraits
{% assign portraits = site.data.objects | where: "object_type", "portrait" %}
<h4>
  {% for object in portraits %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

#### Panels
{% assign panels = site.data.objects | where: "object_type", "panel" %}
<h4>
  {% for object in panels %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>

#### Maps
{% assign maps = site.data.objects | where: "object_type", "map" %}
<h4>
  {% for object in maps %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
  {% endfor %}
</h4>
