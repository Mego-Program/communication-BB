import React, { useState } from "react";
import { Grid, List, ListItem, Avatar, ListItemText } from "@mui/material";
import { amber } from "@mui/material/colors";
import MyAppBar from './MyAppBar'; // Import the MyAppBar component
import { useNavigate } from "react-router-dom";

export default function ListConnections({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const navigte = useNavigate();

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleNavigate = () => {
    navigte("/messages")
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
              key={user._id}
              button
              onClick={() => handleUserClick(user)}
              sx={{
                border: `1px ${amber[400]} solid`,
                borderRadius: "8px",
                marginBottom: "4px",
                backgroundColor:
                  selectedUser && selectedUser._id === user._id ? amber[100] : "transparent",
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
                  primary={user.firstName + " " + user.lastName}
                  secondary={user.lastMessage}
                />
              </div>
            </ListItem>
          );
        })}
      </List>

      {/* Pass the selected user's name to the MyAppBar component */}
      
      {selectedUser ? (
       <MyAppBar contactName={`${selectedUser.firstName} ${selectedUser.lastName}`}  />
      ) : (
        
        handleNavigate()
      )};

    </div>
  );
}