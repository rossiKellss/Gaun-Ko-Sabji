import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/SubComponent/Button/Button";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import { useRegisterUserMutation } from "../api/authApiSlice";
import { useNavigate } from "react-router-dom";
import {Alert} from "../components/Alert"; 


function SignUp() {
  // initializing register function
  const [registerUser] = useRegisterUserMutation();

  

  //  initializing nagivation
  const navigate = useNavigate();

  // for show password feature
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  // for getting user credentials from onChange function
  const [userCred, setUserCred] = useState({});

  // for error lists
  const [errors, setErrors] = useState({});

  //  form validation function
  const validate = (value) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!value.userName) {
      errors.userName = "User name is required!";
    } else {
      errors.userName = "";
    }
    if (!value.firstname) {
      errors.firstname = "First name is required!";
    } else {
      errors.firstname = "";
    }
    if (!value.lastname) {
      errors.lastname = "Last name is required!";
    } else {
      errors.lastname = "";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Invalid Email";
    } else {
      errors.email = "";
    }
    if (!value.phone) {
      errors.phone = "Phone is required!";
    } else if (value.phone.length != 10) {
      errors.phone = "Invalid phone number";
    } else {
      errors.phone = "";
    }
    if (!value.password) {
      errors.password = "Password is required!";
    } else if (value.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else {
      errors.password = "";
    }
    if (!value.confirmPassword) {
      errors.confirmPassword = "Password is required";
    } else if (value.confirmPassword != value.password) {
      errors.confirmPassword = "Password doesn't match";
    } else {
      errors.confirmPassword = "";
    }
    return errors;
  };

  // getting user credentials from form
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
      userName: `${userCred.firstname} ${userCred.lastname}`,
    });
  };

  //counting the error lists
  const countErrors = (data) => {
    const unfilteredValues = Object.entries(data).filter(
      ([key, value]) => !value == ""
    );
    return unfilteredValues;
  };

  //submitting the from
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(userCred);
    const errLen = countErrors(validationErrors).length;

    setErrors(validationErrors);

    if (errLen == 0) {
      try {
        const userData = await registerUser(userCred).unwrap();

        const { data } = userData;
        console.log(data);
        if (userData.success) {
          navigate("/confirm-user");
        }
      } catch (err) {
        const message = err.data.message;
        Alert(message,'error');
        
      }
    }
  };

  return (
    <div>
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
              <div className="w-full  mb-6  flex gap-2">
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
                  <p className="text-red-500 text-sm ">{errors.firstname}</p>
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
                  <p className="text-red-500 text-sm">{errors.lastname}</p>
                </div>
              </div>

              <div className="w-full  mb-6 ">
                <input
                  type="email"
                  className="w-full outline-none tracking-wide border-b-2 "
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    getUserCred(e);
                  }}
                />
                <p className="text-red-500 text-sm">{errors.email}</p>
              </div>

              <div className="w-full  mb-6 ">
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
                <p className="text-red-500 text-sm">{errors.phone}</p>
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
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password,
                        });
                      }}
                    />
                  )}

                  {showPassword.password && (
                    <PiEyeBold
                      className="text-gray-500 text-lg"
                      onClick={() => {
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password,
                        });
                      }}
                    />
                  )}
                </div>

                <p className="text-red-500 text-sm ">{errors.password}</p>
              </div>

              <div className="w-full  flex flex-col  mb-4 ">
                <div className="flex ">
                  <input
                    type={`${
                      showPassword.confirmPassword ? "text" : "password"
                    }`}
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
                        setShowPassword({
                          ...showPassword,
                          confirmPassword: !showPassword.confirmPassword,
                        });
                      }}
                    />
                  )}

                  {showPassword.confirmPassword && (
                    <PiEyeBold
                      className="text-gray-500 text-lg"
                      onClick={() => {
                        setShowPassword({
                          ...showPassword,
                          confirmPassword: !showPassword.confirmPassword,
                        });
                      }}
                    />
                  )}
                </div>

                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              </div>

              <div className="mb-6 ">
                <Link to={"/login"}>
                  <span className="underline text-sm text-red-600">
                    Already have an account?
                  </span>
                </Link>
              </div>

              <Button
                content={"Continue"}
                onClick={() => {
                  onSubmit;
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
