import React, { useRef, useState } from "react";
import Button from "../components/SubComponent/Button/Button";
import Heading from '../components/SubComponent/HeadingTitle/Heading'
import { useConfirmUserMutation } from "../api/authApiSlice";

export default function CodeConfirmation() {
 const [confirmUser]=useConfirmUserMutation();

  const [otp, setOtp] = useState(Array(6).fill("")); 
  const inputRefs = useRef([]); 

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };
  
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const OTP=otp.join('')
      
    const res=await confirmUser({
        otp:OTP
    });
    console.log(res)

  }

  return (
    <section className="bg-white  dark:bg-dark mt-28 md:mt-32 lg:mt-30">

      <div className="container flex flex-col gap-4 items-center ">
        <Heading content={"Enter the OTP"} className="text-center"/>
        <form id="otp-form" className="flex flex-col gap-6  items-center justify-center" onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-wrap items-center justify-center">

            
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border-2 border-gray-300 border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 "
            />
           
        ))}
         </div>
         <div>

            <Button content={"Verify"}/>
         </div>
         
        </form>
      </div>
    </section>
  );
}
