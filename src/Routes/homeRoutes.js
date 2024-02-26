import Home from "../Pages/Home";
import RecentScreen from "../Pages/Recent";
import TestPage from "../Pages/Test";

const homeRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "recent",
    element: <RecentScreen />,
  },
];

export default homeRoutes;
