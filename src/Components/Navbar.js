import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Assets/Images/Icons/LIFE3HeaderLogo.png";

export default class Header extends Component {
  render() {
    return (
        <nav className="navBar">
          <a className="navLink navLogo" href=".">
            <img
              src={Logo}
              alt="LIFE3 Logo"
              title="LIFE3"
            />
          </a>
          <a className="navLink navLinkText" href="Pages/empower.html">
            Empower
          </a>
          <a className="navLink navLinkText" href="Pages/enable.html">
            Enable
          </a>
          <a className="navLink navLinkText" href="Pages/signin.php">
            Educate
          </a>
          {/* <a href="#contactUs"><button class="contactUsButton"><p>Contact Us</p></button></a> */}
        </nav>
    );
  }
}
