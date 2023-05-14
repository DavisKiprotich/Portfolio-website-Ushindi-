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
          Hello, we offer {" "}
          <Typical
            loop={Infinity}
            className="typical"
            steps={[
              "Graphic Design",
              1000,
              "Online Cyber Services",
              1000,
              "Logo Design",
              1000,
              "Flyer Design",
              1000,
              "Video Ads",
              1000,
              "Printing and Binding Services",
              1000,
              "Business Card Design",
              1000,
              "Banner Design",
              1000,
              "Company Profile",
              1000,
              "Brochure Design",
              1000,
              "Poster Design",
              1000,
              "Autocad Design(2D)",
              1000,
              "Letterhead Design",
              1000,
              "Cover Art Design",
              1000,
            ]}
          />
        </p>
        <h2>D-Zilla Creative Solutions</h2>
        <div>
          <Link to="/projects" className="btn">
            Services
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
