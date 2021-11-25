const express = require("express");
const app = express();

app.use(express.static (__dirname + '/static'));

const server = app.listen(8080)
const io = require('socket.io')(server);

let users = {};


io.on('connection', function (socket) {

    

    socket.on('new_user', function(data){
        let name = data.name;
        let id = socket.id;

        socket.emit('you_welcome', {users:users});

        users[id] = {
            id:id,
            name:name,
            score:0
        }     
        console.log("Added", users); 

        socket.broadcast.emit('welcome', {user : users[socket.id]});
    });
    
    socket.on('send_text', function(data){
        io.emit('update_chat', data);
    });

    socket.on('send_score', function(data){
        let score = data.score;
        users[socket.id].score = score;
        io.emit('update_score', {user:users[socket.id]});
    });

    socket.on('disconnect', function(){
        io.emit('bye', {user:users[socket.id]});
        delete users[socket.id];
        console.log("Removed", users);
    });

});
