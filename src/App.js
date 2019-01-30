import React, { Component } from "react";
import "./App.scss";
import data from "./data/developer-test";
import AppContent from "./AppContent";

class App extends Component {
  render() {
    const customers = data;
    return (
      <div className="app">
        <div className="header">DEPUTY</div>
        <AppContent customers={customers} />
      </div>
    );
  }
}

export default App;
