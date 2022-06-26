import React from "react";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";




function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
      </div>
  );
}

export default App;
