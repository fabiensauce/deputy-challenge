import React from "react";
import PropTypes from "prop-types";
import "./Select.scss";
import SelectHead from "./SelectHead";
import SelectDropDown from "./SelectDropDown";

const Select = ({ filter, toogleOpen, removeAllElems, toogleAddElem }) => {
  return (
    <div className="selectHomemade">
      <SelectHead filter={filter} toogleOpen={toogleOpen} />
      <SelectDropDown
        filter={filter}
        removeAllElems={removeAllElems}
        toogleAddElem={toogleAddElem}
      />
    </div>
  );
};

Select.propTypes = {
  filter: PropTypes.object.isRequired,
  toogleOpen: PropTypes.func.isRequired,
  removeAllElems: PropTypes.func.isRequired,
  toogleAddElem: PropTypes.func.isRequired
};

export default Select;
