import React from 'react';
import Algo from '../assets/images/Algo.png'
import Rover from '../assets/images/Rescue Rover.png'
import DriveSafe from '../assets/images/DriveSafe.png'
import ESP32 from '../assets/images/test.png'
import MarsRover from '../assets/images/Mars.jpg'
import Buck from '../assets/images/Buck.jpg'

import Card from "../components/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';





class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title:'Algorithm Visualiser',
                    subTitle:'React.js ',
                    imgSrc: Algo,
                    link: 'https://shant1235.github.io/Sorting-Algorithm-Visualization/',
                    github:'https://github.com/shant1235/Sorting-Algorithm-Visualization',
                    selected: false
                },
                {
                    id:1,
                    title:'Rescue Rover',
                    subTitle:'For high risk enviroments',
                    imgSrc: Rover,
                    link: 'https://devpost.com/software/rescue-rover',
                    github:'https://github.com/shant1235/MakeUofT-RescueRover',
                    selected: false
                },
                {
                    id:2,
                    title:'DriveSafe',
                    subTitle:'Computer Vision',
                    imgSrc: DriveSafe,
                    link: 'https://devpost.com/software/drivesafe-ub4joi',
                    github:'https://github.com/shant1235/DriveSafe-Pi-Arduino',
                    selected: false
                },
                {
                    id:3,
                    title:'Mars Rover',
                    subTitle:'Computer Vision',
                    imgSrc: MarsRover,
                    link: 'https://teamr3.ca/rover.html',
                    github:'https://github.com/shant1235/URC-2019-Code',
                    selected: false
                },
                {
                    id:4,
                    title:'ESP32 Development Board',
                    subTitle:'Computer Vision',
                    imgSrc: ESP32,
                    link: '/ESP32',
                    github:'/',
                    selected: false
                },
                {
                    id:5,
                    title:'16V Buckconverter',
                    subTitle:'Computer Vision',
                    imgSrc: Buck,
                    link: '/Buckconverter',
                    github:'/',
                    selected: false
                },
                
            ],
            
            
            
        }
    }
    handleCardClick = (id,card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false:true;

        items.forEach(item => {
            if(item.id !==id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }
    makeItems = (items) => {
        return items.map (item => {
            return <Card item ={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
            
            
        );

    }
}

export default Carousel;