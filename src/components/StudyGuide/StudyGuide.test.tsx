import React from "react";
import ReactDOM from "react-dom";
import StudyGuide from "./StudyGuide";

describe("StudyGuide Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StudyGuide>
        <div></div>
      </StudyGuide>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
