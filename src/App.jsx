import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Root from "./componets/root";

export const infraApi = import.meta.env.VITE_INFRA_API
export const api = import.meta.env.VITE_MESSEGE_API

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState('');

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
    <Root />
  );
};

export default App;
