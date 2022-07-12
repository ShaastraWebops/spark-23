import React from "react";

const Structure = () => {
  return (
    <section>
      <div className="headingdiv">
        <h1 className="Heading">STRUCTURE</h1>
      </div>
      <div className="info">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      
      <div className="content1 content">
        <div className="prelims contentinfo">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, a</p>
        </div>
        <div className="prelimsimage contentimage"></div>
      </div>

      <div className="content content2">
      <div className="screening contentinfo">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when posed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      <div className="screeningimage contentimage"></div>
      </div>

      <div className="content content3">
      <div className="final contentinfo">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when posed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      <div className="finalimage contentimage"></div>
      </div>
    </section>
  );
};

export default Structure;
