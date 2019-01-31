import React from "react";
import CustomerStory from "./CustomerStory";
import "./CustomerList.scss";

function CustomerList({ customersFiltered, numPage, perPage }) {
  let istart = (numPage - 1) * perPage;
  let iend = numPage * perPage;
  const customersPaginated = customersFiltered.slice(istart, iend);

  return (
    <div className="customerList">
      {customersPaginated.map((customer, index) => (
        <CustomerStory key={index} customer={customer} />
      ))}
    </div>
  );
}

export default CustomerList;
