import React from "react";
import { Grid, List, ListItem, Avatar, ListItemText } from "@mui/material";
import { amber } from "@mui/material/colors";

function ListConnections({ chats }) {
  return (
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
          {chats.map(function renderChatItem(chat) {
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
  );
}

export default ListConnections;
