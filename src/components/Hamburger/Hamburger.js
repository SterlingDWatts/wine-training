import React from "react";
import PropTypes from "prop-types";
import "./Hamburger.css";

const Hamburger = ({ handleClick }) => (
  <button className="Hamburger" onClick={handleClick}>
    <div className="hamburger-stripe"></div>
    <div className="hamburger-stripe"></div>
    <div className="hamburger-stripe"></div>
  </button>
);

Hamburger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Hamburger;
