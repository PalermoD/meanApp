var restful = require('node-restful');

module.exports = function(app, route){
	// Set up the controller for rest 
	var rest = restful.model(
        'movie',
        app.models.movie,
        ).methods(['get', 'put', 'post', 'delete']);


	//register the endpoints
	rest.register(app, route);

    // Return the middleware 
	return function(res, req, next){
		next();
	};
};