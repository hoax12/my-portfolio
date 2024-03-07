import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience.js";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
const App = () => {
  return (
  <Router>  
    <Nav/>
    <Background/>
    <Routes>
      <Route path ="/" element={<About/>}/>
      <Route path ="/education" element={<Education/>}/>
      <Route path ="/skills" element={<Skills/>}/>
      <Route path ="/experience" element={<Experience/>}/>
      <Route path ="/projects" element={<Projects/>}/>
      <Route path ="/contact" element={<Contact/>}/>

    </Routes>
  </Router>
  );
};

export default App;
