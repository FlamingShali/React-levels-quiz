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
    chosenAnswerIndex,
    selectedAnswer,
    secondsRemaining,
    stopTimer,
    quizLevel,
  } = useContext(QuizContext);

  // Display the summary if all questions have been answered
  if (curQuestion >= QUESTIONS.length) {
    return <Summary />;
  }

  const question = QUESTIONS[curQuestion];
  const isTimeCritical = secondsRemaining <= 15;

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="text-white lg:text-xl flex flex-col items-center justify-center text-center animate-fade-down">
        <h1 className="m-10 md:text-2xl font-bold">
          Test your knowledge about React with this {quizLevel} quiz!
        </h1>
        <h1>
          Question {curQuestion + 1} out of {QUESTIONS.length}
        </h1>

        <div className="text-[2rem] font-bold">
          <p className={isTimeCritical ? "text-yellow-500" : ""}>
            Time left: {secondsRemaining}
          </p>
          <progress
            value={secondsRemaining}
            max={30}
            className="progress-bar h-4 rounded-xl bg-gray-200 w-[20rem] transition-all"
          />
        </div>

        <h1 className="md:m-10">{question.question}</h1>
        <div className="flex flex-col mb-5 animate-fade-up">
          {question.options.map((option, index) => (
            <AnswerButton
              key={index}
              index={index}
              option={option}
              handleSelectAnswer={handleSelectAnswer}
              isCorrect={index === question.correctOption}
              isSelected={index === chosenAnswerIndex}
            />
          ))}
        </div>

        <button
          disabled={!selectedAnswer}
          onClick={
            curQuestion + 1 === QUESTIONS.length ? stopTimer : onClickNext
          }
          className="disabled:bg-gray-700 border-[2px] rounded-[20px] w-[20rem] hover:scale-105 transition-all focus:border-blue-300 cursor-pointer"
        >
          {curQuestion + 1 === QUESTIONS.length
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuizContent;
