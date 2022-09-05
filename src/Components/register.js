import React from "react";

const Register = () => {
  return (
    <div id="register" className="container-fluid my-sm-5">
      <div className="row px-2">
        <h1 className="col-12 mb-3 mb-sm-5 mt-3">Register</h1>
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
    </div>
    // <div id="register" className="container-fluid my-sm-5">
    //   <div className="row px-2">
    //     <h1 className="col-12 mb-3 mb-sm-5 mt-3">Register</h1>
    //   </div>
    // </div>
  );
};

export default Register;
