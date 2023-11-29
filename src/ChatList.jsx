import React from "react";
import ListConnections from "./componets/ListOfConections"; // Corrected import path
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Functional component for rendering the chat list
function ChatList() {

  const navigateTo = useNavigate();
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const data = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    // };

    try {
      const response = await axios.post('http://localhost:5000/api/users/allUsers');
      setSuccess(response.data.message)
      setErrors('')
      setTimeout(() => {
        //navigateTo('/');;
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {

        setErrors(error.response.data.errors.join(', '));
        setSuccess('');
      } else {
        console.error('Undetected error', error.message);
      }

      // JSX structure for rendering the chat list component
      return (
        <div className="ChatContainer">
          <ListConnections users={success.users} />
        </div>
      );
    }

    export default ChatList;


// // State variables for managing new messages and chat history
// const [newMessage, setNewMessage] = useState("");
// const [chatHistory, setChatHistory] = useState([]);

// Function to handle sending a new message
// function handleSend() {
//   // Check if the new message is not empty
//   if (newMessage.trim() !== "") {
//     // Get the current timestamp
//     const newTimestamp = new Date();
//     // Format the timestamp as a string
//     const formattedTimestamp = newTimestamp.toLocaleString();

// Update the chat history with the new message
//     setChatHistory((prevChatHistory) => [
//       ...prevChatHistory,
//       {
//         time: formattedTimestamp,
//         message: newMessage,
//         user: {
//           id: 1,
//           name: "Ariel Samuel",
//           avatar: "/avatars/current-user.jpg",
//         },
//       },
//     ]);

//     // Clear the input for a new message
//     setNewMessage("");
//   }
// }

// Function to handle changes in the input field
// function handleChange(e) {
//   setNewMessage(e.target.value);
// }

// {
//   /* <ChatEntries chatHistory={chatHistory} /> */
// }



