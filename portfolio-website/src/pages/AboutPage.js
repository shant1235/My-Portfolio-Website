import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import me from '../assets/images/AboutMe.JPG'

function AboutPage(props){
    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                
                <h3 className=" ">Who am I?</h3>
               <p className="my-5 h5 lead">
                   I am a student at Ryerson University currently majoring in Computer Engineering.
                   The program is a perfect fit for me as I enjoy learning about analysis and design of complex systems. 
                   Having a strong backround in technology has allowed me 
                   to develop many complex projects.In the future, I hope to 
                   start my own design company to manufacture industrial robots.
               </p>
            </Content>
        </div>
    );
    
}
export default AboutPage;