import React from "react";
import ReactDOM from "react-dom";
import StudyPage from "./StudyPage";

describe("StudyPage Coponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StudyPage>
        <div></div>
      </StudyPage>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
