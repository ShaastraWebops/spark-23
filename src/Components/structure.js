import React from "react";

const Structure = () => {
  return (
    <section>
      <div className="headingdiv">
        <h1 className="Heading">STRUCTURE</h1>
      </div>
      <div className="info">
        <p>SPARK is a three-tier mega event, with the first phase being the
            SPARK Junior Quiz, a pan-India quiz competition to be conducted in
            over 20 cities, far and wide across the nation. With 4000+
            participants, the SPARK Junior Quiz is indeed one epic quizzing
            Journey. The winners stand a chance to travel all the way to IIT
            Madras free of cost to compete in the national finals and experience
            what Shaastra has to offer.</p>
      </div>
      
      <div className="content1 content">
        <div className="prelims contentinfo"> 
        <h1>Spark Prelims</h1>
          <p>
          <ul>
              <li className="">
                General Tech Quiz - science facts, logic, tech and how things
                work
              </li>
              <li className="">
                Written Round 40 questions - one word answer
              </li>
              <li className="">Teams of 2</li>
              <li className="">Top 3 teams get prizes</li>
              <li className="">
                Top 5 teams from each city qualify for Nationals Screening round
              </li>
            </ul>
          </p>
        </div>
        <div className="prelimsimage contentimage"></div>
      </div>

      <div className="content content2">
      <div className="screening contentinfo">
        <h1>Screening Round</h1>
        <p>
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
        </p>
      </div>
      <div className="screeningimage contentimage"></div>
      </div>

      <div className="content content3">
      <div className="final contentinfo">
        <h1>Spark Finals</h1>
        <p>
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
        </p>
      </div>
      <div className="finalimage contentimage"></div>
      </div>
    </section>
  );
};

export default Structure;
