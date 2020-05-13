import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ESP32S from '../assets/images/ESP32S.png'
import ESP32B from '../assets/images/board.png'

function Esp32Page(props){
    return (
        <div>
            <img className="sch-image" src={ESP32S} alt = {ESP32S} />
            <img className="brd-image" src={ESP32B} alt = {ESP32B} />
        </div>
    );
    
}
export default Esp32Page;