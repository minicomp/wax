---
layout: page
title: Gallery
---
{% for object in site.data.objects %}
  <a href="{{ site.baseurl }}/objects/{{ object.id }}"><img src="{{ site.baseurl }}/tiles/images/{{ object.id }}-1/full/full/0/default.jpg"/></a>
{% endfor %}
