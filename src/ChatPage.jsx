import React from 'react';

function ChatPage({ props }) {

  return (
    <div>
      <h2>{props.name}'s Chat</h2>
      <ChatList props={props}></ChatList>

      
    </div>
  );
}

export default ChatPage;


// import TextInput from "./TextInput";
// import ButtonSend from "./ButtunSend";
// import { amber, orange, yellow } from "@mui/material/colors";
// import AvatarProfile from "./AvatarProfile";
// import ChatEntries from "./Chathistory";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Avatar,
//   TextField,
//   Button,
//   Grid,
//   Stack,

// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send"; // Import the Send icon
  // {/* // State variables for managing new messages and chat history
  // // const [newMessage, setNewMessage] = useState("");
  // // const [chatHistory, setChatHistory] = useState([]);

  // // Function to handle sending a new message
  // // function handleSend() { */}
  // {/* //   // Check if the new message is not empty
  //   if (newMessage.trim() !== "") {
       // Get the current timestamp
      //  const newTimestamp = new Date();
       // Format the timestamp as a string
      //  const formattedTimestamp = newTimestamp.toLocaleString();

      // Update the chat history with the new message
  //      setChatHistory((prevChatHistory) => [
  //        ...prevChatHistory,
  //        {
  //          time: formattedTimestamp,
  //          message: newMessage,
  //          user: {
  //            id: 1,
  //            name: "Ariel Samuel",
  //            avatar: "/avatars/current-user.jpg",
  //          },
  //        },
  //      ]);

  //      // Clear the input for a new message
  //      setNewMessage("");
  //    }
  //  }

  //  Function to handle changes in the input field
  //  function handleChange(e) {
  //    setNewMessage(e.target.value);
  //  }

  //   <ChatEntries chatHistory={chatHistory} /> */} 



