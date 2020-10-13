import React from 'react';
import Algo from '../assets/images/Algo.png'
import Rover from '../assets/images/Rescue Rover.png'
import DriveSafe from '../assets/images/DriveSafe.png'
import ESP32 from '../assets/images/test.png'
import MarsRover from '../assets/images/Mars.jpg'
import Buck from '../assets/images/Buck.jpg'
import PDB from '../assets/images/PDB.PNG'
import Quad from '../assets/images/Best render.JPG'

import Card from "../components/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';





class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Algorithm Visualiser',
                    subTitle: 'A Web application that displays a list of numbers being sorted by sorting algorithms in real time.',
                    imgSrc: Algo,
                    link: 'https://shant1235.github.io/Sorting-Algorithm-Visualization/',
                    github: 'https://github.com/shant1235/Sorting-Algorithm-Visualization',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Rescue Rover',
                    subTitle: 'A Search and Rescue Rover designed to aid operators with data collection in high risk situations.',
                    imgSrc: Rover,
                    link: 'https://devpost.com/software/rescue-rover',
                    github: 'https://github.com/shant1235/MakeUofT-RescueRover',
                    selected: false
                },
                {
                    id: 2,
                    title: 'DriveSafe',
                    subTitle: 'A software program to detect imparied drivers and alert emergency contacts of potential danger.',
                    imgSrc: DriveSafe,
                    link: 'https://devpost.com/software/drivesafe-ub4joi',
                    github: 'https://github.com/shant1235/DriveSafe-Pi-Arduino',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Mars Rover',
                    subTitle: 'A rover capable of moving objects, autonomous traversal through the Utah desert, and teleoperation from over 2km away.',
                    imgSrc: MarsRover,
                    link: 'https://teamr3.ca/rover.html',
                    github: 'https://github.com/shant1235/URC-2019-Code',
                    selected: false
                },
                {
                    id: 4,
                    title: 'ESP32 Development Board',
                    subTitle: 'A microcontroller development board that utilizes the ESP32-WROOM-32D, with added ethernet capability.',
                    imgSrc: ESP32,
                    link: '/ESP32',
                    github: 'https://grabcad.com/library/esp32-dev-1',
                    selected: false
                },
                {
                    id: 5,
                    title: '5V Buck Converter',
                    subTitle: 'A Buck Converter that steps down 17V - 15V to a stable 5V at max 3A.',
                    imgSrc: Buck,
                    link: '/Buckconverter',
                    github: 'https://grabcad.com/library/buckconverter-1',
                    selected: false
                },
                {
                    id: 6,
                    title: 'CNC Power Distribution Board',
                    subTitle: 'A PCB that routes many power lines and motor sensors to screw terminals',
                    imgSrc: PDB,
                    link: '/PDB',
                    github: 'https://grabcad.com/library/power-distribution-board-1',
                    selected: false
                },
                {
                    id: 7,
                    title: 'QuadDoggo',
                    subTitle: 'A quadruped robot that is able to walk, squat and run using only servo motors. (More info will be avalaible upon completion)',
                    imgSrc: Quad,
                    link: '/',
                    github: 'https://github.com/shant1235/QuadDoggo',
                    selected: false
                },


            ],



        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>

                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(6, 8))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(0, 2))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(2, 4))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(4, 6))}
                </Row>

            </Container>


        );

    }
}

export default Carousel;