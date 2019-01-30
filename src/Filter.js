import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        {this.props.filters.map((filter, index) => (
          <div key={index}>hehe filter {filter.title}</div>
        ))}
      </div>
    );
  }
}

export default Filter;
