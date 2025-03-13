import QUESTIONS from "../questions.js";

console.log(QUESTIONS);
const Quiz = () => {
  return (
    <div>
      {QUESTIONS.map((question) => {
        return <div>{question.question}</div>;
      })}
    </div>
  );
};

export default Quiz;
