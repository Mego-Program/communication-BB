import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const UserBoardsList = ({ boards }) => {
  return (
    <List>
      {boards.map((board) => (
        <ListItem key={board.id}>{board.name}</ListItem>
      ))}
    </List>
  );
};

export default UserBoardsList;
