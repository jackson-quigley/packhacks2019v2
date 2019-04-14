var sjcl = require('sjcl');
var fs = require('fs');


function hash(infile)
{
        var data = fs.readFileSync(infile,'ascii');
        return sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(data).finalize());
}
var jsonstr = fs.readFileSync("writefile.txt",'utf-8');; 
var datadict = JSON.parse(jsonstr);
var stupidstring = process.argv[2];
var stupidhash = hash(stupidstring);
if(!(stupidhash in datadict))
{
        console.log("NEVER")
        datadict[stupidhash] = Date.now();
}
else
{
        console.log((new Date(datadict[stupidhash])).toLocaleString("en-US"));
}
jsonstr = JSON.stringify(datadict);
fs.writeFileSync('writefile.txt', jsonstr);
