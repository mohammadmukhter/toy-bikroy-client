import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CreateToy from "../Pages/CreateToy/CreateToy";
import Home from "../Pages/Home/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "createToy",
        element: <CreateToy></CreateToy>,
      },
    ],
  },
]);

export default Route;
