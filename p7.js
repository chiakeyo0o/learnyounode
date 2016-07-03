var http = require("http");
var cb = (response) => {
	response.setEncoding('utf-8');
	response.on('data', console.log);
	response.on('error', console.error);
};

http.get(process.argv[2], cb)