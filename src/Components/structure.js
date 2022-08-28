import React from "react";
import "../style.css";

import strimg1 from "../images/exhb_2.png";
import strimg2 from "../images/events_8.png";
import strimg3 from "../images/exhb_7.png";

const Structure = () => {
  return (
    <div id="structure" className="container-fluid my-sm-5">
      <div className="row px-2 px-m-3">
        <h1 className="col-12 mb-5 mt-3">Structure</h1>
      </div>
      <div className="row  px-4 align-items-center justify-content-center">
        <p className="p1 col-12 py-4 my-0 px-sm-4">
          SPARK is a three-tier mega event, with the first phase being the SPARK
          Junior Quiz, a pan-India quiz competition to be conducted in over 20
          cities, far and wide across the nation. With 4000+ participants, the
          SPARK Junior Quiz is indeed one epic quizzing Journey. The winners
          stand a chance to travel all the way to IIT Madras free of cost to
          compete in the national finals and experience what Shaastra has to
          offer.
        </p>
      </div>
      <div className="row  px-4 align-items-center justify-content-center my-4">
        <div className="struct-content p1 col-12 col-lg-8 px-lg-4 py-3">
          <h1 className="list-h">Spark Prelims</h1>
          <ul className="ulist">
            <li className="list-p">
              General Tech Quiz - science facts, logic, tech and how things work
            </li>
            <li className="list-p">
              Written Round 40 questions - one word answer
            </li>
            <li className="list-p">Teams of 2</li>
            <li className="list-p">Top 3 teams get prizes</li>
            <li className="list-p">
              Top 5 teams from each city qualify for Nationals Screening round
            </li>
          </ul>
        </div>

        <img
          className="abtimg col-12 col-md-8 col-lg-4"
          src={strimg1}
          alt="About 1"
        />
      </div>
      <div className="row  px-4 align-items-center">
        <img
          className="abtimg col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0"
          src={strimg2}
          alt="About 2"
        />
        <div className="struct-content p1 col-12 col-lg-8 px-4 py-3">
          <h1 className="list-h">Screening Round</h1>
          <ul className="ulist">
            <li className="list-p">
              Questionnaire - 1 Page report on given topic (case study
              competition)
            </li>
            <li className="list-p">Online submission</li>
            <li className="list-p">
              Participants will be guided by the Shaastra team
            </li>
            <li className="list-p">
              Top 25 go for the National finals - the Spark Junior Conference
            </li>
          </ul>
        </div>
      </div>
      <div className="row  px-4 align-items-center justify-content-center my-4">
        <div className="struct-content p1 col-12 col-lg-8 px-lg-4 py-3">
          <h1 className="list-h">Spark Finals</h1>
          <ul className="ulist">
            <li className="list-p">
              Presentation - based on the report submitted for screening round
            </li>
            <li className="list-p">Keynote and lectures</li>
            <li className="list-p">Workshops & Events</li>
            <li className="list-p">Sponsored trip to IIT Madras</li>
            <li className="list-p">Top 3 teams as National Winners</li>
            <li className="list-p">Date: TBA(During Shaastra)</li>
          </ul>
        </div>

        <img
          className="abtimg col-12 col-md-8 col-lg-4"
          src={strimg3}
          alt="About 1"
        />
      </div>

      {/* <div className="content row px-sm-5">
        <div className="prelims contentinfo col-8 offset-0">
          <h1 className="list-h">Spark Prelims</h1>
          <ul>
            <li className="list-p">
              General Tech Quiz - science facts, logic, tech and how things work
            </li>
            <li className="list-p">
              Written Round 40 questions - one word answer
            </li>
            <li className="list-p">Teams of 2</li>
            <li className="list-p">Top 3 teams get prizes</li>
            <li className="list-p">
              Top 5 teams from each city qualify for Nationals Screening round
            </li>
          </ul>
        </div>
        <div className="prelimsimage contentimage col-4"></div>
      </div> */}

      {/* <div className="content content2">
        <div className="screening contentinfo">
          <h1>Screening Round</h1>
          <ul>
            <li className="">
              Questionnaire - 1 Page report on given topic (case study
              competition)
            </li>
            <li className="">Online submission</li>
            <li className="">
              Participants will be guided by the Shaastra team
            </li>
            <li className="">
              Top 25 go for the National finals - the Spark Junior Conference
            </li>
          </ul>
        </div>
        <div className="screeningimage contentimage"></div>
      </div> */}

      {/* <div className="content content3">
        <div className="final contentinfo">
          <h1>Spark Finals</h1>
          <ul>
            <li className="">
              Presentation - based on the report submitted for screening round
            </li>
            <li className="">Keynote and lectures</li>
            <li className="">Workshops & Events</li>
            <li className="">Sponsored trip to IIT Madras</li>
            <li className="">Top 3 teams as National Winners</li>
            <li className="">Date: TBA(During Shaastra)</li>
          </ul>
        </div>
        <div className="finalimage contentimage"></div>
      </div> */}
    </div>
  );
};

export default Structure;
