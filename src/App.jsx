import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserProfile from "./componets/AvatarProfile";
import ChatList from './componets/ChatList';
import ListUsers from './componets/ListOfConections';
import ChatsInformation from './componets/ChatsInformation'; // Update the path accordingly



const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    background: { default: '#0A0A1B' },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {!isLoaded ? (
          <Route path="/*" element={<CircularColor />} />
        ) : (
          <>
            <Route path="/" element={<ChatsInformation />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/ListUsers" element={<ListUsers />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
























// import React, { useState, useEffect } from 'react';
// import UserProfile from "./componets/AvatarProfile";
// import ChatList from './componets/ChatList';
// import Grid from '@mui/material/Grid';
// import ListUsers from './componets/listOfConections';
// import chats from './componets/chatsInformation'; // Update the path accordingly

// import io from "socket.io-client";
// const socket = io("http://localhost:3011");

// function App2() {
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   useEffect(() => {
//     function onConnect() {
//       setIsConnected(true);
//     }

//     function onDisconnect() {
//       setIsConnected(false);
//     }

//     function onFooEvent(value) {
//       setFooEvents((previous) => [...previous, value]);
//     }

//     socket.on("connect", onConnect);
//     socket.on("disconnect", onDisconnect);
//     socket.on("foo", onFooEvent);

//     return () => {
//       socket.off("connect", onConnect);
//       socket.off("disconnect", onDisconnect);
//       socket.off("foo", onFooEvent);
//     };
//   }, []);

//   return (
//     <>
//       <UserProfile />
//         <p>Connected: {isConnected ? "yes" : "no"}</p>
//     </>
//   )
// }



// function App() {
  
//     // Add more chat items as needed
  

//   return (
//     <div   >
      
//         <ChatList chats={chats} />
      
//     </div>
//   );
// }

// export default App