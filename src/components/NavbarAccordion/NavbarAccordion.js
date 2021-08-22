import React, { useState } from "react";
import PropTypes from "prop-types";
import ChevronDown from "../ChevronDown/ChevronDown";
import "./NavbarAccordion.css";

const NavbarAccordion = ({ title, children }) => {
  const [showContents, setShowContents] = useState(false);
  return (
    <div className="NavbarAccordion">
      <div className="main" onClick={() => setShowContents(!showContents)}>
        <div className="title">{title}</div>
        <ChevronDown showContents={showContents} />
      </div>
      <div className="children">{showContents && children}</div>
    </div>
  );
};

NavbarAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default NavbarAccordion;
