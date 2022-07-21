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
            <p><a href="mailto: outreach@shaastra.org">outreach@shaastra.org</a></p>
      </div>
      <div className="footer">
        <div className="icons">
            {/* <div className="insta"> <i className="fa-brands fa-instagram-square"></i></div> */}
            <div className="insta icon"><a href="https://www.instagram.com/shaastra_iitm"><FontAwesomeIcon icon={faInstagram} size="3x" bounce/></a></div>
            <div className="linkedin icon"><a href="https://in.linkedin.com/company/shaastra-iit-madras"><FontAwesomeIcon icon={faLinkedin} size="3x" beat/></a></div>
            <div className="yt icon"><a href="https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"><FontAwesomeIcon icon={faYoutube} size="3x" spin/></a>
            </div>
        </div>
        <div className="footerdata">
            <p> © DEVELOPED BY ARNAV , GOVIND | WEB OPERATIONS | SHAASTRA | IIT MADRAS ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;