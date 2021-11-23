var express = require("express");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index');
})

app.post('/result', function(req, res){
    let result = req.body;
    console.log(result);
    res.render('result', {result:result});
} )

app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})




