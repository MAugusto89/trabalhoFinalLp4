import { RouteObject } from "react-router-dom";
<<<<<<< HEAD
import Home from "../pages/Home";
=======
import Home from "../pages/Login";
>>>>>>> 6107c3a (Second commit)
import LiveAuction from "../pages/LiveAuction";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auction",
    element: <LiveAuction />,
  },
];

export default routes;
