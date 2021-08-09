import React from "react";
import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className, children }) => <div className={`Page ${className}`}>{children}</div>;

Page.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Page;
