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
    : "bg-transparent disabled:bg-yellow-500";

  return (
    <button
      onClick={() => handleSelectAnswer(index)}
      className={`focus:border-blue-300  rounded-[20px] w-[15rem] transition-all p-2 m-5 border  ${buttonClass}`}
      disabled={selectedAnswer}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
