import React from "react";

const Register = () => {
  return (
    <section id="register">
        <div className="headingdiv">
            <h1 className="Heading">REGISTER</h1>
        </div>
        <div className="info">
        <p>Registrations open for the following cities</p>
      </div>
      <div className="cities">
        <div className="cityrow cityr1">
            <div className="city1 city"></div>
            <div className="city2 city"></div>
        </div>
        <div className="cityrow cityr1">
            <div className="city3 city"></div>
            <div className="city4 city"></div>
        </div>
      </div>
    </section>
  );
};

export default Register;
