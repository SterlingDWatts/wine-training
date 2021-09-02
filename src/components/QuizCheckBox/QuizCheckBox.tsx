import React from "react";
import classnames from "classnames";
import { QuizAction } from "../Quiz/QuizTypes";
import MaterialCheckBox from "../CheckBox/CheckBox";
import "./QuizCheckBox.css";

interface QuizCheckBoxProps {
  id: number;
  answer: string;
  selectedValue: number;
  value: number;
  submitted: boolean;
  dispatch: (action: QuizAction) => void;
}

const QuizCheckBox: React.FC<QuizCheckBoxProps> = ({ id, answer, dispatch, selectedValue, value, submitted }) => {
  const isSelected = selectedValue === 1;
  const isCorrect = selectedValue === value && value !== 0 && submitted;
  const isIncorrect = selectedValue !== value && submitted;

  const handleChange = () => {
    dispatch({ type: "selection-select-all", payload: { id } });
  };

  return (
    <div
      key={id}
      className={classnames("QuizCheckBox", { selected: isSelected, correct: isCorrect, incorrect: isIncorrect })}
    >
      <MaterialCheckBox
        id={id}
        checked={isSelected}
        disabled={submitted}
        handleChange={handleChange}
        label={answer}
        showTimes={isIncorrect && isSelected}
        hideCheck={isIncorrect}
      />
    </div>
  );
};

export default QuizCheckBox;
