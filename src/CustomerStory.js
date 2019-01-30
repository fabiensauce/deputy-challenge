import React from "react";

function CustomerStory({ customer }) {
  return (
    <div className="customerStory">
      <div>{customer.company_name}</div>
      <div>{customer.company_size}</div>
      <div>{customer.location}</div>
    </div>
  );
}

export default CustomerStory;
