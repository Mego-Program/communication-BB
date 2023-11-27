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
      <Grid
        container
        height={"85vh"}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
<TextField
          
          label="Type your message here and it will be saved up this page"
          variant="filled"
          multiline
          maxLength={"1"}
          maxRows={4}
          value={props.newMessage}
          onChange={props.handleChange}
          style={{ width: "75%", backgroundColor: "#F6C927" }}
          sx={{ position: "fixed", bottom: 0, left: '15%', right: 0 }}
          elevation={3}
        /></Grid>)}