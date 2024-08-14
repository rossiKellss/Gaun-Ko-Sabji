import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Aboutus from "../pages/Aboutus";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Admin from "../pages/Admin/Admin";
import store from "../store";
import { Provider } from "react-redux";
const router=createBrowserRouter([
    {
        path:"/",
        element:<Provider store={store}><App/></Provider>,
        children:[{

            path:"",
            element:<Home/>
        }

        ]
        
    },

    {
        path:"/about",
        element:<Aboutus/>,
        
    },
    {
        path:"/product",
        element:<ProductDetails/>,
        
    },
    {
        path:"/search/:name",
        element:<Search/>,
        
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/admin",
        element:<Admin/>
    }


])



export default router;
