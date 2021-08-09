import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./SideNav.css";

const SideNav = ({ header, children }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowSideNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={classNames("SideNav", { "sidenav--hidden": !showSideNav })}>
      <button className="outline" onClick={toggleSideNav}>
        {showSideNav ? "Close" : "Outline"}
      </button>
      <nav>
        <div>
          <div className="title" onClick={scrollToTop}>
            {header}
          </div>
          {children}
        </div>
      </nav>
    </div>
  );
};

SideNav.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SideNav;
