import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from 'react-bootstrap/Container';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from './gradientSVG';


const SkillsComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to 3 slides on wider screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const idCSS = "hello";
    return (
        <Container fluid className='skills-wallpaper p-5 text-center' >

            <p className='text-white text-capitalize' style={{ fontSize: "3rem" }}>skills</p>
            <p className="text-secondary text-capitalize fw-1" style={{ fontSize: "1.3rem" }}>you can see my skills here</p>
            <Slider className='skills-carousel mx-auto my-5 p-3' {...settings}>
                <div>
                    <Container className='mx-auto'>
                        <GradientSVG />
                        <CircularProgressbar strokeWidth={8} value={95} text="95%" styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#010009"
                            },
                            text: {
                                fill: "white"
                            }
                        }}
                        />
                    </Container>
                    <p class="text-white mt-5 text-break" style={{ fontSize: "1.5rem" }}>FrontEnd Development</p>
                </div>
                <div>
                    <Container className='mx-auto'>
                        <GradientSVG />
                        <CircularProgressbar strokeWidth={8} value={80} text="80%" styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#010009"
                            },
                            text: {
                                fill: "white"
                            }
                        }}
                        />
                    </Container>
                    <p class="text-white mt-5 text-break" style={{ fontSize: "1.5rem" }}>Data Science</p>
                </div>
                <div>
                    <Container className='mx-auto'>
                        <GradientSVG />
                        <CircularProgressbar strokeWidth={8} value={90} text="90%" styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#010009"
                            },
                            text: {
                                fill: "white"
                            }
                        }}
                        />
                    </Container>
                    <p class="text-white mt-5 text-break" style={{ fontSize: "1.5rem" }}>BackEnd Development</p>
                </div>
                <div>
                    <Container className='mx-auto'>
                        <GradientSVG />
                        <CircularProgressbar strokeWidth={8} value={85} text="85%" styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#010009"
                            },
                            text: {
                                fill: "white"
                            }
                        }}
                        />
                    </Container>
                    <p class="text-white mt-5 text-break" style={{ fontSize: "1.5rem" }}>Algorithms</p>
                </div>
            </Slider>

        </Container>
    );
}

export default SkillsComponent;