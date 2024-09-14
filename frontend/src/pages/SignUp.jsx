import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/SubComponent/Button/Button";
import Footer from "../sections/Footer";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { useState } from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [userCred, setUserCred] = useState({});

  const getUserCred = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCred({
      ...userCred,
      [name]: value,
    });
  };

  const onSubmit=(e)=>{
    e.preventDefault()
    

  }

  return (
    <div>
      <Navbar />
      <div className="w-[80%]  firstContentMargin  ">
        <Heading content={"Sign Up"} />
        <div className="flex flex-col md:flex-row  md:h-52 lg:h-96  md:gap-2 w-full items-center">
          <div className=" hidden md:block md:w-[50%] h-full ">
            <img
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?t=st=1721897712~exp=1721901312~hmac=4bcb2d264a3f76567b14627d327ae167b1c66bd8276bd294ae33d4d90f6e1e51&w=740"
              alt=""
              className="h-full w-3/4"
            />
          </div>
          <div className="right md:w-[50%]">
            <form action="" className="w-full lg:text-lg">
            <div className="w-full  mb-6 lg:mb-10 flex   gap-2">
                <input type="text" name="firstname" placeholder="First name" className="w-1/2 border-b-2 outline-none tracking-wide capitalize" required onChange={(e)=>{getUserCred(e)}}/>
                <input type="text" name="lastname" placeholder="Last name"className="w-1/2 border-b-2 outline-none tracking-wide capatilize " required onChange={(e)=>{getUserCred(e)}}/>
            </div>
              <div className="w-full border-b-2 mb-6 lg:mb-10">
                <input
                  type="email"
                  className="w-full outline-none tracking-wide "
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
              </div>
              <div className="w-full border-b-2 mb-6 lg:mb-10">
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full outline-none tracking-wide "
                  placeholder="Phone number"
                  name="phoneNumber"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
              </div>

              <div className="w-full border-b-2 flex items-center mb-4 lg:mb-6">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="w-full outline-none tracking-wide "
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
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
              <div className="mb-4 lg:mb-8">
                <Link to={"/login"}>
                  <span className="underline text-red-600">
                    Already have an account?
                  </span>
                </Link>
              </div>
              <Button content={"Continue"} onClick={()=>{onSubmit}} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
