let socket = io("http://localhost:8080"); //1

socket.on('welcome', function(data){
    let msg = `<p>Socket ID <b>${data.id}</b> joined us.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
});

socket.on('you_welcome', function(data){
    let msg = `<p>You have joinded the chat on Socket ID <b>${data.id}</b>.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
});

socket.on('send_notification', function(data){
    let msg = `<p>Socket ID <b>${data.id}</b> sent a notification.</p>`;
    

    $('#box').append(msg);
    $('#box').animate({ // Keeping Scrollint to the bottom with animation.
        scrollTop: $('#box').get(0).scrollHeight
    }, 2000);
});

socket.on('bye', function(data){
    let msg = `<p>Socket ID <b>${data.id}</b> left the room.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
});

$('#push').on('click', function(event){
    socket.emit('click_notification', {});
});