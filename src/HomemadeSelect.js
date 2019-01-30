import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomemadeSelect({ filter, toogleOpen, removeAllElems, toogleAddElem }) {
  const isOpen = filter.isOpen ? "isOpen" : "";
  return (
    <div className="homemadeSelect">
      <div className="selectName" onClick={event => toogleOpen(filter, event)}>
        {filter.title}
        <span className="right">
          {filter.selectedElems.length > 0 && (
            <span className="infoNbSelect">{filter.selectedElems.length}</span>
          )}
          <FontAwesomeIcon className="check" icon="caret-down" />
        </span>
      </div>
      <div className={`containerElem ${isOpen}`}>
        <div className="topContainer">
          {filter.selectedElems.length} selected
          <span
            className="removeAll"
            onClick={event => removeAllElems(filter, event)}
          >
            <FontAwesomeIcon icon="sync-alt" />
          </span>
        </div>
        {filter.elems.map((elem, index) => (
          <div
            className={`elem ${elem.checked ? "checked" : ""}`}
            key={index}
            onClick={event => toogleAddElem(elem, filter, event)}
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
        ))}
      </div>
    </div>
  );
}

export default HomemadeSelect;
