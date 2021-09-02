import React from "react";
import classnames from "classnames";
import "./Button.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label?: string;
  children?: any;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  disabled?: boolean;
  raised?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "primary" | "grey";
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  children,
  trailingIcon,
  leadingIcon,
  disabled,
  raised,
  unelevated,
  outlined,
  handleClick,
  theme,
}) => {
  const buttonClassNames = classnames("Button mdc-button", {
    "mdc-button--raised": raised,
    "mdc-button--unelevated": unelevated,
    "mdc-button--outlined": outlined,
    "mdc-button--icon-leading": leadingIcon,
    "mdc-button--icon-trailing": trailingIcon,
    "primary-button": theme === "primary",
  });

  return (
    <button className={buttonClassNames} disabled={disabled} onClick={handleClick} type={type}>
      <span className="mdc-button__ripple"></span>
      {!trailingIcon && children}
      {label && <span className="mdc-button__label">{label}</span>}
      {trailingIcon && children}
    </button>
  );
};

export default Button;
