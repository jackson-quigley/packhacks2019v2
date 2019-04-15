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
                var tits = JSON.stringify(crypto.getHashDate().date);
                res.send(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name"viewport" content="width-device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="css/style.css">
        <title>Project GutenBlock - Home</title>
        <script src="app.js"></script>
        <script src="bundle.js"></script>
	</head>
	<header>	
	<div id="header">
		<h1>Project GutenBlock</h1>
		<table align=center cellpadding="9">
			<tr>
				<td><a href=index.html>Home</a></td>
				<td><a target="_blank" href=https://github.com/jackson-quigley/packhacks2019v2>Github</a></td>
				<td><a href=howworks.html>How It Works</a></td>
			</tr>
		</table>
	</div>
	</header>
	<body>
<!--	<script src="files.js" type="text/javascript">
	</script>

	<input id="myInput" value="URL">
	<button id="myBtn" onclick="userInput()">Submit</button>

	<script>
		var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
		     event.preventDefault();
		     document.getElementById("myBtn").click();
		    }
});
	</script>
	-->

<p>${tits}</p>
<form  method="POST" action="/yeet" id="request">
	  URL:
	    <input type="text" name="url" id="url" autocomplete="no">
		  <input type="submit" value="Submit">
</form>

    <p class="lead">
        <a href="#" class="btn btn-primary btn-lg" id="signin-button">
        Login
        </a>
    </p>

    <p class="lead">
        <a href="#" class="btn btn-primary btn-lg" id="signout-button">
        Logout
        </a>
    </p>

	</body>
	<footer>
	<div id="footer">
	<p>
(c) 2019 Project GutenBlock
<br>
Problems? Contact <a href="mailto:admin@thegutenblock.com">admin@gutenblock.com</a>
	</p>
	</div>
	</footer>
</html>
`);
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
