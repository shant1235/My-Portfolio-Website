import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typical from 'react-typical';


function Hero3(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder" style={{'font-size':'6vw'}}>{props.title}</h1> }
                        { props.title && <h3 className="display-4 font-weight-light" style={{'font-size':'4vw'}}>{props.subTitle}
                             
                        <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={
                                        [
                                            ' a student 📒 ', 3000,
                                            ' a mentor 🎓 ', 3000,
                                            ' a robot designer 🤖', 3000,
                                            ' a pc enthusiast 🖥️ ', 3000,
                                            ' a inventor 💡 ', 3000,
                                            ' a gamer 🎮', 3000,
                                            ' a developer 👨🏽‍💻', 30000
                                        ]
                                    }
                                />
                            </h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default Hero3;