import React from "react";
import ListConnections from "./componets/ListOfConections"; // Corrected import path


// Functional component for rendering the chat list
function ChatList(props) {
  // JSX structure for rendering the chat list component
  return (
    <div className="ChatContainer">
      <ListConnections users={props.usersList} />
    </div>
  );
}

export default ChatList;


// // State variables for managing new messages and chat history
// const [newMessage, setNewMessage] = useState("");
// const [chatHistory, setChatHistory] = useState([]);

// Function to handle sending a new message
// function handleSend() {
//   // Check if the new message is not empty
//   if (newMessage.trim() !== "") {
//     // Get the current timestamp
//     const newTimestamp = new Date();
//     // Format the timestamp as a string
//     const formattedTimestamp = newTimestamp.toLocaleString();

// Update the chat history with the new message
//     setChatHistory((prevChatHistory) => [
//       ...prevChatHistory,
//       {
//         time: formattedTimestamp,
//         message: newMessage,
//         user: {
//           id: 1,
//           name: "Ariel Samuel",
//           avatar: "/avatars/current-user.jpg",
//         },
//       },
//     ]);

//     // Clear the input for a new message
//     setNewMessage("");
//   }
// }

// Function to handle changes in the input field
// function handleChange(e) {
//   setNewMessage(e.target.value);
// }

// {
//   /* <ChatEntries chatHistory={chatHistory} /> */
// }



