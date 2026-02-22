import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ImportantDates from "./components/ImportantDates/ImportantDates";
import Speakers from "./components/Speakers/Speakers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <Speakers />
    </>
  );
}

export default App;