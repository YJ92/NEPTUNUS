var http = require('http');
var fs = require('fs');

var SerialPort = require("serialport").SerialPort
//var serialPort = new SerialPort("/dev/tty-usbserial1", {
//  baudrate: 57600
//});

var server = http.createServer(function(req, res){
	fs.readFile('index.html', function(err,data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data);
	});

}).listen(8000);

var io = require('socket.io').listen(server);

io.on('connection',function(socket){
	console.log('socket connected');
	socket.on('data',function(msg){
		//serialPort.write(msg);
	});
});