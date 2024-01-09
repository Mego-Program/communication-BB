import React from "react";
import ReactDOM from "react-dom/client";

// import App from './App.jsx'

import App from "./src/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "react-dom/client";

import "./src/App.css";
import ChatList from "./src/ChatList.jsx";

export default function RouterMain() {
  const router = createBrowserRouter([
    {
      path: "messages/",
      element: <App />,
      children: [
        {},
        {
          path: "ChatList/:userId",
          element: <ChatList />,
          //
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
