import React, { Component } from 'react'
import Content from "./Content";
import AdsBar from "./AdsBar";
import "../Styles/MainPage.css"

export default class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <div className="MainPageContent">
                    <Content/>
                    <AdsBar/>
                </div>
            </div>
        )
    }
}