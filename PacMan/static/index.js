let socket = io("http://localhost:8080"); //1

const person = prompt("Please enter your name", "");

function intro(name){
    socket.emit('new_user', {name:name});
}
intro(person);


socket.on('welcome', function(data){
    console.log(data);

    let msg = `<p><b>${data.user.name}</b> joined the room.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
    
    let tumbnail = `<div class="row align-items-center my-2 pb-2 border-bottom" id="${data.user.id}">
    <img class="col-5" src="img/pac.jpeg">
    <div class="col ">
        <h4>${data.user.name}</h4>
        <h6 id="${data.user.id}_score">${data.user.score}</h6>
    </div>
    </div>`
    $('#players').append(tumbnail);
});

socket.on('you_welcome', function(data){
    let msg = `<p><b>${person}</b>, Welcome to the room.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
    
    console.log(data);
    for (x in data.users){
        let tumbnail = `<div class="row align-items-center my-2 pb-2 border-bottom" id="${data.users[x].id}">
    <img class="col-5" src="img/pac.jpeg">
    <div class="col ">
        <h4>${data.users[x].name}</h4>
        <h6 id="${data.users[x].id}_score">${data.users[x].score}</h6>
    </div>
    </div>`
    $('#players').append(tumbnail);
    }
});

socket.on('bye', function(data){
    let msg = `<p><b>${data.user.name}</b> left the room.</p>`;
    $('#box').append(msg);
    $('#box').scrollTop($('#box').height()); // Keeping Scrollint to the bottom.
    $(`#${data.user.id}`).remove();
});

socket.on('update_chat', function(data){
    $("#box").append(data.msg);
});

socket.on('update_score', function(data){
    $(`#${data.user.id}_score`).text(data.user.score);
});

$("#messageform").on('submit', function(event){
    event.preventDefault();
    let msg = $('#message').val();
    let chat = `<p><b>${person}</b>: ${msg}</p>`
    socket.emit('send_text', {msg:chat});
    $('#message').val('');
});

$("#scoreform").on('submit', function(event){
    event.preventDefault();
    let score = $('#score').val();
    socket.emit('send_score', {score:score});
});
