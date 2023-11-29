import React, { useState } from "react";
import { Grid, List, ListItem, Avatar, ListItemText } from "@mui/material";
import { amber } from "@mui/material/colors";

function ListConnections({ users }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
 console.log(users)
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div id={"list of connections"} style={{ overflowY: "auto" }}>
      {/* List of connections with avatars and names */}
      <List
        sx={{
          width: "14%",

          bgcolor: "#21213E",
          color: "#F6C927",
          overflowY: "auto",
          position: "fixed",
          height: "100vh",
        }}
      >
        {users.map(function renderChatItem(user) {
          return (
            <ListItem
              key={user.id}
              button
              onClick={() => handleUserClick(user.id)}
              sx={{
                border: `1px ${amber[400]} solid`,
                borderRadius: "8px",
                marginBottom: "4px",
                backgroundColor:
                  selectedUserId === user.id ? amber[100] : "transparent",
              }}
            >
              <Avatar alt={user.firstName} src={user.lastName} />
              <div
                style={{
                  marginLeft: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemText
                  primary={user.lastName}
                  secondary={user.lastMessage}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ListConnections;
