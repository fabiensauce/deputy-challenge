import React, { Component } from "react";
import CustomerStory from "./CustomerStory";

class CustomerList extends Component {
  filterCustomers(customers, filters) {
    let customersFiltered = customers;
    for (let myfilter of filters) {
      if (myfilter.selectedElems.length > 0) {
        if (myfilter.name === "use_case") {
          customersFiltered = customersFiltered.filter(customer => {
            for (let customerName of customer.use_case) {
              if (myfilter.selectedElems.find(e => e === customerName))
                return true;
            }
            return false;
          });
        } else {
          customersFiltered = customersFiltered.filter(customer =>
            myfilter.selectedElems.find(e => e === customer[myfilter.name])
          );
        }
      }
    }
    return customersFiltered;
  }
  render() {
    const { customers, filters } = this.props;
    const customersFiltered = this.filterCustomers(customers, filters);

    return (
      <div className="customerList">
        {customersFiltered.map((customer, index) => (
          <CustomerStory key={index} customer={customer} />
        ))}
      </div>
    );
  }
}

export default CustomerList;
