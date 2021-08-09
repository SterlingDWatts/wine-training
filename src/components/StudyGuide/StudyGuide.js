import React from "react";
import PropTypes from "prop-types";
import "./StudyGuide.css";

const StudyGuide = ({ children }) => <article className="StudyGuide">{children}</article>;

StudyGuide.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default StudyGuide;
