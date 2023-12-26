import { Outlet, Link } from "react-router-dom";
import ListConnections from "./ListOfConnections";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TextInput from '../componets/TextInput'


export default function Root() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:5000/api/users/list`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setUserList(response.data.result);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
    return (
      <>
        <div id="sidebar">
         
          <div>
            <form id="search-form" role="search">
              {/* <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              /> */}
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            {/* <form method="post">
              <button type="submit">New</button>
            </form> */}
          </div>
          <nav>
             <ListConnections users={usersList} ></ListConnections>
             {/* ${selectedUser} */}
         </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }