import React from "react";
import abtimg1 from "../images/events_3.png"
import abtimg2 from "../images/events_1.png"

const About = () => {

    return (
        <div id="about" class="container-fluid mt-sm-5">
            <div class="row px-2 px-m-3">
                <h1 class="col-12 mb-5 mt-3">About</h1>
            </div>
            <div class="row px-4 align-items-center justify-content-center">
                <img class="abtimg col-12 col-md-8 col-lg-4 offset-lg-8" src={abtimg1} alt="About 1"/>
                <p class="p1 col-12 col-lg-10 px-lg-4 py-3">
                    Shaastra is the annual technical festival of IIT Madras. Ever since its inception in the year 2000, Shaastra has been an integral part of the
                    technical experience at IIT Madras. It has been growing in size, substance and stature and has become a trendsetter among college technical festivals across the country. Shaastra has the distinction of being the first student managed technical festival in the nation to be
                    ISO 9001:2015 certified
                </p>
                

            </div>
            <div class="row px-3">
                <p class="px-0 py-3 col-12 px-sm-5 py-sm-5">
                    Every edition of Shaastra features a wide variety of events encompassing the entire spectrum of innovation. To ensure a steep learning curve,
                    numerous workshops, lectures and video conferences dealing with diverse spheres of science, technology and finance are also organised.
                    Shaastra believes strongly in knowledge sharing and encouraging technical spirit among the students of the country. Spark is an innovative initiative which adheres to Shaastra's non profit roots as we provide a national platform for students to compete and improve themselves at
                    zero registration fee.
                </p>
            </div>
            <div class="row px-4 align-items-center">
                <img class="abtimg col-12 col-md-8 offset-md-2 col-lg-3 offset-lg-0" src={abtimg2} alt="About 2"/>
                <p class="p1 col-12 col-lg-9 offset-lg-2 px-4 py-3">
                    With Spark, Shaastra aims to ignite the 'Spark' of Innovation & Technology in the tech-savvy scientific young student minds of the country.
                </p>
            </div>
        </div>
    )
}

export default About;