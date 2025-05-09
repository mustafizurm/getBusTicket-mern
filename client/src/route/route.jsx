import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
import App from "../App";
import Home from "../page/home/Home";
import Tickets from "../page/tickets/Tickets";
import Signup from "../page/signup/Signup";
import Login from "../page/login/Login";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/tickets",
          element: <Tickets />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
  ]);

  export default router