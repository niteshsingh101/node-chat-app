const path = require('path');
const http = require('http');
const express =  require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io =  socketIO(server);
app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log("User was disconnected");
  });
  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to chat app',
    createAt: new Date().getTime()
  });
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createAt: new Date().getTime()
  });
  socket.on('createMessage', (message) => {
    console.log("message", message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    } );
  });
});

server.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
