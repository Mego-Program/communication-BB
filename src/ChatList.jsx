import { useEffect } from "react";
import React, { useState } from "react";
import ListConnections from "./componets/ListOfConections"; // Corrected import path
import axios from "axios";
import createTheme from "@mui/material/styles/createTheme";
// Functional component for rendering the chat list
function ChatList(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:5000/api/users/users`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setUserList(response.data.result);
        console.log(usersList);
        // Convert JSON string to JavaScript array
        // const usersArray = JSON.parse(JSON.stringify(usersList));

        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F6C927",
      },
      background: { default: "#0A0A1B" },
    },
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ListConnections users={usersList} />
      {/* Add the rest of your JSX components here */}
    </div>
  );
}

// JSX structure for rendering the chat list component
// return (
//   <div className="ChatContainer">
//     <ListConnections users={usersList} />
//   </div>
// );

export default ChatList;
