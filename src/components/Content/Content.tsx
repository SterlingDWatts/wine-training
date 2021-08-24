import React from "react";
import PropTypes from "prop-types";
import "./Content.css";

const Content: React.FC<any> = ({ children }) => <div className="Content">{children}</div>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default Content;
