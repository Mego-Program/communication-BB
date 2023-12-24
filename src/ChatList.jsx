import React, { useEffect, useState } from "react";
import ListConnections from "./componets/ListOfConnections"; // Corrected import path
import TextInput from "./componets/TextInput";
import ButtonSend from "./componets/ButtunSend";
import ChatEntries from "./componets/chathistory";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import MyAppBar from "./componets/MyAppBar";
import { io } from "socket.io-client";
import { infraApi, api } from "./App";


const socket = io.connect(api);

function ChatList({ onUserClick }) {
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [usersList, setUserList] = useState([]);
  const [user,setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token)

        const response = await axios.get(
          `${infraApi}/api/users/list`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        const user = await axios.get(
          `${infraApi}/api/users/me`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setUserList(response.data.result);
        console.log('user: ', user.data.result[0]);
        setUser(user.data.result[0])
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const newTimestamp = new Date(); // Get the current timestamp
    const formattedTimestamp = newTimestamp.toLocaleString(); // Format the timestamp as a string
   
    
    // get message from server
    socket.on("message", (message) => {
      console.log(message);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          time: formattedTimestamp,
          message: message,
          user: {
            id: 2,
            name: user.firstName + " " + user.lastName,//here i want to put the name of the token
            avatar: user.lastName
          },
        },
      ]);
    });
    return () => {
      socket.off("message");
    };
  }, [usersList]);
   
  

  console.log(usersList.firstName)
  // Function to handle sending a new message
  function handleSend() {
    // Check if the new message is not empty
    if (newMessage.trim() !== "") {
      socket.emit("message", newMessage); // Send the new message to the server
      setNewMessage(""); // Clear the input for a new message
    }
  }

  // Function to handle changes in the input field
  function handleChange(e) {
    setNewMessage(e.target.value);
  }



  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <MyAppBar></MyAppBar>

      <ChatEntries chatHistory={chatHistory} />

      {/* Text input component for entering new messages */}
      <TextInput newMessage={newMessage} handleChange={handleChange} />

      {/* Send button component with the SendIcon */}
      <ButtonSend handleSend={handleSend} />
    </div>
  );
}

export default ChatList;
