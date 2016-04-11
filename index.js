var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');


//Create the application 
var app = express();

//Add middleware necessary for REST api's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support 
app.use(function(res, req, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Method', 'GET, POST, DELETE, EDIT');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

// app.use('/hello', function(req, res, next){
//     res.send('Hello World!!!');
//     next();
// });

//Connect to Mongodb 
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function(){

	//Load all the models
	app.models = require('./models/index');
	console.log('listening on port 3000 . . .');
	app.listen(3000);
});