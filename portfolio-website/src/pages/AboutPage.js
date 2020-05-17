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
               <h3 className=" ">I love to Design!</h3>
               <p className="my-5 h5 lead">
               The creation of new technology has always excited me and my focus as a future
                engineer is to contribute to innovative ideas that can make a difference . 
                I have worked hard to hone my skills and I strive to work on projects that
                 require innovative solutions.
               </p>
            </Content>
        </div>
    );
    
}
export default AboutPage;