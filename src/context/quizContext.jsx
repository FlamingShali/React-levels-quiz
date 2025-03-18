import { useCallback, useEffect, useRef, useState } from "react";
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

const quizMapping = {
  basic: basicQuiz,
  intermediate: intermediateQuiz,
  advanced: advancedQuiz,
};

export default function QuizContextProvider({ children }) {
  const QUESTIONS = useRef([]);
  const timerRef = useRef(null);
  const [quizLevel, setQuizLevel] = useState("");
  const [points, setPoints] = useState(0);
  const [curQuestion, setCurQuestion] = useState(0);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(null);

  const quizLevels = ["Basic", "Intermediate", "Advanced"];

  const handleNextQuestion = useCallback(() => {
    setCurQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedAnswer(false);
    setChosenAnswerIndex(null);
    setSecondsRemaining(30); // Reset timer for the next question
  }, []);

  const stopTimer = () => {
    clearInterval(timerRef.current); // Clear timer on quiz end
    setSecondsRemaining(null);
    setCurQuestion((prevQuestion) => prevQuestion + 1);
  };

  useEffect(() => {
    if (secondsRemaining === 0) {
      handleNextQuestion();
    }

    timerRef.current = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timerRef.current); // Cleanup the timer on unmount
  }, [secondsRemaining, handleNextQuestion]);

  const handleSelectAnswer = (index) => {
    setChosenAnswerIndex(index);
    clearInterval(timerRef.current); // Stop timer when the answer is selected

    const question = QUESTIONS.current[curQuestion];
    if (index === question.correctOption) {
      setPoints((prevPoints) => prevPoints + question.points);
      setCorrectAnswers((prevCorrectAnsers) => prevCorrectAnsers + 1);
    }
    setSelectedAnswer(true);
  };

  const handleQuizLevel = (e) => {
    const selectedLevel = e.target.value.toLowerCase();
    setQuizLevel(selectedLevel);
    QUESTIONS.current = [...quizMapping[selectedLevel]]; // Load questions based on selected level
    setSecondsRemaining(30); // Reset the timer when level is selected
  };

  const resetQuiz = () => {
    setQuizLevel("");
    setPoints(0);
    setCurQuestion(0);
    setChosenAnswerIndex(null);
    setSelectedAnswer(false);
    setCorrectAnswers(0);
    setSecondsRemaining(null);
    clearInterval(timerRef.current); // Ensure timer is cleared
  };

  const quizCtx = {
    initialState,
    curQuestion,
    quizLevel,
    quizLevels,
    onClickNext: handleNextQuestion,
    handleQuizLevel,
    QUESTIONS: QUESTIONS.current,
    points,
    chosenAnswerIndex,
    handleSelectAnswer,
    selectedAnswer,
    correctAnswers,
    secondsRemaining,
    resetQuiz,
    stopTimer,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
