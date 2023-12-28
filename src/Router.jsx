import React from 'react'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "./App.css"
import ChatList from './ChatList.jsx'

const router = createBrowserRouter([{
path: '/messages',
element: <App/>,
children: [
  {

  },
  
  {
    path: 'ChatList/*',
    element: <ChatList/>,
  }
]
}])

const RouterMain = () => {
    return(
        <RouterProvider router ={router}/>
    )
}
export default RouterMain