import React from "react";
import { Grow, Stack } from "@mui/material";
import AvatarProfile from "./AvatarProfile";

function ChatEntries({ chatHistory }) {
  return (
    <Stack
      justify-content="flex-end"
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <div>
        {/* Map through chat history and render each chat entry */}
        {chatHistory.map(function renderMessage(entry, index) {
          const { message, user, time } = entry;
          let editMessage = message;
          // Replace newline characters with HTML line breaks
          const lines = editMessage.split('\n');

          // Return JSX for each chat entry
          return (
            // Apply a 'Grow' transition effect to the chat entry
            <Grow key={index} in={true} timeout={1200}>
              <div
                style={{
                  width: "73%",
                  border: "1px solid ",
                  borderRadius: "20px",
                  color: "rgba(246, 201, 39, 1)",
                  display: "flex",
                  marginLeft: "230px",
                  marginBottom: "10px", // Adjusted margin between chat entries
                }}
              >
                {/* Display user avatar and profile */}
                <AvatarProfile name={user.name} avatar={user.avatar} />

                {/* Display user name, message content, and timestamp */}
                <div style={{ paddingTop: '30px', marginLeft: '10px', marginRight: '0px' }}>
                  <span style={{ fontWeight: "bold" }}>{user.name} </span>
                  {/* Map through lines and render each line as a paragraph */}
                  {lines.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "unset",
                          color: "white",
                          marginTop: lineIndex > 0 ? '0' : '10px', // Adjusted margin-top between lines
                          marginBottom: '0', // Adjusted margin-bottom between lines
                        }}
                      >
                        {line}
                      </p>
                    </React.Fragment>
                  ))}
                  <p style={{ marginLeft: '600px' }}>{time}</p>
                </div>
              </div>
            </Grow>
          );
        })}
      </div>
    </Stack>
  );
}

export default ChatEntries;
