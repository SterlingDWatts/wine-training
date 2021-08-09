import React from "react";
import ReactDOM from "react-dom";
import SideNavLink from "./SideNavLink";

describe("SideNavLink Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SideNavLink reference={{ current: { offsetTop: 2 } }}>Test</SideNavLink>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
