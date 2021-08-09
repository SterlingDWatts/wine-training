import React from "react";
import PropTypes from "prop-types";
import "./StudyPage.css";

const StudyPage = ({ children }) => (
  <div className="StudyPage">
    {children}
    <div className="bottom"></div>
  </div>
);

StudyPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default StudyPage;
