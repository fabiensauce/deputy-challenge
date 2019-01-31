import React from "react";
import PropTypes from "prop-types";
import CustomerStory from "./CustomerStory";
import "./CustomerList.scss";

const CustomerList = ({ customersFiltered, numPage, perPage }) => {
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
};

CustomerList.propTypes = {
  customersFiltered: PropTypes.array.isRequired,
  numPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default CustomerList;
