import io from "socket.io-client";
import React, { useEffect, useState } from "react";

const socket = io.connect("http://localhost:5000");

function App() {
  // this state is save input value
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // listen message from server
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    // close socket connection
    return () => {
      socket.off("message");
    };
  }, []);

  function sendMessage() {
    // if haave a message that send message to server
    if (input) {
      socket.emit("message", input);
    }
    // this is for clear input value
    setInput("");
  }

  return (
    <div>
      <input
        // this is input value and save on the input with setInput
        type="text"
        value={input}
        placeholder="Message"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;