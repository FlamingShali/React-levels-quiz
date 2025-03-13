import { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const StarterPage = () => {
  const {
    quizLevels,
    handleQuizLevel,
    quizLevel,
    QUESTIONS,
    curQuestion,
    onClickNext,
  } = useContext(QuizContext);
  return (
    <div>
      <h2>Chose the quiz level you want to try</h2>
      {quizLevels.map((level) => (
        <button value={level} onClick={handleQuizLevel} key={level}>
          {level}
        </button>
      ))}

      
    </div>
  );
};

export default StarterPage;
