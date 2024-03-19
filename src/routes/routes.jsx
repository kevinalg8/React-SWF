import { createBrowserRouter } from "react-router-dom";
import Login from "./logins.jsx";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
  ]
);
export default routes