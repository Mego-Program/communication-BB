import {
   
    Button,
    Grid,
    
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send"
  import { amber } from "@mui/material/colors";

function ButtonSend(props){
return(
  <Grid
  container
  height={"5vh"}
  justifyContent={"center"}
  alignItems="flex-end"
>
<Button
variant="contained"
color="primary"
onClick={props.handleSend}
sx={{ position: "fixed", bottom: 0, left: '92%', right: 0 }}
elevation={3}
style={{backgroundColor: '#0000',color: `${amber[400]}`,width: "60px", height: "57px" }}
>
<SendIcon />
</Button></Grid>)}

export default ButtonSend;