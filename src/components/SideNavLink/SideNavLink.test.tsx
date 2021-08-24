import React, { useRef } from "react";
import ReactDOM from "react-dom";
import SideNavLink from "./SideNavLink";

describe("SideNavLink Component", () => {
  it("renders without crashing", () => {
    const ComponentWithRef = () => {
      const ref = useRef(null);
      return (
        <div>
          <h2 ref={ref}></h2>
          <SideNavLink reference={ref}>Test</SideNavLink>
        </div>
      );
    };

    const div = document.createElement("div");
    ReactDOM.render(<ComponentWithRef />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
