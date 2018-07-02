var express = require('express');
var app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname+"/public"));

app.get('/', function(req, res){
	res.render("home");
});

app.get('/filter', function(req, res){
	res.render("filter");
});

app.get('/order', function(req, res){
	res.render("order");
});


app.listen(process.env.PORT || 3000, function(){
	console.log("Server Running");
});

