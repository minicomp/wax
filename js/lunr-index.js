---
layout: null
---
var index = elasticlunr(function () {
  this.setRef('id');
  this.addField('title');
  this.addField('artist');
  this.addField('location');
  this.addField('date');
  this.addField('object_type');
  this.addField('current_location');
  this.saveDocument(false);
});

elasticlunr.clearStopWords();

{% assign count = 0 %}
{% for item in site.data.objects %}
  index.addDoc({
    title: {{ item.title | jsonify }},
    artist: {{ item.artist | jsonify }},
    location: {{ item.location | jsonify }},
    date: {{ item._date | jsonify }},
    object_type: {{ item.object_type | jsonify }},
    current_location: {{ item.current_location | jsonify }},
    id: {{count}}
  })
  {% assign count = count | plus: 1 %}
{% endfor %}

var store = [
{% for item in site.data.objects %}{
  link: "{{ site.baseurl }}/objects/{{ item.id }}",
  title: {{ item.title | jsonify }},
  artist: {{ item.artist | jsonify }},
  location: {{ item.location | jsonify }},
  date: {{ item._date | jsonify }},
  object_type: {{ item.object_type | jsonify }},
  current_location: {{ item.current_location | jsonify }},
  id: {{count}}
},{% endfor %}
]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = index.search(query, {expand: true });
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><b><a href="' + store[ref].link + '" class="post-title">' + store[ref].title + '</a></b><br><p>' + store[ref].location + " / " + store[ref].artist + " / " + store[ref].object_type + " / " + store[ref].date + " / " + store[ref].current_location + '</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
