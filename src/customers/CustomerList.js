import React from "react";
import CustomerStory from "./CustomerStory";
import "./CustomerList.scss";
import { _filterCustomers } from "../Utils";

function CustomerList({ customers, filters }) {
  const customersFiltered = _filterCustomers(customers, filters);
  return (
    <div className="customerList">
      {customersFiltered.map((customer, index) => (
        <CustomerStory key={index} customer={customer} />
      ))}
    </div>
  );
}

export default CustomerList;
