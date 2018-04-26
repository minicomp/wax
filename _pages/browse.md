---
layout: default
title: Browse the Collection
permalink: /browse/
search: true
banner:
  - collection: qatar_collection
    pid: obj10
    zoom: 1
    x: right
---

{% assign collection = 'qatar_collection' %}
{% assign the_collection = site.data[collection] %}

##### Manuscripts

{% assign manuscripts = the_collection | where: "object_type", "manuscript" %}
<p>{% for item in manuscripts %}
<a href="{{ site.baseurl }}/{{ collection }}/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Portraits

<p>{% assign portraits = the_collection | where: "object_type", "portrait" %}
{% for item in portraits %}
<a href="{{ site.baseurl }}/{{ collection }}/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Panels

<p>{% assign panels = the_collection | where: "object_type", "panel" %}
{% for item in panels %}
<a href="{{ site.baseurl }}/{{ collection }}/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>

##### Maps

<p>{% assign maps = the_collection | where: "object_type", "map" %}
{% for item in maps %}
<a href="{{ site.baseurl }}/{{ collection }}/{{ item.pid }}/">{{ item.title }}</a>{% unless forloop.last %} &#9702; {% endunless %}
{% endfor %}</p>
