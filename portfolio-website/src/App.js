import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Esp32Page from './pages/Esp32Page';
import BuckPage from './pages/BuckPage';
import CNCPage from './pages/CNCPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Prashant Mistry",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
      ],
      home: {
        title: "Make it Happen",
        subTitle: 'Projects that ',
        text: 'Check out my projects below'
      },
      about:{
        title: "About me",
        subTitle: 'I am '
      },
      contact:{
        title: 'Got an Interesting project?',
        subTitle: 'Send me a email'
      }
    }
  }
  render(){
    return (
      <Router>
        <Container className ="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg= "transparent" expand="lg">
            <Navbar.Brand>Prashant Mistry</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Projects</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> }/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}/> } />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />}/>
          <Route path={`${process.env.PUBLIC_URL}/ESP32`} exact render={() => <Esp32Page  />}/>
          <Route path={`${process.env.PUBLIC_URL}/Buckconverter`} exact render={() => <BuckPage  />}/>
          <Route path={`${process.env.PUBLIC_URL}/PDB`} exact render={() => <CNCPage  />}/>

          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
