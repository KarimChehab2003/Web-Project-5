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
                    slidesToShow: 2,
                },
            },
        ],
    };

    const idCSS = "hello";
    return (
        <Container fluid className='skills-wallpaper p-5' >
            <Container fluid className='p-5 mx-auto text-center' style={{ backgroundColor: "#0e1111", borderRadius: "70px", width: "80%" }}>
                <p className='text-white text-capitalize' style={{ fontSize: "5rem" }}>skills</p>
                <p className="text-secondary text-capitalize fs-3 fw-1">you can see my skills here</p>
                <Slider className='skills-carousel mx-auto my-5 p-3' {...settings}>
                    <div>
                        <Container className='mx-auto'>
                            <GradientSVG />
                            <CircularProgressbar strokeWidth={8} value={95} text="95%" styles={{
                                path: { stroke: `url(#${idCSS})`, height: "100%" },
                                trail: {
                                    stroke: "#0e1111"
                                },
                                text: {
                                    fill: "white"
                                }
                            }}
                            />
                        </Container>
                        <p class="fs-3 text-white mt-5 text-break">FrontEnd Development</p>
                    </div>
                    <div>
                        <Container className='mx-auto'>
                            <GradientSVG />
                            <CircularProgressbar strokeWidth={8} value={80} text="80%" styles={{
                                path: { stroke: `url(#${idCSS})`, height: "100%" },
                                trail: {
                                    stroke: "#0e1111"
                                },
                                text: {
                                    fill: "white"
                                }
                            }}
                            />
                        </Container>
                        <p class="fs-3 text-white mt-5 text-break">Data Science</p>
                    </div>
                    <div>
                        <Container className='mx-auto'>
                            <GradientSVG />
                            <CircularProgressbar strokeWidth={8} value={90} text="90%" styles={{
                                path: { stroke: `url(#${idCSS})`, height: "100%" },
                                trail: {
                                    stroke: "#0e1111"
                                },
                                text: {
                                    fill: "white"
                                }
                            }}
                            />
                        </Container>
                        <p class="fs-3 text-white mt-5 text-break">BackEnd Development</p>
                    </div>
                    <div>
                        <Container className='mx-auto'>
                            <GradientSVG />
                            <CircularProgressbar strokeWidth={8} value={85} text="85%" styles={{
                                path: { stroke: `url(#${idCSS})`, height: "100%" },
                                trail: {
                                    stroke: "#0e1111"
                                },
                                text: {
                                    fill: "white"
                                }
                            }}
                            />
                        </Container>
                        <p class="fs-3 text-white mt-5 text-break">Algorithms</p>
                    </div>
                </Slider>
            </Container>
        </Container>
    );
}

export default SkillsComponent;