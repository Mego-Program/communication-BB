import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'

import App from './src/App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Root } from 'react-dom/client'

import "./src/App.css"
import ChatList from './src/ChatList.jsx'

const router = createBrowserRouter([{
path: '/messages',
element: <App/>,
children: [
  {
    path: 'ChatList/',
    element: <ChatList/>,
  }
]


}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
)
