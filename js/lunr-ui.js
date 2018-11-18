---
layout: none
---
$.getJSON("{{ '/js/lunr-index.json' | absolute_url }}", function(index_json) {
    window.index = new elasticlunr.Index;
    window.store = index_json;
    index.saveDocument(false);
    index.setRef('lunr_index');
    index.addField('pid');
    index.addField('label');
    index.addField('artist');
    index.addField('location');
    index.addField('_date');
    index.addField('object_type');
    index.addField('current_location');
    index.addField('collection');
    index.addField('thumbnail');
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
        var label   = item.label;
        var thumb   = item.thumbnail;
        var meta    = '';

        if (item.artist != 'Unknown'){ meta += `Artist: ${item.artist}. `;}
        if (item.location){ meta += `Location: ${item.location}. `;}
        if (item._date){ meta += `Date: ${item._date}. `;}
        if (item.object_type){ meta += `Object Type: ${item.object_type}. `;}

        var result = `<div class='result'><a href='${link}'><img class='sq-thumb-sm' src='{{ "" | absolute_url }}${thumb}'/>&nbsp;&nbsp;&nbsp;<p><span class='title'>${label}.</span><br>${meta}</p></a></div>`;
        results_div.append(result);
      }
    });
});
