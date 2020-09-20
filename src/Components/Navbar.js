import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Assets/Images/Icons/LIFE3HeaderLogo.png";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileView: false,
      mobileNav: false,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      window.innerWidth <= 675
        ? this.setState({
            mobileView: true,
          })
        : this.setState({
            mobileView: false,
          });
    });

    window.addEventListener("load", () => {
      window.innerWidth <= 675
        ? this.setState({
            mobileView: true,
          })
        : this.setState({
            mobileView: false,
          });
    });
  }
  toggleMobileNav = () => {
    this.setState({ mobileNav: !this.state.mobileNav });
  };

  render() {
    return (
      <nav className="navBar">
        <Link className="navLink navLogo" to="/">
          <img src={Logo} alt="LIFE3 Logo" title="LIFE3" />
        </Link>
        {!this.state.mobileView ? (
          <div className="linksContainer">
            <Link className="navLink navLinkText" to="/empower">
              Empower
            </Link>
            <Link className="navLink navLinkText" to="/enable">
              Enable
            </Link>
            <a href="#contactUs">
              <button className="contactUsButton">Contact Us</button>
            </a>
          </div>
        ) : (
          <FontAwesomeIcon
            className="mobileNavIcon"
            icon={faBars}
            onClick={() => this.toggleMobileNav()}
          ></FontAwesomeIcon>
        )}
        {this.state.mobileNav ? (
          <div className="mobileNavList" onClick={() => this.toggleMobileNav()}>
            <Link className="navLink" to="/empower">
              Empower
            </Link>
            <Link className="navLink" to="/enable">
              Enable
            </Link>
            <a className="navLink" href="#contactUs">
              Contact Us
            </a>
          </div>
        ) : null}
      </nav>
    );
  }
}
