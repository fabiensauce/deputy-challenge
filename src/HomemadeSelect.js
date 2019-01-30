import React, { Component } from "react";

class HomemadeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showElems: false
    };
  }

  // arrow fx for binding
  toogleShowElems = () => {
    this.setState({ showElems: !this.state.showElems });
  };
  // arrow fx for binding
  // toogleAddElem = elem => {
  //   this.props.toogleAddElem(elem, this.props.filter);
  // };

  render() {
    const filter = this.props.filter;
    // <FontAwesomeIcon icon="check" />
    const showElems = this.state.showElems ? "show" : "";
    return (
      <div className="homemadeSelect">
        <div className="selectName" onClick={this.toogleShowElems}>
          {filter.title}
        </div>
        <div className={`containerElem ${showElems}`}>
          {filter.elems.map((elem, index) => (
            <div
              key={index}
              onClick={() => this.props.toogleAddElem(elem, this.props.filter)}
            >
              {elem.checked && "youpie"}
              <span>{elem.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomemadeSelect;
