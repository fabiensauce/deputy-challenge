import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectHead.scss";

const SelectTitle = ({ filter, toogleOpen }) => {
  return (
    <div className="selectHead" onClick={event => toogleOpen(filter, event)}>
      {filter.title}
      <span className="right">
        {filter.selectedElems.length > 0 && (
          <span className="infoNbSelect">{filter.selectedElems.length}</span>
        )}
        <FontAwesomeIcon className="check" icon="caret-down" />
      </span>
    </div>
  );
};

SelectTitle.propTypes = {
  filter: PropTypes.object.isRequired,
  toogleOpen: PropTypes.func.isRequired
};

export default SelectTitle;
