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
        <div className="header">
          <img
            src="https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/themes/deputy/assets/imagesnew/logo/deputy-stack-white.png"
            alt="new"
          />
          DEPUTY
        </div>
        <AppContent customers={customers} />
      </div>
    );
  }
}

export default App;
