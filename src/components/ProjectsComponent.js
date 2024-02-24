import firstWeb from "../imgs/FirstWeb.jpg"
import secondWeb from "../imgs/SecondWeb.png"
import thirdWeb from "../imgs/ThirdWeb.png"
import fourthWeb from "../imgs/FourthWeb.png"
import fifthWeb from "../imgs/FifthWeb.png"
import React, { useState } from "react";

const Projects = () => {

    const [visibilityClass, setVisibilityClass] = useState("visibility-off");
    const [visibilityParagraph, setVisibilityParagraph] = useState("visibility-off");

    const handleButtonClick = (className) => {
        setVisibilityClass(className === "button-1" ? "visibility-on" : "visibility-off");
        setVisibilityParagraph(className === "button-3" ? "visibility-on" : "visibility-off");
    };


    return (
        <div className="projects-container">
            <div className="projects-content">
                <div className="projects-header">
                    <p className="projects-header-title">My Projects</p>
                    <p className="projects-header-desc">My name is Karim, I live in Cairo. This is my react project</p>
                    <div className="projects-header-sections">
                        <button className="projects-header-button button-1 bn632-hover bn27" onClick={() => handleButtonClick("button-1")}>1st Section</button>
                        <button className="projects-header-button button-2 bn632-hover bn27" onClick={() => handleButtonClick("button-2")}>2nd Section</button>
                        <button className="projects-header-button button-3 bn632-hover bn27" onClick={() => handleButtonClick("button-3")}>3rd Section</button>
                    </div>
                </div>

                <div className={`projects-grid text-center ${visibilityClass}`} id="projectsGrid">
                    <div className="projects-grid-element">
                        <img src={firstWeb} alt="firstWeb" className="projects-grid-img"></img>
                        <a href="https://karimchehab2003.github.io/Web-Project-1/" target="_blank" className="projects-grid-overlay" rel="noreferrer">
                            <p className="projects-grid-overlay-text text-break">The Chainsmokers</p>
                            <p className="projects-grid-overlay-subtext text-break">HTML + CSS Project</p>
                        </a>
                    </div>
                    <div className="projects-grid-element">
                        <img src={secondWeb} alt="secondWeb" className="projects-grid-img"></img>
                        <a href="https://karimchehab2003.github.io/Web-Project-2/" target="_blank" className="projects-grid-overlay" rel="noreferrer">
                            <p className="projects-grid-overlay-text text-break">Instruments Shop</p>
                            <p className="projects-grid-overlay-subtext text-break">HTML5 + CSS3 Project</p>
                        </a>
                    </div>
                    <div className="projects-grid-element">
                        <img src={thirdWeb} alt="thirdWeb" className="projects-grid-img"></img>
                        <a href="https://karimchehab2003.github.io/Web-Project-3/" target="_blank" className="projects-grid-overlay" rel="noreferrer">
                            <p className="projects-grid-overlay-text text-break">Welcome To France</p>
                            <p className="projects-grid-overlay-subtext text-break">Bootstrap Project</p>
                        </a>
                    </div>
                    <div className="projects-grid-element">
                        <img src={fourthWeb} alt="fourthWeb" className="projects-grid-img"></img>
                        <a href="https://karimchehab2003.github.io/Web-Project-4/" target="_blank" className="projects-grid-overlay" rel="noreferrer">
                            <p className="projects-grid-overlay-text text-break">Online Shopping</p>
                            <p className="projects-grid-overlay-subtext text-break">JS Project</p>
                        </a>
                    </div>
                    <div className="projects-grid-element">
                        <img src={fifthWeb} alt="fifthWeb" className="projects-grid-img"></img>
                        <a href="https://karimchehab2003.github.io/Web-Project-5/" target="_blank" className="projects-grid-overlay" rel="noreferrer">
                            <p className="projects-grid-overlay-text text-break">Welcome To My Portfolio</p>
                            <p className="projects-grid-overlay-subtext text-break">React Project</p>
                        </a>
                    </div>
                    <div className="projects-grid-element tba">To Be Added...</div>
                </div>

                <p className={`projects-header-desc text-center ${visibilityParagraph}`} >My name is Karim, I live in Cairo. This is my react project</p>

            </div>
        </div>
    );
}

export default Projects;