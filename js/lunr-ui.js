---
layout: none
---
$.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(index_json) {
    window.index = new elasticlunr.Index;
    window.store = index_json;
    index.saveDocument(false);
    index.setRef('lunr_index');
    index.addField('pid');
    index.addField('title');
    index.addField('artist');
    index.addField('location');
    index.addField('_date');
    index.addField('object_type');
    index.addField('current_location');
    index.addField('collection');
    // add docs
    for (i in store) { index.addDoc(store[i]);}
    $('input#search').on('keyup', function () {
      var results_div = $('#results');
      var query = $(this).val();
      var results = index.search(query, {bool: "AND", expand: true});

      results_div.empty();

      for (var r in results) {
        var ref     = results[r].ref;
        var item    = store[ref];
        var link    = item.link;
        var title   = item.title;
        var meta    = '';

        if (item.artist != 'Unknown'){ meta += item.artist + '. ';}
        if (item.location){ meta += item.location + ', ';}
        if (item._date){ meta += item._date + '. ';}
        if (item.object_type){ meta += item.object_type + '. ';}

        var result = '<div class="result"><a href="' + link + '"><img class="sq-thumb-sm" src="{{ site.baseurl }}/iiif/images/' + item.collection + '/' + item.pid + '/full/250,/0/default.jpg"/>&nbsp;&nbsp;&nbsp;<p><span class="title">' + title + '.</span><br>' + meta + '</p></a></div>';
        results_div.append(result);
      }
    });
});
