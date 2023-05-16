import "./FooterStyles.css";
import { IoLogoFacebook } from "react-icons/io";
import { SiTwitter } from "react-icons/si";
import { FaLinkedin, FaHome, FaPhone, FaMailchimp } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome  style={{marginRight: '2rem'}}/>
                <div>
                  <Link to="/" >
                  D-Zilla Creative Solutions
                </Link>
                </div>
            </div>
            <div className="phone">
                <FaPhone  style={{marginRight: '2rem'}}/>
                <div>
                  <Link to="/contact" >
                  +254791083661
                  </Link>
                </div>
            </div>
            <div className="email">
                <FaMailchimp  style={{marginRight: '2rem'}}/>
                <div>
                  <Link to="/contact" >
                  davidnavidali@gmail.com
                  </Link>
                </div>
            </div>
          </div>
          <div className="right">
          <h4>About the Company</h4>
          <p>We specialize with graphic design.With focus on innovation and attention to detail,our team works closely with clients to create visually compelling designs that bring their ideas to life.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100062809791733&mibextid=ZbWKwL">
              <IoLogoFacebook style={{marginRight: '1rem'}}/>
            </a>
            <a href="https://www.twitter.com">
              <SiTwitter style={{marginRight: '1rem'}}/>
            </a>
            <a href="https://www.linkedin.com/in/davis-kiprotich-652b49243/">
              <FaLinkedin style={{marginRight: '1rem'}}/>
            </a>
          </div>
            <div className="footer-copyright">D-Zilla</div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
