import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div>
                    <Home />
                </div>
                <div>
                    <Services />
                </div>
                <div>
                    <Portfolio />
                </div>
            </div>
        );
    }
}

export default App;
