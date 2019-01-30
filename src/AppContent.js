import React, { Component } from "react";
import _ from "lodash";
import Filter from "./filter/Filter";
import CustomerList from "./customers/CustomerList";
import { _constructFilters } from "./Utils";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  componentDidMount() {
    // construct filters from customers data (industry, location, size...)
    const filters = _constructFilters(this.props.customers);
    this.setState({ filters });
  }

  //////////////////////////////////////////////////////////
  /// CALLBACK FILTER EVENTS - all Arrow fx for binding !
  /////////////////////////////////////////////////////////

  // a filter element has been (un)checked
  toogleAddElem = (elemView, filterView, event) => {
    event.stopPropagation();
    // update filters
    const filter = this.state.filters.find(f => f.name === filterView.name);
    const elem = filter.elems.find(e => e.name === elemView.name);
    elem.checked = !elem.checked;

    if (elem.checked) filter.selectedElems.push(elem.name);
    else _.remove(filter.selectedElems, e => e === elem.name);

    this.setState({ filters: this.state.filters });
  };

  // open/close the dropdown filter part
  // close other filter is opened
  toogleOpenFilter = (filter, event) => {
    event.stopPropagation();
    if (filter.isOpen) filter.isOpen = false;
    else {
      this.state.filters.map(filter => (filter.isOpen = false));
      filter.isOpen = true;
    }
    this.setState({ filters: this.state.filters });
  };

  // triggered when click anywhere in the appContent
  closeAllFilters = () => {
    this.state.filters.map(filter => (filter.isOpen = false));
    this.setState({ filters: this.state.filters });
  };

  // triggered by refresh btn of a filter
  removeAllElems = (filter, event) => {
    event.stopPropagation();
    filter.elems.map(elem => (elem.checked = false));
    filter.selectedElems = [];
    this.setState({ filters: this.state.filters });
  };

  render() {
    return (
      <div className="appContent" onClick={this.closeAllFilters}>
        <div className="titleContent">You're in good company</div>
        <Filter
          filters={this.state.filters}
          toogleAddElem={this.toogleAddElem}
          toogleOpen={this.toogleOpenFilter}
          removeAllElems={this.removeAllElems}
        />
        <CustomerList
          customers={this.props.customers}
          filters={this.state.filters}
        />
      </div>
    );
  }
}

export default AppContent;
