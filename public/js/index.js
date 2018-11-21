var socket = io();
socket.on('connect', function () {
  console.log("Connected to server");
  socket.emit('createMessage', {
    from: 'tejsingh401@gmail.com',
    text: 'Yup, thats work for me'
  });
});
socket.on('disconnect', function () {
  console.log("Disconnected from server");
});
socket.on('newMessage', function(message) {
  console.log("New message", message);
});
