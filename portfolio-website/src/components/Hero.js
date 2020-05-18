import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typical from 'react-typical';


function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder" style={{'font-size':'6vw'}}>{props.title}</h1> }
                        { props.title && <h3 className="display-4 font-weight-light" style={{'font-size':'4vw'}}>{props.subTitle}
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={
                                        [
                                            ' are exciting 💥', 5000,
                                            ' are innovative ⚗️', 5000,
                                            ' make a difference 📡', 30000
                                        ]
                                    }
                                />
                            
                            </h3>}
                        { props.title && <h3 className="display-5 font-weight-light" style={{'font-size':'2vw'}}>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default Hero;