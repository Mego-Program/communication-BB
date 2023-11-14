import React from 'react';
import Button from '@mui/material/Button';

const InviteToBoard = ({ onInviteClick }) => {
  return (
    <Button variant="outlined" color="secondary" onClick={onInviteClick}>
      Invite to Board
    </Button>
  );
};

export default InviteToBoard;
