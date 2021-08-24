import React from "react";
import PropTypes from "prop-types";
import "./ForYourInfo.css";

interface ForYourInfoProps {
  backgroundColor?: "green" | "aqua";
  children: any;
  style?: any;
}

const ForYourInfo: React.FC<ForYourInfoProps> = ({ children, backgroundColor, style }) => (
  <div className={`ForYourInfo ${backgroundColor}`} style={style}>
    {children}
  </div>
);

ForYourInfo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  backgroundColor: PropTypes.oneOf(["green", "aqua"]),
  style: PropTypes.object,
};

export default ForYourInfo;
