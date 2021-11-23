var express = require("express");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');

app.use(session({secret: 'codingdojorocks'})); 


app.get('/', function(req, res){
    let result;
    if (req.session.number == null) {
        const random = Math.floor(Math.random() * 100);
        req.session.number = random;
        // console.log(req.session.number);
        // console.log(req.session.guess);
    } 
    if (req.session.guess == null){
        result = null;
    }
    else {
        if (req.session.guess > req.session.number ){
            result = "high";
        }
        if (req.session.guess < req.session.number ){
            result = "low";
        }
        if (req.session.guess == req.session.number ){
            result = "correct";
        }
    }
    res.render('index', {result:result, number:req.session.number} );
})

app.post('/guess', function(req, res){
    req.session.guess = req.body.guess;
    res.redirect('/');
} )


app.post('/restart', function(req, res){
    req.session.number = null;
    req.session.guess = null;
    res.redirect('/');
} )


app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})