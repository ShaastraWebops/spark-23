import React from "react";
// import 'font-awesome/css/font-awesome.min.css';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <section>
        <div className="headingdiv">
            <h1 className="Heading">CONTACT</h1>
        </div>
        <div className="info">
            <h3>Contact Us at</h3>
            <p>outreach@shaastra.org</p>
      </div>
      <div className="footer">
        <div className="icons">
            {/* <div className="insta"> <i className="fa-brands fa-instagram-square"></i></div> */}
            <div className="insta icon"><FontAwesomeIcon icon={faInstagram} size="3x" bounce/></div>
            <div className="linkedin icon"></div><FontAwesomeIcon icon={faLinkedin} size="3x" beat/>
            <div className="yt icon"></div><FontAwesomeIcon icon={faYoutube} size="3x" spin/>
        </div>
        <div className="footerdata">
            <p> © DEVELOPED BY ARNAV , GOVIND | WEB OPERATIONS | SHAASTRA | IIT MADRAS . ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  );
};

{/* <FontAwesomeIcon icon="fa-brands fa-instagram-square" /> */}

export default Contact;