import React, { Component } from "react";

class CustomerStory extends Component {
  render() {
    const customer = this.props.customer;
    return (
      <div className="customerStory">
        <div>{customer.company_name}</div>
        <div>{customer.company_size}</div>
      </div>
    );
  }
}

export default CustomerStory;
