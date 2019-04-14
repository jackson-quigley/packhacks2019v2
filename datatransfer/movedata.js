// These functions assume that the data file in this directory
// is updated with the most recent request.

var fs = require('fs');
var blockstack = require('blockstack');

exports.put = function() {
    let thing = JSON.parse(fs.readFileSync("./datatransfer/data"));
    if (!thing) {
        console.log("ruh roh");
    }
    blockstack.putFile(thing.url, thing, {sign: false}).then(
        function(response){  
        // let thing = JSON.parse(data);
        // console.log(thing);
        // blockstack.putFile('https://hub.blockstack.org/' + thing.url, data, {sign: false}).then(() => {});
    });
}

exports.get = function(callback) {
    let thing = JSON.parse(fs.readFileSync("./datatransfer/data"));
          
        let result = blockstack.getFile('https://hub.blockstack.org/' + thing.url, {decrypt: true, verify: false}).then(callback);

    /*
        Returning result is not an option. blockstack.getFile uses asyncronous callback. therfore you must handle its outcomeds in its callback. in order for a caller of this function to be permitted to access guranteed
        data they must, too, pass in a callback.
    */
    //return result;
}