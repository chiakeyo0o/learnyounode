var mymodule = require('./mymodule.js');

var cb = function(err, filtered){
	if (err)
		return callback(err)
	var print = (item, index) => {
		console.log(item);
	}
	filtered.forEach(print);
}

mymodule(process.argv[2], process.argv[3], cb);
