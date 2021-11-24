let socket = io("http://localhost:8080"); //1
console.log("!!!");
const person = prompt("Please enter your name", "");

function addingName (person){
    $('#username').append(person);
}
addingName(person);

$("#messageform").on('submit', function(event){
    event.preventDefault();
    let msg = $('#message').val();
    let chat = `<p>${person}: ${msg}</p>`
    socket.emit('send_text', {msg:chat});
    $('#message').val('');
});

socket.on('start_chat', function(data){
    $("#chat").append(data.chat);
});

socket.on('update_chat', function(data){
    $("#chat").append(data.msg);
});
