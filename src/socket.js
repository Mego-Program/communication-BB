

const socket = io();

   // Example: Send a message to the server
   socket.emit('message', 'Hello, server!');

   // Example: Receive a message from the server
   socket.on('message', (data) => {
     console.log(`Received message: ${data.text} from user ${data.user}`);
   });
