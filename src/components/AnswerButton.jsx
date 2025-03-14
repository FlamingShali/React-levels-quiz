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
        ? "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] text-black"
        : "bg-[#D84040]  shadow-[0_0_15px_#D84040] text-black"
      : isCorrect
      ? "bg-[#5CB338] text-black"
      : ""
    : "bg-transparent";
  return (
    <button
      onClick={() => handleSelectAnswer(index)}
      className={`focus:border-blue-300 hover:scale-105 border-white cursor-pointer rounded-[20px] shadow min-w-[20rem] max-w-[50rem] transition-all p-2 m-5 border ${buttonClass}`}
      disabled={selectedAnswer}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
