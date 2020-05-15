import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typical from 'react-typical';


function Hero2(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder" style={{'font-size':'6vw'}}>{props.title}</h1> }
                        { props.title && <h3 className="display-4 font-weight-light" style={{'font-size':'4vw'}}>{props.subTitle}
                             
                            
                            </h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default Hero2;