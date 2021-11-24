let socket = io("http://localhost:8080"); //1
console.log("!!!");
$('#blue').on('click', function(event){
    let color = "#287dca";
    socket.emit('color_click', { color:color})
    // $('body').css("background-color","#287dca");
});

$('#orange').on('click', function(event){
    let color = "#f6b26b";
    socket.emit('color_click', { color:color})
    // $('body').css("background-color","#f6b26b");
});

$('#green').on('click', function(event){
    let color = "#93c47d";
    socket.emit('color_click', { color:color})
    // $('body').css("background-color","#93c47d");
});

socket.on('update_color', function(data){
    $('body').css("background-color",data.color);
});

