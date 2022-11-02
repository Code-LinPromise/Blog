import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import {router} from "./router/index.jsx";
import "./assets/stylesheets/reset.scss"
import "./assets/Iconfont/iconfont.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
