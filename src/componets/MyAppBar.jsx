import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

const MyAppBar = () => {
  return (
    <AppBar position="static" sx={{ width: '83%', backgroundColor: '#F6C927', marginLeft: 'auto' }}>
    <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Your User Avatar */}
      <Avatar alt="User Avatar" src="/static/images/avatar.jpg" sx={{ marginRight: 2 }} />
  
      {/* Your Name */}
      <Typography variant="h6" component="div" sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
        Contact Name
      </Typography>
    </Toolbar>
  </AppBar>
  
  

  );
};

export default MyAppBar;
