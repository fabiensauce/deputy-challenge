import React, { Component } from "react";
import Filter from "./Filter";
import CustomerList from "./CustomerList";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersView: [],
      filtersSelected: {
        Industries: [],
        Location: [],
        CompanySize: [],
        UseCase: []
      }
    };
  }

  componentDidMount() {
    const filtersView = this.constructFilters(this.props.customers);
    this.setState({ filtersView });
  }
  constructFilters(customers) {
    const filterIndustries = { title: "Industries", elems: [] };
    const filterLocation = { title: "Location", elems: [] };
    const filterCompanySize = { title: "Company Size", elems: [] };
    const filterUseCase = { title: "Use Case", elems: [] };

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

  render() {
    return (
      <div className="appContent">
        <div className="titleContent">You're in good company</div>
        <Filter filters={this.state.filtersView} />
        <CustomerList customers={this.props.customers} />
      </div>
    );
  }
}

export default AppContent;
