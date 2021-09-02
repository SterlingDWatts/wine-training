import { Question, Answer, QuizState, QuizAction } from "./QuizTypes";

export const randomize = <T>(arr: T[]) => {
  const arrLen = arr.length;
  const shallowCopy = arr.slice();
  for (let i = arrLen - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shallowCopy[i], shallowCopy[j]] = [shallowCopy[j], shallowCopy[i]];
  }
  return shallowCopy;
};

export const randomizeQuiz = (questions: Question[]): Question[] => {
  const randomizedQuiz = randomize<Question>(questions);

  for (const question of randomizedQuiz) {
    question.answers = randomize<Answer>(question.answers);
  }

  return randomizedQuiz;
};

export const updateAnswerCheckBox = (answer: Answer, id: number): Answer => {
  const isSelectedAnswer = answer.id === id;
  if (isSelectedAnswer) {
    const selectedValue = answer.selectedValue === 0 ? 1 : 0;
    return { ...answer, selectedValue };
  }
  return answer;
};

export const updateAnswerRadio = (answer: Answer, id: number): Answer => {
  const isSelectedAnswer = answer.id === id;
  if (isSelectedAnswer) {
    return { ...answer, selectedValue: 1 };
  }
  return { ...answer, selectedValue: 0 };
};

export const updateQuestions = (
  questions: Question[],
  current: number,
  id: number,
  cb: (answer: Answer, id: number) => Answer
): Question[] => {
  const newQuestions = questions.map((question, idx) => {
    if (idx === current) {
      const answers = question.answers.map((answer) => cb(answer, id));
      return { ...question, answers };
    }
    return question;
  });
  return newQuestions;
};

export const updateSubmit = (state: QuizState): Question[] => {
  const { questions, current } = state;
  const newQuestions = [...questions];
  newQuestions[current] = { ...newQuestions[current], submitted: true };
  return newQuestions;
};

export const updateQuestionsCheckBox = (questions: Question[], current: number, id: number): Question[] =>
  updateQuestions(questions, current, id, updateAnswerCheckBox);

export const updateQuestionsRadio = (questions: Question[], current: number, id: number): Question[] =>
  updateQuestions(questions, current, id, updateAnswerRadio);

export const increaseCurrent = (state: QuizState) => {
  const { current, questions } = state;
  const newCurrent = current < questions.length - 1 ? current + 1 : current;
  return newCurrent;
};

export const decreaseCurrent = (state: QuizState) => {
  const { current } = state;
  const newCurrent = current > 0 ? current - 1 : current;
  return newCurrent;
};

export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "initialize-quiz":
      return { ...state, questions: randomizeQuiz(state.questions) };

    case "selection-select-all":
      return { ...state, questions: updateQuestionsCheckBox(state.questions, state.current, action.payload.id) };

    case "selection-select-one":
      return { ...state, questions: updateQuestionsRadio(state.questions, state.current, action.payload.id) };

    case "previous":
      return { ...state, current: decreaseCurrent(state) };

    case "next":
      return { ...state, current: increaseCurrent(state) };

    case "submit":
      return { ...state, questions: updateSubmit(state) };

    default:
      return state;
  }
};

export const calculateScore = (quiz: QuizState) => {
  const actualPoints = quiz.questions.reduce((acc: number, question: Question) => {
    const possiblePoints = question.answers.reduce((ansAcc: number, curr: Answer) => {
      return curr.value + ansAcc;
    }, 0);
    const actualPoints = question.answers.reduce((ansAcc: number, curr: Answer) => {
      const point = curr.value === 1 && curr.selectedValue === 1 && question.submitted ? 1 : 0;
      return ansAcc + point;
    }, 0);

    const points = (10 / possiblePoints) * actualPoints;
    return points + acc;
  }, 0);
  const possible = quiz.questions.length * 10;
  return [actualPoints, possible];
};
