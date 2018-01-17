---
layout: null
---
var index = new elasticlunr.Index;
index.setRef('lunr_id');
index.saveDocument(false);
index.addField('pid'); 
index.addField('artist'); 
index.addField('location'); 
index.addField('title'); 
index.addField('_date'); 
index.addField('object_type'); 
index.addField('current_location'); 
index.addDoc({"lunr_id":0,"link":"{{ site.baseurl }}/objects/1/","pid":"1","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","title":"The Dala'il al-Khayrat of al-Juzuli","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":1,"link":"{{ site.baseurl }}/objects/10/","pid":"10","artist":"Unknown","location":"Iran","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":2,"link":"{{ site.baseurl }}/objects/11/","pid":"11","artist":"Unknown","location":"Iran","title":"Portrait of Sheikh Ali Mirza","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":3,"link":"{{ site.baseurl }}/objects/2/","pid":"2","artist":"Mihr 'Ali","location":"Iran","title":"Portrait of Fath 'Ali Shah","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":4,"link":"{{ site.baseurl }}/objects/3/","pid":"3","artist":"Unknown","location":"Egypt","title":"Sulwan Al-Muta'a","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":5,"link":"{{ site.baseurl }}/objects/4/","pid":"4","artist":"Unknown","location":"Egypt","title":"Map of the World","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":6,"link":"{{ site.baseurl }}/objects/5/","pid":"5","artist":"Unknown","location":"Iran","title":"Faridun crosses the River Dijla, fol. 33v","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":7,"link":"{{ site.baseurl }}/objects/6/","pid":"6","artist":"Unknown","location":"Iran","title":"Panel from Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":8,"link":"{{ site.baseurl }}/objects/7/","pid":"7","artist":"Unknown","location":"Iran","title":"Diwan of Jami Manuscript","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":9,"link":"{{ site.baseurl }}/objects/8/","pid":"8","artist":"Unknown","location":"Iran","title":"Page from the Shahnama","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":10,"link":"{{ site.baseurl }}/objects/9/","pid":"9","artist":"Unknown","location":"Iran","title":"Silk Tapestry Depicting the story of Leila and Majnun","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
var store = [
{"lunr_id":0,"link":"{{ site.baseurl }}/objects/1/","pid":"1","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","title":"The Dala'il al-Khayrat of al-Juzuli","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":1,"link":"{{ site.baseurl }}/objects/10/","pid":"10","artist":"Unknown","location":"Iran","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":2,"link":"{{ site.baseurl }}/objects/11/","pid":"11","artist":"Unknown","location":"Iran","title":"Portrait of Sheikh Ali Mirza","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":3,"link":"{{ site.baseurl }}/objects/2/","pid":"2","artist":"Mihr 'Ali","location":"Iran","title":"Portrait of Fath 'Ali Shah","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":4,"link":"{{ site.baseurl }}/objects/3/","pid":"3","artist":"Unknown","location":"Egypt","title":"Sulwan Al-Muta'a","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":5,"link":"{{ site.baseurl }}/objects/4/","pid":"4","artist":"Unknown","location":"Egypt","title":"Map of the World","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":6,"link":"{{ site.baseurl }}/objects/5/","pid":"5","artist":"Unknown","location":"Iran","title":"Faridun crosses the River Dijla, fol. 33v","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":7,"link":"{{ site.baseurl }}/objects/6/","pid":"6","artist":"Unknown","location":"Iran","title":"Panel from Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":8,"link":"{{ site.baseurl }}/objects/7/","pid":"7","artist":"Unknown","location":"Iran","title":"Diwan of Jami Manuscript","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":9,"link":"{{ site.baseurl }}/objects/8/","pid":"8","artist":"Unknown","location":"Iran","title":"Page from the Shahnama","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":10,"link":"{{ site.baseurl }}/objects/9/","pid":"9","artist":"Unknown","location":"Iran","title":"Silk Tapestry Depicting the story of Leila and Majnun","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}];