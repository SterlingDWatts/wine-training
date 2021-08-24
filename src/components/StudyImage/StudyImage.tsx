import React from "react";
import PropTypes from "prop-types";
import "./StudyImage.css";

interface StudyImageProps {
  src: string;
  alt: string;
  type?: "full-width" | "fyi" | "float-left" | "float-right";
  caption?: string;
  style?: any;
}

const StudyImage: React.FC<StudyImageProps> = ({ src, alt, type = "full-width", caption, style }) => (
  <figure className={`StudyImage ${type}`}>
    <img src={src} alt={alt} style={style} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

StudyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["full-width", "fyi", "float-left", "float-right"]),
  caption: PropTypes.string,
  style: PropTypes.object,
};

export default StudyImage;
