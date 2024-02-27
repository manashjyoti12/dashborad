import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import EmpDashboard from "./pages/EmpDashboard.jsx";
import HrDAshboard from "./pages/HrDAshboard.jsx";
import HrDashboardHome from "./components/Hr/HrDashboardHome.jsx";
import HrAdduser from "./components/Hr/HrAdduser.jsx";
import HrUpdateuser from "./components/Hr/HrUpdateuser.jsx";
import HrAddshift from "./components/Hr/HrAddshift.jsx";
import HrLeaveapplication from "./components/Hr/HrLeaveapplication.jsx";
import Empdasboardhome from "./components/emp/Empdasboardhome.jsx";
import Empaddtime from "./components/emp/Empaddtime.jsx";
import Empleaveapplication from "./components/emp/Empleaveapplication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/empDashboard",
    element: <EmpDashboard />,
    children: [
      {
        path: "/empDashboard/home",
        element: <Empdasboardhome />,
      },
      {
        path: "/empDashboard/addtime",
        element: <Empaddtime />,
      },
      {
        path: "/empDashboard/leaveapplication",
        element: <Empleaveapplication />,
      },
    ],
  },
  {
    path: "/hrDashboard",
    element: <HrDAshboard />,
    children: [
      {
        path: "/hrDashboard/home",
        element: <HrDashboardHome />,
      },
      {
        path: "/hrDashboard/adduser",
        element: <HrAdduser />,
      },
      {
        path: "/hrDashboard/updateuser",
        element: <HrUpdateuser />,
      },
      {
        path: "/hrDashboard/addshift",
        element: <HrAddshift />,
      },
      {
        path: "/hrDashboard/leaveapplication",
        element: <HrLeaveapplication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
