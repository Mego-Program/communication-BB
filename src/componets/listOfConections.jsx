import React from "react"

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
  import SendIcon from "@mui/icons-material/Send"



  
export default function ListUsers(props){
    return (
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
          </div>)}