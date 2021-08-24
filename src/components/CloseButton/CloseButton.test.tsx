import React from "react";
import ReactDOM from "react-dom";
import CloseButton from "./CloseButton";

describe("CloseButton Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CloseButton handleClick={() => undefined} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
