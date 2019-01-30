import React, { Component } from "react";
import Filter from "./Filter";
import CustomerList from "./CustomerList";

class AppContent extends Component {
  render() {
    return (
      <div className="appContent">
        <div className="titleContent">You're in good company</div>
        <Filter />
        <CustomerList customers={this.props.customers} />
      </div>
    );
  }
}

export default AppContent;
