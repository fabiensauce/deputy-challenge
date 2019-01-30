import React, { Component } from "react";

class AppContent extends Component {
  render() {
    return (
      <div className="appContent">
        {this.props.customers.map((customer, index) => (
          <div key={index}>{customer.company_name}</div>
        ))}
      </div>
    );
  }
}

export default AppContent;
