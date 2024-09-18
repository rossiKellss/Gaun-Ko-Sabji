import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/SubComponent/HeadingTitle/Heading";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import Button from "../../components/SubComponent/Button/Button";
import { useChangePasswordMutation } from "../../api/authApiSlice";
import { Alert } from "../../components/Alert";

function ChangePassword() {
  const [changePassword] = useChangePasswordMutation();
  const { userId } = useParams();

  const [showPassword, setShowPassword] = useState({
    changePassword: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({});
  const [getPassword, setPassword] = useState({});

  const validate = () => {
    let errors = {};
    if (!getPassword.changePassword) {
      errors.changePassword = "Enter the password!";
    } else if (getPassword.changePassword.length < 8) {
      errors.changePassword = "Password must be at least 8 characters long!";
    }

    if (!getPassword.confirmPassword) {
      errors.confirmPassword = "Enter the password!";
    } else if (getPassword.confirmPassword.length < 8) {
      errors.confirmPassword = "Password must be at least 8 characters long!";
    }

    if (getPassword.changePassword != getPassword.confirmPassword) {
      errors.confirmPassword = "Password doesn't match!";
    }

    return errors;
  };

  const countErrors = (validationErrors) => {
    const err = Object.entries(validationErrors).filter(
      ([key, value]) => !value == ""
    );
    return err;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(getPassword);
    const errLength = countErrors(validationErrors).length;
    console.log(errLength);
    setErrors(validationErrors);

    if (errLength == 0) {
      try {
        console.log("userId", userId);
        const res = await changePassword({
          userId,
          newPassword: getPassword.changePassword,
        }).unwrap();
       
        if(res.success){

          const message = res.message;
          
          Alert(message,"success");
        }

      } catch (err) {
        const message = err.data.message;
        Alert(message, "error");
      }
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-28 md:mt-26 lg:mt-28">
      <Heading content={"Change password"} />
      <form action="" className="mt-2" onSubmit={handleSubmit}>
        <div className="w-full  flex flex-col gap-6 mb-2 ">
          <div className="flex flex-col">
            <div className="flex border-b-2">
              <input
                type={`${showPassword.changePassword ? "text" : "password"}`}
                className="w-full outline-none tracking-wide "
                placeholder="Enter your new password"
                name="changePassword"
                onChange={(e) => {
                  setPassword({
                    ...getPassword,
                    [e.target.name]: e.target.value,
                  });
                }}
              />

              {!showPassword.changePassword && (
                <PiEyeClosedBold
                  className="text-gray-500 text-lg"
                  onClick={() => {
                    setShowPassword({
                      ...showPassword,
                      changePassword: !showPassword.changePassword,
                    });
                  }}
                />
              )}

              {showPassword.changePassword && (
                <PiEyeBold
                  className="text-gray-500 text-lg"
                  onClick={() => {
                    setShowPassword({
                      ...showPassword,
                      changePassword: !showPassword.changePassword,
                    });
                  }}
                />
              )}
            </div>
            <p className="text-red-500 text-sm">{errors?.changePassword}</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex border-b-2">
              <input
                type={`${showPassword.confirmPassword ? "text" : "password"}`}
                className="w-full outline-none tracking-wide "
                placeholder="Confirm your password"
                name="confirmPassword"
                onChange={(e) => {
                  setPassword({
                    ...getPassword,
                    [e.target.name]: e.target.value,
                  });
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
            <p className="text-red-500 text-sm">{errors?.confirmPassword}</p>
          </div>
        </div>
        <div className="w-full mt-6 md:w-[20%] lg:w-[12%]">
          <Button content={"Continue"} />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
