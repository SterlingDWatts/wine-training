import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavigationCard.css";

const NavigationCard = ({ to, src, alt, children, ...props }) => (
  <div className="NavigationCard" {...props}>
    <Link to={to}>
      <div className="container">
        <img src={src} alt={alt} />
        <div className="text">
          <header className="title">{children}</header>
        </div>
      </div>
    </Link>
  </div>
);

NavigationCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationCard;
