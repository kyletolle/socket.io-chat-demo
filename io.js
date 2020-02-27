// Took this approach from https://stackoverflow.com/a/8837489/249218
module.exports = function(server) {
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        console.log("a user connected");
    })

    return io;
}