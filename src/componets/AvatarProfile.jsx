import {Avatar} from "@mui/material";

export default function AvatarProfile(props){
    return (
<Avatar style={{ marginLeft: '20px', marginTop: '20px' }}
 alt={props.name} src={props.avatar} />)}