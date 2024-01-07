import React, { useEffect, useState } from "react";
import { Grow } from "@mui/material";
import AvatarProfile from "./AvatarProfile";
import { useParams } from "react-router-dom";
import axios from "axios";
import { infraApi } from "../App";

function ChatEntries({ chatHistory }) {
  const { userId } = useParams();
  const [user,setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token)
        const user = await axios.get(
          `${infraApi}/api/users/me`,
          {
            headers: {
              authorization: token,
            }, 
          }
        ); 
        console.log('user: ', user.data.result[0]);
        setUser(user.data.result[0])
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!user._id ||!userId){
          return
      }
        // Perform a GET request to http://localhost:5001
        // TODO: use the correct URL in env file
        const response = await axios.get(`http://localhost:5001/chat/${user._id}/${userId}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch data from http://localhost:5001");
        }
        console.log("Data fetched from server:", response.data);
        // Assuming you have a socket instance, emit the new message to the socket server
        // Replace 'socket' with your actual socket instance
        // Replace 'newMessage' with the actual message you want to emit
        socket.emit("newMessage",newMessage);

        // Clear the input for a new message (You may need to define a function to clear the input)
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchData();
  }, [user._id, userId]); // Add dependencies if needed

  return (
    <div style={{marginTop: "4.5%"}}> 
      {/* Map through chat history and render each chat entry */}
      {chatHistory.map(function renderMessage(entry, index) {
        const { message, user, time } = entry;
        let editMessage = message;
        // Replace newline characters with HTML line breaks
        const lines = editMessage.split("\n");

        // Return JSX for each chat entry
        return (
          // Apply a 'Grow' transition effect to the chat entry
          <Grow key={index} in={true} timeout={1200} >
            <div
              style={{
                width: "fit-content",
                border: "1px solid ",
                borderRadius: "20px",
                color: "rgba(246, 201, 39, 1)",
                display: "flex",
                flexDirection: "column", // Set flex direction to column
                marginLeft: "18%",
                marginTop: "1%"
                
                 // Adjusted margin between chat entries
              }}
            >
              {/* Display user avatar and profile */}
              <AvatarProfile name={user.name} avatar={user.avatar} />

              {/* Display user name and message content */}
              <div
                style={{
                  paddingTop: "30px",
                  marginLeft: "10px",
                  marginRight: "0px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{user.name} </span>
                {/* Map through lines and render each line as a paragraph */}
                {lines.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    <p
                      style={{
                        fontSize: "150%",
                        fontWeight: "unset",
                        color: "white",
                        paddingRight: "20px",
                        marginTop: lineIndex > 0 ? "0" : "10px", // Adjusted margin-top between lines
                        marginBottom: "0", // Adjusted margin-bottom between lines
                      }}
                    >
                      {line}
                    </p>
                  </React.Fragment>
                ))}
              </div>

              {/* Display timestamp at the end of the border */}
              <p
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginLeft: "auto",
                  marginRight: "10px",
                  alignSelf: "flex-end",
                }}
              >
                {time}
              </p>
            </div>
          </Grow>
        );
      })}
    </div>
  );
}

export default ChatEntries;
