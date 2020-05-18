import React from 'react';
import Hero2 from '../components/Hero2';
import Content from '../components/Content';
import me from '../assets/images/AboutMe.JPG'

function AboutPage(props){
    return (
        <div>
            <Hero2 title={props.title} subTitle={props.subTitle} />
            <Content>
                
                <h3 className=" ">Who am I?</h3>
               <p className="my-5 font-weight-normal lead">
                   I am a student at Ryerson University currently majoring in Computer Engineering.
                   The program is a perfect fit for me as I enjoy learning about analysis and design of complex systems. 
                   Having a strong background in technology has allowed me 
                   to develop many projects with big impact. In the future, I hope to 
                   start my own design company to manufacture industrial robots.
               </p>
               <h3 className=" ">I love to Design!</h3>
               <p className="my-5 font-weight-normal lead">
                The creation of new technology has always excited me and my focus as a future
                engineer is to contribute to innovative ideas that can make a difference. 
                I have worked hard to hone my skills in all areas and I strive to work on projects that
                require innovative solutions.
               </p>
               <h3 className=" ">So, what is happening?</h3>
               <p className="my-5 font-weight-normal lead">
               Currently, I am part of a student design team called <a href={"https://teamr3.ca/"} target = "_blank" rel="noopener noreferrer">Ryerson Rams Robotics</a> where we build robots to for various competitions.
               I lead 70+ members on a Rover Controls team to design a model Mars Rover for the Canadian International Rover Challenge 2021.
                I've had the opportunity to learn many new things about robotics on the team, and I take pride in teaching inspiring robotics enthusiasts.
                Robotics is something I am passionate about and love to do in my spare time.

               </p>
            </Content>
        </div>
    );
    
}
export default AboutPage;