const { io } = require('../index');

// Sockets
io.on('connection', client => {
    console.log('Client Connected');

    client.on('disconnect', () => {
        console.log("Client Disconnected");
    });

    client.on('message', () => {
        console.log("Message Emit");
    });
});