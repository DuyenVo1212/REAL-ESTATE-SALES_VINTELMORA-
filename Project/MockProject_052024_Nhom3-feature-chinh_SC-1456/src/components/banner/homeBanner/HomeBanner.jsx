import React from "react";
import "./homeBanner.scss";
import { FaSearch } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="header-background_home position-relative">
      <img
        src="/bg_home.png"
        alt=""
        className="header-background_img img-fluid"
      />
      <div className="header-background_overlay">
        <div className="header-background_text">
          <h1 className="fw-bold">NEW HOUSE - NEW LIFE</h1>
          <div className="header-background_searchbar position-relative col-6 col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              required
            />
            <a className="btn position-absolute top-50 end-0 translate-middle-y">
              <FaSearch />
            </a>
          </div>
          <div className="header-background_searchbtn mt-4">
            <button type="button" className="btn col-3 col-lg-1 py-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
