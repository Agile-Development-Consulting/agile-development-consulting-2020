import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyPitch from "./components/CompanyPitch/CompanyPitch";
import ClientPortfolio from "./components/ClientPortfolio/ClientPortfolio";
import Consultation from "./components/Consultation/Consultation";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CompanyPitch />
      <ClientPortfolio />
      <Consultation />
    </>
  );
}

export default App;
