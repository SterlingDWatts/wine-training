import React from "react";
import PropTypes from "prop-types";
import ChevronDown from "../ChevronDown/ChevronDown";
import "./NavbarAccordion.css";

const NavbarAccordion = ({ title, toggleAccordion, showContents, children }) => {
  return (
    <div className="NavbarAccordion">
      <div className="main" onClick={toggleAccordion}>
        <div className="title">{title}</div>
        <ChevronDown showContents={showContents} />
      </div>
      <div className={!showContents ? "children" : "children accordion--collapsed"}>{children}</div>
    </div>
  );
};

NavbarAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  showContents: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default NavbarAccordion;
