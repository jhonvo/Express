const express = require("express");
const app = express();

app.use(express.static (__dirname + '/static'));

const server = app.listen(8080)
const io = require('socket.io')(server);


io.on('connection', function (socket) {
    // console.log(socket.id);
    // socket.on("eventName", function(){
    //     console.log(socket.id);    
    // })

    socket.emit('you_welcome', {id:socket.id})
    socket.broadcast.emit('welcome', {id:socket.id})

    socket.on('click_notification', function(data){
        io.emit('send_notification', {id:socket.id});
    });
    
    socket.on('disconnect', function(){
        console.log("user left", socket.id);
        io.emit('bye', {id:socket.id});
    });

});

