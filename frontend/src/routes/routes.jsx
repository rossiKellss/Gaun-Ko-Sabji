import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Aboutus from "../pages/Aboutus";
import SignUp from "../pages/AuthPages/SignUp";
import Login from "../pages/AuthPages/Login";
import Admin from "../pages/Admin/Admin";
import CodeConfirmation from "../pages/AuthPages/CodeConfirmation";
import { store } from "../app/store";
import { Provider } from "react-redux";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";
import ChangePassword from "../pages/AuthPages/ChangePassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/confirm-user/:userId",
        element: <CodeConfirmation action={"confirm-user"}/>,
      },
      {
        path:'/confirm-code/:userId',
        element:<CodeConfirmation action={"confirm-code"}/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/forgot-password',
        element:<ForgotPassword/>
      },
      {
        path:'/change-password/:userId',
        element:<ChangePassword/>
      }
      
    ],
  },

  {
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/product",
    element: <ProductDetails />,
  },
  {
    path: "/search/:name",
    element: <Search />,
  },
 
 
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
