import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerStory = ({ customer }) => {
  return (
    <div className="customerStory">
      <img src={customer.image_url} alt="new" />
      <div className="description">{customer.excerpt}</div>
      <div className="read">
        <div className="readMore">
          Read more <FontAwesomeIcon className="check" icon="arrow-right" />
        </div>
        <div className="time">
          <FontAwesomeIcon className="check" icon="clock" /> {customer.readTime}{" "}
          MIN READ
        </div>
      </div>
    </div>
  );
};

CustomerStory.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerStory;
