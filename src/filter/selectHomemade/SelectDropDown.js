import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectDropDown.scss";

function SelectDropDown({ filter, removeAllElems, toogleAddElem }) {
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
}
export default SelectDropDown;
