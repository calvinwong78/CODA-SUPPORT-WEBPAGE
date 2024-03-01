import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DetailPage from "./Components/Detailpage";
import PageMan from "./Pagemanager";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageMan/>} />
          <Route path="/detail" element={<DetailPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
