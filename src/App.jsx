import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChatList from "./ChatList";
import ChatPage from "./componets/contact";
import socket from "./socket";
import Root from "./componets/root";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  useEffect(() => {
    // Your asynchronous operations to set isLoaded
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F6C927",
      },
      background: { default: "#0A0A1B" },
    },
  });

  return (
    //<ChatList onUserClick={handleUserClick}  />
    <Root></Root>
  );
};

export default App;
