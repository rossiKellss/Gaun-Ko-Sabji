import Navbar from "./components/Navbar";
import Explore from "./sections/Explore";
import Hero from "./sections/Hero";
// import Cards from "./sections/Cards"
import CardsContainer from "./sections/CardsContainer";
import DailyEssentials from "./sections/DailyEssentials";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="app w-[80%]  m-auto">
        <Navbar />
        <Hero />
        <Explore />
        <CardsContainer/>
        <DailyEssentials/>
        <CardsContainer/>
        
        
        
      
      </div>
      <Footer/>
    </>
  );
}

export default App;
