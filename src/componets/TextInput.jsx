import { TextField, Grid } from "@mui/material";

export default function TextInput(props) {
  return (
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
        sx={{ position: "fixed", bottom: 0, left: "17%", right: 0 }}
        elevation={3}
      />
    </Grid>
  );
}
