import Navbar from "./Components/Navbar/Index";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import Footers from "./Components/Footer";

function PageMan() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContactUs />
      <Product />
      <Footers />
    </div>
  );
}

export default PageMan;
