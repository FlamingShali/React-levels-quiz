import { useContext, useRef, useState } from "react";
import QUESTIONS from "../questions";
import { QuizContext } from "../context/quizContext";

const BasicQuiz = () => {
  const [chosenAnswer, setChosenAnswer] = useState();
  const { QUESTIONS, curQuestion, onClickNext } = useContext(QuizContext);
  const [points, setPoints] = useState(0);

  function handleSelectAnswer(e) {
    if (e.target.value === QUESTIONS[curQuestion].correctOption) {
      console.log(e.target.value);
    }
  }
  console.log(QUESTIONS[curQuestion].correctOption);

  return (
    <div>
      Welcome to the basic quiz!
      <div>{QUESTIONS[curQuestion].question}</div>
      <div>
        {QUESTIONS[curQuestion].options.map((option, index) => (
          <button
            value={index}
            key={option}
            onClick={handleSelectAnswer}
            className={`border-[1px] rounded-[20px] m-5 w-[10rem] h-[2rem] ${
              index === QUESTIONS[curQuestion].correctOption
                ? "bg-green-200"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={onClickNext} className="border-[2px]">
        Next Question
      </button>
    </div>
  );
};

export default BasicQuiz;
