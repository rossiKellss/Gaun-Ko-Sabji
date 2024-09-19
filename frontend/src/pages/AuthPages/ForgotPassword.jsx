import React from 'react'
import {useState} from 'react'
import Heading from '../../components/SubComponent/HeadingTitle/Heading'
import Button from '../../components/SubComponent/Button/Button';
import { useResetPasswordMutation } from '../../api/authApiSlice';
import { Alert } from '../../components/Alert';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate=useNavigate();
    const [resetPassword]=useResetPasswordMutation();
    
    const [email,setEmail]=useState({});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await resetPassword(email).unwrap();
            console.log(res);
            
            
            if(res.success){
                const userId=res.data._id
                navigate(`/confirm-code/${userId}`)

            }
            

        }catch(err){
            const message=err.data.message;
            Alert(message,'error')

        }


    }


  
    
  return (
    <div className=' w-[80%] mx-auto mt-28 md:mt-32 lg:mt-32 '>
        <Heading content={"Forgot password"}/>
        
            <form className='mt-2 flex flex-col gap-2 lg:gap-4 md:justify-start' onSubmit={handleSubmit}>
                <div className='w-full'>
                <input
                  type="email"
                  className="w-full outline-none tracking-wide border-2 px-2 py-2 rounded-md "
                  placeholder="Enter your email"
                  name="email"
                  required
                  onChange={(e) => {
                    setEmail({
                        [e.target.name]:e.target.value
                    });
                  }}
                />
                </div>
                <div className='w-full md:w-[20%] lg:w-[12%]'>

                <Button content={"Continue"} />
                </div>
            </form>
        
    

    </div>
  )
}

export default ForgotPassword