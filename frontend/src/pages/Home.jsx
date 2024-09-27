import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import CardsContainer from "../sections/CardsContainer";
import DailyEssentials from "../sections/DailyEssentials";
import { useTestEndpointQuery } from "../api/authApiSlice";

import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  try{
    // suppose this entry is for cart items
    const res=useTestEndpointQuery();
    console.log(res);
    // redirect to login here

  }catch(err){
    console.log(err);

  }
  
  
  const ifToken=useSelector(state=>state.auth.token);

 
    
 
  
  // console.log(userSelector(state=>state));
  // const ifToken=selectCurrentToken();
  // console.log(ifToken);

  

  return (
    <div className="w-[80%] m-auto">
       <Hero />
        <Explore />
        <CardsContainer/>
        <DailyEssentials/>
        <CardsContainer/>


    </div>
  )
}

export default Home