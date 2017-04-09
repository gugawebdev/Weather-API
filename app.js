var express = require('express');
var weather = require('weather-js');
var moment = require('moment');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded(enconded= true));
var weather = require('weather-js');
 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
 
app.get('/', function(req, res){
		weather.find({search: 'Colorado,CA', degreeType: 'C'}, function(err, result) {
	  if(err) {
	  	console.log(err);
	 	}else{
	 		
	 		console.log(JSON.stringify(result, null, 2));
	 		res.render('index', {result:result});
	 	}
	  
	});

})

app.post('/temperature', function(req,res ){
	var city = req.body.city;
	var estado = req.body.estado;
	var result = city + ', ' + estado;
	weather.find({search: result, degreeType: 'C'}, function(err, result) {
	  if(err) {
	  	console.log(err);
	 	}else{
	 		
	 		console.log(JSON.stringify(result, null, 2));
	 		res.render('index', {result:result});
	 	}
	  
	});
});

app.listen(3000, function(){
	console.log("Servidor rodando na porta 3000. As: " + moment().format('LT'));
})