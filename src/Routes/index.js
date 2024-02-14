import { createBrowserRouter } from "react-router-dom";

import homeRoutes from "./homeRoutes";
import Layout from "../Layouts/Layout";
import NotFoundScreen from "../Pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [...homeRoutes],
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);

export default router;
