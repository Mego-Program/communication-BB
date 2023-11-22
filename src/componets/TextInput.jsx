import React from "react"

import {
    List,
    ListItem,
    ListItemText,
    Avatar,
    TextField,
    Button,
    Grid,
    Grow,
    colors,
    Stack,
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send"
export default function TextInput(props){
    return(
<TextField
          
          label="Type your message here and it will be saved up this page"
          variant="outlined"
          value={props.newMessage}
          onChange={props.handleChange}
          style={{borderRadius: '10px', width: "1458px", backgroundColor: "white" }}
          sx={{ position: "fixed", bottom: 40, left: 210, right: 0 }}
          elevation={3}
        />)}