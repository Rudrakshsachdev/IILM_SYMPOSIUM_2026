import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ImportantDates from "./components/ImportantDates/ImportantDates";
import Speakers from "./components/Speakers/Speakers";
import Organizers from "./components/Organizers/Organizers";
import CallForPapers from "./components/CallForPapers/CallForPapers";
import Registrations from "./components/Registrations/Registrations";
import VenueContact from "./components/VenueContact/VenueContact";
import Footer from "./components/Footer/Footer";

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
      <Registrations />
      <VenueContact />
      <Footer />
    </>
  );
}

export default App;