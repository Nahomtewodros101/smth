import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
function App() {
  return ( 
    <div className="bg-slate-300 h-[100%] ">
      <Navbar />
      <Hero />
      <Services />
      <Products/>
      < OurTeam />
      <Contact />
    </div>
  );
}

export default App;
