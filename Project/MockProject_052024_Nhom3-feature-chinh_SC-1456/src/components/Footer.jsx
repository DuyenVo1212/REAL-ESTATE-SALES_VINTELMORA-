import React from "react";
import { MdOutlinePhone, MdOutlineEmail, MdOutlineHome } from "react-icons/md";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-xl">
        <h1 className="footer-title fw-bold pt-4">LOGO</h1>
        <div className="footer-cotainer d-md-flex justify-content-between">
          <div className="footer-container_info">
            <div className="d-flex align-items-center mb-2">
              <MdOutlinePhone />
              <span className="ms-3">+84xxxxxxxxx</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <MdOutlineEmail />
              <span className="ms-3">tempura@gmail.com</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <MdOutlineHome />
              <span className="ms-3">
                230/5, Chau Thi Vinh Te st, My An Da Nang city{" "}
              </span>
            </div>
          </div>
          <div className="footer-container_about">
            <p>ABOUT</p>
          </div>
          <div className="footer-container_program">
            <p>PROGRAM</p>
          </div>
          <div className="footer-container_support">
            <p>SUPPORT</p>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between mt-4 pb-4">
          <div className="footer-bottom_copyright">
            <span>Copyright @2024 All right reserved</span>
          </div>
          <div className="footer-bottom_cookie">
            <a href="#">Cookies Policy</a>
            <span> | </span>
            <a href="#">English</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
