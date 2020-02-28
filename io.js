// Took this approach from https://stackoverflow.com/a/8837489/249218
module.exports = function(server) {
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        console.log("a user connected");

        socket.on('disconnect', function() {
            console.log('a user disconnected');
        });

        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        })
    })


    return io;
}