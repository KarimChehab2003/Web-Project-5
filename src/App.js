// App.js
import './App.css';
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from './components/ProjectsComponent';
import GetInTouchComponent from './components/GetInTouchComponent';
import FooterComponent from "./components/FooterComponent";
import { Container } from 'react-bootstrap';
function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <NavbarComponent  scrollToRef={scrollToRef} homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef}  />
      <div ref={homeRef}><HomeComponent /></div>
      <div ref={skillsRef}><SkillsComponent /></div>
      <div ref={projectsRef}><ProjectsComponent /></div>
      <GetInTouchComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
