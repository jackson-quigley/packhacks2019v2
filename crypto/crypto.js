var sjcl = require('sjcl');
var fs = require('fs');


exports.getHashDate = function()
{
var dataobj = {};
dataobj['file'] = "file";
dataobj['url'] = "name";
var filepath = dataobj['file'];
var file = fs.readFileSync(filepath,'ascii');
dataobj['date'] = (new Date(Date.now())).toLocaleString("en-US");
dataobj['hash'] = sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(file).finalize());
fs.writeFileSync('datatransfer/data',JSON.stringify(dataobj));
return dataobj;
}


//dataobj = getHashDate();
//console.log(dataobj['date']);
//console.log(dataobj['hash']);



