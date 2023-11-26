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

export default function AvatarProfile(props){
    return (
<Avatar style={{ marginLeft: '20px', marginTop: '20px' }}
 alt={props.name} src={props.avatar} />)}