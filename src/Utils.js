export function _filterCustomers(customers, filters) {
  console.log("fayaaaaaaaaaaaaaaaa");
  let customersFiltered = customers;
  for (let myfilter of filters) {
    if (myfilter.selectedElems.length > 0) {
      if (myfilter.name === "use_case") {
        customersFiltered = customersFiltered.filter(customer => {
          for (let customerName of customer.use_case) {
            if (myfilter.selectedElems.find(e => e === customerName))
              return true;
          }
          return false;
        });
      } else {
        customersFiltered = customersFiltered.filter(customer =>
          myfilter.selectedElems.find(e => e === customer[myfilter.name])
        );
      }
    }
  }
  return customersFiltered;
}

export function _constructFilters(customers) {
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
    _addIntoFilter(customer.industry, filterIndustries);
    _addIntoFilter(customer.location, filterLocation);
    _addIntoFilter(customer.company_size, filterCompanySize);
    for (let use_case of customer.use_case) {
      _addIntoFilter(use_case, filterUseCase);
    }
  }
  return [filterIndustries, filterLocation, filterCompanySize, filterUseCase];
}

function _addIntoFilter(nameElem, filter) {
  const elem = filter.elems.find(elem => elem.name === nameElem);
  if (!elem) {
    filter.elems.push({ name: nameElem, checked: false, nb: 1 });
  } else elem.nb++;
}
