import React, { Component } from "react";
import HomemadeSelect from "./HomemadeSelect";
import "./Filter.scss";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        FILTER BY
        {this.props.filters.map((filter, index) => (
          <HomemadeSelect
            key={index}
            filter={filter}
            toogleAddElem={this.props.toogleAddElem}
          />
        ))}
      </div>
    );
  }
}

export default Filter;
