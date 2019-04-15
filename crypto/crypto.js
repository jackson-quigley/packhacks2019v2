var sjcl = require('sjcl');
var fs = require('fs');


exports.getHashDate = function()
{
var dataobj = {};
dataobj['file'] = "file";
dataobj['url'] = fs.readFileSync("name",'utf-8');
var filepath = dataobj['file'];
var file = fs.readFileSync(filepath,'ascii');
dataobj['date'] = (new Date(Math.min(Date.now(),dataobj['date']))).toLocaleString("en-US");
var oldhash = dataobj['hash'];
newhash = sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(file).finalize());
if(newhash === oldhash)
{
        dataobj['changed'] = 'unchanged'
}
else
{
        dataobj['changed'] = 'changed'
}
fs.writeFileSync('datatransfer/data',JSON.stringify(dataobj));
return dataobj;
}


//dataobj = getHashDate();
//console.log(dataobj['date']);
//console.log(dataobj['hash']);



