import React from "react";
import slogo from "../images/23_white logo-01.png";

const Home = () => {
    
    return (
        <div id="home">
            <div class="present">
                <ul class="slideshow">
                    
                    <li>
                        <span>Img1</span>
                        
                        <div>
                            <h3>Spark</h3>
                            <p>Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.</p>
                        </div>
                    </li>
                    <li>
                        <span>Img2</span>
                        
                        <div>
                            <h3>Spark</h3>
                            <p>Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.</p>
                        </div>
                    </li>
                    <li>
                        <span>Img3</span>
                        
                        <div>
                            <h3>Spark</h3>
                            <p>Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.</p>
                        </div>
                    </li>
                    <li>
                        <span>Img4</span>
                        
                        <div>
                            <h3>Spark</h3>
                            <p>Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.</p>
                        </div>
                    </li>
                    <li>
                        <span>Img5</span>
                        
                        <div>
                            <h3>Spark</h3>
                            <p>Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <nav class="navbar navbar-expand-lg" id="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">
                        <img
                            alt=""
                            src={slogo}
                            width="18%"
                            height="18%"
                            className="d-flex align-center"
                        />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item linker">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item linker">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item linker">
                                <a class="nav-link" href="#rules">Rules</a>
                            </li>
                            <li class="nav-item linker">
                                <a class="nav-link" href="#schedule">Schedule</a>
                            </li>
                            <li class="nav-item linker">
                                <a class="nav-link" href="#register">Register</a>
                            </li>
                            <li class="nav-item linker">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
 
export default Home;