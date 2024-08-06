import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home/Home";
import AllFoodItems from "../Component/Pages/All Food Items/AllFoodItems";
import SingleItem from "../Component/Pages/SingleItem/SingleItem";
import FoodPurchase from "../Component/Pages/FoodPurchase/FoodPurchase";
import Login from "../Component/Pages/Login/Login";
import SignUp from "../Component/Pages/SignUp/SignUp";
import Orders from "../Component/Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Component/Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: "allfooditems",
        element: <AllFoodItems></AllFoodItems>,
        loader: () => fetch('http://localhost:5000/allfooditemsCount')
      },
      {
        path: "foodpurchase/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allfooditems/${params.id}`),
      },
      {
        path: "singleitem/:id",
        element: <SingleItem></SingleItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allfooditems/${params.id}`),
      },
      {
        path:'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
      
    ],
  },
]);

export default router;
