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
  const [points, setPoints] = useState(0);
  const [curQuestion, setCurQuestion] = useState(0);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const quizLevels = ["Basic", "Intermediate", "Advanced"];
  let questions;

  function handleSelectAnswer(index) {
    setChosenAnswerIndex(index);

    if (index === questions[curQuestion].correctOption) {
      setPoints((prevPoints) => prevPoints + questions[curQuestion].points);
      setCorrectAnswers((prevCorrectAnsers) => prevCorrectAnsers + 1);
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
  }

  if (quizLevel === "basic") {
    questions = QUESTIONS.current.concat(basicQuiz);
  } else if (quizLevel === "advanced") {
    questions = QUESTIONS.current.concat(advancedQuiz);
  } else if (quizLevel === "intermediate") {
    questions = QUESTIONS.current.concat(intermediateQuiz);
  }

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
    correctAnswers: correctAnswers,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
