import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/SubComponent/Button/Button";
import Footer from "../sections/Footer";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { useState } from "react";


function Login() {
    const [showPassword,setShowPassword]=useState(false);
    
  return (
      <div>
        <Navbar/>
        <div className="w-[80%]  firstContentMargin border">
            <h1 className="text-xl font-semibold text-gray-600 mb-4 lg:text-3xl">Login</h1>
            <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-1/2 hidden md:block">
                <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D" alt="" className=" h-1/2"/>

            </div>
            <div className="w-1/2 right flex-1 ">
                <form action="" className="w-full lg:text-lg ">
                    <div className="w-full border-b mb-6 lg:mb-10">
                        <input type="text"  className="w-full outline-none tracking-wide " placeholder="Phone number or Email"/>

                    </div>
                    <div className="w-full border-b flex items-center mb-4 lg:mb-6">
                        

                        <input type={`${showPassword?"text":"password"}`} className="w-full outline-none tracking-wide " placeholder="Enter your password"/>
                        
                        {!showPassword&& <PiEyeClosedBold className="text-gray-500 text-lg" onClick={()=>{setShowPassword(!showPassword)}}/>}


                       

                        
                        {showPassword&&<PiEyeBold className="text-gray-500 text-lg" onClick={()=>{setShowPassword(!showPassword)}}/>}
                        




                    </div>
                    <div className="lg:mb-8">
                        <Link to={"/signup"}>
                            <span className="underline text-red-600">Don't have an account?</span>
                        </Link>
                    </div>
                    <Button content={'Login'}/>

                </form>
            </div>

            </div>
           

        </div>
        <Footer/>
        
    </div>
  )
}

export default Login;