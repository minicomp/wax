---
layout: page
iiif_image: 1
---


{% include iiif_image.html %}

<br><br>

<h2>Objects:</h2>
<h4>
  {% for object in site.data.objects %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}">{{ object.title }}</a>{% unless forloop.last %}, {% endunless %}
  {% endfor %}
</h4>
