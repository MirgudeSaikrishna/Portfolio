import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./components/Contactpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
