import { useContext } from "react";

import { QuizContext } from "../context/quizContext.jsx";
import BasicQuiz from "./QuizContent.jsx";
import StarterPage from "./StarterPage.jsx";
import IntermediateQuiz from "./IntermediateQuiz.jsx";
import AdvancedQuiz from "./AdvancedQuiz.jsx";
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
