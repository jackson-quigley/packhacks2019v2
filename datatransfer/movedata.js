
function put() {
    readFile("./data", {}, function(data) {
        let thing = JSON.parse(data);
        // https://hub.blockstack.org
        blockstack.putFile('https://hub.blockstack.org/' + thing.url, data, {encrypt: true, sign: false});
    });
}

function get() {
    readFile("./data", {}, function(data) {
        let thing = JSON.parse(data);
        blockstack.getFile('https://hub.blockstack.org/' + thing.url, {decrypt: true, verify: false});
    });
}