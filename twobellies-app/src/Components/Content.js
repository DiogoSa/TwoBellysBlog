import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "../Views/Home";
import Stuff from "../Views/Stuff";
import Contact from "../Views/Contact";
import "../Styles/Content.css"

export default class FooterBar extends Component {
    render() {
        return (
            <div className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
            </div>
        )
    }
}