import { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="footer-content">LOGO</div>

          <div className="footer-details">
            <div className="details-info">
              <div className="info-phone">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/FFFFFF/phone.png"
                  alt="phone"
                />
                +84.xxx.xxx.xxx
              </div>
              <div className="info-mail">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/FFFFFF/mail.png"
                  alt="mail"
                />
                tempura@gmail.com
              </div>
              <div className="info-address">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png"
                  alt="home--v2"
                />
                203/5 Chau Thi Vinh Te st, My An, Da Nang city
              </div>
            </div>

            <div className="about">ABOUT</div>
            <div className="program">PROGRAM</div>
            <div className="support">SUPPORT</div>
          </div>

          <div className="footer-ref">
            <div className="left-ref">Copyright @ 2024. All right reserved</div>
            <div className="right-ref">
              <div className="cookies">Cookies Policy</div>
              <span>|</span>
              <div className="english">English</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
