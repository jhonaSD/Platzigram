var express = require('express'); //require busca dentro de los modulos

var app = express();//express permite hacer servidores web

app.get('/', function(req, res){
	res.send('Hola mundo') //envia al cliente
});

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando por el puerto 3000')
});
