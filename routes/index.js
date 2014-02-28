var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects.grid = false;
  	res.render('index', projects);
};

/* Alternative home page */
exports.viewgrid = function(req, res){
	projects.grid = true;
  	res.render('index', projects);
};