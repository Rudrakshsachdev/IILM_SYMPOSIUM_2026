import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ImportantDates from "./components/ImportantDates/ImportantDates";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
    </>
  );
}

export default App;