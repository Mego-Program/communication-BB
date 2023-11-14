import React from 'react';
import Button from '@mui/material/Button';

const SendMessageButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Send Message
    </Button>
  );
};

export default SendMessageButton;
