import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Asset/CodaLogo.png";
import { motion } from "framer-motion";
import { SearchBar } from "../Searchbar";
import { SearchResultsList } from "../Searchbar/SearchResultList";

const Navbar = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="NavbarBody">
      <div className="bodyContainer">
        <div className="Bodyleft">
          <a href="https://www.codashop.com">
            <img src={Logo} className="CodaHeaderLogo" alt="CodaShopLogo" />
          </a>
        </div>
        <div className="SearchBar">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>

        <div className="Bodyright">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <button className="Navbar-button">Sign In</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <button className="Navbar-button">Submit request</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
