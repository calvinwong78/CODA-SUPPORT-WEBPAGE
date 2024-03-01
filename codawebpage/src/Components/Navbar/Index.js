import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Asset/CodaLogo.png";
import { motion } from "framer-motion";
import { SearchBar } from "../Searchbar";
import { SearchResultsList } from "../Searchbar/SearchResultList";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [results, setResults] = useState([]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30}  className="hamburgermb" />
            ) : (
              <FaBars size={30} color="#E8F953" className="hamburgermb" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} className="hamburgermb" />
            ) : (
              <FaBars size={30} className="hamburgermb" />
            )}
          </div>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={false}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <button className="Navbar-button">Sign In</button>
                </motion.div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="Themes"
                spy={true}
                smooth={false}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <button className="Navbar-button">Submit request</button>
                </motion.div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
