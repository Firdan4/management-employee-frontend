import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Employee from "./page/Employee";
import Home from "./page/Home";

export const privateRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/employee",
    element: Employee,
  },
  // {
  //   path: "/devisi",
  //   element: Devisi,
  // },
];

export const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
];
