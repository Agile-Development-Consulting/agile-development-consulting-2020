import React, { useEffect, useState } from "react";
import "./CompanyPitch.css";
import { AnimateOnChange } from "react-animation";

const CompanyPitch = () => {
  const words = ["Design", "Develop", "Market", "Convert", "Build"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = currentWordIndex + 1;
      console.log(newIndex);
      if (newIndex < words.length) {
        setCurrentWordIndex(newIndex);
      } else {
        setCurrentWordIndex(0);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [currentWordIndex, words.length]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h3>What could your company do with more time?</h3>
          <AnimateOnChange>
            <h1 id="company-pitch-skills">{words[currentWordIndex]}</h1>
          </AnimateOnChange>
        </div>
      </div>
    </div>
  );
};

export default CompanyPitch;
