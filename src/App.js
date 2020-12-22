import React, { Component } from "react";
import "./CSS/styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Empower from "./Pages/Empower";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ReactGA from 'react-ga';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage:window.location.pathname
    };
  }
  componentDidMount(){
    this.getPage(window.location.pathname)
    this.getPage(window.location.pathname)
    ReactGA.initialize('UA-179955369-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidUpdate(){
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  getPage = (page) =>{
  
    this.setState({
      currentPage: page
    })
  }
  clickHandler = (category, action) =>{
    ReactGA.event({
      category: category,
      action: action
    })
  }
  render() {
    return (
      <Router>
      <main>
        <header>
          <NavBar></NavBar>
          <Banner currentPage={this.state.currentPage}></Banner>
        </header>
      
            <Switch>
            <Route exact path ="/">
                <Home getPage={this.getPage} clickHandler={this.clickHandler}/>
              </Route>
              <Route exact path ="/empower">
                <Empower getPage={this.getPage} clickHandler={this.clickHandler}/>
              </Route>
              {/* <Route exact path ="/signin">
                <Signin getPage={this.getPage} clickHandler={this.clickHandler}/>
              </Route>
              <Route exact path ="/signup">
                <Signup getPage={this.getPage} clickHandler={this.clickHandler}/>
              </Route> */}
            </Switch>
        <Footer clickHandler={this.clickHandler}></Footer>
      </main>
      </Router>
    );
  }
}
