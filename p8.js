var http = require('http');
var bl= require('bl')
var cb = (response) => {
	// console.log(response.statusCode);
	response.pipe(bl(function(err, data){
		console.log(data.length)
		console.log(data.toString());
	}))
	// response.setEncoding('utf-8');
	// response.on('data', console.log);

}
// http.get("http://jsonplaceholder.typicode.com/posts/1", cb);
http.get(process.argv[2], cb);