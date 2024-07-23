import React from "react";
import { useLocation, Link } from "react-router-dom";
import SignBanner from "./banner/signBanner/SignBanner";
import HomeBanner from "./banner/homeBanner/HomeBanner";
import "../styles/header.scss";

const Header = () => {
  const location = useLocation();

  const renderBanner = () => {
    switch (location.pathname) {
      case "/":
        return <HomeBanner />;
      case "/login":
        return <SignBanner />;
      case "/register":
        return <SignBanner />;
      default:
        return <SignBanner />;
    }
  };
  return (
    <div className="header position-relative">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                LOGO
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Buy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sell
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Agents
                  </a>
                </li>
              </ul>

              <Link
                className="btn btn-outline-secondary"
                type="submit"
                to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {renderBanner()}
    </div>
  );
};

export default Header;
