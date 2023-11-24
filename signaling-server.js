// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Handle incoming connections
io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Handle signaling messages
    socket.on('offer', (data) => {
        // Process the offer and send it to the other peer
        socket.broadcast.emit('offer', data);
    });

    socket.on('answer', (data) => {
        // Process the answer and send it to the other peer
        socket.broadcast.emit('answer', data);
    });

    // Handle ICE candidates
    socket.on('ice-candidate', (data) => {
        // Forward ICE candidate to the other peer
        socket.broadcast.emit('ice-candidate', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Signaling server listening on port ${PORT}`);
});