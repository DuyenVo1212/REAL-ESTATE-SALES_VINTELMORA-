import React from "react";
import "./signBanner.scss";

const SignBanner = () => {
  return (
    <div className="header-background position-relative">
      <img
        src="/bg_nav.png"
        alt=""
        className="header-background_img img-fluid"
      />
      <div className="header-background_overlay">
        <div className="header-background_text fw-bold">
          SELL YOUR HOME <br /> RIGHT NOW WITH GAYLORD
        </div>
      </div>
    </div>
  );
};

export default SignBanner;
