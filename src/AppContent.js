import React, { Component } from "react";
import _ from "lodash";
import Filter from "./Filter";
import CustomerList from "./CustomerList";
import { _constructFilters } from "./Utils";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  componentDidMount() {
    const filters = _constructFilters(this.props.customers);
    this.setState({ filters });
  }

  // arrow fx for binding
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
  toogleOpen = (filter, event) => {
    event.stopPropagation();
    if (filter.isOpen) filter.isOpen = false;
    else {
      this.state.filters.map(filter => (filter.isOpen = false));
      filter.isOpen = true;
    }
    this.setState({ filters: this.state.filters });
  };

  closeAllFilters = () => {
    this.state.filters.map(filter => (filter.isOpen = false));
    this.setState({ filters: this.state.filters });
  };

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
          toogleOpen={this.toogleOpen}
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
