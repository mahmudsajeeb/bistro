import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu"; 
import Order from "../pages/oder/Order";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"menu",
        element:<Menu />
      },
      {
        path:"order/:category",
        element:<Order />
      }
    ]
  },
])