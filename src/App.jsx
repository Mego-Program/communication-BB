import React, { useEffect, useState } from "react";

import Root from "./componets/root";

export const infraApi = import.meta.env.VITE_INFRA_API
export const api = import.meta.env.VITE_MESSEGE_API

const App = () => {
 

  
 

  return (
    //<ChatList onUserClick={handleUserClick}  />
    <Root />
  );
};

export default App;