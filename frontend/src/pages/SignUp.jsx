import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/SubComponent/Button/Button";
import Footer from "../sections/Footer";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { useState } from "react";


function SignUp() {
    const [showPassword,setShowPassword]=useState(false);
    
  return (
      <div>
        <Navbar/>
        <div className="w-[80%]  firstContentMargin  ">
            <h1 className="text-xl font-semibold text-gray-600 mb-4 lg:text-3xl">Signup</h1>
            <div className="flex flex-col md:flex-row">
            <div className="flex-1 hidden md:block">
                <img src="" alt="" />

            </div>
            <div className="right flex-1">
                <form action="" className="w-full lg:text-lg  ">
                    <div className="w-full border-b mb-6 lg:mb-10">
                        <input type="number" inputMode="numeric" pattern="[0-9]*" className="w-full outline-none tracking-wide " placeholder="Phone number"/>

                    </div>
                    <div className="w-full border-b flex items-center mb-4 lg:mb-6">
                        

                        <input type={`${showPassword?"text":"password"}`} className="w-full outline-none tracking-wide " placeholder="Enter your password"/>
                        
                        {!showPassword&& <PiEyeClosedBold className="text-gray-500 text-lg" onClick={()=>{setShowPassword(!showPassword)}}/>}


                       

                        
                        {showPassword&&<PiEyeBold className="text-gray-500 text-lg" onClick={()=>{setShowPassword(!showPassword)}}/>}
                        




                    </div>
                    <div className="mb-4 lg:mb-8">
                        <Link to={"/login"}>
                            <span className="underline text-red-600">Already have an account?</span>
                        </Link>
                    </div>
                    <Button content={'Continue'}/>

                </form>
            </div>

            </div>
           

        </div>
        <Footer/>
        
    </div>
  )
}

export default SignUp;