import React, { useState } from "react";
import { Grid, List, ListItem, Avatar, ListItemText } from "@mui/material";
import { amber } from "@mui/material/colors";

function ListConnections({ chats }) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Grid
      container
      maxHeight={"10vh"}
      justifyContent="flex-start"
      style={{ position: "fixed", bottom: 643, left: 30, right: 0 }}
      elevation={3}
    >
      <div id={"list of connections"} style={{ overflowY: "auto" }}>
        {/* List of connections with avatars and names */}
        <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "#21213E",
          color: "#FFFFFF",
          overflow: 'auto',
          position: 'relative',
          maxHeight: 900
        }}>
          {chats.map(function renderChatItem(chat) {
            return (
              <ListItem
                key={chat.id}
                button
                onClick={() => handleUserClick(chat.id)}
                sx={{
                  border: `1px ${amber[400]} solid`,
                  borderRadius: "8px",
                  marginBottom: "4px",
                  backgroundColor: selectedUserId === chat.id ? amber[100] : "transparent",
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
  );
}

export default ListConnections;
