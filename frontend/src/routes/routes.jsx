import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Aboutus from "../pages/Aboutus";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
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
        path:"/search",
        element:<Search/>,
        
    },


])



export default router;
