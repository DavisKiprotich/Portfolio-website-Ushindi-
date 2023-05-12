import "./HeroStyles.css";
import React from "react";
import BackImg from "../Assets/laptop.jpeg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="back-img" src={BackImg} alt="backgroundImg" />
      </div>
      <div className="content">
        <p>HI, I'M Electrical Engineer</p>
        <h2>Graphic Designer</h2>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Say Hello
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
