import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4";
import SignupForm from "../Components/Forms/SignupForm"

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {};
      }
      componentDidMount() {
        this.props.getPage("/signup");
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div>
          {/* <video autoPlay muted loop>
            <source src={BannerVideo} type="video/mp4" />
          </video>
          <SignupForm/> */}
            </div>
        );
    }
}
