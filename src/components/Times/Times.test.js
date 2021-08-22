import React from "react";
import ReactDom from "react-dom";
import Times from "./Times";

describe("Times Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Times handleClick={() => undefined} />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
