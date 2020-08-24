import React, { Component } from "react";
import "./CSS/styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import HomeBanner from "./Components/HomeBanner";

export default class App extends Component {
  render() {
    return (
      <main>
        <header>
          <NavBar></NavBar>
          <HomeBanner></HomeBanner>
        </header>
        <Router>
            <Switch>
              <Route path ="/">
                <Home></Home>
              </Route>
            </Switch>
        </Router>
      </main>
    );
  }
}
