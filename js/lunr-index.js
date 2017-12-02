---
layout: null
---
var index = elasticlunr(function () {
this.setRef('lunr_id');
this.addField('artist'); 
this.addField('location'); 
this.addField('title'); 
this.addField('_date'); 
this.addField('object_type'); 
this.addField('current_location'); 
this.saveDocument(false); });
index.addDoc({"lunr_id":0,"link":"{{ site.baseurl }}/objects/1","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","title":"The Dala'il al-Khayrat of al-Juzuli","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":1,"link":"{{ site.baseurl }}/objects/10","artist":"Unknown","location":"Iran","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":2,"link":"{{ site.baseurl }}/objects/11","artist":"Unknown","location":"Iran","title":"Portrait of Sheikh Ali Mirza","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":3,"link":"{{ site.baseurl }}/objects/2","artist":"Mihr 'Ali","location":"Iran","title":"Portrait of Fath 'Ali Shah","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":4,"link":"{{ site.baseurl }}/objects/3","artist":"Unknown","location":"Egypt","title":"Sulwan Al-Muta'a","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":5,"link":"{{ site.baseurl }}/objects/4","artist":"Unknown","location":"Egypt","title":"Map of the World","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":6,"link":"{{ site.baseurl }}/objects/5","artist":"Unknown","location":"Iran","title":"Faridun crosses the River Dijla, fol. 33v","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":7,"link":"{{ site.baseurl }}/objects/6","artist":"Unknown","location":"Iran","title":"Panel from Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":8,"link":"{{ site.baseurl }}/objects/7","artist":"Unknown","location":"Iran","title":"Diwan of Jami Manuscript","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":9,"link":"{{ site.baseurl }}/objects/8","artist":"Unknown","location":"Iran","title":"Page from the Shahnama","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
index.addDoc({"lunr_id":10,"link":"{{ site.baseurl }}/objects/9","artist":"Unknown","location":"Iran","title":"Silk Tapestry Depicting the story of Leila and Majnun","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar","content":""}); 
var store = [
{"lunr_id":0,"link":"{{ site.baseurl }}/objects/1","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","title":"The Dala'il al-Khayrat of al-Juzuli","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":1,"link":"{{ site.baseurl }}/objects/10","artist":"Unknown","location":"Iran","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":2,"link":"{{ site.baseurl }}/objects/11","artist":"Unknown","location":"Iran","title":"Portrait of Sheikh Ali Mirza","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":3,"link":"{{ site.baseurl }}/objects/2","artist":"Mihr 'Ali","location":"Iran","title":"Portrait of Fath 'Ali Shah","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":4,"link":"{{ site.baseurl }}/objects/3","artist":"Unknown","location":"Egypt","title":"Sulwan Al-Muta'a","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":5,"link":"{{ site.baseurl }}/objects/4","artist":"Unknown","location":"Egypt","title":"Map of the World","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":6,"link":"{{ site.baseurl }}/objects/5","artist":"Unknown","location":"Iran","title":"Faridun crosses the River Dijla, fol. 33v","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":7,"link":"{{ site.baseurl }}/objects/6","artist":"Unknown","location":"Iran","title":"Panel from Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":8,"link":"{{ site.baseurl }}/objects/7","artist":"Unknown","location":"Iran","title":"Diwan of Jami Manuscript","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":9,"link":"{{ site.baseurl }}/objects/8","artist":"Unknown","location":"Iran","title":"Page from the Shahnama","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar","content":""}, 
{"lunr_id":10,"link":"{{ site.baseurl }}/objects/9","artist":"Unknown","location":"Iran","title":"Silk Tapestry Depicting the story of Leila and Majnun","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar","content":""}];
$(document).ready(function() {
$('input#search').on('keyup', function () {
var resultdiv = $('#results');
var query = $(this).val();
var result = index.search(query, {expand: true});
resultdiv.empty();
for (var item in result) {
var ref = result[item].ref;
var searchitem = '<div class="result"><b><a href="' + store[ref].link + '" class="post-title">' + store[ref].title + '</a></b><br><p>'  + store[ref].artist + ' / ' + store[ref].location + ' / ' + store[ref]._date + ' / ' + store[ref].object_type + ' / ' + store[ref].current_location + '</p></div>';
resultdiv.append(searchitem);}
});
});