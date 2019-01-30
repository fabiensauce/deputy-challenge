import React from "react";
import "./Select.scss";
import SelectHead from "./SelectHead";
import SelectDropDown from "./SelectDropDown";

function Select({ filter, toogleOpen, removeAllElems, toogleAddElem }) {
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
}

export default Select;
