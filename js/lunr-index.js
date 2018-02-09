---
layout: none
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
index.addDoc({"lunr_id":0,"link":"{{'/objects/5/' | relative_url }}","title":"Faridun crosses the River Dijla, fol. 33v","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":1,"link":"{{'/objects/1/' | relative_url }}","title":"The Dala'il al-Khayrat of al-Juzuli","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":2,"link":"{{'/objects/4/' | relative_url }}","title":"Map of the World","artist":"Unknown","location":"Egypt","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":3,"link":"{{'/objects/10/' | relative_url }}","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":4,"link":"{{'/objects/9/' | relative_url }}","title":"Silk Tapestry Depicting the story of Leila and Majnun","artist":"Unknown","location":"Iran","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":5,"link":"{{'/objects/11/' | relative_url }}","title":"Portrait of Sheikh Ali Mirza","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":6,"link":"{{'/objects/8/' | relative_url }}","title":"Page from the Shahnama","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":7,"link":"{{'/objects/3/' | relative_url }}","title":"Sulwan Al-Muta'a","artist":"Unknown","location":"Egypt","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":8,"link":"{{'/objects/7/' | relative_url }}","title":"Diwan of Jami Manuscript","artist":"Unknown","location":"Iran","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":9,"link":"{{'/objects/6/' | relative_url }}","title":"Panel from Iran","artist":"Unknown","location":"Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}); 
index.addDoc({"lunr_id":10,"link":"{{'/objects/2/' | relative_url }}","title":"Portrait of Fath 'Ali Shah","artist":"Mihr 'Ali","location":"Iran","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}); 
var store = [
{"lunr_id":0,"link":"{{'/objects/5/' | relative_url }}","title":"Faridun crosses the River Dijla, fol. 33v","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":1,"link":"{{'/objects/1/' | relative_url }}","title":"The Dala'il al-Khayrat of al-Juzuli","artist":"Al-Hajj Hafiz Muhammad Nuri","location":"Turkey","_date":"1801","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":2,"link":"{{'/objects/4/' | relative_url }}","title":"Map of the World","artist":"Unknown","location":"Egypt","_date":"15th century","object_type":"map","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":3,"link":"{{'/objects/10/' | relative_url }}","title":"Portrait of Hasan 'Ali Mirza Shuja al-Saltana","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":4,"link":"{{'/objects/9/' | relative_url }}","title":"Silk Tapestry Depicting the story of Leila and Majnun","artist":"Unknown","location":"Iran","_date":"1550 - 1650","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":5,"link":"{{'/objects/11/' | relative_url }}","title":"Portrait of Sheikh Ali Mirza","artist":"Unknown","location":"Iran","_date":"1800 - 1850","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":6,"link":"{{'/objects/8/' | relative_url }}","title":"Page from the Shahnama","artist":"Unknown","location":"Iran","_date":"1525 - 1535","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":7,"link":"{{'/objects/3/' | relative_url }}","title":"Sulwan Al-Muta'a","artist":"Unknown","location":"Egypt","_date":"14th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":8,"link":"{{'/objects/7/' | relative_url }}","title":"Diwan of Jami Manuscript","artist":"Unknown","location":"Iran","_date":"16th century","object_type":"manuscript","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":9,"link":"{{'/objects/6/' | relative_url }}","title":"Panel from Iran","artist":"Unknown","location":"Iran","_date":"1600 - 1625","object_type":"panel","current_location":"The Museum of Islamic Art, Qatar"}, 
{"lunr_id":10,"link":"{{'/objects/2/' | relative_url }}","title":"Portrait of Fath 'Ali Shah","artist":"Mihr 'Ali","location":"Iran","_date":"1816","object_type":"portrait","current_location":"The Museum of Islamic Art, Qatar"}];