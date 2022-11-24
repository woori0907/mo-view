import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movie/:id", element: <Detail /> },
      { path: "/search/:query", element: <Search /> },
    ],
  },
  {
    basename: process.env.PUBLIC_URL,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
