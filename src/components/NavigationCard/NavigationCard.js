import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavigationCard.css";

const NavigationCard = ({ to, src, alt, extra, title, ...props }) => (
  <div className="NavigationCard" {...props}>
    <Link to={to}>
      <div className="container">
        <img src={src} alt={alt} />
        <div className="text">
          <header className="title">{title}</header>
          <span className="extra">{extra}</span>
        </div>
      </div>
    </Link>
  </div>
);

NavigationCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavigationCard;
