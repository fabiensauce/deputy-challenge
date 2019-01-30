import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomemadeSelect extends Component {
  render() {
    const filter = this.props.filter;
    const isOpen = filter.isOpen ? "isOpen" : "";
    return (
      <div className="homemadeSelect">
        <div
          className="selectName"
          onClick={event => this.props.toogleOpen(filter, event)}
        >
          {filter.title}
          <span className="right">
            <FontAwesomeIcon className="check" icon="caret-down" />
          </span>
        </div>
        <div className={`containerElem ${isOpen}`}>
          {filter.elems.map((elem, index) => (
            <div
              className={`elem ${elem.checked ? "checked" : ""}`}
              key={index}
              onClick={event => this.props.toogleAddElem(elem, filter, event)}
            >
              {elem.checked ? (
                <span className="check">
                  <FontAwesomeIcon className="check" icon="check" />
                  {elem.name}
                </span>
              ) : (
                <span className="noCheck">{elem.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomemadeSelect;
