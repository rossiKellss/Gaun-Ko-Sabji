import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>
      
        <Navbar />
         <Outlet/>
        <Footer/>
    </>
  );
}

export default App;
