import React from "react";
import { Grow, Stack } from "@mui/material";
import AvatarProfile from "./AvatarProfile";

function ChatEntries({ chatHistory }) {
  return (
    <div> 
      {/* Map through chat history and render each chat entry */}
      {chatHistory.map(function renderMessage(entry, index) {
        const { message, user, time } = entry;
        let editMessage = message;
        // Replace newline characters with HTML line breaks
        const lines = editMessage.split("\n");

        // Return JSX for each chat entry
        return (
          // Apply a 'Grow' transition effect to the chat entry
          <Grow key={index} in={true} timeout={1200}>
            <div
              style={{
                width: "fit-content",
                border: "1px solid ",
                borderRadius: "20px",
                color: "rgba(246, 201, 39, 1)",
                display: "flex",
                flexDirection: "column", // Set flex direction to column
                marginLeft: "18%",
                marginBottom: "10px", // Adjusted margin between chat entries
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
