import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/Createaccount.jsx";
import Postdetail from "./pages/Postdetail.jsx";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./pages/Newpost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/post/:id",
    element: <Postdetail />,
    children: [
      {
        path: "",
        element: <Navbar />,
      },
    ],
  },
  {
    path: "/newpost",
    element: <NewPost />,
    children: [
      {
        path: "",
        element: <Navbar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
