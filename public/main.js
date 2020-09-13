var socket = io.connect('http://localhost:9090', {'forceNew':true});
socket.on('messages', function(data){
    console.log(data);
    render(data);
});
function render(data){
    var html = data.map(function(elem, index){
        return(
            `<div>
            <strong>${elem.autor}</strong>:
            <em>${elem.text}</em>
            </div>`);
        }).join("");
    document.getElementById('mensajes').innerHTML=html;
}
function addmensaje(e){
    var payload={
        autor:document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-mensaje',payload);
    return false;
}