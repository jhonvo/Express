// Load the express module (Where do you think this comes from?)
var express = require("express");

// invoke var express and store the resulting application in var app
var app = express();
app.use(express.static(__dirname + "/static"));

// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>"); // This is to send a basic HTML to the page.
})

app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})