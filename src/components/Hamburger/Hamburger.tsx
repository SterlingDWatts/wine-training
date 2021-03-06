import React from "react";
import PropTypes from "prop-types";
import "./Hamburger.css";

interface HamburgerProps {
  handleClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ handleClick }) => (
  <button className="Hamburger" onClick={handleClick}>
    <svg
      height="18px"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bars"
      className="svg-inline--fa fa-bars fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#551a8b"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      ></path>
    </svg>
  </button>
);

Hamburger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Hamburger;
