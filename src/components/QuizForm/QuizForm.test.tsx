import React from "react";
import ReactDOM from "react-dom";
import QuizForm from "./QuizForm";

describe("QuizForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <QuizForm
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
        dispatch={(action) => {}}
        seeResults={(event) => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
