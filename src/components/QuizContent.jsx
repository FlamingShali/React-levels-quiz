import { useContext } from "react";
import { QuizContext } from "../context/quizContext";
import AnswerButton from "./AnswerButton";
import Summary from "./Summary";

const QuizContent = () => {
  const {
    QUESTIONS,
    curQuestion,
    onClickNext,
    handleSelectAnswer,
    chosenAnswer,
    chosenAnswerIndex,
    selectedAnswer,
  } = useContext(QuizContext);

  return (
    <div>
      {curQuestion >= QUESTIONS.length ? (
        <Summary />
      ) : (
        <div className="text-white text-3xl flex flex-col items-center justify-center text-center">
          <h1 className="m-10">Welcome to the basic quiz!</h1>
          <h1 className="m-10">{QUESTIONS[curQuestion].question}</h1>
          <div className="m-10">
            {QUESTIONS[curQuestion].options.map((option, index) => (
              <AnswerButton
                index={index}
                option={option}
                key={option}
                handleSelectAnswer={handleSelectAnswer}
                chosenAnswer={chosenAnswer}
                isCorrect={index === QUESTIONS[curQuestion].correctOption}
                isSelected={index === chosenAnswerIndex}
              />
            ))}
          </div>
          <button
            disabled={selectedAnswer === false}
            onClick={onClickNext}
            className="disabled:bg-gray-700 border-[2px] rounded-[20px] w-[20rem] hover:scale-105 transition-all focus:border-blue-300"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizContent;
