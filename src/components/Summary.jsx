import { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const Summary = () => {
  const { points, QUESTIONS, correctAnswers } = useContext(QuizContext);

  const maxPoints = QUESTIONS.reduce(
    (total, question) => total + question.points,
    0
  );

  const percentage = ((points / maxPoints) * 100).toFixed(2);

  return (
    <div className="flex flex-col text-center justify-center items-center text-3xl text-blue-300">
      <span>Congratulation! You finished the Quiz</span>
      <p>
        Your score: {points} of {maxPoints} 😊
      </p>
      <p>That gives you {percentage}%</p>
      <p>
        You answered correctly on {correctAnswers} of {QUESTIONS.length}
      </p>
    </div>
  );
};

export default Summary;
