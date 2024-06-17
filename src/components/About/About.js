import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ProfilImage from "./profilImage.png";

function About() {
    return (
        <div className="about tc">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>
                        <Image src={ProfilImage} roundedCircle fluid className="imgLogo" />
                    </Col>
                    <Col className="tc" sm={"12"} md={"6"} xs={"12"}>
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                                    {/**Write how are you*/}
                                    Hi, I'm Archana Limbu Magar, and I've been a beautician for over two years. I 
                                    specialize in customized skincare treatments, 
                                    expert makeup for special occasions, and efficient waxing services. 
                                    I also offer manicures, pedicures, haircuts, and hair coloring. 
                                    I pride myself on being friendly and welcoming, ensuring every client feels pampered. My 
                                    dedication to continuous learning helps me deliver excellent beauty services every time.
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
            
        </div>
        
    );
}

export default About