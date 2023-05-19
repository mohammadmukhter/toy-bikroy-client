import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllToys from "../Pages/AllToys/AllToys";
import CreateToy from "../Pages/CreateToy/CreateToy";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

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
      {
        path: "toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Route;
