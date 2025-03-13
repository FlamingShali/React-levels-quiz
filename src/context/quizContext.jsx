import { useState } from "react";
import { createContext } from "react";

export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const [number, setNumber] = useState(1);

  const quizCtx = {
    number: number,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}

