import "./HeroStyles.css";
import React from "react";
import BackImg from "../Assets/laptop.jpeg";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="back-img" src={BackImg} alt="backgroundImg" />
      </div>
      <div className="content">
        <p>
          Hello, I'm{" "}
          <Typical
            loop={Infinity}
            className="typical"
            steps={[
              "David Ushindi",
              1000,
              "Logo maker",
              1000,
              "Electrical Engineer",
              1000,
              "Telecommunications Engineer",
              1000,
            ]}
          />
        </p>
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
    )
  };

export default Heroimg;
