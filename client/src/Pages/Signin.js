import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4";
import SigninForm from "../Components/Forms/SigninForm";
import NavBar from "../Components/Navbar";
import ReactGA from "react-ga";

export default class Signin extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getPage("/signin");
    window.scrollTo(0, 0);
    ReactGA.initialize("UA-179955369-1");
    ReactGA.pageview("/signin");
  }

  render() {
    return (
      <div className="videoBackground">
        <video autoPlay muted loop>
          <source src={BannerVideo} type="video/mp4" />
        </video>
        <NavBar></NavBar>
        <SigninForm />
      </div>
    );
  }
}
