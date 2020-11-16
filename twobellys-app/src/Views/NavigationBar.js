import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "../Styles/NavigationBar.css"

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <ul className="header">
                    <li><h1>Two Bellys</h1></li>
                    <div id="NavLinks">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Objectives</NavLink></li>
                        <li><NavLink to="/contact">About us</NavLink></li>
                    </div>
                </ul>
            </div>
        )
    }
}