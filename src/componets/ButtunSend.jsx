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
  

function ButtonSend(props){
return(
<Button
variant="contained"
color="primary"
onClick={props.handleSend}
sx={{ position: "fixed", bottom: 39, left: 1598, right: 0 }}
elevation={3}
style={{ width: "70px", height: "57px" }}
>
<SendIcon />
</Button>)}

export default ButtonSend;