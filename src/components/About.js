import React from "react";
import abtimg1 from "../images/events_3.png"
import abtimg2 from "../images/events_1.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

const About = () => {

    return (
        <div id="about" className="container-fluid my-sm-5">
            <div className="row px-2 px-m-3">
                <h1 className="col-12 mb-4 mt-3">About</h1>
            </div>
            <div className="row px-4 align-items-center justify-content-center">
                <p className="p1 col-12 col-lg-8 px-lg-4 py-3">
                    Shaastra is the annual technical festival of IIT Madras. Ever since its inception in the year 2000, Shaastra has been an integral part of the
                    technical experience at IIT Madras. It has been growing in size, substance and stature and has become a trendsetter among college technical festivals across the country. Shaastra has the distinction of being the first student managed technical festival in the nation to be
                    ISO 9001:2015 certified
                </p>
                <img className="abtimg col-12 col-md-8 col-lg-4" src={abtimg1} alt="About 1"/>
                
                

            </div>
            <div className="row mx-auto px-3">
                <p className="px-0 py-3 col-12 px-sm-5 py-sm-5">
                    Every edition of Shaastra features a wide variety of events encompassing the entire spectrum of innovation. To ensure a steep learning curve,
                    numerous workshops, lectures and video conferences dealing with diverse spheres of science, technology and finance are also organised.
                    Shaastra believes strongly in knowledge sharing and encouraging technical spirit among the students of the country. Spark is an innovative initiative which adheres to Shaastra's non profit roots as we provide a national platform for students to compete and improve themselves at
                    zero registration fee.
                </p>
            </div>
            <div className="row mx-auto px-4 align-items-center">
                <img className="abtimg col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0" src={abtimg2} alt="About 2"/>
                <p className="p1 col-12 col-lg-8 px-4 py-3">
                    With Spark, Shaastra aims to ignite the 'Spark' of Innovation & Technology in the tech-savvy scientific young student minds of the country.
                </p>
            </div>
        </div>
    )
}

export default About;