import React, { useState } from "react";
import ListConnections from "./componets/ListOfConnections";
import ChatList from "./ChatList";

const ChatContainer = () => {
  

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  const [usersList, setUserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token)

        const response = await axios.get(
          `${infraApi}/api/users/list`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        const user = await axios.get(
          `${infraApi}/api/users/me`,
          {
            headers: {
              authorization: token,
            }, 
          }
        ); 
        setUserList(response.data.result);
        console.log('user: ', user.data.result[0]);
        setUser(user.data.result[0])
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ListConnections
        users={usersList}
        onUserClick={handleUserClick}
        setUserMe={setUserMe}
      />
      <ChatList selectedUser={selectedUser} userMe={userMe} />
    </div>
  );
};

export default ChatContainer;