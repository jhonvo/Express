const express = require("express");
const app = express();

app.use(express.static (__dirname + '/static'));

const server = app.listen(8080)
const io = require('socket.io')(server);

let color = "#f3f6f4"

io.on('connection', function(socket){
    io.emit('update_color', {color:color});
    socket.on('color_click', function(data){
        color = data.color;
        io.emit('update_color', {color:color});
    });
});