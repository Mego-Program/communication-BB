import React, { useState } from "react";
import TextInput from "./TextInput";
import ListUsers from "./listOfConections";
import ButtonSend from "./ButtunSend";

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

function ChatList(props) {
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  function handleSend() {
    if (newMessage.trim() !== "") {
      const newTimestamp = new Date();
      const formattedTimestamp = newTimestamp.toLocaleString(); // Format the timestamp as a string

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          time: formattedTimestamp,
          message: newMessage,
          user: {
            id: 1,
            name: "Daniel Samuel",
            avatar: "/avatars/current-user.jpg",
          },
        },
      ]);

      setNewMessage("");
    }
  }

  function handleChange(e) {
    setNewMessage(e.target.value);
  }

  return (
    <div className="ChatContainer">
           <Stack
        justify-content='flex-end'
        direction="row"
        useFlexGap
        flexWrap="wrap"
        
      >
       
<div>
  {chatHistory.map(function renderMessage(entry, index) {
    const { message, user, time } = entry;
    return (
      // chat history
      <Grow key={index} in={true} timeout={1200}>
        <div
          style={{
            width: "85%",
            border: "1px solid ",
            borderRadius: "20px",
            color: "rgba(246, 201, 39, 1)",
            display: "flex",
            marginLeft: "220px",
            marginBottom: "44px",
          }}
        >
          <Avatar style={{ marginLeft: '20px', marginTop: '20px' }} alt={user.name} src={user.avatar} />
          <div style={{ paddingTop: '30px', marginLeft: '10px', marginRight: '0px' }}>
            <span style={{ fontWeight: "bold" }}>{user.name} </span>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "unset",
                color: "white",
                marginTop: '20px', // Adjusted margin-top for the message
              }}
            >
              {message}{" "}
            </p>
            <p style={{marginLeft:'300px'}}>{time}</p>
          </div>
        </div>
      </Grow>
    );
  })}
</div>


       </Stack> 
      

      
        <Grid
          container
          height={"1vh"}
          justifyContent="flex-start"
          style={{ position: "fixed", bottom: 865, left: 0, right: 0 }}
          elevation={3}
        >
          <div id={"list of conections"} style={{ overflowY: "auto" }}>
          <List>
            {props.chats.map(function renderChatItem(chat) {
              return (
                <ListItem
                  key={chat.id}
                  button
                  sx={{
                    border: "2px solid orange",
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
      



      <Grid id={"text input"}
        container
        height={"85vh"}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <TextInput newMessage={newMessage}
                  handleChange={handleChange}
    />
      </Grid>

      <Grid
        container
        height={"5vh"}
        justifyContent={"center"}
        alignItems="flex-end"
      >
        {/* Use the SendIcon component instead of 'send' text */}
        <ButtonSend handleSend={handleSend} />
      </Grid>

    </div>
  );
}

export default ChatList;
