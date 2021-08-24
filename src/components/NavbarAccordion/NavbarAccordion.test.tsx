import React from "react";
import ReactDOM from "react-dom";
import NavbarAccordion from "./NavbarAccordion";

describe("NavbarAccordion Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <NavbarAccordion title="test">
        <div></div>
      </NavbarAccordion>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
