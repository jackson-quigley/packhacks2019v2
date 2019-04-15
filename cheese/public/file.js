var url = require('url');
var adr = 'https://thegutenblock.index.html?url=https://www.wikipedia.org';
var q = url.parse(adr, true);
const https = require('https');
const fs = require('fs');


var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.url); //returns 'february'

var furl = qdata.url;

const file = fs.createWriteStream("file");
const request = https.get(furl, function(response) {
	response.pipe(file);
});



