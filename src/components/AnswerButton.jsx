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
  const buttonClass = selectedAnswer
    ? isSelected
      ? isCorrect
        ? "bg-green-500 shadow-2xl shadow-green-500"
        : "bg-red-500 shadow-2xl shadow-red-500"
      : isCorrect
      ? "bg-green-500"
      : "disabled:bg-yellow-500"
    : "bg-transparent";
  return (
    <button
      onClick={() => handleSelectAnswer(index)}
      className={`focus:border-blue-300 hover:scale-105 cursor-pointer rounded-[20px] shadow min-w-[20rem] max-w-[50rem] transition-all p-2 m-5 border ${buttonClass}`}
      disabled={selectedAnswer}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
