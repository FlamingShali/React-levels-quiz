import { useContext } from "react";

import { QuizContext } from "../context/quizContext.jsx";
import BasicQuiz from "./BasicQuiz.jsx";
import StarterPage from "./StarterPage.jsx";
import IntermediateQuiz from "./IntermediateQuiz.jsx";
import AdvancedQuiz from "./AdvancedQuiz.jsx";

const Quiz = () => {
  const { quizLevel } = useContext(QuizContext);

  return (
    <>
      {quizLevel === "basic" && <BasicQuiz />}
      {quizLevel === "intermediate" && <IntermediateQuiz />}
      {quizLevel === "advanced" && <AdvancedQuiz />}
      {quizLevel === "" && <StarterPage />}
    </>
  );
};

export default Quiz;
