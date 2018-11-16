---
layout: default
permalink: /exhibits/
---

# Exhibits

{% assign exhibits = site.exhibits | where: 'layout','exhibit' %}
<ul>
  {% for exhibit in exhibits %}
    <li>
      <a href='{{ exhibit.url | absolute_url }}'>
        {{ exhibit.title }}
      </a>
    </li>
  {% endfor %}
</ul>
