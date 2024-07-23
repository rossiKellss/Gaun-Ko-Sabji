import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import CardsContainer from "../sections/CardsContainer";
import DailyEssentials from "../sections/DailyEssentials";

const Home = () => {
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