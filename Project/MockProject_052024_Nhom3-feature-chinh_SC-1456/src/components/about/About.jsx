import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about container-xl my-5">
      <h3 className="about-title fw-bold">About we</h3>
      <div className="about-content d-lg-flex">
        <div className="about-content_text col-lg-6">
          <h1 className="about-content_heading fw-bold">
            Find Your Dream Home, Start Here
          </h1>
          <p className="about-content_paragraph my-5">
            Finding your dream home isn't just about selecting a space; it's
            about seeking an experience. It's the journey to discover where you
            truly belong, where you feel warm, safe, and happy every time you
            walk through the door. Begin your journey right here
          </p>
          <div className="about-content_stats d-flex justify-content-between">
            <div className="about-content_stat">
              <p className="about-content_stat--number fw-bold">5000+</p>
              <p className="about-content_stat--description fw-bold">
                House & Apartment
              </p>
            </div>
            <div className="about-content_stat">
              <p className="about-content_stat--number fw-bold">5000+</p>
              <p className="about-content_stat--description fw-bold">
                Vacant landt
              </p>
            </div>
            <div className="about-content_stat">
              <p className="about-content_stat--number fw-bold">5000+</p>
              <p className="about-content_stat--description fw-bold">State</p>
            </div>
          </div>
        </div>
        <div className="about-content_img col-8 col-lg-6">
          <img
            src="/home/about.png"
            alt="about"
            className="about-content_img--container img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
