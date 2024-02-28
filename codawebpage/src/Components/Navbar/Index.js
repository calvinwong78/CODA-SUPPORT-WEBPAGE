import React from "react";
import "./navbar.css";
import Logo from "../../Asset/CodaLogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="NavbarBody">
      <div className="Bodyleft">
        <img src={Logo} className="CodaHeaderLogo" alt="CodaShopLogo" />
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
  );
};

export default Navbar;
