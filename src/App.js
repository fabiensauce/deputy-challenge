import React, { Component } from "react";
import "./App.scss";
import data from "./data/developer-test";
import AppContent from "./AppContent";
import { _computeReadTime } from "./Utils";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

class App extends Component {
  render() {
    const customers = _computeReadTime(data);
    return (
      <div className="app">
        <div className="header">DEPUTY</div>
        <AppContent customers={customers} />
      </div>
    );
  }
}

export default App;
