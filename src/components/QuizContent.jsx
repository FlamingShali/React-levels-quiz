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
    quizLevel,
    secondsRemaining,
    stopTimer,
  } = useContext(QuizContext);
  console.log(curQuestion);

  const progressClass =
    secondsRemaining <= 15 ? "bg-yellow-500 text-yellow-500" : "bg-blue-800";
  const timerClass = secondsRemaining <= 15 ? "text-yellow-500" : "";

  return (
    <div className="flex flex-col justify-center items-center text-center">
      {curQuestion >= QUESTIONS.length ? (
        <Summary />
      ) : (
        <div className="text-white lg:text-xl flex flex-col items-center justify-center text-center animate-fade-down">
          <h1 className="m-10 md:text-2xl font-bold">
            Test your knowledge about React with this {quizLevel} quiz!
          </h1>
          <h1>
            Question {curQuestion + 1} out of {QUESTIONS.length}
          </h1>
          <div className="text-[2rem] font-bold">
            <p className={`${timerClass}`}>Time remained: {secondsRemaining}</p>

            <progress
              value={secondsRemaining}
              max={30}
              className="progress-bar h-4 rounded-xl bg-gray-200 w-[20rem] transition-all "
            />
          </div>
          <div className="timer"></div>
          <h1 className="md:m-10 ">{QUESTIONS[curQuestion].question}</h1>
          <div className="flex flex-col mb-5 animate-fade-up">
            {QUESTIONS[curQuestion].options.map((option, index) => (
              <AnswerButton
                index={index}
                option={option}
                key={index}
                handleSelectAnswer={handleSelectAnswer}
                chosenAnswer={chosenAnswer}
                isCorrect={index === QUESTIONS[curQuestion].correctOption}
                isSelected={index === chosenAnswerIndex}
              />
            ))}
          </div>
          <button
            disabled={selectedAnswer === false}
            onClick={
              curQuestion + 1 === QUESTIONS.length ? stopTimer : onClickNext
            }
            className="disabled:bg-gray-700 border-[2px] rounded-[20px] w-[20rem] hover:scale-105 transition-all focus:border-blue-300 cursor-pointer"
          >
            {curQuestion + 1 !== QUESTIONS.length && "Next Question"}
            {curQuestion + 1 === QUESTIONS.length && "Finish Quiz"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizContent;
