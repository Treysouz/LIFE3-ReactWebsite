import React, { Component } from "react";
import Home from "../Pages/Home"
import Header from "../Components/Header"

export default class Router extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
    };
  }
  navigatePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  getPage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home></Home>;

      case "professional":
        return null;
      case "community":
        return null;
      default:
        return <Home></Home>;
    }
  };
  render() {
    return (
      <main>
        <Header></Header>
        {this.getPage()}
      </main>
    );
  }
}
