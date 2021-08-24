import React from "react";
import ReactDOM from "react-dom";
import StudyImage from "./StudyImage";

describe("StudyImage Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StudyImage src="../../assets/AtlasPeak.png" alt="Atlas Peak" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
