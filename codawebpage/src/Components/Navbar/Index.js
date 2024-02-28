import React from "react";
import "./navbar.css";
import Logo from "../../Asset/CodaLogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="NavbarBody">
      <div className="bodyContainer">
        <div className="Bodyleft">
          <a href="https://www.codashop.com">
            <img src={Logo} className="CodaHeaderLogo" alt="CodaShopLogo" />
          </a>
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
      <svg
        className="Svgdecor"
        viewBox="0 0 1920 100"
        width="100%"
      >
        <path
          d="M0 68L83 77L167 80L250 35L334 37L417 85L501 26L584 40L668 54L751 53L835 84L918 63L1002 73L1085 33L1169 36L1252 54L1336 68L1419 53L1503 78L1586 50L1670 59L1753 62L1837 77L1920 43L1920 0L1837 0L1753 0L1670 0L1586 0L1503 0L1419 0L1336 0L1252 0L1169 0L1085 0L1002 0L918 0L835 0L751 0L668 0L584 0L501 0L417 0L334 0L250 0L167 0L83 0L0 0Z"
          fill="#ff7f98"
        ></path>
        <path
          d="M0 9L83 11L167 49L250 45L334 10L417 33L501 13L584 19L668 54L751 26L835 37L918 9L1002 36L1085 56L1169 10L1252 59L1336 25L1419 29L1503 25L1586 27L1670 46L1753 57L1837 56L1920 46L1920 0L1837 0L1753 0L1670 0L1586 0L1503 0L1419 0L1336 0L1252 0L1169 0L1085 0L1002 0L918 0L835 0L751 0L668 0L584 0L501 0L417 0L334 0L250 0L167 0L83 0L0 0Z"
          fill="#530066"
        ></path>
      </svg>
    </div>
  );
};

export default Navbar;
