var http = require('http');
var map = require('through2-map');

var server = http.createServer((req, res) => {
	inStream.pipe(map(function (res) {
		return chunk.toString().split('').reverse().join('')
	})).pipe(outStream)
	// console.log(res);
})
server.listen(process.argv[2])