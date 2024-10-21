import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import CardsContainer from "../sections/CardsContainer";
import DailyEssentials from "../sections/DailyEssentials";
import { useTestEndpointQuery } from "../api/authApiSlice";


const Home = () => {
  try{
    // suppose this entry is for cart items
    const res=useTestEndpointQuery();
    
    // redirect to login here

  }catch(err){
    console.log(err);

  }
  
  
  
 
    
 
  
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