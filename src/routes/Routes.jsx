import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";

import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        // element: <PrivateRoute><Order /></PrivateRoute>
        element: <Order/>
      },
     
    ]
  },
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: 'myCart',
        element: <MyCart/>
      }
    ]
  }
]);