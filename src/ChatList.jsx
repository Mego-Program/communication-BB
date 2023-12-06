import React, { useEffect, useState } from "react";
import ListConnections from "./componets/ListOfConnections"; // Corrected import path
import TextInput from "./componets/TextInput";
import ButtonSend from "./componets/ButtunSend"
import ChatEntries from "./componets/chathistory";
import axios from "axios";
import { Outlet,Link } from "react-router-dom";
import MyAppBar from "./componets/MyAppBar";

function ChatList({ onUserClick }) {
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
            id: usersList._id,
            name:"daniel wisman",
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
<div >
  
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
