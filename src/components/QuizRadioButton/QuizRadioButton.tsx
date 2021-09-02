import React from "react";
import classnames from "classnames";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { QuizAction, QuizState } from "../Quiz/QuizTypes";
import RadioButton from "../RadioButton/RadioButton";
import "./QuizRadioButton.css";

interface QuizRadioButtonProps {
  quiz: QuizState;
  answer: string;
  id: number;
  selectedValue: number;
  value: number;
  submitted: boolean;
  dispatch: (action: QuizAction) => void;
}

const QuizRadioButton: React.FC<QuizRadioButtonProps> = ({
  quiz,
  answer,
  id,
  dispatch,
  selectedValue,
  value,
  submitted,
}) => {
  const currentQuestion = quiz.questions[quiz.current];
  const isSelected = selectedValue === 1;
  const isCorrect = selectedValue === value && submitted && selectedValue === 1;
  const isIncorrect = selectedValue !== value && submitted;

  return (
    <div
      key={id}
      className={classnames("QuizRadioButton", { selected: isSelected, correct: isCorrect, incorrect: isIncorrect })}
    >
      <RadioButton
        id={id}
        name={`question-${currentQuestion.id}`}
        label={answer}
        checked={isSelected}
        handleChange={() => dispatch({ type: "selection-select-one", payload: { id } })}
        disabled={submitted}
      />
      {/* <input
        type="radio"
        name={`name-${currentQuestion.id}`}
        id={`id-${id}`}
        checked={isSelected}
        onChange={() => dispatch({ type: "selection-select-one", payload: { id } })}
        disabled={submitted}
      />
      <label htmlFor={`id-${id}`}>
        <div>
          <span>{answer} </span>
          {isSelected && isCorrect && (
            <div className="checkbox-container">
              <FontAwesomeIcon icon={faCheck} color="rgb(103, 201, 90)" style={{ float: "right" }} />
            </div>
          )}
          {isSelected && isIncorrect && (
            <div className="checkbox-container">
              <FontAwesomeIcon icon={faTimes} color="rgb(253, 151, 38)" style={{ float: "right" }} />
            </div>
          )}
          {!isSelected && <div className="checkbox-container"></div>}
        </div>
      </label> */}
    </div>
  );
};

export default QuizRadioButton;
