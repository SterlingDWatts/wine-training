import React from "react";
import ReactDOM from "react-dom";
import QuizCheckBox from "./QuizCheckBox";

describe("CheckBox Component", () => {
  it("redners without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <QuizCheckBox answer="a" id={0} selectedValue={1} value={1} submitted={true} dispatch={(action) => {}} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
