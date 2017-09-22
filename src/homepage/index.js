var page = require('page');
var template = require('./template');
var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function(ctx, next){
	var main = document.getElementById('main-container');
	main.innerHTML = ''
	main.appendChild(template(ctx.pictures));
})

function loadPictures(ctx, next){
	request
		.get('/api/pictures')
		.end(function(err, res){
			if (err) return console.log(err)

			ctx.pictures = res.body;
			next();
		})
}
