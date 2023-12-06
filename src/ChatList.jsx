import React, { useEffect, useState } from "react";
import ListConnections from "./componets/ListOfConnections"; // Corrected import path
import TextInput from "./componets/TextInput";
import ButtonSend from "./componets/ButtunSend";
import ChatEntries from "./componets/chathistory";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import MyAppBar from "./componets/MyAppBar";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5015");

function ChatList({ onUserClick }) {
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

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
            _id: usersList._id,
            name: usersList.firstName + " " + usersList.lastName,
            avatar: "/avatars/current-user.jpg",
          },
        },
      ]);
    });
  }, []);

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

  const [isLoaded, setIsLoaded] = useState(false);
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:5000/api/users/users`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setUserList(response.data.result);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
