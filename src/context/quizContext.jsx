import { useState } from "react";
import { createContext } from "react";
import QUESTIONS from "../questionsFiles/questions.js";

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
  const [points, setPoints] = useState(0);
  const [curQuestion, setCurQuestion] = useState(0);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  function handleSelectAnswer(index) {
    setChosenAnswerIndex(index); // Zapamiętaj wybraną odpowiedź

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
    points: points,
    chosenAnswerIndex: chosenAnswerIndex,
    handleSelectAnswer: handleSelectAnswer,
    selectedAnswer: selectedAnswer,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
