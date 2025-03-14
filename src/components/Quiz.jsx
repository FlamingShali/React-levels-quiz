import { useContext } from "react";

import { QuizContext } from "../context/quizContext.jsx";
import StarterPage from "./StarterPage.jsx";
import QuizContent from "./QuizContent.jsx";

const Quiz = () => {
  const { quizLevel } = useContext(QuizContext);

  return (
    <>
      {quizLevel === "" && <StarterPage />}
      {quizLevel !== "" && <QuizContent />}
    </>
  );
};

export default Quiz;
