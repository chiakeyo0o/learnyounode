var fs = require('fs');

var theRegex = (string) => {
	regex = "." + process.argv[3];
	return string.match(regex);
}

var print = (item, index) => {
	console.log(item);
}

fs.readdir(process.argv[2], (err, list) => {
	var filtered = list.filter(theRegex);
	filtered.forEach(print);
});