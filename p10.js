var net = require('net');
var strftime = require('strftime')
var server = net.createServer(function (socket) {
       // socket handling logic
       var date = new Date();
       var first = strftime('%Y-%m-%d %H:%M',date)
       socket.write(first+"\n");
       socket.end();
   })
server.listen(process.argv[2]);



