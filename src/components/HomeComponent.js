import React, { useState, useEffect } from 'react';
import astronaut from "../imgs/astronautSpace.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const HomeComponent = () => {
    const [introText, setIntroText] = useState("");
    const frontEnd = "a FrontEnd Developer";
    const backEnd = "a BackEnd Developer";
    const fullStack = "a FullStack Developer";

    useEffect(() => {
        const roles = [frontEnd, backEnd, fullStack];
        let currentIndex = 0;
        let typingDirection = 'typing';
        let charIndex = 0;

        const intervalId = setInterval(() => {
            if (typingDirection === 'typing') {
                if (charIndex <= roles[currentIndex].length) {
                    setIntroText(roles[currentIndex].substring(0, charIndex));
                    charIndex++;
                } else {
                    typingDirection = 'deleting';
                }
            } else {
                if (charIndex >= 0) {
                    setIntroText(roles[currentIndex].substring(0, charIndex));
                    charIndex--;
                } else {
                    typingDirection = 'typing';
                    currentIndex = (currentIndex + 1) % roles.length;
                }
            }
        }, 125);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container fluid className='home-container d-flex justify-content-center pt-5'>
            <Row xl={2} sm={1} xs={1} className='position-relative' style={{ width: "80%", height: "100%" }}>
                <Col className='d-flex flex-column flex-wrap align-items-start mt-5'>
                    <span className="text-white text-start mb-3 p-3 fs-3 text-capitalize border border-2 border-white welcome-gradient">Welcome all to my profile</span>
                    <p className="text-white text-start" style={{ width: "100%", fontSize: "5vw" }}>
                        Hi! I'm Karim Fouad Chehab, {introText}
                        <span className='textBar'>|</span>
                    </p>
                    <p className="text-secondary text-capitalize text-start mb-3">Hello everyone, I have 8 years of experience in web development</p>
                    <p className="text-white text-start fs-3 mt-5">Let's Connect <FontAwesomeIcon icon={faCircleArrowRight} className='mx-2' /></p>
                </Col>
                <Col>
                    <Image src={astronaut} fluid className='astronaut mt-5' />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeComponent;
