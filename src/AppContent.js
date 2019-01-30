import React, { Component } from "react";
import _ from "lodash";
import Filter from "./Filter";
import CustomerList from "./CustomerList";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  componentDidMount() {
    const filters = this.constructFilters(this.props.customers);
    this.setState({ filters });
  }
  constructFilters(customers) {
    const filterIndustries = {
      name: "industry",
      title: "Industries",
      elems: [],
      selectedElems: [],
      isOpen: false
    };
    const filterLocation = {
      name: "location",
      title: "Location",
      elems: [],
      selectedElems: [],
      isOpen: false
    };
    const filterCompanySize = {
      name: "company_size",
      title: "Company Size",
      elems: [],
      selectedElems: [],
      isOpen: false
    };
    const filterUseCase = {
      name: "use_case",
      title: "Use Case",
      elems: [],
      selectedElems: [],
      isOpen: false
    };

    for (let customer of customers) {
      this.addIntoFilter(customer.industry, filterIndustries);
      this.addIntoFilter(customer.location, filterLocation);
      this.addIntoFilter(customer.company_size, filterCompanySize);
      for (let use_case of customer.use_case) {
        this.addIntoFilter(use_case, filterUseCase);
      }
    }
    return [filterIndustries, filterLocation, filterCompanySize, filterUseCase];
  }
  addIntoFilter(nameElem, filter) {
    if (!filter.elems.find(elem => elem.name === nameElem)) {
      filter.elems.push({ name: nameElem, checked: false });
    }
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

  render() {
    return (
      <div className="appContent" onClick={this.closeAllFilters}>
        <div className="titleContent">You're in good company</div>
        <Filter
          filters={this.state.filters}
          toogleAddElem={this.toogleAddElem}
          toogleOpen={this.toogleOpen}
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
