import { useContext, useRef, useState } from "react";
import QUESTIONS from "../questions";
import { QuizContext } from "../context/quizContext";
import AnswerButton from "./AnswerButton";

const BasicQuiz = () => {
  const [chosenAnswer, setChosenAnswer] = useState("");
  const { QUESTIONS, curQuestion, onClickNext } = useContext(QuizContext);
  const [points, setPoints] = useState(0);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);

  function handleSelectAnswer(index) {
    setChosenAnswerIndex(index); // Zapamiętaj wybraną odpowiedź
  }

  return (
    <div>
      Welcome to the basic quiz!
      <div>{QUESTIONS[curQuestion].question}</div>
      <div>
        {QUESTIONS[curQuestion].options.map((option, index) => (
          <AnswerButton
            index={index}
            option={option}
            key={option}
            handleSelectAnswer={handleSelectAnswer}
            chosenAnswer={chosenAnswer}
            isCorrect={index === QUESTIONS[curQuestion].correctOption}
            isSelected={index === chosenAnswerIndex} // Sprawdzenie czy to wybrana odpowiedź
          />
        ))}
      </div>
      <button onClick={onClickNext} className="border-[2px]">
        Next Question
      </button>
    </div>
  );
};

export default BasicQuiz;
