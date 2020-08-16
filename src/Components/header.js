import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Assets/Images/Icons/LIFE3HeaderLogo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navBar">
          {/* <span className="navLink navLinkText">Community Development</span> */}
          <div className="navLink navLogo">
            <img src={Logo} alt="LIFE3 Logo" title="LIFE3"></img>
          </div>
          {/* <span className="navLink navLinkText">Professional Development</span> */}
          <button type="button" className="contactUsButton">
            <p>Contact Us</p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mobileContact"
            ></FontAwesomeIcon>
          </button>
        </nav>
     
      </header>
    );
  }
}
