import programmer from "../imgs/programmer.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const GetInTouchComponent = () => {
    return (
        <Container fluid className='position-relative d-flex flex-wrap justify-content-center py-5 position-relative' style={{ backgroundImage: "linear-gradient(to right, #b06ab3, #4568dc)" }}>
            <Row xl={2} sm={1} xs={1} style={{ width: "80%", height: "100%", marginBottom: "131px" }}>
                <Col className="d-flex align-items-center">
                    <Image src={programmer} fluid />
                </Col>
                <Col className='d-flex flex-column flex-wrap  py-2'>
                    <p className="title-right text-center">Get In Touch</p>
                    <form className="form-right">
                        <input type="text" placeholder="First Name" className="input-right" />
                        <input type="text" placeholder="Last Name" className="input-right" />
                        <input type="text" placeholder="Email Address" className="input-right" />
                        <input type="text" placeholder="Phone No." className="input-right" />
                        <textarea className="textarea-right" rows="5" placeholder="Message" />
                    </form>
                        <input type="submit" className="send-right mx-2" value="Send" />
                </Col>
            </Row>

            <Container className="d-flex justify-content-center border border-white py-5 bg-white" style={{ borderRadius: "70px",position: "absolute" ,bottom: "-131px" }}>
                <Row xl={2} sm={1} xs={1} className="d-flex flex-wrap justify-content-center" style={{width: "80%"}}>
                    <Col>
                        <p className="text-capitalize fs-3 text-start text-break" >See my projects at once & leave here your e-mail address</p>
                    </Col>
                    <Col className="leave-email-input d-flex justify-content-between p-0" >
                        <input type="email" className="email-input " placeholder="Email Address" />
                        <input type="submit" className="email-submit-button px-2" value="Submit" />
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}

export default GetInTouchComponent;