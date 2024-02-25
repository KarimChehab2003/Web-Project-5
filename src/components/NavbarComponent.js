// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = ({ scrollToRef, homeRef, skillsRef, projectsRef }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary-subtle" data-bs-theme="dark" sticky="top">
            <Container fluid style={{ width: "80%" }}>
                <Navbar.Brand href="#Home" className='fs-1' onClick={() => scrollToRef(homeRef)}>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-5 fs-4 ">
                        <Nav.Link href="#Home" className='mx-3 text-start' onClick={() => scrollToRef(homeRef)}>Home</Nav.Link>
                        <Nav.Link href="#Skills" className='mx-3 text-start' onClick={() => scrollToRef(skillsRef)}>Skills</Nav.Link>
                        <Nav.Link href="#Projects" className='mx-3 text-start' onClick={() => scrollToRef(projectsRef)}>Projects</Nav.Link>
                    </Nav>
                    <Nav className='d-flex flex-row align-items-center'>
                        <Nav.Link href="#LinkedIn">
                            <FontAwesomeIcon className="fs-5 py-2 px-3 border border-white rounded-circle text-white icon" icon={faLinkedinIn} />
                        </Nav.Link>
                        <Nav.Link href="#Facebook">
                            <FontAwesomeIcon className="fs-5 py-2 px-3 border border-white rounded-circle text-white icon" icon={faFacebookF} />
                        </Nav.Link>
                        <Nav.Link href="#Instagram" className='me-3'>
                            <FontAwesomeIcon className="fs-5 py-2 px-3 border border-white rounded-circle text-white icon" icon={faInstagram} />
                        </Nav.Link>
                    <Button className='mx-5 connectButton fs-5 ms-auto'>Let's Connect</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
