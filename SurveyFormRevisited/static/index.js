let socket = io("http://localhost:8080"); //1
    
socket.on('greeting', function (data) { //4
    console.log(data.msg); //5
    socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
});

$('.dojoform').on('submit', function(event){
    event.preventDefault();

    let name = $('#name').val();
    let location = $('#location').val();
    let language = $('#language').val();
    let comment = $('#comment').val();

    let result = { 
        name:name, 
        location:location, 
        language:language, 
        comment:comment
    };

    // console.log(result);
    socket.emit('posting_form', result);
});

socket.on('updated_message', function(data){
    // console.log('data', data);
    $('.sucessbox').empty();
    let formresult = `<div class="p-2">You emmited the following informaton to the database: {
        name: '${data.name}',
        location: '${data.location}',
        language: '${data.language}',
        comment: '${data.comment}'
    }.</div>`;
    $('.sucessbox').append(formresult);
})

socket.on('random_number', function(data){
    let message = `<div class="p-2">Your lucky number emmitted by the server is ${data}.</div>`;
    $('.sucessbox').append(message);
})

