import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Devisi from "./page/Devisi";
import Employee from "./page/Employee";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

export const privateRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/employee",
    element: Employee,
  },
  {
    path: "/devisi",
    element: Devisi,
  },
];

export const publicRoutes = [
  {
    path: "*",
    element: NotFound,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
];
