var mongoose = require('mongoose');

//Create a schema 
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}

});

//export the module schema 
module.exports = MovieSchema;