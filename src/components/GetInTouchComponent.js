import programmer from "../imgs/programmer.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const GetInTouchComponent = () => {
    return (
        <Container fluid className='position-relative d-flex flex-wrap justify-content-center py-5 position-relative' style={{ backgroundImage: "linear-gradient(to right, #b06ab3, #4568dc)" }}>
            <Row xl={2} sm={1} style={{ width: "80%", height: "100%", marginBottom: "131px" }}>
                <Col className="d-flex align-items-center">
                    <Image src={programmer} fluid />
                </Col>
                <Col className=' py-2 d-flex flex-column flex-wrap align-items-center'>
                    <p className="title-right">Get In Touch</p>
                    <form className="form-right">
                        <input type="text" placeholder="First Name" className="input-right" />
                        <input type="text" placeholder="Last Name" className="input-right" />
                        <input type="text" placeholder="Email Address" className="input-right" />
                        <input type="text" placeholder="Phone No." className="input-right" />
                        <textarea className="textarea-right" placeholder="Message" />
                        <input type="submit" className="send-right" value="Send" />
                    </form>
                </Col>
            </Row>

            <Container className="border border-white p-5 d-flex flex-wrap justify-content-center align-items-center bg-white" style={{ borderRadius: "70px",position: "absolute" ,bottom: "-131px" }}>
                <Row xl={2} sm={1}>
                    <Col>
                        <p className="text-capitalize fs-1 text-start" >See my projects at once & leave here your e-mail address</p>
                    </Col>
                    <Col className="leave-email-input d-flex justify-content-center align-items-center">
                        <input type="email" className="email-input" placeholder="Email Address" />
                        <input type="submit" className="email-submit-button" value="Submit" />
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}

export default GetInTouchComponent;