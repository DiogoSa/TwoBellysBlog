import React, { Component } from "react";

import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import MainPage from "./Components/MainPage";
import FooterBar from "./Components/FooterBar";
import "./Styles/Main.css"

class Main extends Component {
    render() {
      return (
        <Router>
          <div className="MainDiv">
            <NavigationBar/>
            <MainPage/>
            <FooterBar/>
          </div>
        </Router>
      );
    }
  }



export default Main;