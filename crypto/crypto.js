var sjcl = require('sjcl');
var fs = require('fs');


export function getHashDate()
{
var dataobj = {};
dataobj['file'] = "../file";
dataobj['url'] = "../name";
var filepath = dataobj['file'];
var file = fs.readFileSync(filepath,'ascii');
dataobj['date'] = (new Date(Date.now())).toLocaleString("en-US");
dataobj['hash'] = sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(file).finalize());
return dataobj;
}


//dataobj = getHashDate();
//console.log(dataobj['date']);
//console.log(dataobj['hash']);



