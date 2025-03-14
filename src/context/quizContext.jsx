import { useRef, useState } from "react";
import { createContext } from "react";

import basicQuiz from "../questionsFiles/basicQuiz.js";
import intermediateQuiz from "./../questionsFiles/intermediateQuiz.js";
import advancedQuiz from "./../questionsFiles/advancedQuiz.js";

export const QuizContext = createContext();

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

export default function QuizContextProvider({ children }) {
  const QUESTIONS = useRef([]);
  const [quizLevel, setQuizLevel] = useState("");
  const quizLevels = ["Basic", "Intermediate", "Advanced"];
  const [points, setPoints] = useState(0);
  const [curQuestion, setCurQuestion] = useState(0);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  function handleSelectAnswer(index) {
    setChosenAnswerIndex(index);

    if (index === QUESTIONS[curQuestion].correctOption) {
      setPoints((prevPoints) => prevPoints + QUESTIONS[curQuestion].points);
    }
    setSelectedAnswer(true);
  }

  function handleNextQuestion() {
    setCurQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedAnswer(false);
    setChosenAnswerIndex(null);
  }

  function handleQuizLevel(e) {
    setQuizLevel(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  }

  let questions;

  if (quizLevel === "basic") {
    questions = QUESTIONS.current.concat(basicQuiz);
  } else if (quizLevel === "advanced") {
    questions = QUESTIONS.current.concat(advancedQuiz);
  } else if (quizLevel === "intermediate") {
    questions = QUESTIONS.current.concat(intermediateQuiz);
  }

  console.log(quizLevel);

  const quizCtx = {
    initialState: initialState,
    curQuestion: curQuestion,
    quizLevel: quizLevel,
    quizLevels: quizLevels,
    onClickNext: handleNextQuestion,
    handleQuizLevel: handleQuizLevel,
    QUESTIONS: questions,
    points: points,
    chosenAnswerIndex: chosenAnswerIndex,
    handleSelectAnswer: handleSelectAnswer,
    selectedAnswer: selectedAnswer,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
