import { useContext } from "react";
import QUESTIONS from "../questions";
import { QuizContext } from "../context/quizContext";

const BasicQuiz = () => {
  const { QUESTIONS, curQuestion, onClickNext } = useContext(QuizContext);


  

  return (
    <div>
      Welcome to the basic quiz!
      <div>{QUESTIONS[curQuestion].question}</div>
      <div>
        {QUESTIONS[curQuestion].options.map((option, index) => (
          <button className="flex flex col m-5">{option}</button>
        ))}
      </div>
      <button onClick={onClickNext} className="border-[2px]">
        Next Question
      </button>
    </div>
  );
};

export default BasicQuiz;
