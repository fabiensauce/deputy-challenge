import React from "react";
import PropTypes from "prop-types";
import Select from "./selectHomemade/Select";
import "./Filter.scss";

function Filter({ filters, toogleOpen, toogleAddElem, removeAllElems }) {
  return (
    <div className="filter">
      <span className="filterBy">FILTER BY</span>
      {filters.map((filter, index) => (
        <Select
          key={index}
          filter={filter}
          toogleOpen={toogleOpen}
          toogleAddElem={toogleAddElem}
          removeAllElems={removeAllElems}
        />
      ))}
    </div>
  );
}

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  toogleOpen: PropTypes.func.isRequired,
  toogleAddElem: PropTypes.func.isRequired,
  removeAllElems: PropTypes.func.isRequired
};

export default Filter;
