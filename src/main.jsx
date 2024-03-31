import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import * as LoginRoutes from './routes/LoginRoutes.jsx'
import * as InicioRoutes from './routes/InicioRoutes.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoutes.login/>,
  },
  {
    path: "/index",
    element: <App/>,
  },
  {
    path: "/CreateAccount",
    element: <LoginRoutes.createAccount/>,
  },
  {
    path: "/Products",
    element: <InicioRoutes.productos/>,
  },
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
