let socket = io("http://localhost:8080"); //1
    
socket.on('greeting', function (data) { //4
    console.log(data.msg); //5
    socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
});

$('#push').on('click', function(event){
    socket.emit('push_send', {});
});

$('#reset').on('click', function(event){
    console.log("ressetting!");
    socket.emit('reset_send', {});
});

socket.on('count_update', function(data){
    console.log(data);
    $('.quantity').empty();
    $('.quantity').append(data.count);
});


