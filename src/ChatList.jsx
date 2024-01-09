import { useEffect, useState } from "react";
import TextInput from "./componets/TextInput";
import ButtonSend from "./componets/ButtunSend";
import ChatEntries from "./componets/ChatEntries";
import axios from "axios";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { infraApi, api } from "./App";

const socket = io.connect(api);

function ChatList() {
  const userId = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userMe = await axios.get(`${infraApi}/api/users/me`, {
          headers: {
            authorization: token,
          },
        });
        setUser(userMe.data.result[0]);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const newRoom = () => {
    if (user._id && userId["*"]) {
      return [user._id, userId["*"]].sort().join("-");
    }
  };

  useEffect(() => {
    const fetchData1 = async () => {
      if (user._id && userId["*"]) {
        if (newRoom !== "") {
          console.log(newRoom());
          socket.emit("join", newRoom());
        }
        try {
          const url = `http://localhost:5015/chat?sender=${user._id}&receiver=${userId["*"]}`;
          const response = await axios.get(url);

          // Assuming response.data is an array of past messages
          const pastMessages = response.data;

          // Update chat history with the received messages
          setChatHistory([]);
          setChatHistory((prevChatHistory) => [
            ...prevChatHistory,
            ...pastMessages.map((message) => ({
              time: message.date, // Adjust property names based on the actual structure of the message object
              message: message.content,
              user: {
                id: message._id,
                name: message.getting, // Assuming 'getting' is the user's name in the message object
                avatar: message.getting, // Assuming 'getting' is the user's avatar in the message object
              },
            })),
          ]);
        } catch (error) {
          console.error("Error fetching past messages:", error);
        }
      }
    };

    fetchData1();
    return () => {
      socket.emit("leave", newRoom()  );
    }
  }, [userId]);

  useEffect(() => {
    const newTimestamp = new Date().toLocaleString(); // Get the current timestamp
    // get message from server
    socket.on("send", (message) => {
      console.log(message);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          time: newTimestamp,
          message: message,
          user: {
            id: 2,
            name: user.firstName + " " + user.lastName, //here i want to put the name of the token
            avatar: user.lastName,
          },
        },
      ]);
    });
    return () => {
      socket.off("send");
    };
  }, []);

  // Function to handle sending a new message
  async function handleSend() {
    if (newMessage.trim() !== "") {
      const room = newRoom()
      // Perform a POST request to http://localhost:5001
      try {
        const urlSent = `http://localhost:5015/send`; //TODO chenge the port
        const response = await axios.post(urlSent, {
          text: newMessage,
          firstName: user.firstName,
          lastName: user.lastName,
          userId: user._id,
          selectedUserId: userId,
        });
        // TODO: add new danial code
        console.log("Message sent to server:", response.data);
      } catch (error) {
        console.error("Error sending message to server:", error.message);
      }
      socket.emit("message", { room, newMessage }); // Emit the new message to the socket server
      setNewMessage(""); // Clear the input for a new message
    }
  }

  // Function to handle changes in the input field
  function handleChange(e) {
    setNewMessage(e.target.value);
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ChatEntries chatHistory={chatHistory} />
      {/* Text input component for entering new messages */}
      <TextInput newMessage={newMessage} handleChange={handleChange} />
      {/* Send button component with the SendIcon */}
      <ButtonSend handleSend={handleSend} />
    </div>
  );
}

export default ChatList;