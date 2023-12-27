import React, { useState } from "react";
import {  List, ListItem, Avatar, ListItemText } from "@mui/material";
import { amber } from "@mui/material/colors";
import MyAppBar from './MyAppBar'; // Import the MyAppBar component
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function ListConnections({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user_me, setUser_me] = useState("");
  const navigate = useNavigate();

  const saveMessageToDatabase = async (userId, selectedUserId) => {
    try {
      const response = await axios.post('/api/saveMessage', {
        userId,
        selectedUserId,
      });

      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setUserId(user._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${infraApi}/api/users/list`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        const user_token = await axios.get(
          `${infraApi}/api/users/me`,
          {
            headers: {
              authorization: token,
            },
          }
        );
  
        console.log('Fetched user data:', response.data);
        console.log('Fetched user token data:', user_token.data);
  
        setUser_me(user_token.data.result[0]);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedUser && userId) {
      navigate(`/messages/ChatList/${userId}`);
    }
  }, [userId, selectedUser]);


  const handleNavigate = () => {
    if (selectedUser) {
      navigate(`/messages/ChatList/${userId}`);
    }
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
        {users.map((user) => (
          <ListItem
            key={user._id}
            button
            onClick={() => handleUserClick(user)}
            sx={{
              border: `1px ${amber[400]} solid`,
              borderRadius: "8px",
              marginBottom: "4px",
              backgroundColor:
                selectedUser && selectedUser._id === user._id
                  ? amber[100]
                  : "transparent",
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
                primary={
                  <Link
                    style={{ textDecoration: "none" ,color:"orange"}}
                    to={`ChatList/${user._id}`} // Use user._id directly
                  >
                    {user.firstName + " " + user.lastName}
                  </Link>
                }
                secondary={user.lastMessage}
              />
            </div>
          </ListItem>
        ))}
      </List>

      {/* Pass the selected user's name to the MyAppBar component */}

      {selectedUser ? (
        <MyAppBar
          contactName={`${selectedUser.firstName} ${selectedUser.lastName}`}
        />
      ) : null}
    </div>
  );
}
