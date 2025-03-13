import { useContext } from "react";
import { QuizContext } from "../context/quizContext";
import AnswerButton from "./AnswerButton";
import Summary from "./Summary";

const BasicQuiz = () => {
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
                isSelected={index === chosenAnswerIndex}
              />
            ))}
          </div>
          <button
            disabled={selectedAnswer === false}
            onClick={onClickNext}
            className="border-[2px]"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default BasicQuiz;
