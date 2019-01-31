import React, { Component } from "react";
import _ from "lodash";
import Pagination from "react-js-pagination";
import "./Pagination.scss";
import Filter from "./filter/Filter";
import CustomerList from "./customers/CustomerList";
import { _constructFilters, _sortFilters, _filterCustomers } from "./Utils";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      numPage: 1,
      perPage: 6,
      customersFiltered: []
    };
  }

  componentDidMount() {
    // construct filters from customers data (industry, location, size...)
    const filters = _sortFilters(_constructFilters(this.props.customers));
    this.setState({ filters });
    this.computeCustomersFiltered(filters);
  }
  computeCustomersFiltered(filters) {
    const customersFiltered = _filterCustomers(this.props.customers, filters);
    this.setState({ customersFiltered });
  }

  //////////////////////////////////////////////////////////
  /// CALLBACK FILTER EVENTS - all Arrow fx for binding !
  /////////////////////////////////////////////////////////

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

  /// MODIFYING FILTER
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

    this.computeCustomersFiltered(this.state.filters);
    this.setState({ filters: this.state.filters });
  };

  // triggered by refresh btn of a filter
  removeAllElems = (filter, event) => {
    event.stopPropagation();
    filter.elems.map(elem => (elem.checked = false));
    filter.selectedElems = [];

    this.computeCustomersFiltered(this.state.filters);
    this.setState({ filters: this.state.filters });
  };

  /////////////////////////////////////////////////////////
  /// CALLBACK PAGINATION - Arrow fx for binding !
  /////////////////////////////////////////////////////////

  handlePageChange = numPage => {
    this.setState({ numPage });
  };

  render() {
    const { filters, numPage, perPage, customersFiltered } = this.state;
    return (
      <div className="appContent" onClick={this.closeAllFilters}>
        <div className="titleContent">You're in good company</div>
        <Filter
          filters={filters}
          toogleAddElem={this.toogleAddElem}
          toogleOpen={this.toogleOpenFilter}
          removeAllElems={this.removeAllElems}
        />
        <CustomerList
          customersFiltered={customersFiltered}
          numPage={numPage}
          perPage={perPage}
        />

        <div className="wrapPagination">
          <Pagination
            activePage={numPage}
            itemsCountPerPage={perPage}
            totalItemsCount={customersFiltered.length}
            onChange={this.handlePageChange}
            hideFirstLastPages={true}
            prevPageText="<"
            nextPageText=">"
          />
        </div>
      </div>
    );
  }
}

export default AppContent;
