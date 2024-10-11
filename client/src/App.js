import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
function App() {
  return ( 
    <div className="bg-slate-300 h-[100%] ">
      <Navbar />
      <Hero />
      <Services />
      <Products/>
    </div>
  );
}

export default App;
