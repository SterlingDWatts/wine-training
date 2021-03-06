import React from "react";
import PropTypes from "prop-types";
import "./ChevronDown.css";

interface ChevronDownProps {
  showContents: boolean;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ showContents }) => {
  return (
    <button className={showContents ? "ChevronDown rotate" : "ChevronDown"}>
      <svg
        height="18px"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="chevron-down"
        className="svg-inline--fa fa-chevron-down fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
        ></path>
      </svg>
    </button>
  );
};

ChevronDown.propTypes = {
  showContents: PropTypes.bool.isRequired,
};

export default ChevronDown;
