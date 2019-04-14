// These functions assume that the data file in this directory
// is updated with the most recent request.

var fs = require('fs');

exports.put = function() {
    fs.readFile("./datatransfer/data", {}, function(data) {
        let thing = JSON.parse(data);
        blockstack.putFile('https://hub.blockstack.org/' + thing.url, data, {encrypt: true, sign: false});
    });
}

exports.get = function() {
    fs.readFileSync("./data", {}, function(data) {
        let thing = JSON.parse(data);
        blockstack.getFile('https://hub.blockstack.org/' + thing.url, {decrypt: true, verify: false});
    });
}