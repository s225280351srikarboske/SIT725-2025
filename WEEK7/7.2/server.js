const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Create HTTP server for Socket.IO
const http = require('http').createServer(app);

// Initialize Socket.IO
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Send random number every second
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

// Use http.listen instead of app.listen for Socket.IO
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});