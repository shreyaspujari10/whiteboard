

var app = require('express')();
var http =require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log('user online');

    socket.on('canvas-data', (data)=> {
        socket.broadcast.emit('canvas-data', data);
    })
})

var server_port = process.env.Your_port || process.env.PORT || 5000;
http.listen(server_port, ()=>{
    console.log("startred on : "+ server_port);
})