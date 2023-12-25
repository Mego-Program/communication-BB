import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

function MyAppBar({ contactName }) {
  const firstLetter = contactName ? contactName.charAt(0) : '';

  return (
    <AppBar position="fixed" sx={{ width: '83%', backgroundColor: '#F6C927', marginLeft: 'auto' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Contact's Avatar */}
        <Avatar alt={`Contact Avatar - ${firstLetter}`} sx={{ marginRight: 2 }}>
          {firstLetter}
        </Avatar>
        {/* Contact's Name */}
        <Typography variant="h6" component="div" sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {contactName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
