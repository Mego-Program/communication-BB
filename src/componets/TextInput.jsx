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
          variant="filled"
          multiline
          maxLength={"1"}
          maxRows={4}
          value={props.newMessage}
          onChange={props.handleChange}
          style={{ width: "1400px", backgroundColor: "white" }}
          sx={{ position: "fixed", bottom: 0, left: 232, right: 0 }}
          elevation={3}
        />)}