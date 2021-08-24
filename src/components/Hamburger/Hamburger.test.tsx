import React from "react";
import ReactDom from "react-dom";
import Hamburger from "./Hamburger";

describe("Hamburger Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Hamburger handleClick={() => undefined} />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
