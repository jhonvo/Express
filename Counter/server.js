var express = require("express");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var session = require('express-session');

app.use(session({secret: 'codingdojorocks'})); 

app.get('/', function(req, response){
    if (req.session.count != null){
        count = req.session.count += 1;
    } else {
        req.session.count = 0;
        count = count = req.session.count;;
    }
    response.render('counter', {count:count});
})

app.get('/double', function(req, response){
    req.session.count ++;
    response.redirect('/');
})

app.get('/single', function(req, response){
    response.redirect('/');
})

app.get('/reset', function(req, response){
    req.session.count = 0;
    response.redirect('/');
})

app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})