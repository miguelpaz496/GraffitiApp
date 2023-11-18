import { createBrowserRouter } from "react-router-dom";

import { Login, Post, Home } from "./pages";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/post",
      element: <Post />
    },
    {
      path: "*",
      element: <Login />
    },
]);

export default router;