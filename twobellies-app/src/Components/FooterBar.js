import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "../Styles/FooterBar.css"

export default class FooterBar extends Component {
    render() {
        return (
            <div className="FooterBar">
                <ul className="Header">
                    <li><h1>Two Bellies</h1></li>
                </ul>
            </div>
        )
    }
}