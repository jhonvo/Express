const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static (__dirname + '/static'));

const server = app.listen(8080)
const io = require('socket.io')(server);

var count = 0;

io.on('connection', function(socket){
    // console.log("You've reached the server, Welcome!", count)
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    socket.on('thankyou', function (data) {
            console.log(data.msg); 
            });
    io.sockets.emit('count_update', {count:count});
    socket.on('push_send', function(data){
        count += 1;
        
        io.sockets.emit('count_update', {count:count});
    });
    socket.on('reset_send', function(data){
        count = 0;
        console.log("resetcount", count)
        io.sockets.emit('count_update', {count:count});
    });
    
});