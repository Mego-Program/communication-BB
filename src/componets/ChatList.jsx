import React, { useState } from "react";
import TextInput from "./TextInput";
import ListUsers from "./listOfConections";
import ButtonSend from "./ButtunSend";
import { amber, orange, yellow } from '@mui/material/colors';
import AvatarProfile from "./AvatarProfile";

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
      <Stack
        justify-content="flex-end"
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <div>
          {/* Map through chat history and render each chat entry */}
          {chatHistory.map(function renderMessage(entry, index) {
            const { message, user, time } = entry;
            let editMessege = message;
            // Replace newline characters with HTML line breaks
            const lines = editMessege.split('\n');

            // Return JSX for each chat entry
            return (
              // Apply a 'Grow' transition effect to the chat entry
              <Grow key={index} in={true} timeout={1200}>
                <div
                  style={{
                   width: "73%",
                    border: "1px solid ",
                    borderRadius: "20px",
                    color: "rgba(246, 201, 39, 1)",
                    display: "flex",
                    marginLeft: "230px",
                    marginBottom: "10px", // Adjusted margin between chat entries
                  }}
                >
                  {/* Display user avatar and profile */}
                  <AvatarProfile
                    name={user.name}
                    avatar={user.avatar}
                  ></AvatarProfile>

                  {/* Display user name, message content, and timestamp */}
                  <div style={{ paddingTop: '30px', marginLeft: '10px', marginRight: '0px' }}>
                    <span style={{ fontWeight: "bold" }}>{user.name} </span>
                    {/* Map through lines and render each line as a paragraph */}
                    {lines.map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        <p
                          style={{
                            fontSize: "15px",
                            fontWeight: "unset",
                            color: "white",
                            marginTop: lineIndex > 0 ? '0' : '10px', // Adjusted margin-top between lines
                            marginBottom: '0', // Adjusted margin-bottom between lines
                          }}
                        >
                          {line}
                        </p>
                      </React.Fragment>
                    ))}
                    <p style={{ marginLeft: '600px' }}>{time}</p>
                  </div>
                </div>
              </Grow>
            );
          })}
        </div>
      </Stack>

      {/* Container for the list of connections */}
      <Grid
        container
        height={"1vh"}
        justifyContent="flex-start"
        style={{ position: "fixed", bottom: 865, left: 30, right: 0 }}
        elevation={3}
      >
        <div id={"list of connections"} style={{ overflowY: "auto" }}>
          {/* List of connections with avatars and names */}
          <List>
            {props.chats.map(function renderChatItem(chat) {
              return (
                <ListItem
                  key={chat.id}
                  button
                  sx={{
                    border: `1px ${amber[400]} solid`,
                    borderRadius: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <Avatar alt={chat.name} src={chat.avatar} />
                  <div
                    style={{
                      marginLeft: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ListItemText
                      primary={chat.name}
                      secondary={chat.lastMessage}
                    />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>

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

