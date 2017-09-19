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
			liked: true,
			createdAt: new Date()
		},
		{
			user: {
				username: 'jsalvatierra',
				avatar: 'https://i.ytimg.com/vi/7j0KtbJsOyE/maxresdefault.jpg' 
			},
			url: 'office.jpg',
			likes: 2,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	];

	main.appendChild(template(pictures));
})
