const express = require("express");
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on("input", (brightness, speed) => {
        io.emit("output", brightness, speed);
    })
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
})