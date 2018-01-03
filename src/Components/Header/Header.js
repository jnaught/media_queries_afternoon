import React, { Component } from "react";
import header from "./Header.css";
import { Switch, Route } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-link">Start Bootstrap</div>
                <div className="header-list">
                    <div className="list">
                        <a href="#services">SERVICES</a>
                    </div>
                    <div className="list">PORTFOLIO</div>
                    <div className="list">ABOUT</div>
                    <div className="list">TEAM</div>
                    <div className="list">CONTACT</div>
                </div>
            </div>
        );
    }
}
