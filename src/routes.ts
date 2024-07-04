import Login from "./page/auth/Login";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

export const privateRoutes = [
  {
    path: "/",
    element: Home,
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
];
