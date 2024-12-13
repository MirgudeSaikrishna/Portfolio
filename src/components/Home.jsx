import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import ContactForm from "./Contactpage";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Add the Contact Form Section */}
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
