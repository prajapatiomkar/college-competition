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
import CreateCollege from "./features/college/CreateCollege.jsx";
import Colleges from "./features/college/Colleges.jsx";
import College from "./features/college/College.jsx";
import CreateCompetition from "./features/competition/createCompetition.jsx";
<<<<<<< HEAD
import EditCompetition from "./features/competition/EditCompetition.jsx";
import DeleteCompetition from "./features/competition/DeleteCompetition.jsx";
=======
import UserProfile from "./features/users/userProfile.jsx";
>>>>>>> development

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
        path: "/profile/:id",
        element: <UserProfile />,
      },
      {
        element: <AdminRoute />,

        children: [
          {
            index: true,
            element: <Colleges />,
          },
          {
            path: "/create-college",
            element: <CreateCollege />,
          },
        ],
      },
      {
        path: "/college/:id",
        element: <College />,
      },
      {
        path: "/college/edit/:id",
        element: <EditCompetition />,
      },
      {
        path: "/admin/delete-competition/:id",
        element: <DeleteCompetition />,
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
