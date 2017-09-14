var page = require('page');
var template = require('./template');

page('/', function(ctx, next){
	var main = document.getElementById('main-container');
	main.innerHTML = ''

	var pictures = [
		{
			user: {
				username: 'jsalvatierra',
				avatar: 'https://i.ytimg.com/vi/7j0KtbJsOyE/maxresdefault.jpg' 
			},
			url: 'office.jpg',
			likes: 10,
			liked: true
		},
		{
			user: {
				username: 'jsalvatierra',
				avatar: 'https://i.ytimg.com/vi/7j0KtbJsOyE/maxresdefault.jpg' 
			},
			url: 'office.jpg',
			likes: 2,
			liked: true
		}
	];

	main.appendChild(template(pictures));
})
