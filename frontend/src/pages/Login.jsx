import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/SubComponent/Button/Button";
import Footer from "../sections/Footer";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { useState } from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import { useLoginUserMutation } from "../api/authApiSlice";
import { Alert } from "../components/Alert";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userCred, setUserCred] = useState({});
  const [loginUser]=useLoginUserMutation();
  const navigate=useNavigate();
  
  const getUserCred = (e) => {

    const name=e.target.name;
    const value=e.target.value;
    setUserCred({
        ...userCred,
        [name]:value
        
    })
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await loginUser(userCred).unwrap();
      if(res.success){
        navigate('/');
        

      }
      

    }catch(err){
    
      const message=err.data.message;
      Alert(message,"error");


    }

  }

  return (
    <div>
      <Navbar />
      <div className="w-[80%]  firstContentMargin  ">
        <Heading content={"Login"}  />
        <div className="flex flex-col md:flex-row  md:h-52 lg:h-96  md:gap-2 w-full items-center">
          <div className=" hidden md:block md:w-[50%] h-full ">
            <img
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?t=st=1721897712~exp=1721901312~hmac=4bcb2d264a3f76567b14627d327ae167b1c66bd8276bd294ae33d4d90f6e1e51&w=740"
              alt=""
              className="h-full w-3/4"
            />
          </div>
          <div className="right md:w-[50%]">
            <form action="" className="w-full lg:text-lg" onSubmit={handleSubmit}>
              <div className="w-full border-b-2 mb-4 lg:mb-5">
                <input
                  type="text"
                 
                  className="w-full outline-none tracking-wide "
                  placeholder="Phone number or Email"
                  name="phoneOrEmail"
                  onChange={(e)=>{getUserCred(e)}}
                />
              </div>
              <div className="w-full border-b-2 flex items-center mb-2">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="w-full outline-none tracking-wide "
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e)=>{getUserCred(e)}}
                />

                {!showPassword && (
                  <PiEyeClosedBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}

                {showPassword && (
                  <PiEyeBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="mb-4 lg:mb-5">
                <Link to={"/forgot-password"}>
                  <span className="underline text-red-600 text-sm">
                    Forgot password ?
                  </span>
                </Link>
              </div>
              <Button content={"Continue"} />
              <div className="w-full mt-3 text-sm flex  gap-1 justify-center">
              <p className=" text-gray-500 ">Already have an account ?{" "} </p>
              <Link to={"/signup"} className="text-blue-500 underline">Sign up here.</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
