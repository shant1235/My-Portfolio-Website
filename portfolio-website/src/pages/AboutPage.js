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
               <p className="my-5 h5 lead">
                   I am a student at Ryerson University currently majoring in Computer Engineering.
                   The program is a perfect fit for me as I enjoy learning about analysis and design of complex systems. 
                   Having a strong background in technology has allowed me 
                   to develop many projects with big impact. In the future, I hope to 
                   start my own design company to manufacture industrial robots.
               </p>
            </Content>
        </div>
    );
    
}
export default AboutPage;