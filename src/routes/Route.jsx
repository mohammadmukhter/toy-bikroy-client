import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import CreateToy from "../Pages/CreateToy/CreateToy";
import UpdateToy from "../Pages/CreateToy/UpdateToy";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyToys from "../Pages/MyToys/MyToys";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <CreateToy></CreateToy>
          </PrivateRoute>
        ),
      },
      {
        path: "toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-bikroy-server.vercel.app/toyDetails/${params.id}`),
      },
      {
        path: "updateToy",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
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
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Route;
