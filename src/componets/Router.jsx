// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import ChatPage from '../ChatPage'
// // import TextInput from "./TextInput";
// // import ButtonSend from "./ButtunSend";
// // import { amber, orange, yellow } from "@mui/material/colors";
// // import AvatarProfile from "./AvatarProfile";
// // import ChatEntries from "./Chathistory";
// // import {
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Avatar,
// //   TextField,
// //   Button,
// //   Grid,
// //   Stack,

// // } from "@mui/material";
// // import SendIcon from "@mui/icons-material/Send"; // Import the Send icon


// function RouterChat(props) {
//     // {/* // State variables for managing new messages and chat history
//     // // const [newMessage, setNewMessage] = useState("");
//     // // const [chatHistory, setChatHistory] = useState([]);

//     // // Function to handle sending a new message
//     // // function handleSend() { */}
//     // {/* //   // Check if the new message is not empty
//     //   if (newMessage.trim() !== "") {
//     // Get the current timestamp
//     //  const newTimestamp = new Date();
//     // Format the timestamp as a string
//     //  const formattedTimestamp = newTimestamp.toLocaleString();

//     // Update the chat history with the new message
//     //      setChatHistory((prevChatHistory) => [
//     //        ...prevChatHistory,
//     //        {
//     //          time: formattedTimestamp,
//     //          message: newMessage,
//     //          user: {
//     //            id: 1,
//     //            name: "Ariel Samuel",
//     //            avatar: "/avatars/current-user.jpg",
//     //          },
//     //        },
//     //      ]);

//     //      // Clear the input for a new message
//     //      setNewMessage("");
//     //    }
//     //  }

//     //  Function to handle changes in the input field
//     //  function handleChange(e) {
//     //    setNewMessage(e.target.value);
//     //  }

//     //   <ChatEntries chatHistory={chatHistory} /> */} 

//     return (

//         <Router>
//             <Routes>
//                 <Route path="/" element={<ChatList chats={chats} />} />

//                 {chats.map((chat) => (
//                     <Route key={chat.id} path={chat / ${props.id}} element={<ChatPage chat={chat} />}
//                 ))
//             </Routes>
//             )
//         </Router>
//     )

//     export default RouterChat;
