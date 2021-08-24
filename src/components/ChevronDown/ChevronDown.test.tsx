import React from "react";
import ReactDom from "react-dom";
import ChevronDown from "./ChevronDown";

describe("ChevronDown Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<ChevronDown showContents />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
