import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import * as LoginRoutes from './routes/LoginRoutes.jsx'



const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoutes.login/>,
    children:[
      {
      path: "/CreateAccount",
      element: <h1>Hola</h1>
      },
    ],
  },
  {
    path: "/index",
    element: <App/>,
  },
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
