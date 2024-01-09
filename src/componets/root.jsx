import { Outlet} from "react-router-dom";
import ListConnections from "./ListConnections";
import { useEffect, useState } from "react";
import axios from "axios";

import { infraApi } from "../App";


export default function Root() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${infraApi}/api/users/list`,
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
          <nav>
             <ListConnections users={usersList} ></ListConnections>
         </nav>
        <Outlet />
      </>
    );
  }