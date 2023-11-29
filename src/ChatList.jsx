import React from "react";
import ListConnections from "./componets/ListOfConections"; // Corrected import path
import React, { useState } from 'react';

// Functional component for rendering the chat list
function ChatList() {

  const [success, setSuccess] = useState('')

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const data = {
    //   firstName: firstName,
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
    }
  }

  // JSX structure for rendering the chat list component
  return (
    <div className="ChatContainer">
      <ListConnections users={success.users} />
    </div>
  );
};

export default ChatList;