import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dasboard" />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/dasboard",
    element: <Dashboard />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/cabins",
    element: <Cabins />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;