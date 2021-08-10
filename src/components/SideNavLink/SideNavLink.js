import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./SideNavLink.css";

const SideNavLink = ({ reference, children }) => {
  const [isRefVisible, setIsRefVisible] = useState(false);
  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      try {
        const currentPos = window.pageYOffset;
        const adjustment = currentPos > prevScroll ? 30 : 90;
        setPrevScroll(window.pageYOffset);
        const { offsetTop, clientHeight } = reference.current.parentElement;
        setIsRefVisible(currentPos + adjustment > offsetTop && currentPos + adjustment < offsetTop + clientHeight);
      } catch (e) {
        setIsRefVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToRef = () => {
    const currentPos = window.pageYOffset;
    const refPos = reference.current.parentElement.offsetTop;
    const showNav = currentPos > refPos;
    window.scrollTo({
      left: 0,
      top: showNav ? refPos - 60 : refPos - 10,
      behavior: "smooth",
    });
  };

  return (
    <div className={classnames("SideNavLink", { "ref--visible": isRefVisible })} onClick={scrollToRef}>
      {children}
    </div>
  );
};

SideNavLink.propTypes = {
  reference: PropTypes.shape({
    current: PropTypes.shape({
      parentElement: PropTypes.shape({ offsetTop: PropTypes.number, clientHeight: PropTypes.number }),
    }),
  }),
  children: PropTypes.string.isRequired,
};

export default SideNavLink;
