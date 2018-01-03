import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";

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
      </div>
    );
  }
}

export default App;
