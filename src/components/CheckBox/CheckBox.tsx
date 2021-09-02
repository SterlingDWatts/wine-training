import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CheckBox.scss";

interface CheckBoxProps {
  disabled?: boolean;
  checked?: boolean;
  id: number;
  label?: string;
  showTimes?: boolean;
  hideCheck?: boolean;
  handleChange: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ disabled, checked, id, handleChange, label, showTimes, hideCheck }) => {
  const CheckBoxClassNames = classnames("CheckBox mdc-touch-target-wrapper", {
    "mdc-checkbox--disabled": disabled,
    "display--times-svg": showTimes,
    "hide--checkmark-svg": hideCheck,
  });

  return (
    <div className="mdc-form-field">
      <div className={CheckBoxClassNames}>
        <div className="mdc-checkbox mdc-checkbox--touch">
          <input
            type="checkbox"
            className="mdc-checkbox__native-control"
            checked={checked}
            name={`checkbox-${id}`}
            id={`checkbox-${id}`}
            disabled={disabled}
            onChange={handleChange}
          />
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <FontAwesomeIcon icon={faTimes} color="rgb(253, 151, 38)" fontSize="1x" style={{ marginLeft: "2px" }} />
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
          <div className="mdc-checkbox__ripple"></div>
        </div>
      </div>
      {label && <label htmlFor={`checkbox-${id}`}>{label}</label>}
    </div>
  );
};

export default CheckBox;
