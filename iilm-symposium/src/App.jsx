import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tracks from "./components/Tracks/Tracks";
//import ImportantDates from "./components/ImportantDates/ImportantDates";
//import Speakers from "./components/Speakers/Speakers";
import Organizers from "./components/Organizers/Organizers";
import CallForPapers from "./components/CallForPapers/CallForPapers";
import Registrations from "./components/Registrations/Registrations";
import VenueContact from "./components/VenueContact/VenueContact";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      {/* <ImportantDates /> */}
      {/*<Speakers />*/}
      <Organizers />
      <CallForPapers />
      <Registrations />
      <VenueContact />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;