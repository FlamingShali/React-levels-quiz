import { useContext } from "react";
import { QuizContext } from "../context/quizContext";
import reactIcon from "./../img/icons8-react.svg";

const StarterPage = () => {
  const { quizLevels, handleQuizLevel } = useContext(QuizContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={reactIcon} className="w-[20rem] h-[20rem] animate-spin" />
      <h2>Chose the quiz level you want to try</h2>
      {quizLevels.map((level) => (
        <button
          className="m-5 transition-all rounded-[20px] w-[10rem] h-[3rem] bg-amber-200 hover:scale-105 text-xl"
          value={level}
          onClick={handleQuizLevel}
          key={level}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default StarterPage;
