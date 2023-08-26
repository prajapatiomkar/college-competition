import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./routes/screens/HomeScreen.jsx";
import LoginScreen from "./routes/screens/LoginScreen.jsx";
import RegisterScreen from "./routes/screens/RegisterScreen.jsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store.js";
import AdminRoute from "./helper/auth/AdminRoute.jsx";
import DashboardScreen from "./routes/screens/DashboardScreen.jsx";
import Root from "./routes/components/Root.jsx";
import CreateCollege from "./routes/components/CreateCollege.jsx";
import Colleges from "./routes/components/Colleges.jsx";
import College from "./routes/components/College.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
      {
        element: <AdminRoute />,

        children: [
          {
            index: true,
            element: <Colleges />,
          },
          {
            path: "/dashboard/create-college",
            element: <CreateCollege />,
          },
        ],
      },
      {
        path: "/dashboard/college/:id",
        element: <College />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
