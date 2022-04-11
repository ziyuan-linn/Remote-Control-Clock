const socket = io();

socket.on("connect", () => {
    console.log(socket.id);
})

setInterval(() => {
    socket.emit("test", "1")
}, 1000);

socket.on("get-pulse", (brightness) => {
    
})