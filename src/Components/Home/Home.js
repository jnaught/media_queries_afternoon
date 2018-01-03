import React, { Component } from "react";
import home from "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <a name="home" />
                <div className="home-greeting">
                    <div>
                        <p> Welcome To Our Studio! </p>
                        <h1>IT'S NICE TO MEET YOU </h1>
                        <button className="home-button"> TELL ME MORE </button>
                    </div>
                </div>
            </div>
        );
    }
}
