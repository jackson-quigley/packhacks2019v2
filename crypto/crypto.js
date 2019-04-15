var sjcl = require('sjcl');
//var fs = require('fs');


function getHashDate(dataobj)
{
dataobj['file'] = "../file"
dataobj['url'] = "../name"
filepath = dataobj['file'];
file = fs.readFileSync(filepath,'ascii');
dataobj['date'] = (new Date(Date.now())).toLocaleString("en-US");
dataobj['hash'] = sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(file).finalize());
return dataobj;
}


//dataobj = {'file':process.argv[2]}
//dataobj = getHashDate(dataobj);
//console.log(dataobj['date']);
//console.log(dataobj['hash']);



