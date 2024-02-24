import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = () => {
    return (
        <Container fluid style={{backgroundColor: "black"}}>
            <Row className='d-flex flex-wrap justify-content-between mx-auto' style={{width: "80%",paddingTop: "200px"}}>
                <Col className='text-white text-uppercase fs-1 d-flex justify-content-lg-start justify-content-xs-center align-items-center '>
                    <p>logo</p>
                </Col>
                <Col className='d-flex flex-column'>
                    <Container className='d-flex flex-row justify-content-lg-end justify-content-xs-center mb-3'>
                        <a href="#LinkedIn" className='mx-1'>
                            <FontAwesomeIcon className="fs-3 py-2 px-3 border border-white rounded-circle text-white icon" icon={faLinkedinIn} />
                        </a>
                        <a href="#Facebook" className='mx-1'>
                            <FontAwesomeIcon className="fs-3 py-2 px-3 border border-white rounded-circle text-white icon" icon={faFacebookF} />
                        </a>
                        <a href="#Instagram" className=' mx-1'>
                            <FontAwesomeIcon className="fs-3 py-2 px-3 border border-white rounded-circle text-white icon" icon={faInstagram} />
                        </a>
                    </Container>
                    <p className="text-white text-lg-end text-sm-start text-capitalize px-2">--Copyright 2024-- all rights reserved here by karim fouad chehab</p>
                </Col>
            </Row>
        </Container>

    );
}

export default FooterComponent;