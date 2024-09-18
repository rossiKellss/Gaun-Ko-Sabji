import React, { useState } from "react";
import Heading from "../../components/SubComponent/HeadingTitle/Heading";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import Button from "../../components/SubComponent/Button/Button";

function ChangePassword() {

  const [showPassword, setShowPassword] = useState({
    password: false,
    changePassword: false,
  });
  const [errors,setErrors]=useState({});
  return (
    <div className="w-[80%] mx-auto mt-28 md:mt-26 lg:mt-28">
      <Heading content={"Change password"} />
      <form action="" className="mt-2">
        <div className="w-full  flex flex-col gap-6 mb-2 ">
          <div className="flex border-b-2">
            <input
              type={`${showPassword.changePassword ? "text" : "password"}`}
              className="w-full outline-none tracking-wide "
              placeholder="Enter your new password"
              name="changePassword"
              onChange={(e) => {
                getUserCred(e);
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
          <div className="flex border-b-2">
            <input
              type={`${showPassword.changePassword ? "text" : "password"}`}
              className="w-full outline-none tracking-wide "
              placeholder="Confirm your password"
              name="changePassword"
              onChange={(e) => {
                getUserCred(e);
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
        </div>
        <div className="w-full mt-6 md:w-[20%] lg:w-[12%]">
          <Button content={"Continue"} />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
