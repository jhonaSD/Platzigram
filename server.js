var express = require('express'); //require busca dentro de los modulos

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

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando por el puerto 3000')
});
