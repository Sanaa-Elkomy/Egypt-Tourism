var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
	console.log("OHAAA, Server is Running on Port 8080");
});