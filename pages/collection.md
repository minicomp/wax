---
layout: default
title: Browse the Collection
permalink: /collection/
---
{% include iiif_banner.html pid='obj10' collection='miaq' zoom='3.5' center='[-77, 82]' %}

{% include search.html %}


##### Manuscripts

{% assign manuscripts = site.data.miaq | where: "object_type", "manuscript" %}
<p>{% for item in manuscripts %}
<a href="{{ site.baseurl }}/miaq/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Portraits

<p>{% assign portraits = site.data.miaq | where: "object_type", "portrait" %}
{% for item in portraits %}
<a href="{{ site.baseurl }}/miaq/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Panels

<p>{% assign panels = site.data.miaq | where: "object_type", "panel" %}
{% for item in panels %}
<a href="{{ site.baseurl }}/miaq/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Maps

<p>{% assign maps = site.data.miaq | where: "object_type", "map" %}
{% for item in maps %}
<a href="{{ site.baseurl }}/miaq/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>
