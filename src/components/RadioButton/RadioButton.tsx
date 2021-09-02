import React from "react";
import classnames from "classnames";
import "./RadioButton.scss";

interface RadioButtonProps {
  id: number;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, checked, name, disabled, handleChange }) => {
  const radioButtonClassName = classnames("RadioButton mdc-touch-target-wrapper", { "mdc-radio--disabled": disabled });

  return (
    <div className="mdc-form-field">
      <div className={radioButtonClassName}>
        <div className="mdc-radio mdc-radio--touch">
          <input
            className="mdc-radio__native-control"
            type="radio"
            id={`radio-${id}`}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
          />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle"></div>
            <div className="mdc-radio__inner-circle"></div>
          </div>
          <div className="mdc-radio__ripple"></div>
        </div>
      </div>
      {label && <label htmlFor={`radio-${id}`}>{label}</label>}
    </div>
  );
};

export default RadioButton;
