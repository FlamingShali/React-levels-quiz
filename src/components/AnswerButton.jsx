import { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const AnswerButton = ({
  option,
  index,
  handleSelectAnswer,
  isCorrect,
  isSelected,
}) => {
  const { selectedAnswer } = useContext(QuizContext);
  const buttonClass = isSelected
    ? isCorrect
      ? "bg-green-500"
      : "bg-red-500"
    : "bg-gray-200";

  return (
    <button
      onClick={() => handleSelectAnswer(index)}
      className={`p-2 m-1 border rounded ${buttonClass}`}
      disabled={selectedAnswer}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
