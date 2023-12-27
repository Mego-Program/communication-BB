import React from 'react'
import ReactDOM from 'react-dom/client'
import "./src/App.css"
import RouterMain from './Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router ={router}/> */}
    <RouterMain/>
  </React.StrictMode>
)