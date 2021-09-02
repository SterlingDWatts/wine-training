import React from "react";
import ReactDOM from "react-dom";
import QuizRadioButton from "./QuizRadioButton";

describe("QuizRadioButton Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <QuizRadioButton
        quiz={{
          questions: [
            {
              question: "a",
              id: 0,
              type: "multipleChoice",
              submitted: false,
              answers: [{ id: 0, answer: "a", value: 0, selectedValue: 0 }],
            },
          ],
          current: 0,
        }}
        answer="a"
        id={0}
        selectedValue={1}
        value={1}
        submitted={true}
        dispatch={(action) => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
