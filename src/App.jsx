import { useState } from "react";
import React from 'react';
import SendMessageButton from "./componets/SendMessageButton";
import ImageProfile from "./componets/ImageProfile";
import InviteToBoard from "./componets/InviteToBoard";
import UserBoardsList from "./componets/UsersBoards";

const App = () => {
  const handleSendMessage = () => {
    
    console.log('Sending message...');
  };

  const handleInviteClick = () => {
    
    console.log('Inviting to board...');
  };

  const userBoards = [
    { id: 1, name: 'Board 1' },
    { id: 2, name: 'Board 2' },
    
  ];

  return (
    <div>
      <SendMessageButton onClick={handleSendMessage} />
      <ImageProfile imageUrl="url-to-image" alt="User Profile" />
    </div>
  );
};

export default App;
