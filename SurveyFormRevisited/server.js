const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static (__dirname + '/static'));

// app.get('/', function(req, res){
//     res.render('index');
// })

const server = app.listen(8080)
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log("You've reached the server, Welcome!")
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    socket.on('thankyou', function (data) { //7
              console.log(data.msg); //8 (note: this log will be on your server's terminal)
            });

    socket.on('posting_form', function(data){
        // console.log(data);
        socket.emit('updated_message', data );
        let random = Math.floor(Math.random() * 1000);
        console.log(random);
        socket.emit('random_number', random);
    })
});

