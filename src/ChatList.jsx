import React, { useEffect, useState } from "react";

import TextInput from "./componets/TextInput";
import ButtonSend from "./componets/ButtunSend";
import ChatEntries from "./componets/ChatEntries";
import axios from "axios";
import {  useParams } from "react-router-dom";

import { io } from "socket.io-client";
import {infraApi} from "../src/App"


const socket = io.connect("http://localhost:5001");

function ChatList({ id }) {
  const userId = useParams()
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
  async function handleSend() {
    if (newMessage.trim() !== "") {
      // Perform a POST request to http://localhost:5001
      try {
        const response = await axios.post("http://localhost:5001", {
          text: newMessage,
          userId: userId,
          selectedUserId: user._id
        });

        console.log("Message sent to server:", response.data);
      } catch (error) {
        console.error("Error sending message to server:", error);
      }

      // Emit the new message to the socket server
      socket.emit("message", newMessage);

      // Clear the input for a new message
      setNewMessage("");
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
      

      <ChatEntries chatHistory={chatHistory} />

      {/* Text input component for entering new messages */}
      <TextInput newMessage={newMessage} handleChange={handleChange} />

      {/* Send button component with the SendIcon */}
      <ButtonSend handleSend={handleSend} />


    </div>
  );
}

export default ChatList;
