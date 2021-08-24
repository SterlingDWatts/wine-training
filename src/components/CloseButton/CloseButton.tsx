import React from "react";
import PropTypes from "prop-types";
import "./CloseButton.css";

interface CloseButtonProps {
  handleClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <svg
      className="svg-icon nav-burger-close"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      onClick={handleClick}
    >
      <path
        fill="#551a8b"
        fillRule="nonzero"
        d="M6.971 8L.213 1.242A.727.727 0 0 1 1.242.213L8 6.971 14.758.213a.727.727 0 0 1 1.029 1.029L9.029 8l6.758 6.758a.727.727 0 0 1-1.029 1.029L8 9.029l-6.758 6.758a.727.727 0 0 1-1.029-1.029L6.971 8z"
      ></path>
    </svg>
  );
};

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CloseButton;
