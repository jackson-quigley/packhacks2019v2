var sjcl = require('sjcl');
var fs = require('fs');


exports.getHashDate = function()
{
var fulldataobj = JSON.parse(fs.readFileSync("cheesewrite.json"));
var alreadyexisted = (url in fulldataobj);
dataobj['file'] = fs.readFileSync("file",'utf-8');
dataobj['url'] = fs.readFileSync("name",'utf-8');
var filepath = dataobj['file'];
var file = fs.readFileSync(filepath,'ascii');
if(!alreadyexisted)
{
        dataobj['date'] = (new Date(Date.now())).toLocaleString("en-US");
}
var newhash = sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(file).finalize());
//var oldhash = dataobj['hash'];
if(alreadyexisted)
{
        oldhash = fulldataobj[url]['hash'];
}
else
{
        oldhash = '';
}
if(newhash == oldhash)
{
        dataobj['message'] = 'same';
}
else
{
        dataobj['message'] = 'different';
}
fs.writeFileSync('datatransfer/data',JSON.stringify(dataobj));
return dataobj;
}


//dataobj = getHashDate();
//console.log(dataobj['date']);
//console.log(dataobj['hash']);



