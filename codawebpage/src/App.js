import "./App.css";
import "animate.css";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar/Index";
import Product from "./Components/Product";
import Footers from "./Components/Footer";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Hero />
      <ContactUs />
      <Product />
      <Footers />
    </div>
  );
}

export default App;
