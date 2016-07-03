var fs = require('fs');

var bf = fs.readFileSync(process.argv[2]);

var count = bf.toString().match(/\n/g).length;
console.log(count);