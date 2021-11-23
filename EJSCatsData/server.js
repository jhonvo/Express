var express = require("express");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

let catlist = [
    {id:1, catname: 'Cuddles', image:'cat1.jpg', favoriteFood:'Tuna', age:2, spots:['Bed','Sofa'] },
    {id:2, catname: 'Simon', image:'cat2.jpg', favoriteFood:'Chicken', age:5, spots:['Carpet','Sofa'] },
    {id:3, catname: 'Pix', image:'cat3.gif', favoriteFood:'Tuna and Rice', age:1, spots:['Carpet','Bed'] },
    {id:4, catname: 'Luna', image:'cat4.jpg', favoriteFood:'Lettuce', age:3, spots:['Window','Floor'] }
]

app.get('/cats', function(request, response){
    response.render('cats', {cats : catlist});
})

app.get('/cats/1', function(request, response){
    response.render('catdetails', {cat : catlist[0]});
})

app.get('/cats/2', function(request, response){
    response.render('catdetails', {cat : catlist[1]});
})

app.get('/cats/3', function(request, response){
    response.render('catdetails', {cat : catlist[2]});
})

app.get('/cats/4', function(request, response){
    response.render('catdetails', {cat : catlist[3]});
})




app.listen(8080, function(){
    console.log( 'This server is running in port 8080.');
})