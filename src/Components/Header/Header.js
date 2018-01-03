import React, { Component } from "react";
import header from "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-link">Start Bootstrap</div>
        <div className="header-list">
          <div className="list">SERVICES</div>
          <div className="list">PORTFOLIO</div>
          <div className="list">ABOUT</div>
          <div className="list">TEAM</div>
          <div className="list">CONTACT</div>
        </div>
      </div>
    );
  }
}
