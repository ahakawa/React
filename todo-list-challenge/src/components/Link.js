import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disable={active} className="button-filter">
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
