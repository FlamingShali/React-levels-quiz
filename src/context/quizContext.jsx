import { useState, useReducer } from "react";
import { createContext } from "react";
import QUESTIONS from "../questions.js";

export const QuizContext = createContext();

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
  }
}

export default function QuizContextProvider({ children }) {
  const [curQuestion, setCurQuestion] = useState(0);

  function handleNextQuestion() {
    setCurQuestion((prevQuestion) => prevQuestion + 1);
  }

  const [quizLevel, setQuizLevel] = useState("");
  const quizLevels = ["Basic", "Intermediate", "Advanced"];

  function handleQuizLevel(e) {
    console.log(e.target.value.toLowerCase());
    setQuizLevel(e.target.value.toLowerCase());
  }

  const quizCtx = {
    initialState: initialState,
    curQuestion: curQuestion,
    quizLevel: quizLevel,
    quizLevels: quizLevels,
    onClickNext: handleNextQuestion,
    handleQuizLevel: handleQuizLevel,
    QUESTIONS: QUESTIONS,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
