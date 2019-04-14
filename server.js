const express = require('express')
const opn = require('opn')

const app = express()
const port = 5000
const http = require("http")

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

const server = http.createServer((req, res) => {
	  res.append('Content-Type', 'text/plain');
	  res.end('Hello world!');
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
