import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import { motion } from "framer-motion";

const Footers = () => {
  return (
    <div className="FooterMain">
      <div className="FooterHeader">
        <div className="topleft">
          <h1>CODASHOP SUPPORT</h1>
        </div>
        <div className="topright">
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.linkedin.com/company/coda-payments/">
              <FaLinkedin className="Footerlogo" size="2rem" cursor="pointer" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.glassdoor.sg/Overview/Working-at-Coda-Payments-EI_IE2595921.11,24.htm">
              <SiGlassdoor
                className="Footerlogo"
                size="2rem"
                cursor="pointer"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="FooterBody">
        <div className="bodyContainer">
          <div className="containerHeader"> 
            <h2>Products</h2>
          </div>
          <div className="containerBody">
            <ul>
              <li><a href="https://www.codapayments.com/codashop">Codashop</a></li>
              <li><a href="https://www.codapayments.com/codapay">Codapay</a></li>
              <li><a href="https://www.codapayments.com/xshop">xShop</a></li>
              <li><a href="https://www.codapayments.com/customcommerce">Custom Commerce</a></li>
            </ul>
          </div>
        </div>
        <div className="bodyContainer">
          <div className="containerHeader"> 
            <h2>Company</h2>
          </div>
          <div className="containerBody">
            <ul>
              <li><a href="https://www.codapayments.com/codashop">Codashop</a></li>
              <li><a href="https://www.codapayments.com/codapay">Codapay</a></li>
              <li><a href="https://www.codapayments.com/xshop">xShop</a></li>
              <li><a href="https://www.codapayments.com/customcommerce">Custom Commerce</a></li>
            </ul>
          </div>
        </div>
        <div className="bodyContainer">
          <div className="containerHeader"> 
            <h2>Resources</h2>
          </div>
          <div className="containerBody">
            <ul>
              <li><a href="https://www.codapayments.com/codashop">Codashop</a></li>
              <li><a href="https://www.codapayments.com/codapay">Codapay</a></li>
              <li><a href="https://www.codapayments.com/xshop">xShop</a></li>
              <li><a href="https://www.codapayments.com/customcommerce">Custom Commerce</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <div className="Bottomleft">
          <a href="https://www.codapayments.com/terms-conditions/terms-conditions">
            <p>Terms & Conditions</p>
          </a>
          <a href="https://www.codapayments.com/privacy-policy/privacy-policy">
            <p>Privacy Policy</p>
          </a>
          <a href="https://www.codapayments.com/policy/prohibited-content-policy">
            <p>Prohibited Content Policy</p>
          </a>
        </div>
        <div className="bottomright">
          <p>© 2023 Coda Payments Pte. Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footers;
