var express = require("express");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response){
    response.render('cars');
})

app.get('/cats', function(request, response){
    response.render('cats');
})

app.get('/cars/new', function(request, response){
    response.render('newcar');
})

app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})