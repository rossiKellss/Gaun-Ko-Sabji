import Navbar from "./components/Navbar";
import Explore from "./sections/Explore";
import Hero from "./sections/Hero";
import Cards from "./sections/Cards"

function App() {
  return (
    <>
      <div className="app w-[80%]  m-auto">
        <Navbar />
        <Hero />
        <Explore />
        <Cards/>
        
      
      </div>
    </>
  );
}

export default App;
