import React from "react";
import "./contactus.css";
import { MdMessage } from "react-icons/md";
import { FaFacebookMessenger, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="ContactUsBody">
      <div className="ContainerHeader">
        <h1 class="animate__animated animate__bounce animate__slow ">
          <span>Need help?</span>
          <br />
          Get in touch!
        </h1>
      </div>
      <div className="COntainerBody">
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <div class="animate__animated animate__bounce animate__delay-1s">
            <div className="item">
              <a href="https://sg.support.codashop.com/hc/en-us/requests/new">
                <MdMessage className="iconContactus" color="#E8F953" />
              </a>
              <div className="itemBody">
                <p>
                  <span className="TextHighlight">
                    <a href="https://sg.support.codashop.com/hc/en-us/requests/new">
                      Send us a message
                    </a>{" "}
                  </span>{" "}
                  and we'll get back to you in 24 hours or less
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <div class="animate__animated animate__bounce animate__delay-2s">
            <div className="item">
              <a href="https://m.me/Codashop.SG">
                <FaFacebookMessenger className="iconContactus" color="#E8F953" />
              </a>
              <div className="itemBody">
                <p>Send us a <span className="TextHighlight"><a href="https://m.me/Codashop.SG">direct message</a></span>  via Facebook</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <div class="animate__animated animate__bounce animate__delay-3s">
            <div className="item">
              <FaRobot className="iconContactus" cursor="pointer" color="#E8F953" />
              <div className="itemBody">
                <p>Chat with our <span className="TextHighlight"><a href="/">virtual assistant</a></span> </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
