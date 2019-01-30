import React, { Component } from "react";
import CustomerStory from "./CustomerStory";

class CustomerList extends Component {
  render() {
    return (
      <div className="customerList">
        {this.props.customers.map((customer, index) => (
          <CustomerStory key={index} customer={customer} />
        ))}
      </div>
    );
  }
}

export default CustomerList;
