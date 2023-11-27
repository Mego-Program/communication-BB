import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChatList from './componets/ChatList';








function App() {
  const chats = [
    { id: 1, name: 'danielsamuel', avatar: '/avatars/john.jpg', lastMessage: 'Hello there!' ,state: false},
    { id: 2, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 3, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 4, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 5, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 6, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 7, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 8, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 9, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 10, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 11, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 12, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 13, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 14, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 15, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    { id: 16, name: 'Daniel Waisman', avatar: '/avatars/jane.jpg', lastMessage: 'How are you?', state: false},
    
    
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ChatList chats={chats} />} />

          {chats.map((chat) => (
            <Route key={chat.id} path={`chat/${chat.id}`} element={<ChatPage chat={chat} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}


function ChatPage({ chat }) {
  return (
    <div>
      <h2>{chat.name}'s Chat</h2>
      
    </div>
  );
}


export default App;