var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mensajes =[{
    id:1,
    text:"Hola, como estas",
    autor:"David"
}];
app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("Hola mundooooo!");
});
io.on('connection',function(socket){
    console.log('alguien se ha conectado');
    socket.emit('messages',mensajes);
    socket.on('new-mensaje',function(data){
        mensajes.push(data);
        io.sockets.emit('messages', mensajes);
    });
});
server.listen(9090,function(){
    console.log("Servidor esta corriendo...");
});