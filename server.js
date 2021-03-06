var express = require('express'); //require busca dentro de los modulos
var multer  = require('multer');
var ext = require('file-extension');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, './uploads')
	},
	filename: function (req, file, cb) {
	  cb(null,  +Date.now() + '.' + ext(file.originalname))
	}
  });
   
var upload = multer({ storage: storage }).single('picture');

var app = express();//express permite hacer servidores web

app.set('view engine', 'pug'); // cuando le entreguemos vistas al usuario, utilice pug para renderizarlos

app.use(express.static('public')) //indica al servidor web que cualquier usuario va a poder acceder a la carpeta public

app.get('/', function(req, res){
	res.render('index', { title: 'Platzigram' }) //envia al cliente
});

app.get('/signup', function(req, res){
	res.render('index', { title: 'Platzigram - Signup' }) //envia al cliente
});

app.get('/signin', function(req, res){
	res.render('index', { title: 'Platzigram - Signin' }) //envia al cliente
});

app.get('/api/pictures', function(req, res){
	var pictures = [
		{
			user: {
				username: 'jsalvatierra',
				avatar: 'https://i.ytimg.com/vi/7j0KtbJsOyE/maxresdefault.jpg' 
			},
			url: 'office.jpg',
			likes: 0,
			liked: true,
			createdAt: +new Date()
		},
		{
			user: {
				username: 'jsalvatierra',
				avatar: 'https://i.ytimg.com/vi/7j0KtbJsOyE/maxresdefault.jpg' 
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: +new Date().setDate(+new Date().getDate() - 10)
		}
	];
	
	setTimeout(function(){
		res.send(pictures);
	}, 2000);
});

app.post('/api/pictures', function(req, res){
	upload(req, res, function(err){
		if(err){
			return res.send(500, "Error uploading file");
		} 
		res.send('File uploaded');

	})
})

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando por el puerto 3000')
});
