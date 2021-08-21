import React from "react";
import PropTypes from "prop-types";
import "./ForYourInfo.css";

const ForYourInfo = ({ children, backgroundColor, ...props }) => (
  <div className={`ForYourInfo ${backgroundColor}`} {...props}>
    {children}
  </div>
);

ForYourInfo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  backgroundColor: PropTypes.oneOf(["green", "aqua"]),
};

export default ForYourInfo;
