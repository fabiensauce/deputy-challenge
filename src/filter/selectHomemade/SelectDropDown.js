import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectDropDown.scss";

const SelectDropDown = ({ filter, removeAllElems, toogleAddElem }) => {
  const headerDropDown = (
    <div className="topContainer">
      {filter.selectedElems.length} selected
      <span
        className="removeAll"
        onClick={event => removeAllElems(filter, event)}
      >
        <FontAwesomeIcon icon="sync-alt" />
      </span>
    </div>
  );

  const listElemToCheck = filter.elems.map((elem, index) => (
    <div
      className={`elem ${elem.checked ? "checked" : ""}`}
      key={index}
      onClick={e => toogleAddElem(elem, filter, e)}
    >
      {elem.checked ? (
        <span className="check">
          <FontAwesomeIcon className="check" icon="check" />
          {elem.name}
        </span>
      ) : (
        <span className="noCheck">{elem.name}</span>
      )}
      <span className="nb">({elem.nb})</span>
    </div>
  ));

  return (
    <div className={`selectDropDown ${filter.isOpen ? "isOpen" : ""}`}>
      {headerDropDown}
      {listElemToCheck}
    </div>
  );
};

SelectDropDown.propTypes = {
  filter: PropTypes.object.isRequired,
  removeAllElems: PropTypes.func.isRequired,
  toogleAddElem: PropTypes.func.isRequired
};

export default SelectDropDown;
