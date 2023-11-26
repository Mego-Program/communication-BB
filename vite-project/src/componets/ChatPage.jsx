import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChatPage() {
  const { user_id } = useParams();
  const [userData, setUserData] = useState(null);

  // Simulate data fetching or API call based on the user_id
  useEffect(() => {
    // Assuming you have a function to fetch user data by ID
    const fetchUserData = async () => {
      try {
        // Make an API call or fetch data based on the user_id
        const response = await fetch(`/api/users/${user_id}`);
        const data = await response.json();

        // Update the state with the fetched user data
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the function to fetch user data
    fetchUserData();
  }, [user_id]);

  return (
    <div>
      <h2>Chat Page for User {user_id}</h2>

      {userData ? (
        <div>
          <p>User Name: {userData.name}</p>
          {/* Display other user-specific information */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      {/* Add your chat page content here */}
    </div>
  );
}

export default ChatPage;
