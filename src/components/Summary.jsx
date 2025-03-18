import { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const Summary = () => {
  const { points, QUESTIONS, correctAnswers, quizLevel, resetQuiz } =
    useContext(QuizContext);

  const maxPoints = QUESTIONS.reduce(
    (total, question) => total + question.points,
    0
  );

  const percentage = ((points / maxPoints) * 100).toFixed(2);

  return (
    <div className="w-screen h-[25rem] text-[2rem] flex flex-col text-center justify-between items-center   text-blue-300">
      <p className="flex flex-col font-bold text-[4rem]">
        <span className="">Congratulations!</span>
        <span> You finished the {quizLevel} Quiz</span>
      </p>
      <p>
        Your score: <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> max points! 😊
      </p>
      <p>
        That gives you <strong>{percentage}</strong>% gathered points
      </p>
      <p>
        You answered correctly on <strong>{correctAnswers}</strong> out of{" "}
        <strong>{QUESTIONS.length}</strong>
      </p>
      <button
        className="cursor-pointer m-5 transition-all rounded-[20px] w-[10rem] h-[3rem] bg-[#F4d58D] hover:scale-105 text-xl"
        onClick={resetQuiz}
      >
        Reset Quiz
      </button>
    </div>
  );
};

export default Summary;
