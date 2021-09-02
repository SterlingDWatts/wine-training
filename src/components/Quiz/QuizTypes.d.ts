// todo implement this new setup
export interface Answer {
  id: number;
  answer: string;
  value: number;
  selectedValue: number; // todo this defaults at 0 and reflects the users choice
}

// todo implement this new setup
export interface Question {
  id: number;
  question: string;
  type: "selectAllThatApply" | "multipleChoice";
  answers: Answer[];
  submitted: boolean; // todo this starts off false and reflects if a user has submitted their answer
}

export interface QuizState {
  questions: Question[];
  current: number;
}

export type QuizAction =
  | { type: "initialize-quiz" }
  | { type: "selection-select-all"; payload: { id: number } }
  | { type: "selection-select-one"; payload: { id: number } }
  | { type: "submit" }
  | { type: "previous" }
  | { type: "next" };
