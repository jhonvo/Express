const express = require("express");
const app = express();

app.use(express.static (__dirname + '/static'));

const server = app.listen(8080)
const io = require('socket.io')(server);

let chat = "";

io.on('connection', function(socket){
    socket.emit('start_chat', {chat:chat});
    socket.on('send_text', function(data){
        chat += data.msg;
        io.emit('update_chat', data);
    });
    
});