import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar/Index';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  );
}

export default App;
