import React from "react";
import slogo from "../images/Shaastra23Black.png";
import "../App.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import hmb from "../images/hamburger.png";

const Home = () => {
  return (
    <div id="home">
      <div className="present">
        <ul className="slideshow">
          <li>
            <span>Img1</span>

            <div>
              <h3>Spark</h3>
              <p>
                Spark is an innovative initiative of Shaastra in which we
                provide a national platform for students to compete and improve
                themselves at a zero registration fee.
              </p>
            </div>
          </li>
          <li>
            <span>Img2</span>

            <div>
              <h3>Spark</h3>
              <p>
                Spark is an innovative initiative of Shaastra in which we
                provide a national platform for students to compete and improve
                themselves at a zero registration fee.
              </p>
            </div>
          </li>
          <li>
            <span>Img3</span>

            <div>
              <h3>Spark</h3>
              <p>
                Spark is an innovative initiative of Shaastra in which we
                provide a national platform for students to compete and improve
                themselves at a zero registration fee.
              </p>
            </div>
          </li>
          <li>
            <span>Img4</span>

            <div>
              <h3>Spark</h3>
              <p>
                Spark is an innovative initiative of Shaastra in which we
                provide a national platform for students to compete and improve
                themselves at a zero registration fee.
              </p>
            </div>
          </li>
          <li>
            <span>Img5</span>

            <div>
              <h3>Spark</h3>
              <p>
                Spark is an innovative initiative of Shaastra in which we
                provide a national platform for students to compete and improve
                themselves at a zero registration fee.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container-fluid d-flex justify-content-between">
                    <a class="navbar-brand" href="#">
                        <img src={slogo} alt="" height="75" class="d-inline-block align-text-top"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src={hmb} height="30"></img>
                        </span>
                    </button>                        
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 mr-0">
                            <li className="nav-item linker">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item linker">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item linker">
                                <a className="nav-link" href="#rules">Rules</a>
                            </li>
                            <li className="nav-item linker">
                                <a className="nav-link" href="#schedule">Schedule</a>
                            </li>
                            {/* <li className="nav-item linker">
                                <a className="nav-link" href="#register">Register</a>
                            </li> */}
                            <li className="nav-item linker">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  );
};

export default Home;
