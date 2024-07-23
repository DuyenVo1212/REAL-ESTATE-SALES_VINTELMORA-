import { Component } from "react";
import "./Header.scss";

import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInvitate: false,
    };
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header-container">
            <div className="logo-header">
              <NavLink exact={true} to="/" activeClassName="active">
                LOGO
              </NavLink>
            </div>
            <div className="transaction-his">
              <NavLink to="/trans-his" activeClassName="active">
                Transaction history
              </NavLink>
            </div>
            <div className="transaction-ongoing">
              <NavLink to="/ongoing-trans" activeClassName="active">
                On-going transaction
              </NavLink>
            </div>
            <div className="invitation">
              <NavLink to="/invitation" activeClassName="active">
                Invitation
              </NavLink>
            </div>

            <div className="user-icon">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/FFFFFF/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>
          </div>

          <div className="content-container">
            <div>SELL YOUR HOME</div>
            <div>RIGHT NOW WITH GAYLOARD</div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
