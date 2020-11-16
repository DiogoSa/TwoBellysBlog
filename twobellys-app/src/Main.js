import React, { Component } from "react";

import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Views/Home";
import Stuff from "./Views/Stuff";
import Contact from "./Views/Contact";
import NavigationBar from "./Views/NavigationBar";

class Main extends Component {
    render() {
      return (
        <Router>
          <div>
            <NavigationBar/>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      );
    }
  }



export default Main;