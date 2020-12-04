import React, { Component } from "react";
import "./CSS/styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Empower from "./Pages/Empower";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";


// for google analytics 

import ReactGA from 'react-ga';

ReactGA.initialize('UA-179955369-1');
ReactGA.pageview('/about/contact-us', ['tracker2']);

ReactGA.initialize('UA-000000-01', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

ReactGA.addTrackers(
  [
    {
      trackingId: 'UA-000000-01',
      gaOptions: {
        name: 'tracker1',
        userId: 123
      }
    },
    {
      trackingId: 'UA-000000-02',
      gaOptions: { name: 'tracker2' }
    }
  ],
  { debug: true, alwaysSendToDefaultTracker: false }
);
//////    Google analytics end  //////   

export const PageView = () => {  
  ReactGA.pageview(window.location.pathname +  
                   window.location.search); 
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage:window.location.pathname
    };
  }
  componentDidMount(){
    this.getPage(window.location.pathname)
  }
  getPage = (page) =>{
  
    this.setState({
      currentPage: page
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
                <Home getPage={this.getPage}/>
              </Route>
              <Route exact path ="/empower">
                <Empower getPage={this.getPage}/>
              </Route>
            </Switch>
        <Footer></Footer>
      </main>
      </Router>
    );
  }
}
