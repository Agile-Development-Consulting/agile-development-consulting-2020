import React from "react";
import "./Hero.css";
import logo from "../../images/Agile-Logo.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="logo-row">
        <img className="logo" src={logo} alt="Agile Development Consulting" />
        <h4>We handle things, so you don't have to.</h4>
      </div>
    </div>
  );
};

export default Hero;
