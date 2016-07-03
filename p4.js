var fs = require('fs');

fs.readFile(process.argv[2], (err,data) => {
	var count = data.toString().match(/\n/g).length;
	console.log(count);
});

