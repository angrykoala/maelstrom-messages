var express = require('express');
var app = express();
var mongoose = require('mongoose');

var dbHandler = require('./app/dbhandler'); //database handler
var config=require('./config/config');

var version = process.env.npm_package_version;

require('./app/routes.js')(app); //loads routes

//app.use(express.static(__dirname + '/public'));

//connect and check errors
mongoose.connect(config.url);
var db = mongoose.connection;
db.on('error', function(err) {
	console.error('DB connection error:' + err);
});

db.once('open', function() {
	console.log("Maelström - Messages");
	if (version) console.log("Version " + version);
	console.log("Database opened");
	//Starts server once database has opened
	app.listen(config.port, function() {
		console.log("Server listening at on port " + config.port);
	});

});
