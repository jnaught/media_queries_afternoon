import React, { Component } from "react";
import portfolio from "./Portfolio.css";

export default class Portfolio extends Component {
    render() {
        return (
            <div className="port-container">
                <a name="portfolio" />
                <div>
                    <h1 className="services-h1">PORTFOLIO</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-grid1">
                    <div className="port-box"> </div>
                    <div className="port-box"> </div>
                    <div className="port-box"> </div>
                </div>
                <div className="box-grid2">
                    <div className="port-box"> </div>
                    <div className="port-box"> </div>
                    <div className="port-box"> </div>
                </div>
            </div>
        );
    }
}
