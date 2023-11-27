import React, { useState, useEffect } from 'react';
import UserProfile from "./componets/Avatar/UserProfile";
import io from "socket.io-client";
const socket = io("http://localhost:3011");

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <>
      <UserProfile />
        <p>Connected: {isConnected ? "yes" : "no"}</p>
    </>
  );
}

export default App;
