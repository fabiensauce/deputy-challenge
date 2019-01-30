import React from "react";
import HomemadeSelect from "./homemadeSelect/HomemadeSelect";
import "./Filter.scss";

function Filter({ filters, toogleOpen, toogleAddElem, removeAllElems }) {
  return (
    <div className="filter">
      <span className="filterBy">FILTER BY</span>
      {filters.map((filter, index) => (
        <HomemadeSelect
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

export default Filter;
