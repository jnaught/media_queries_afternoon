import React, { Component } from "react";
import services from "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <div className="services-">
          <div>
            <h1 className="services-h1">SERVICES </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services-icons">
            <div className="icon">
              <h4 className="icon-h4">E-Commerce</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="icon">
              {" "}
              <h4 className="icon-h4">Responsive Design</h4>
            </div>
            <div className="icon">
              <h4 className="icon-h4">Web Security</h4>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
