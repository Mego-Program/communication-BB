import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from "@mui/material";

function ChatPage({ user }) {
  const navigateTo = useNavigate();
  const [content, setcontent] = useState('');
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const data = {
    //   content: content,
    // };

    try {
      const response = await axios.post('http://localhost:5000/api/chats/content');
      setSuccess(response.data.message)
      setErrors('')
      setTimeout(() => {
        navigateTo('/');;
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {

        setErrors(error.response.data.errors.join(', '));
        setSuccess('');
      } else {
        console.error('Undetected error', error.message);
      }

      return (
        <div>
          <h2>{props.name}'s Chat</h2>
          <ChatList props={success}></ChatList>
        </div>
      );
    }

    export default ChatPage;

