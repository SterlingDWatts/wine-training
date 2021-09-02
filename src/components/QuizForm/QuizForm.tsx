import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { QuizState, QuizAction, Answer, Question } from "../Quiz/QuizTypes";
import QuizCheckBox from "../QuizCheckBox/QuizCheckBox";
import RadioButton from "../QuizRadioButton/QuizRadioButton";
import Button from "../Button/Button";
import "./QuizForm.css";

interface QuizFormProps {
  quiz: QuizState;
  dispatch: (action: QuizAction) => void;
  seeResults: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ quiz, dispatch, seeResults }) => {
  const currentQuestion = quiz.questions[quiz.current];

  let inputs = null;

  switch (currentQuestion.type) {
    case "selectAllThatApply":
      inputs = currentQuestion.answers.map(({ answer, id, value, selectedValue }) => (
        <QuizCheckBox
          answer={answer}
          id={id}
          dispatch={dispatch}
          key={id}
          selectedValue={selectedValue}
          value={value}
          submitted={currentQuestion.submitted}
        />
      ));
      break;

    case "multipleChoice":
      inputs = currentQuestion.answers.map(({ answer, id, value, selectedValue }) => (
        <RadioButton
          answer={answer}
          id={id}
          quiz={quiz}
          dispatch={dispatch}
          key={id}
          selectedValue={selectedValue}
          value={value}
          submitted={currentQuestion.submitted}
        />
      ));
      break;
  }

  const completedQuestions = quiz.questions.reduce((acc: number, curr: Question) => {
    const point = curr.submitted ? 1 : 0;
    return point + acc;
  }, 0);

  const isSubmitDisabled =
    currentQuestion.submitted ||
    !currentQuestion.answers.reduce((acc: boolean, curr: Answer): boolean => {
      const isSelected = curr.selectedValue === 1;
      return acc || isSelected;
    }, false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "submit" });
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: "next" });
  };

  const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: "previous" });
  };

  return (
    <div className="QuizForm">
      <form onSubmit={handleSubmit}>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(completedQuestions / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
        <fieldset>
          <div className="fieldset-container">
            <legend>
              {currentQuestion.question}
              {currentQuestion.type === "selectAllThatApply" && (
                <>
                  <br />
                  <small>Select all that apply</small>
                </>
              )}
              {currentQuestion.type === "multipleChoice" && (
                <>
                  <br />
                  <small>Select one</small>
                </>
              )}
            </legend>
            <div className="inputs">{inputs}</div>
            <div style={{ height: "137px" }}></div>
            <div className="buttons">
              <div className="top-border"></div>
              <div className="buttons-container">
                {(completedQuestions / quiz.questions.length) * 100 < 100 ? (
                  <Button type="submit" label="Submit" disabled={isSubmitDisabled} raised theme="primary" />
                ) : (
                  <Button label="See Results" raised theme="primary" handleClick={seeResults} />
                )}
                <div className="bottom-buttons">
                  <Button
                    handleClick={handlePrevious}
                    disabled={quiz.current === 0}
                    leadingIcon
                    outlined
                    theme="primary"
                  >
                    <FontAwesomeIcon icon={faCaretLeft} size="lg" />
                  </Button>
                  <Button
                    label="Next "
                    handleClick={handleNext}
                    disabled={quiz.current === quiz.questions.length - 1}
                    trailingIcon
                    outlined
                    theme="primary"
                  >
                    <FontAwesomeIcon icon={faCaretRight} size="lg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default QuizForm;
