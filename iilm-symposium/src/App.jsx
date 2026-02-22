import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ImportantDates from "./components/ImportantDates/ImportantDates";
import Speakers from "./components/Speakers/Speakers";
import Organizers from "./components/Organizers/Organizers";
import CallForPapers from "./components/CallForPapers/CallForPapers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <Speakers />
      <Organizers />
      <CallForPapers />
    </>
  );
}

export default App;