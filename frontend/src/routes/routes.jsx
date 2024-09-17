import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Aboutus from "../pages/Aboutus";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Admin from "../pages/Admin/Admin";
import CodeConfirmation from "../pages/CodeConfirmation";
import { store } from "../app/store";
import { Provider } from "react-redux";
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
        path: "/confirm-user",
        element: <CodeConfirmation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      
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
