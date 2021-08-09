import React from "react";
import PropTypes from "prop-types";
import "./SideNavLink.css";

const SideNavLink = ({ reference, children }) => {
  const scrollToRef = () => {
    const currentPos = window.pageYOffset;
    const refPos = reference.current.offsetTop;
    const showNav = currentPos > refPos;
    window.scrollTo({
      left: 0,
      top: showNav ? refPos - 70 : refPos - 20,
      behavior: "smooth",
    });
  };

  return (
    <div className="SideNavLink" onClick={scrollToRef}>
      {children}
    </div>
  );
};

SideNavLink.propTypes = {
  reference: PropTypes.shape({ current: PropTypes.shape({ offsetTop: PropTypes.number }) }),
  children: PropTypes.string.isRequired,
};

export default SideNavLink;
