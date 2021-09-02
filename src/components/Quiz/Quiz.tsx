import React, { useState, useReducer, useEffect } from "react";
import QuizForm from "../QuizForm/QuizForm";
import { quizReducer, calculateScore } from "./QuizHelpers";
import { QuizState } from "./QuizTypes";
import "./Quiz.css";

let firstQuiz: QuizState;
firstQuiz = {
  questions: [
    {
      id: Math.random(),
      question: "What are the three major grapes of Champagne?",
      type: "selectAllThatApply",
      answers: [
        { id: Math.random(), answer: "Pinot Noir", value: 1, selectedValue: 0 },
        { id: Math.random(), answer: "Pinot Meunier", value: 1, selectedValue: 0 },
        { id: Math.random(), answer: "Chardonnay", value: 1, selectedValue: 0 },
        { id: Math.random(), answer: "Pinot Gris", value: 0, selectedValue: 0 },
        { id: Math.random(), answer: "Gammay", value: 0, selectedValue: 0 },
        { id: Math.random(), answer: "Auxerios", value: 0, selectedValue: 0 },
      ],
      submitted: false,
    },
    {
      id: Math.random(),
      question: "What does “brut” indicate on a bottle of Champagne?",
      type: "multipleChoice",
      answers: [
        {
          id: Math.random(),
          answer: "The Champange ranges from bone dry to wines with a little residual sugar.",
          value: 1,
          selectedValue: 0,
        },
        { id: Math.random(), answer: "It is nearly bone-dry, with little to no dosage.", value: 0, selectedValue: 0 },
        {
          id: Math.random(),
          answer: "The wine is aged in a producer’s caves for a longer period of time.",
          value: 0,
          selectedValue: 0,
        },
        { id: Math.random(), answer: "Wines produced solely from red grapes.", value: 0, selectedValue: 0 },
      ],
      submitted: false,
    },
    {
      id: Math.random(),
      question: "Why is Champagne effervescent?",
      type: "multipleChoice",
      answers: [
        {
          id: Math.random(),
          answer: "Temp",
          value: 1,
          selectedValue: 0,
        },
        { id: Math.random(), answer: "Temp", value: 0, selectedValue: 0 },
        { id: Math.random(), answer: "Temp", value: 0, selectedValue: 0 },
        { id: Math.random(), answer: "Temp", value: 0, selectedValue: 0 },
      ],
      submitted: false,
    },
  ],
  current: 0,
};

// todo remove this
console.log(calculateScore(firstQuiz));

const Quiz: React.FC = () => {
  const [screenToShow, setScreenToShow] = useState<"loading" | "quiz-form" | "results">("loading");
  const [state, dispatch] = useReducer(quizReducer, firstQuiz);

  useEffect(() => {
    dispatch({ type: "initialize-quiz" });
    setScreenToShow("quiz-form");
  }, []);

  const seeResults = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setScreenToShow("results");
  };

  return (
    <div className="Quiz">
      {screenToShow === "quiz-form" && <QuizForm quiz={state} dispatch={dispatch} seeResults={seeResults} />}
    </div>
  );
};

export default Quiz;
