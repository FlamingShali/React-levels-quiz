import { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const Summary = () => {
  const { points, QUESTIONS } = useContext(QuizContext);

  const maxPoints = QUESTIONS.reduce((total, question) => total + question.points, 0);


  return (
    <div>
      Congratulation of finishing the Quiz
      <p>Your score: {points} of {maxPoints}</p>
    </div>
  );
};

export default Summary;
