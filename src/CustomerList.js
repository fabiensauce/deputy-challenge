import React, { Component } from "react";

class CustomerList extends Component {
  render() {
    return (
      <div className="customerList">
        {this.props.customers.map((customer, index) => (
          <div key={index}>{customer.company_name}</div>
        ))}
      </div>
    );
  }
}

export default CustomerList;
