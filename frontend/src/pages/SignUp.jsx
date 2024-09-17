import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/SubComponent/Button/Button";
import Footer from "../sections/Footer";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import { useRegisterUserMutation } from "../api/authApiSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password:false,
    confirmPassword:false
  });
  const [userCred, setUserCred] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  

  const [formValues, setFormValues] = useState(userCred);
  const [errors,setErrors ]=useState({});
  const [isSubmittable,setIsSubmittable]=useState(false);

  const validate=(value)=>{
    const errors={};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if(!value.username){
      errors.username="User name is required!"
    }
    if(!value.firstname){
      errors.firstname="First name is required!"
    }
    if(!value.lastname){
      errors.lastname="Last name is required!"
    }
    if(!value.email){
      errors.email="Email is required!"
    }else if(!emailRegex.test(value.email)){
      errors.email="Invalid Email"
    }
    if(!value.phone){
      errors.phone="Phone is required!"

    }else if(value.phone!=10){
      errors.phone="Invalid phone number"
    }
    if(!value.password){
      errors.password="Password is required!"
    }else if(!value.password.length<8){
      errors.password="Password must be 8 characters long."
    }
    if(!value.confirmPassword){
      errors.confirmPassword="Password is required"
    }else if(value.confirmPassword!=value.password){
      errors.confirmPassword="Password doesn't match"

    }
    return errors;
    
  }
  useEffect(()=>{
    if(Object.keys(errors).length==0 && isSubmittable){
      
    }

  },[errors])

  const [registerUser] = useRegisterUserMutation();

  const getUserCred = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    if (name == "firstname") {
      const cFirstname = value.charAt(0).toUpperCase() + value.slice(1);

      setUserCred({
        ...userCred,
        [name]: cFirstname,
      });
    } else if (name == "lastname") {
      const cLastName = value.charAt(0).toUpperCase() + value.slice(1);
      setUserCred({
        ...userCred,
        [name]: cLastName,
      });
    }
      setUserCred({
        ...userCred,
        [name]: value,
        username: `${userCred.firstname} ${userCred.lastname}`,
      });
    
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(userCred));
    // try {
    //   const userData = await registerUser(userCred).unwrap();

    //   const { data } = userData;
    //   console.log(data);
    //   if (userData.success) {
    //     navigate("/confirm-user");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

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
            <form
              action=""
              className="w-full lg:text-lg"
              onSubmit={handleSubmit}
            >
              <div className="w-full  mb-6 lg:mb-10 flex    gap-2">
                <div className="">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="w-full border-b-2 outline-none tracking-wide capitalize"
                  
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
                  <p className="text-red-500 text-xs">{errors.firstname}</p>
                </div>
                <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="w-full border-b-2 outline-none tracking-wide capitalize "
                  
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
                <p className="text-red-500 text-xs">{errors.lastname}</p>
                </div>
                
              </div>
              <div className="w-full  mb-6 lg:mb-10">
                <input
                  type="email"
                  className="w-full outline-none tracking-wide border-b-2 "
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
                <p className="text-red-500 text-xs">{errors.email}</p>
              </div>
              <div className="w-full  mb-6 lg:mb-10">
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full outline-none tracking-wide border-b-2"
                  placeholder="Phone number"
                  name="phone"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
                <p className="text-red-500 text-xs">{errors.phone}</p>
              </div>

              <div className="w-full  flex flex-col  mb-4 lg:mb-6">
                <div className="flex ">
                <input
                  type={`${showPassword.password ? "text" : "password"}`}
                  className="w-full outline-none tracking-wide border-b-2"
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />

                {!showPassword.password && (
                  <PiEyeClosedBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword({...showPassword,password:!showPassword.password});
                    }}
                  />
                )}

                {showPassword.password && (
                  <PiEyeBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword({...showPassword,password:!showPassword.password});
                    }}
                  />
                )}

                </div>

                <p className="text-red-500 text-xs">{errors.password}</p>
              </div>

              <div className="w-full  flex flex-col  mb-4 lg:mb-6">
                <div className="flex ">
                <input
                  type={`${showPassword.confirmPassword ? "text" : "password"}`}
                  className="w-full outline-none tracking-wide border-b-2"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />

                {!showPassword.confirmPassword && (
                  <PiEyeClosedBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword({...showPassword,confirmPassword:!showPassword.confirmPassword});
                    }}
                  />
                )}

                {showPassword.confirmPassword && (
                  <PiEyeBold
                    className="text-gray-500 text-lg"
                    onClick={() => {
                      setShowPassword({...showPassword,confirmPassword:!showPassword.confirmPassword});
                    }}
                  />
                )}

                </div>

                <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
              </div>
              <div className="mb-4 lg:mb-8">
                <Link to={"/login"}>
                  <span className="underline text-sm text-red-600">
                    Already have an account?
                  </span>
                </Link>
              </div>
              <Button
                content={"Continue"}
                onClick={() => {
                  onSubmit
                }}
              />
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default SignUp;
