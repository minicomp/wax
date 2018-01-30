$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var results_div = $('#results');
    var query = $(this).val();
    console.log(query);
    var results = index.search(query, {bool: "AND", expand: true});
    results_div.empty();
    if (results.length > 10){results_div.prepend("<p><small>Displaying 10 of " + results.length + " results.</small></p>");}
    for (var r in results.slice(0, 9)) { // limit visible results to 10
      var ref     = results[r].ref;
      var item    = store[ref];
      var link    = item.link;
      var title   = item.title;
      var date    = item._date;
      var artist  = item.artist;
      var loc     = item.location;
      var type    = item.object_type;
      var meta    = artist + ' / ' + date + ' / ' + type + ' / ' + loc;
      var result  = '<div class="result"><b><a href="' + link + '">' + title + '</a></b><br><p>' + meta +'</p></div>';
      results_div.append(result);
    }
  });
});
