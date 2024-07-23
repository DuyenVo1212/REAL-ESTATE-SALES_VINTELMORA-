import React from "react";
import "./inscrection.scss";

const Inscrection = () => {
  return (
    <div className="inscrection container-xl my-5">
      <div className="inscrection-content d-lg-flex">
        <div className="inscrection-content_img col-8 col-lg-6">
          <img
            src="/home/inscrection.png"
            alt="inscrection"
            className="inscrection-content_img--container img-fluid"
          />
        </div>
        <div className="inscrection-content_text col-lg-6">
          <h4 className="inscrection-content_title fw-bold">
            Our inspection team
          </h4>
          <h1 className="inscrection-content_heading fw-bold">
            Accurate, fast and high quality inspection
          </h1>
          <p className="inscrection-content_paragraph my-5">
            Experience precision, speed, and top-notch quality in every
            inspection. Our meticulous approach ensures accuracy without
            sacrificing efficiency. Trust us to deliver thorough inspections
            promptly, leaving you with peace of mind and confidence in your
            property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inscrection;
