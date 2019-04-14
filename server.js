const express = require('express')
const opn = require('opn')

const app = express()
const port = 5000
const https = require("https")
const url = require("url")
const fs = require("fs")

function allowCrossDomain(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
}

app.use(express.urlencoded());
app.use(express.json());
app.post('/yeet', function(req, res) {
	var furl = req.body.url;
	console.log(furl);
	const file = fs.createWriteStream("file");
	const request = https.get(furl, function(response) {
		response.pipe(file);
		furl = furl.replace(/[^a-z0-9áéíóúñü \,_]/gim,"-");
		console.log(furl);	
		fs.writeFileSync("name",furl);
		const crypto = require(__dirname + '/crypto/crypto')
		console.log("yeet",crypto.getHashDate);
		crypto.getHashDate()
	});
});



app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/public'))
app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
	opn(`http://localhost:${port}`)
})
