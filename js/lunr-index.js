---
layout: null
---
var index = new elasticlunr.Index;
index.setRef('lunr_id');
index.saveDocument(false);
index.addField('title'); 
index.addField('artist'); 
index.addField('location'); 
index.addField('_date'); 
index.addField('object_type'); 
index.addField('current_location'); 
index.addDoc({"lunr_id":0,"link":"{{ site.baseurl }}/mia-qatar/1/","title":"The Dala'il al-Khayrat of al-Juzuli","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":1,"link":"{{ site.baseurl }}/mia-qatar/10/","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":2,"link":"{{ site.baseurl }}/mia-qatar/11/","title":"Portrait of Sheikh Ali Mirza","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":3,"link":"{{ site.baseurl }}/mia-qatar/2/","title":"Portrait of Fath 'Ali Shah","artist":"Mihr 'Ali","location":"Iran","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":4,"link":"{{ site.baseurl }}/mia-qatar/3/","title":"Sulwan Al-Muta'a","artist":"Unknown","location":"Egypt","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":5,"link":"{{ site.baseurl }}/mia-qatar/4/","title":"Map of the World","artist":"Unknown","location":"Egypt","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":6,"link":"{{ site.baseurl }}/mia-qatar/5/","title":"Faridun crosses the River Dijla, fol. 33v","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":7,"link":"{{ site.baseurl }}/mia-qatar/6/","title":"Panel from Iran","artist":"Unknown","location":"Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":8,"link":"{{ site.baseurl }}/mia-qatar/7/","title":"Diwan of Jami Manuscript","artist":"Unknown","location":"Iran","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":9,"link":"{{ site.baseurl }}/mia-qatar/8/","title":"Page from the Shahnama","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":10,"link":"{{ site.baseurl }}/mia-qatar/9/","title":"Silk Tapestry Depicting the story of Leila and Majnun","artist":"Unknown","location":"Iran","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
var store = [
{"lunr_id":0,"link":"{{ site.baseurl }}/mia-qatar/1/","title":"The Dala'il al-Khayrat of al-Juzuli","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":1,"link":"{{ site.baseurl }}/mia-qatar/10/","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":2,"link":"{{ site.baseurl }}/mia-qatar/11/","title":"Portrait of Sheikh Ali Mirza","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":3,"link":"{{ site.baseurl }}/mia-qatar/2/","title":"Portrait of Fath 'Ali Shah","artist":"Mihr 'Ali","location":"Iran","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":4,"link":"{{ site.baseurl }}/mia-qatar/3/","title":"Sulwan Al-Muta'a","artist":"Unknown","location":"Egypt","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":5,"link":"{{ site.baseurl }}/mia-qatar/4/","title":"Map of the World","artist":"Unknown","location":"Egypt","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":6,"link":"{{ site.baseurl }}/mia-qatar/5/","title":"Faridun crosses the River Dijla, fol. 33v","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":7,"link":"{{ site.baseurl }}/mia-qatar/6/","title":"Panel from Iran","artist":"Unknown","location":"Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":8,"link":"{{ site.baseurl }}/mia-qatar/7/","title":"Diwan of Jami Manuscript","artist":"Unknown","location":"Iran","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":9,"link":"{{ site.baseurl }}/mia-qatar/8/","title":"Page from the Shahnama","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":10,"link":"{{ site.baseurl }}/mia-qatar/9/","title":"Silk Tapestry Depicting the story of Leila and Majnun","artist":"Unknown","location":"Iran","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}];