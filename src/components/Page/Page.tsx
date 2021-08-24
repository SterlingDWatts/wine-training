import React from "react";
import PropTypes from "prop-types";
import "./Page.css";

interface PageProps {
  className: string;
  children: any;
}

const Page: React.FC<PageProps> = ({ className, children }) => <div className={`Page ${className}`}>{children}</div>;

Page.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Page;
