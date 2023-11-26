import React, { useState } from "react";
import TextInput from "./TextInput";
import ListConnections from "./listOfConections";
import ButtonSend from "./ButtunSend";
import { amber, orange, yellow } from '@mui/material/colors';
import AvatarProfile from "./AvatarProfile";
import ChatEntries from "./chathistory";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  TextField,
  Button,
  Grid,
  Grow,
  colors,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send"; // Import the Send icon

// Functional component for rendering the chat list
function ChatList(props) {
  // State variables for managing new messages and chat history
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Function to handle sending a new message
  function handleSend() {
    // Check if the new message is not empty
    if (newMessage.trim() !== "") {
      // Get the current timestamp
      const newTimestamp = new Date();
      // Format the timestamp as a string
      const formattedTimestamp = newTimestamp.toLocaleString();

      // Update the chat history with the new message
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          time: formattedTimestamp,
          message: newMessage,
          user: {
            id: 1,
            name: "Ariel Samuel",
            avatar: "/avatars/current-user.jpg",
          },
        },
      ]);

      // Clear the input for a new message
      setNewMessage("");
    }
  }

  // Function to handle changes in the input field
  function handleChange(e) {
    setNewMessage(e.target.value);
  }

  // JSX structure for rendering the chat list component
  return (
    <div className="ChatContainer">
      {/* Container for chat entries with flex layout */}
      <ChatEntries chatHistory={chatHistory} />

      {/* Container for the list of connections */}
      <ListConnections chats={props.chats} />

      {/* Container for the text input */}
      <Grid
        container
        height={"85vh"}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        {/* Text input component for entering new messages */}
        <TextInput newMessage={newMessage} handleChange={handleChange} />
      </Grid>

      {/* Container for the send button */}
      <Grid
        container
        height={"5vh"}
        justifyContent={"center"}
        alignItems="flex-end"
      >
        {/* Send button component with the SendIcon */}
        <ButtonSend handleSend={handleSend} />
      </Grid>
    </div>
  );
}

// Export the ChatList component
export default ChatList;

