import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";

describe("Quiz Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Quiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
