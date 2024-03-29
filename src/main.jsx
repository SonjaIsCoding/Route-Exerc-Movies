import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/RootLayout.jsx";
import { Movies } from "./components/Movies/Movies.jsx";
import { Actors } from "./components/Actors/Actors.jsx";
import { Home } from "./components/Home/Home.jsx";
import { ActorDetails } from "./components/Actors/ActorDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // default
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "actors",
        children: [
          {
            index: true,
            element: <Actors />,
          },
          {
            path: ":id",
            element: <ActorDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
