import React from 'react';
import Hero3 from '../components/Hero3';
import Content from '../components/Content';

function AboutPage(props){
    return (
        <div>
            <Hero3 title={props.title} subTitle={props.subTitle} />
            <Content>
                
                <h3 className=" ">A little bit about me</h3>
               <p className="my-5 font-weight-normal lead">
                    I am a student at Ryerson University currently majoring in Computer Engineering.
                    The program is a perfect fit for me as I enjoy learning about analysis and design of complex systems. 
                    I also like learning new things through projects and work. In the future, I want to further my skills in software development
                    by taking on harder challanges and pushing myself to the limit. This year, I plan to sharpen my skills and work
                    more on personal projects to prepare myself for future internships.
               </p>
               <h3 className=" ">I love to Design</h3>
               <p className="my-5 font-weight-normal lead">
                The creation of new technology has always excited me which is the main reason I chose to become a engineer. My focus as a future
                engineer is to contribute to innovative ideas that can make a difference. That's why I will always  
                work hard to hone my skills in all areas and strive to work on projects that require innovative solutions. 
               </p>
               <p className="my-5 font-weight-normal lead">
                    Check out my <a href={"/"} target = "_blank" rel="noopener noreferrer">projects</a>  to see the cool stuff I've been working on!
               </p>
               <h3 className=" ">What I do in my spare time</h3>
               <p className="my-5 font-weight-normal lead">
                    Currently, I am a part of a student design team called <a href={"https://teamr3.ca/"} target = "_blank" rel="noopener noreferrer">Ryerson Rams Robotics </a> 
                    where we build robots for various international competitions. On the team, I lead 70+ members to develop a Mars Rover for the 2021 Canadian International Rover Challenge.
                    I've had the opportunity to learn many new things on the team, and I take pride in mentoring aspiring engineers and fellow robotics enthusiasts.
               </p>
               <p className="my-5 font-weight-normal lead">Interested in working on a project together? <a href={"/contact"} target = "_blank" rel="noopener noreferrer">Contact Me</a> </p>
            </Content>
        </div>
    );
    
}
export default AboutPage;