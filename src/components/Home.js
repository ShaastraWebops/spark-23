import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import slogo from "../images/23_white logo-01.png"

const Home = () => {
    
    return (
        <div id="home">
            <Navbar id="navbar" fixed="top" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="nav" className="me-auto">
                            <Nav.Link class="linker" href="#home">Home</Nav.Link>
                            <Nav.Link class="linker" href="#about">About</Nav.Link>
                            <Nav.Link class="linker" href="#randr">Rules and Registration</Nav.Link>
                            <Nav.Link class="linker" href="#schedule">Schedule</Nav.Link>
                            <Nav.Link class="linker" href="#register">Register</Nav.Link>
                            <Nav.Link class="linker" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img class="logo" src={slogo} alt="Shaastra Logo"/>
            <div class="present">
                <h2 style={{backgroundColor: "#00000000", color: "#FEFEFE"}}>presents</h2>
                <h1 style={{backgroundColor: "#00000000", color: "#FEFEFE"}}>Spark</h1>
            </div>
        </div>
    );
};
 
export default Home;