var http = require('http')
var fs = require('file-system')
var server = http.createServer((req, res) => {
	fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(process.argv[2]);