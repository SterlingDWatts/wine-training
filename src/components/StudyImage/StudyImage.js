import React from "react";
import PropTypes from "prop-types";
import "./StudyImage.css";

const StudyImage = ({ src, alt, type = "full-width", caption, ...props }) => (
  <figure className={`StudyImage ${type}`}>
    <img src={src} alt={alt} {...props} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

StudyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string,
  caption: PropTypes.string,
};

export default StudyImage;
