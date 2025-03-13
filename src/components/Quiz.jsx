import { useContext, useRef, useState } from "react";

import { QuizContext } from "../context/quizContext.jsx";
import BasicQuiz from "./BasicQuiz.jsx";
import StarterPage from "./StarterPage.jsx";

const Quiz = () => {
  const {
    curQuestion,
    onClickNext,
    quizLevel,
    quizLevels,
    handleQuizLevel,
    QUESTIONS,
  } = useContext(QuizContext);

  return (
    <>
      {quizLevel === "basic" && <BasicQuiz />}
      {quizLevel === "intermediate" && <BasicQuiz />}
      {quizLevel === "advanced" && <BasicQuiz />}
      {quizLevel === "" && <StarterPage />}
    </>
  );
};

export default Quiz;
