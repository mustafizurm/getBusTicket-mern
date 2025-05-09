import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
import App from "../App";
import Home from "../page/home/Home";
import Tickets from "../page/tickets/Tickets";
  
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
        }
      ]
    },
  ]);

  export default router